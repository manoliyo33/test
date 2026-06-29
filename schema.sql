-- Tabla para guardar el resumen de exámenes de cada usuario (D1 / SQLite).
-- El usuario se identifica por su email (de Cloudflare Access).
CREATE TABLE IF NOT EXISTS examenes (
  email       TEXT    NOT NULL,
  id          TEXT    NOT NULL,
  fecha       TEXT,
  porcentaje  INTEGER,
  num         INTEGER,
  data        TEXT    NOT NULL,   -- JSON con el resumen del examen
  created_at  INTEGER,
  PRIMARY KEY (email, id)
);
CREATE INDEX IF NOT EXISTS idx_examenes_email ON examenes (email);
