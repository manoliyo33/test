// ============================================================
//  Cloudflare Pages Function — /api/examenes
//  Guarda el RESUMEN de exámenes de cada usuario en una base D1.
//  El usuario se identifica por el email que inyecta Cloudflare Access
//  en la cabecera "Cf-Access-Authenticated-User-Email".
//
//  Requiere en el proyecto de Pages:
//    - Un binding de base de datos D1 con nombre de variable: DB
//    - Haber creado la tabla con schema.sql
// ============================================================

function getEmail(request) {
  return request.headers.get('Cf-Access-Authenticated-User-Email') || '';
}
function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

// GET /api/examenes  -> { email, examenes: [...] }
export async function onRequestGet(context) {
  const { request, env } = context;
  const email = getEmail(request);
  if (!email) return json({ error: 'no-auth', examenes: [] }, 401);
  if (!env.DB) return json({ error: 'no-db', examenes: [] }, 500);
  try {
    const { results } = await env.DB
      .prepare('SELECT data FROM examenes WHERE email = ?1 ORDER BY id DESC')
      .bind(email).all();
    const examenes = (results || [])
      .map(r => { try { return JSON.parse(r.data); } catch (e) { return null; } })
      .filter(Boolean);
    return json({ email, examenes });
  } catch (e) {
    return json({ error: 'db-error', detail: String(e), examenes: [] }, 500);
  }
}

// POST /api/examenes  (body = resumen del examen) -> { ok:true }
export async function onRequestPost(context) {
  const { request, env } = context;
  const email = getEmail(request);
  if (!email) return json({ error: 'no-auth' }, 401);
  if (!env.DB) return json({ error: 'no-db' }, 500);
  let reg;
  try { reg = await request.json(); } catch (e) { return json({ error: 'bad-json' }, 400); }
  if (!reg || reg.id == null) return json({ error: 'bad-data' }, 400);
  try {
    await env.DB
      .prepare('INSERT OR REPLACE INTO examenes (email, id, fecha, porcentaje, num, data, created_at) VALUES (?1,?2,?3,?4,?5,?6,?7)')
      .bind(email, String(reg.id), reg.fecha || '', reg.porcentaje || 0, reg.numPreguntas || 0, JSON.stringify(reg), Date.now())
      .run();
    return json({ ok: true });
  } catch (e) {
    return json({ error: 'db-error', detail: String(e) }, 500);
  }
}

// DELETE /api/examenes?id=123  -> borra uno ; sin id -> borra todos los del usuario
export async function onRequestDelete(context) {
  const { request, env } = context;
  const email = getEmail(request);
  if (!email) return json({ error: 'no-auth' }, 401);
  if (!env.DB) return json({ error: 'no-db' }, 500);
  const id = new URL(request.url).searchParams.get('id');
  try {
    if (id) {
      await env.DB.prepare('DELETE FROM examenes WHERE email = ?1 AND id = ?2').bind(email, String(id)).run();
    } else {
      await env.DB.prepare('DELETE FROM examenes WHERE email = ?1').bind(email).run();
    }
    return json({ ok: true });
  } catch (e) {
    return json({ error: 'db-error', detail: String(e) }, 500);
  }
}
