// ============================================================
// ==================== EXAMEN 3 - CASOS PRÁCTICOS ============
// ============================================================

// --- PREGUNTAS EXAMEN 3 (TÉCNICO MEDIO - ACCESO LIBRE) ---
const examen1_TMFA = [
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué artículo de la vigente Constitución Española ha sido recientemente modificado, para cambiar el término 'disminuidos físicos, sensoriales y psíquicos' por el de 'personas con discapacidad'?",
        options: ["Artículo 25", "Artículo 29", "Artículo 31", "Artículo 49"],
        correctAnswer: 3,
        feedback: "El artículo 49 de la Constitución Española fue modificado para cambiar el término por 'personas con discapacidad'."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué está previsto en la Ley General de Sanidad (artículo 15), para atender a aquellos pacientes o usuarios del Sistema Nacional de Salud (SNS) una vez superadas las posibilidades de diagnóstico y tratamiento de los servicios especializados de la Comunidad Autónoma donde residan?",
        options: [
            "El acceso a servicios de referencia, acreditados por el Ministerio de Sanidad y Consumo",
            "La derivación a centros privados concertados con el SNS",
            "La derivación a centros sanitarios privados ubicados en su propia Comunidad Autónoma",
            "La derivación a centros sanitarios de referencia extranjeros"
        ],
        correctAnswer: 0,
        feedback: "El artículo 15 de la Ley General de Sanidad establece el acceso a servicios de referencia acreditados por el Ministerio de Sanidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Dentro de la organización territorial de los servicios sanitarios que establece la ley de Salud de Andalucía, y con la finalidad de alcanzar la mayor eficacia en la organización y funcionamiento del Sistema Sanitario Público de Andalucía, cada área de salud se divide territorialmente en:",
        options: ["Zonas Básicas de Salud", "Distritos Sanitarios", "Centros de Salud", "Áreas de Gestión Sanitarias"],
        correctAnswer: 0,
        feedback: "La Ley 2/1998 establece que cada área de salud se divide territorialmente en Zonas Básicas de Salud."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el Decreto 198/2024, de 3 de septiembre, por el que se establece la estructura orgánica de la Consejería de Salud y Consumo, son órganos directivos centrales de dicha Consejería todos los enumerados a continuación, EXCEPTO:",
        options: [
            "Dirección General de Personal",
            "Dirección General de Cuidados y Atención Sociosanitaria",
            "Secretaría General de Planificación Asistencial y Consumo",
            "Dirección General de Salud Pública y Ordenación Farmacéutica"
        ],
        correctAnswer: 0,
        feedback: "La Dirección General de Personal no es un órgano directivo central de la Consejería de Salud y Consumo según el Decreto 198/2024."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En relación con la participación de los trabajadores (Ley de Prevención de Riesgos laborales), el órgano paritario y colegiado de participación, destinado a la consulta regular y periódica de las actuaciones de la empresa en materia de Prevención de Riesgos, se llama:",
        options: ["Unidad de Prevención de Riesgos Laborales", "Comité de Vigilancia de la Salud", "Comité de Seguridad y Salud", "Comité de Delegados de Prevención"],
        correctAnswer: 2,
        feedback: "El Comité de Seguridad y Salud es el órgano paritario y colegiado de participación en materia de prevención de riesgos laborales."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Dentro de los estereotipos y roles de género que sitúan en planos diferentes a hombres y mujeres, cuando decimos que 'el hombre suele trabajar fuera de casa (espacio público), por lo tanto, no se ocupa tanto de la familia como la mujer', hablamos de:",
        options: ["Rol Productor", "Rol Reproductor", "Rol Autónomo", "Rol Independiente"],
        correctAnswer: 0,
        feedback: "Se habla del Rol Productor, donde el hombre es el proveedor económico y la mujer se ocupa del ámbito doméstico."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuáles son los principios y criterios que el Estatuto Marco (Ley 55/2003, de 16 de diciembre), en su artículo 4.b), establece en el acceso a la condición de personal estatutario?",
        options: [
            "Igualdad, mérito, capacidad y publicidad",
            "Mérito, carrera profesional y transparencia",
            "Igualdad de género, acreditación profesional, titulación y transparencia",
            "Justicia, igualdad y prueba selectiva"
        ],
        correctAnswer: 0,
        feedback: "El artículo 4.b) del Estatuto Marco establece como principios de acceso: igualdad, mérito, capacidad y publicidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cómo se clasifica el personal estatutario de gestión y servicios, según el artículo 7 del Estatuto Marco (Ley 55/2003, de 16 de diciembre)?",
        options: [
            "Personal de formación universitaria y personal de oficio",
            "Otro personal, personal de formación profesional y personal de formación universitaria",
            "Personal licenciado universitario, técnicos no sanitarios y personal de otras categorías",
            "Personal diplomado o graduado universitario, personal técnico y personal de oficio"
        ],
        correctAnswer: 1,
        feedback: "El artículo 7 del Estatuto Marco clasifica al personal estatutario de gestión y servicios en otro personal, personal de formación profesional y personal de formación universitaria."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según se establece en el artículo 9.2 de la Ley 41/2002, de 14 de noviembre, ¿en qué casos de los presentados a continuación, los facultativos podrán llevar a cabo las intervenciones clínicas indispensables en favor de la salud del paciente, sin necesidad de contar con su consentimiento?",
        options: [
            "Cuando el paciente no sea capaz de tomar decisiones, a criterio del médico responsable",
            "Cuando el paciente tenga la capacidad modificada judicialmente y así conste en la sentencia",
            "Cuando el paciente menor de edad no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención",
            "Cuando existe riesgo inmediato grave para la integridad física o psíquica del enfermo y no es posible conseguir su autorización"
        ],
        correctAnswer: 3,
        feedback: "El artículo 9.2 de la Ley 41/2002 establece la excepción por riesgo inmediato grave para la integridad física o psíquica del enfermo."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Fomentar y desarrollar una cultura de la ciberseguridad es uno de los puntos claves de la Estrategia Andaluza de Ciberseguridad 2022-2025, ¿cómo se llama el Boletín de Concienciación en ciberseguridad del Centro de Ciberseguridad de Andalucía?",
        options: ["BOCOCI", "BoleSTIC", "BOCCIBER", "CIBERbol"],
        correctAnswer: 0,
        feedback: "El boletín de concienciación en ciberseguridad se llama BOCOCI."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Dentro de los principios que deben regir la actuación de las Administraciones Públicas, el principio de legalidad implica que:",
        options: [
            "Los actos administrativos deben ajustarse al ordenamiento jurídico",
            "Los ciudadanos pueden actuar sin restricciones legales",
            "Las leyes son opcionales dependiendo del caso",
            "Todo trámite administrativo debe ser gratuito"
        ],
        correctAnswer: 0,
        feedback: "El principio de legalidad implica que los actos administrativos deben ajustarse al ordenamiento jurídico."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El órgano que se encarga entre otras de la seguridad de las tecnologías de la información y la comunicación TIC en el Servicio Andaluz de Salud es:",
        options: [
            "El Comité de Seguridad y Salud",
            "El Comité de Seguridad Interior y Seguridad TIC",
            "El Comité Sectorial de Seguridad y Salud",
            "Comité de Seguridad Interior y Protección de Datos"
        ],
        correctAnswer: 1,
        feedback: "El Comité de Seguridad Interior y Seguridad TIC es el órgano encargado de la seguridad TIC en el SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el art. 70 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, cuando en virtud de una norma sea preciso remitir el expediente electrónico, se hará de acuerdo con lo previsto en:",
        options: ["Normas de privacidad", "Normas de Gestión documental", "El Esquema Nacional de Seguridad", "El Esquema Nacional de Interoperabilidad"],
        correctAnswer: 3,
        feedback: "La remisión del expediente electrónico se hará de acuerdo con lo previsto en el Esquema Nacional de Interoperabilidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el art. 14 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿quiénes siempre están obligados a relacionarse con las Administraciones Públicas a través de medios electrónicos?",
        options: [
            "Las personas físicas",
            "Quienes ejerzan una actividad profesional, aunque ésta no requiera colegiación obligatoria",
            "Las personas jurídicas y las entidades sin personalidad jurídica",
            "Los empleados públicos para todos los trámites"
        ],
        correctAnswer: 2,
        feedback: "Las personas jurídicas y las entidades sin personalidad jurídica siempre están obligados a relacionarse electrónicamente con las Administraciones."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué sucede si transcurre el plazo para resolver un recurso de alzada sin que se dicte resolución?",
        options: ["Se entiende estimado", "Se entiende desestimado", "Se amplía el plazo de resolución", "Se suspende el procedimiento"],
        correctAnswer: 1,
        feedback: "Si transcurre el plazo para resolver un recurso de alzada sin resolución, se entiende desestimado (silencio administrativo negativo)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es el criterio principal para valorar la indemnización en casos de responsabilidad patrimonial?",
        options: [
            "El beneficio obtenido por la Administración",
            "La gravedad de la falta cometida por el funcionario",
            "La valoración económica del daño producido",
            "El presupuesto de la Administración responsable"
        ],
        correctAnswer: 2,
        feedback: "El criterio principal para valorar la indemnización es la valoración económica del daño producido."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, ¿qué documento recoge los pactos y condiciones definidores de los derechos y obligaciones de las partes del contrato?",
        options: [
            "Pliego de Cláusulas Administrativas Particulares",
            "Pliego de Prescripciones Técnicas Generales",
            "Pliego de Cláusulas Administrativas Generales",
            "Pliego de Prescripciones Técnicas Particulares"
        ],
        correctAnswer: 0,
        feedback: "El Pliego de Cláusulas Administrativas Particulares recoge los pactos y condiciones definidores de los derechos y obligaciones de las partes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de los siguientes NO es un criterio de adjudicación válido según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público?",
        options: ["Calidad", "Precio", "Características medioambientales", "Experiencia previa con la Administración"],
        correctAnswer: 3,
        feedback: "La experiencia previa con la Administración no es un criterio de adjudicación válido según la Ley 9/2017."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de los siguientes NO es un derecho reconocido en la Ley 41/2002, básica reguladora de la autonomía del paciente?",
        options: [
            "Derecho a la información asistencial",
            "Derecho a la intimidad",
            "Derecho a la libre elección de médico en cualquier centro del Sistema Nacional de Salud",
            "Derecho al consentimiento informado"
        ],
        correctAnswer: 2,
        feedback: "La Ley 41/2002 no reconoce el derecho a la libre elección de médico en cualquier centro del SNS; eso está regulado en otras normas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de los siguientes NO es un derecho reconocido en la Ley 2/1998 de Salud de Andalucía?",
        options: [
            "Derecho a disponer de información sobre el coste económico de las prestaciones y servicios recibidos",
            "Derecho a la libre elección de médico",
            "Derecho a la segunda opinión médica",
            "Derecho a negarse al tratamiento sin consecuencias"
        ],
        correctAnswer: 3,
        feedback: "El derecho a negarse al tratamiento sin consecuencias no es un derecho reconocido en la Ley 2/1998."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué sucede si un paciente ha solicitado previamente una segunda opinión para el mismo proceso asistencial?",
        options: [
            "Puede solicitar otra sin restricciones",
            "No puede solicitar otra segunda opinión",
            "Solo si ha pasado un año",
            "Solo si el médico lo autoriza"
        ],
        correctAnswer: 0,
        feedback: "El paciente puede solicitar otra segunda opinión sin restricciones para el mismo proceso asistencial."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es el plazo máximo garantizado para la realización de primeras consultas de asistencia especializada en Andalucía según el Decreto 96/2004?",
        options: ["30 días", "60 días", "90 días", "120 días"],
        correctAnswer: 1,
        feedback: "El Decreto 96/2004 establece un plazo máximo de 60 días para primeras consultas de asistencia especializada en Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el artículo 57 de la ley 16/2003 de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la tarjeta sanitaria individual es un documento administrativo que tiene como finalidad:",
        options: [
            "Cumplir los criterios establecidos con carácter general en la Unión Europea",
            "La normalización de datos / flujos",
            "La realización de estadísticas de ámbito comunitario en materia sanitaria",
            "Posibilitar el acceso de los ciudadanos a las prestaciones de atención sanitaria que proporciona el Sistema Nacional de Salud"
        ],
        correctAnswer: 3,
        feedback: "La tarjeta sanitaria individual tiene como finalidad posibilitar el acceso de los ciudadanos a las prestaciones de atención sanitaria del SNS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El Contrato Programa del Servicio Andaluz de Salud es:",
        options: [
            "Una herramienta estratégica y operativa que establece las prioridades y objetivos anuales de los centros Sanitarios del SAS",
            "Una herramienta conceptual orientada a reducir los costes de los centros sanitarios",
            "Un informe anual sobre la gestión económica del SAS y de cada uno de los centros Sanitarios",
            "Un acuerdo entre el SAS y los pacientes para mejorar la atención sanitaria"
        ],
        correctAnswer: 0,
        feedback: "El Contrato Programa es una herramienta estratégica y operativa que establece las prioridades y objetivos anuales de los centros Sanitarios del SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Para hacer posible la elección de médico que prevé el artículo 13 de la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica:",
        options: [
            "Los centros sanitarios dispondrán de un registro de su personal médico, del cual se pondrá en conocimiento de los usuarios el nombre, titulación, especialidad, categoría y función de los profesionales",
            "Los profesionales podrán prestar servicios conjuntos en dos o más centros",
            "Los centros sanitarios revisarán, cada tres años como mínimo, que los profesionales sanitarios de su plantilla cumplen los requisitos necesarios",
            "Ninguna es correcta"
        ],
        correctAnswer: 0,
        feedback: "Los centros sanitarios deben disponer de un registro de su personal médico para hacer posible la elección de médico."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué responsabilidades tienen los Ayuntamientos en la sanidad?",
        options: [
            "No tienen competencias sanitarias",
            "Solo tienen competencias en control sanitario del medio ambiente",
            "Tienen competencias en control sanitario del medio ambiente, industria, edificios, entre otras",
            "Son los principales responsables de la sanidad"
        ],
        correctAnswer: 2,
        feedback: "Los Ayuntamientos tienen competencias en control sanitario del medio ambiente, industria, edificios, entre otras."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el Decreto 197/2007, ¿qué estructura organizativa es responsable de la planificación operativa, dirección y gestión en el ámbito de la atención primaria?",
        options: ["Zonas básicas de salud", "Distritos de atención primaria", "Áreas de gestión sanitaria", "Comisiones técnicas asesoras de Atención Primaria"],
        correctAnswer: 1,
        feedback: "Los Distritos de atención primaria son responsables de la planificación operativa, dirección y gestión en atención primaria."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué órgano aprueba el Presupuesto de la Junta de Andalucía?",
        options: ["El Consejo de Gobierno", "El Parlamento de Andalucía", "La Consejería de Hacienda", "La Intervención General"],
        correctAnswer: 1,
        feedback: "El Parlamento de Andalucía aprueba el Presupuesto de la Junta de Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué fase del ciclo presupuestario corresponde a la fiscalización?",
        options: ["Elaboración", "Aprobación", "Ejecución", "Control"],
        correctAnswer: 3,
        feedback: "La fase de Control corresponde a la fiscalización del ciclo presupuestario."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué órgano es el superior de control interno de la Junta de Andalucía?",
        options: ["La Cámara de Cuentas", "El Parlamento de Andalucía", "La Intervención General", "La Consejería de Hacienda"],
        correctAnswer: 2,
        feedback: "La Intervención General es el órgano superior de control interno de la Junta de Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Indica a quién corresponden las funciones de programación y planificación de recursos tecnológicos para un uso eficiente y sostenible de los mismos, en el Servicio Andaluz de Salud:",
        options: ["Dirección General Económica", "Central Provincial de Compras", "Agencia Digital de Andalucía", "Dirección General de Sistemas de Información y Comunicaciones"],
        correctAnswer: 3,
        feedback: "La Dirección General de Sistemas de Información y Comunicaciones es la responsable de la programación y planificación de recursos tecnológicos en el SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Cuál de los siguientes es un objetivo específico planteado en la ESDA (Estrategia de Salud Digital de Andalucía):",
        options: [
            "Idear, testear y evaluar soluciones innovadoras al servicio de la salud",
            "Crear una Base de datos centralizada de datos de salud",
            "Reducir el número de asistencias presenciales en pro de las virtuales",
            "Eliminar el uso de papel en los centros del SSPA"
        ],
        correctAnswer: 0,
        feedback: "Un objetivo de la ESDA es idear, testear y evaluar soluciones innovadoras al servicio de la salud."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En la Junta de Andalucía, ¿qué organismo emite informes vinculantes en materia de Contratación TIC?",
        options: ["La Consejería de Innovación, Ciencia y Empresa", "La Dirección General de Transformación Digital", "El Servicio Andaluz de Salud", "La Agencia Digital de Andalucía"],
        correctAnswer: 3,
        feedback: "La Agencia Digital de Andalucía emite informes vinculantes en materia de Contratación TIC."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Uno de los principios guía de ITIL es:",
        options: ["Empezar siempre desde cero", "Progresar iterativamente con retroalimentación", "Trabajar de forma segmentada", "Consensuar y Restringir la visibilidad"],
        correctAnswer: 1,
        feedback: "Progresar iterativamente con retroalimentación es uno de los principios guía de ITIL."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿En qué fase del ciclo de vida de ITIL se aplican medidas correctivas y preventivas basadas en incidentes?",
        options: ["Operación", "Diseño", "Transición", "Mejora continua"],
        correctAnswer: 3,
        feedback: "En la fase de Mejora continua se aplican medidas correctivas y preventivas basadas en incidentes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "La ISO 20000 está estructurada en varias partes, ¿cuál es la parte que aborda la guía para aplicar los sistemas de gestión de servicios?",
        options: ["ISO/IEC 20000-1", "ISO/IEC 20000-2", "ISO/IEC 20000-3", "ISO/IEC 20000-4"],
        correctAnswer: 0,
        feedback: "ISO/IEC 20000-1 aborda los requisitos para los sistemas de gestión de servicios."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Las fases principales del Modelo Corporativo Marco de Implantaciones del Servicio Andaluz de Salud son:",
        options: [
            "Análisis Preliminar de Situación, Reingeniería de Procesos, Preimplantación, Implantación, Arranque, Consolidación y Extensión",
            "Planificación, Desarrollo, Implantación, Monitorización y Extensión",
            "Análisis de requerimientos, Diseño, desarrollo, Implantación y Mantenimiento",
            "Inicio de proyecto, Desarrollo, Gestión de entregas, Puesta en producción y Cierre de proyecto"
        ],
        correctAnswer: 0,
        feedback: "Las fases del MCMI son: Análisis Preliminar de Situación, Reingeniería de Procesos, Preimplantación, Implantación, Arranque, Consolidación y Extensión."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Cuál es la principal herramienta que se utiliza en la Dirección General de Sistemas de Información y Comunicaciones (DGSIC) para la gestión del conocimiento, utilizada como repositorio y gestor documental orientado a los usuarios TIC:",
        options: ["Portal AyudaDigital", "JIRA", "Confluence", "Web Técnica"],
        correctAnswer: 2,
        feedback: "Confluence es la principal herramienta de gestión del conocimiento en la DGSIC, utilizada como repositorio y gestor documental."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Para hacer una distribución masiva de un software y aplicación de parches sobre los equipos de puesto de usuario, ¿qué herramienta corporativa del Servicio Andaluz de Salud se utiliza?",
        options: ["Altiris", "Terminal Server", "SCCM", "Telémaco"],
        correctAnswer: 0,
        feedback: "Altiris es la herramienta corporativa del SAS para distribución masiva de software y aplicación de parches."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es el objetivo principal de la Norma ISO/IEC 12207?",
        options: [
            "Definir un marco para la gestión de la infraestructura de hardware",
            "Establecer un conjunto de procesos para el ciclo de vida del software",
            "Regular únicamente la fase de pruebas de software",
            "Proveer directrices exclusivas para la validación del software en operación"
        ],
        correctAnswer: 1,
        feedback: "ISO/IEC 12207 establece un conjunto de procesos para el ciclo de vida del software."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Indique cuál de las siguientes afirmaciones NO es correcta en relación a los métodos de desarrollo ágil:",
        options: [
            "En Scrum durante el Sprint no se realizan cambios que puedan afectar al objetivo del Sprint",
            "Los elementos de la Lista de Producto seleccionados para el Sprint, más el plan para terminarlos, recibe el nombre de Sprint Backlog",
            "El tiempo que se tarda en terminar cada tarea se debe medir, a ese tiempo se le llama lead time",
            "El diagrama de Gantt es uno de los elementos fundamentales de un tablero de Kanban"
        ],
        correctAnswer: 3,
        feedback: "El diagrama de Gantt NO es un elemento fundamental de un tablero de Kanban; se usan tableros visuales con columnas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En relación a DevOps, indique cuál de las siguientes afirmaciones es correcta:",
        options: [
            "Los equipos lanzan versiones de software en ciclos cortos",
            "Cada equipo trabaja internamente sus procesos sin necesidad de compartir ni dar visibilidad",
            "Están perfectamente separados los procesos de desarrollo y de operaciones",
            "En el proceso de entrega de software se evita el uso de automatización"
        ],
        correctAnswer: 0,
        feedback: "En DevOps, los equipos lanzan versiones de software en ciclos cortos, promoviendo la integración y entrega continua."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Indique cuál de los siguientes lenguajes de programación no es orientado a objetos:",
        options: ["Java", "Ruby", "Python", "Scratch"],
        correctAnswer: 3,
        feedback: "Scratch es un lenguaje de programación visual que no es orientado a objetos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Seleccione la respuesta correcta en relación a la gestión de configuración del software:",
        options: [
            "Son un conjunto de actividades desarrolladas para gestionar los cambios a lo largo del ciclo de vida",
            "Es una actividad de garantía de calidad de software que se aplica exclusivamente en la fase de diseño",
            "Es un método de desarrollo ágil",
            "Es un control de versiones que se aplica en la fase de desarrollo"
        ],
        correctAnswer: 0,
        feedback: "La gestión de configuración del software es un conjunto de actividades para gestionar los cambios a lo largo del ciclo de vida."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El principio de programación orientada a objetos que se refiere al hecho de que objetos de diferentes clases, pero con una interfaz común, se puedan usar de manera indistinta sin tener que saber de qué clase exacta son para poder hacerlo, se llama:",
        options: ["Abstracción", "Herencia", "Polimorfismo", "Encapsulación"],
        correctAnswer: 2,
        feedback: "El polimorfismo permite que objetos de diferentes clases con una interfaz común se usen de manera indistinta."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Un programa informático que procesa el código fuente de un proyecto de software durante su tiempo de ejecución y actúa como una interfaz entre ese proyecto y el procesador, se llama:",
        options: ["Compilador", "Preprocesador", "Ensamblador", "Intérprete"],
        correctAnswer: 3,
        feedback: "Un intérprete procesa el código fuente durante su tiempo de ejecución y actúa como interfaz entre el proyecto y el procesador."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El lenguaje de scripting recomendado y usado más comúnmente para manipular el DOM (Modelo de Objetos del Documento) en páginas Web es:",
        options: ["JavaScript", "Python", "Ruby", "Perl"],
        correctAnswer: 0,
        feedback: "JavaScript es el lenguaje de scripting más comúnmente usado para manipular el DOM en páginas web."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de los siguientes es un framework de desarrollo front-end?",
        options: ["ASP.NET", "Angular", "Django", "Spring"],
        correctAnswer: 1,
        feedback: "Angular es un framework de desarrollo front-end para aplicaciones web."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En la arquitectura REST, en un servicio RESTful que utilice HTTP como protocolo de comunicaciones, ¿qué método HTTP se usa para actualizar un objeto?",
        options: ["PUT", "MODIFY", "POST", "UPDATE"],
        correctAnswer: 0,
        feedback: "PUT es el método HTTP utilizado para actualizar un objeto en una arquitectura REST."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El Conjunto de estándares web de aplicaciones de Internet enriquecidas y accesibles, cuyo objetivo es hacer que el contenido web y las aplicaciones web sean más accesibles para las personas con discapacidades, se denomina:",
        options: ["Core Accessibility API Mappings", "Marcado SVG", "WAI-ARIA", "CMS"],
        correctAnswer: 2,
        feedback: "WAI-ARIA es el conjunto de estándares para hacer el contenido web más accesible para personas con discapacidades."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Cuál es el principio de la accesibilidad a sitios web que exige que los componentes y la navegación de la interfaz de usuario se puedan utilizar por cualquier persona usuaria.",
        options: ["Usabilidad", "Operabilidad", "Compresibilidad", "Perceptibilidad"],
        correctAnswer: 1,
        feedback: "El principio de operabilidad en WCAG exige que los componentes y la navegación se puedan utilizar por cualquier persona."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Indique la opción correcta a continuación. El Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público:",
        options: [
            "Tiene por objeto garantizar los requisitos de accesibilidad de los sitios web y aplicaciones para dispositivos móviles de los organismos del sector público",
            "Se aplica a todo el sector público estatal, autonómico y local, así como a los contenidos de terceros",
            "Define accesibilidad como el conjunto de principios y técnicas que se deben respetar al diseñar sitios web exclusivamente",
            "No incluye como contenido accesible los procesos de identificación, autenticación, firma y pago"
        ],
        correctAnswer: 0,
        feedback: "El RD 1112/2018 tiene por objeto garantizar los requisitos de accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El Servicio Andaluz de Salud dispone de una plataforma corporativa de movilidad basada en un ecosistema de servicios digitales, canalizado a través de:",
        options: ["ClicSalud+", "Salud Responde", "Carpeta Ciudadana", "App Salud Andalucía"],
        correctAnswer: 3,
        feedback: "La plataforma corporativa de movilidad del SAS se canaliza a través de la App Salud Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el desarrollo de chatbots, ¿qué técnica de Inteligencia Artificial (IA) se usa comúnmente para comprender el lenguaje natural del usuario?",
        options: [
            "Procesamiento de lenguaje Natural (NLP)",
            "Redes neuronales convolucionales (CNN)",
            "Algoritmos genéticos para la evolución de estructuras lingüísticas",
            "Algoritmos de clustering no supervisados para la generación de respuestas contextuales"
        ],
        correctAnswer: 0,
        feedback: "El Procesamiento de Lenguaje Natural (NLP) se usa para comprender el lenguaje natural del usuario en chatbots."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el contexto de una arquitectura de sistemas multicanal que debe gestionar eficientemente grandes volúmenes de usuarios accediendo simultáneamente desde múltiples dispositivos, ¿qué enfoque arquitectónico proporciona una mayor agilidad y escalabilidad?",
        options: [
            "Arquitectura monolítica con implementación de caché distribuido",
            "Arquitectura de microservicios combinada con una arquitectura basada en eventos (EDA)",
            "Arquitectura tradicional cliente-servidor utilizando procesamiento centralizado",
            "Sistema basado en una base de datos distribuida con sincronización eventual"
        ],
        correctAnswer: 1,
        feedback: "La arquitectura de microservicios combinada con EDA proporciona mayor agilidad y escalabilidad para sistemas multicanal."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes opciones describe correctamente los cuatro componentes clave de una infraestructura de Internet de las Cosas (IoT)?",
        options: [
            "Sensores y actuadores, redes físicas avanzadas, análisis predictivo en la nube y algoritmos de machine learning",
            "Infraestructura física de alta velocidad, blockchain y dispositivos autónomos",
            "Sensores y actuadores, conectividad, procesamiento de datos y plataformas de gestión y aplicaciones",
            "Plataformas descentralizadas, inteligencia artificial, sistemas de almacenamiento masivo y conectividad inalámbrica"
        ],
        correctAnswer: 2,
        feedback: "Los cuatro componentes clave de IoT son: sensores y actuadores, conectividad, procesamiento de datos y plataformas de gestión y aplicaciones."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes afirmaciones es correcta respecto a Edge Computing?",
        options: [
            "Representa un nuevo paradigma que prioriza el procesamiento local sobre el centralizado",
            "Procesa todos los datos en dispositivos finales exclusivamente",
            "Complementa el cloud computing reduciendo la latencia en aplicaciones críticas",
            "Elimina la necesidad de datos centralizados"
        ],
        correctAnswer: 2,
        feedback: "Edge Computing complementa el cloud computing reduciendo la latencia en aplicaciones críticas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes configuraciones de redundancia asociaría a un Centro de Proceso de Datos clasificado como TIER IV?",
        options: ["N+1", "2N+1", "N", "2N"],
        correctAnswer: 3,
        feedback: "TIER IV utiliza configuración 2N (redundancia total) para garantizar la máxima disponibilidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿En qué consiste la técnica de almacenamiento de información denominada RAID 6?",
        options: [
            "Distribución entre seis o más discos, actuando dos de ellos como bit de paridad",
            "Distribución entre tres o más discos, actuando uno de ellos como bit de paridad",
            "Distribución entre cuatro o más discos, duplicando la información para ofrecer redundancia",
            "Distribución entre cuatro o más discos, actuando dos de ellos como bit de paridad, tolerando el fallo de dos discos"
        ],
        correctAnswer: 3,
        feedback: "RAID 6 distribuye la información entre cuatro o más discos, con dos discos de paridad, tolerando el fallo de dos discos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es una ventaja clave del almacenamiento en red (NAS) en comparación con el almacenamiento en red de área de almacenamiento (SAN)?",
        options: [
            "El NAS permite una mayor flexibilidad en la gestión de datos dado que proporciona acceso a los datos a nivel de bloque",
            "El NAS ofrece acceso a nivel de archivo y es más fácil de configurar y administrar para compartir archivos en una red local",
            "El SAN requiere menor coste que el NAS debido a su simplicidad",
            "El NAS proporciona un rendimiento de alta velocidad debido a su acceso a nivel de bloque"
        ],
        correctAnswer: 1,
        feedback: "NAS ofrece acceso a nivel de archivo y es más fácil de configurar y administrar para compartir archivos en una red local."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cómo se llama el servidor que almacena y gestiona la base de datos de Active Directory, proporcionando autenticación y autorización a los usuarios y dispositivos del dominio?",
        options: ["Servidor DNS", "Controlador de Dominio", "Servidor LDAP", "Servidor RADIUS"],
        correctAnswer: 1,
        feedback: "El Controlador de Dominio almacena y gestiona la base de datos de Active Directory."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes características de Windows 11 permite ejecutar aplicaciones de Android de forma nativa?",
        options: ["Microsoft Store", "Windows Subsystem for Android", "App Container", "Windows Sandbox"],
        correctAnswer: 1,
        feedback: "Windows Subsystem for Android permite ejecutar aplicaciones de Android de forma nativa en Windows 11."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué comando utilizaríamos en sistemas GNU / Linux para conocer los procesos en ejecución y su estado?",
        options: ["Tar", "Sart", "Pcat", "Top"],
        correctAnswer: 3,
        feedback: "El comando 'top' muestra los procesos en ejecución y su estado en sistemas GNU/Linux."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes libertades fundamentales NO corresponde al software libre según el proyecto GNU?",
        options: [
            "Libertad de ejecutar el programa",
            "Libertad de estudiar cómo funciona el programa y modificarlo",
            "Libertad de redistribuir copias del programa",
            "Libertad de vender el código fuente a terceros sin restricciones"
        ],
        correctAnswer: 3,
        feedback: "La libertad de vender el código fuente a terceros sin restricciones no es una libertad fundamental del software libre según el proyecto GNU."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el contexto del software libre, ¿qué ventaja principal ofrece respecto al software propietario?",
        options: [
            "Permite la adaptación y mejora del software según las necesidades específicas",
            "Reduce los costes del hardware que lo soporta",
            "Elimina la necesidad de mantenimiento técnico especializado",
            "Garantiza la compatibilidad con todos los sistemas legacy existentes"
        ],
        correctAnswer: 0,
        feedback: "La principal ventaja del software libre es que permite la adaptación y mejora del software según las necesidades específicas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué significa el acrónimo LeTSAS?",
        options: ["Linux exportado en terminales del SAS", "Linux embebido en terminales del SAS", "Linux extraído para terminales del SAS", "Linux en tramitación asistencial del SAS"],
        correctAnswer: 1,
        feedback: "LeTSAS significa Linux embebido en terminales del SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En una arquitectura de tres niveles, ¿qué ventaja principal ofrece la capa intermedia de lógica de negocio?",
        options: [
            "Reduce el consumo de memoria en el servidor de base de datos",
            "Permite la escalabilidad independiente y reutilización de la lógica empresarial",
            "Elimina la dependencia de un servidor de base de datos",
            "Simplifica el desarrollo de la interfaz de usuario"
        ],
        correctAnswer: 1,
        feedback: "La capa intermedia de lógica de negocio permite la escalabilidad independiente y reutilización de la lógica empresarial."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué componente es esencial en una arquitectura orientada a servicios (SOA) para gestionar la comunicación entre servicios?",
        options: ["Oficina Técnica de Interoperabilidad (OTI)", "Servidor de bases de datos centralizado (CDB)", "Sistema de archivos distribuido (DFS)", "El bus de servicios empresariales (ESB)"],
        correctAnswer: 3,
        feedback: "El ESB (Enterprise Service Bus) es el componente esencial en SOA para gestionar la comunicación entre servicios."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el contexto de la nube híbrida, ¿qué permite el 'cloud bursting'?",
        options: [
            "Migración completa a la nube pública",
            "Aislamiento total de la nube privada",
            "Expansión temporal a la nube pública durante picos de demanda",
            "Eliminación de la necesidad de infraestructura local"
        ],
        correctAnswer: 2,
        feedback: "Cloud bursting permite la expansión temporal a la nube pública durante picos de demanda."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué tipo de red se utiliza típicamente para conectar dispositivos dentro de un mismo edificio?",
        options: ["Red BAN (Building Area Network)", "Red LAN (Local Area Network)", "Red WAN (Wide Area Network)", "Red MAN (Metropolitan Area Network)"],
        correctAnswer: 1,
        feedback: "LAN (Local Area Network) es la red utilizada para conectar dispositivos dentro de un mismo edificio."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de estos equipos de interconexión trabaja a nivel de red (nivel 3 del modelo OSI)?",
        options: ["Router", "Bridge", "Hub", "Switch"],
        correctAnswer: 0,
        feedback: "El Router trabaja a nivel de red (Capa 3 del modelo OSI)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué tecnología de red móvil introdujo por primera vez capacidades de transmisión de datos de banda ancha (>384 Kbps)?",
        options: ["4G con LTE", "2G con GSM", "3G con UMTS", "1G con AMPS"],
        correctAnswer: 2,
        feedback: "3G con UMTS introdujo por primera vez capacidades de transmisión de datos de banda ancha (>384 Kbps)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "La capa 7 Aplicación del modelo OSI es la capa encargada de proporcionar la interfaz entre las aplicaciones y las capas inferiores del modelo. Identifique el protocolo que NO está asociado a esta capa:",
        options: ["DNS", "XMPP", "HDLC", "HTTPS"],
        correctAnswer: 2,
        feedback: "HDLC (High-Level Data Link Control) es un protocolo de la capa de Enlace de datos (Capa 2), no de la capa de Aplicación."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué técnica de IPv6 facilita la coexistencia con redes IPv4 durante la transición?",
        options: ["NAT64 exclusivamente", "Túneles GRE", "Dual Stack en los dispositivos de red", "Conversión de protocolos"],
        correctAnswer: 2,
        feedback: "Dual Stack en los dispositivos de red facilita la coexistencia con redes IPv4 durante la transición."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué ventaja principal ofrece el uso de registros PTR en el Sistema de Nombres de Dominio?",
        options: ["Mayor velocidad de resolución", "Reducción del tráfico DNS", "Menos carga en los servidores", "Verificación de direcciones IP inversas"],
        correctAnswer: 3,
        feedback: "Los registros PTR permiten la verificación de direcciones IP inversas (resolución inversa)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En IPv6, las comunicaciones uno-a-muchos (one-to-many) se realizan mediante el uso de direcciones:",
        options: ["Multicast", "Multicast y anycast", "Unicast y anycast", "Broadcast"],
        correctAnswer: 0,
        feedback: "En IPv6, las comunicaciones uno-a-muchos se realizan mediante direcciones Multicast."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según la Orden de 2 de junio de 2017, reguladora de los requisitos necesarios para el diseño e implementación de infraestructuras de cableado estructurado y de red de área local inalámbrica en el ámbito de la Administración de la Junta de Andalucía, sus Entidades Instrumentales y los Consorcios del Sector Público Andaluz, ¿entre qué elementos se extiende el subsistema troncal de edificio?",
        options: [
            "Desde el Repartidor de interconexión a los Repartidores de edificio",
            "Desde el Repartidor de edificio a las tomas de telecomunicaciones",
            "Desde el Repartidor de edificio a los Repartidores de planta",
            "Desde la cabina de comunicaciones hasta el Repartidor de edificio"
        ],
        correctAnswer: 0,
        feedback: "El subsistema troncal de edificio se extiende desde el Repartidor de interconexión a los Repartidores de edificio."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es la principal ventaja de utilizar un sistema GPS en un dispositivo móvil?",
        options: ["Reducir el consumo de batería", "Aumentar la velocidad de Internet", "Mejorar la calidad de las llamadas", "Conocer la ubicación exacta del dispositivo"],
        correctAnswer: 3,
        feedback: "La principal ventaja del GPS es conocer la ubicación exacta del dispositivo."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En un sistema de VoIP, ¿qué ventaja principal ofrece el protocolo SIP frente a sistemas propietarios?",
        options: [
            "Es un estándar abierto que permite interoperabilidad entre diferentes fabricantes",
            "Ofrece mayor calidad de sonido que cualquier otra alternativa",
            "No requiere conexión a Internet para funcionar",
            "Consume menos ancho de banda que otros protocolos"
        ],
        correctAnswer: 0,
        feedback: "SIP es un estándar abierto que permite interoperabilidad entre diferentes fabricantes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué parámetro de red tiene mayor impacto en la calidad de una videoconferencia?",
        options: ["El número de saltos entre routers", "La latencia de la red", "La dirección IP del servidor", "El tamaño del buffer de recepción"],
        correctAnswer: 1,
        feedback: "La latencia de la red tiene el mayor impacto en la calidad de una videoconferencia."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En relación con el protocolo SSL/TLS, ¿cuál es la función del handshake inicial?",
        options: [
            "Acordar la versión del protocolo y verificar la ruta segura",
            "Acordar la versión del protocolo y los algoritmos de cifrado a utilizar",
            "Definir el ancho de banda y verificar la ruta segura",
            "Definir la ruta segura y acordar la versión del protocolo"
        ],
        correctAnswer: 1,
        feedback: "El handshake inicial en SSL/TLS sirve para acordar la versión del protocolo y los algoritmos de cifrado a utilizar."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "El Servicio Andaluz de Salud, utiliza para el intercambio electrónico de datos con los proveedores, la siguiente transacción comercial para la Factura, según el estándar de Intercambio Electrónico de Datos:",
        options: ["ORDERS", "INVOIC D 93A", "DESADV D 96A", "FACTDV D 93A"],
        correctAnswer: 1,
        feedback: "El SAS utiliza INVOIC D 93A para la factura en el intercambio electrónico de datos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de las siguientes afirmaciones sobre el Directorio Común de Unidades Orgánicas y Oficinas (DIR3) es correcta?",
        options: [
            "DIR3 es un sistema que permite identificar y clasificar los órganos administrativos, unidades y entidades del sector público para facilitar la interoperabilidad",
            "DIR3 es una base de datos exclusiva para la gestión de expedientes judiciales",
            "DIR3 es una plataforma para el intercambio de información entre ciudadanos y empresas",
            "DIR3 es un estándar de almacenamiento de documentos electrónicos en la nube"
        ],
        correctAnswer: 0,
        feedback: "DIR3 es un sistema que identifica y clasifica órganos administrativos, unidades y entidades del sector público para facilitar la interoperabilidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál es la estructura mínima que requiere un documento clínico para cumplir el estándar CDA?",
        options: ["Cabecera y cuerpo", "Cabecera, cuerpo y firma", "Autenticador, cabecera, cuerpo, receptor", "Autenticación, acto y code"],
        correctAnswer: 0,
        feedback: "La estructura mínima de un documento CDA es Cabecera (header) y Cuerpo (body)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué característica diferencia principalmente a una base de datos documental de una base de datos relacional en cuanto al esquema de datos?",
        options: [
            "Las bases de datos documentales requieren un esquema rígido predefinido",
            "Las bases de datos documentales permiten esquemas flexibles y diferentes estructuras en cada documento",
            "Las bases de datos documentales no permiten relaciones entre documentos",
            "Las bases de datos documentales solo pueden almacenar documentos en formato XML"
        ],
        correctAnswer: 1,
        feedback: "Las bases de datos documentales permiten esquemas flexibles y diferentes estructuras en cada documento, a diferencia de las relacionales."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el proceso de normalización, una tabla está en tercera forma normal (3FN) si cumple que:",
        options: [
            "No existe ninguna dependencia funcional transitiva entre atributos no clave",
            "Todos los atributos son atómicos y existe una clave primaria",
            "No existen dependencias funcionales parciales",
            "No existen dependencias multivaluadas"
        ],
        correctAnswer: 0,
        feedback: "Una tabla está en 3FN si no existe ninguna dependencia funcional transitiva entre atributos no clave."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En la arquitectura de Hadoop, el HDFS (Sistema de Ficheros distribuido Hadoop) se encarga de:",
        options: [
            "Procesar consultas SQL en grandes volúmenes de datos",
            "Almacenar grandes cantidades de datos de manera distribuida en múltiples nodos",
            "Es básicamente el componente de procesamiento de Hadoop",
            "Implementar técnicas de minería de datos basadas en redes neuronales"
        ],
        correctAnswer: 1,
        feedback: "HDFS se encarga de almacenar grandes cantidades de datos de manera distribuida en múltiples nodos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Entre los ocho objetivos estratégicos de la Estrategia de Ciberseguridad de Andalucía 2022-2025, NO se encuentra:",
        options: [
            "Fortalecer las estructuras de Gobierno",
            "Mejorar las capacidades de ciberseguridad en las empresas andaluzas",
            "Creación de la Unidad SecurizADA de la Agencia Digital de Andalucía",
            "Potenciar el talento y competencias de ciberseguridad en la ciudadanía y profesionales"
        ],
        correctAnswer: 2,
        feedback: "La 'Creación de la Unidad SecurizADA' NO es uno de los objetivos estratégicos de la Estrategia de Ciberseguridad de Andalucía 2022-2025."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Según el artículo 31 del Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad (ENS), los sistemas de información comprendidos en el ámbito de aplicación de este real decreto serán objeto de una auditoría regular ordinaria que verifique el cumplimiento de los requerimientos del ENS:",
        options: [
            "Al menos cada dieciocho meses, pudiendo extenderse durante seis meses adicionales",
            "Al menos cada dos años, sin posibilidad de extensión",
            "Al menos cada dos años, pudiendo extenderse durante tres meses",
            "Al menos cada doce meses, pudiendo extenderse en periodos de seis meses, hasta un máximo de treinta y seis"
        ],
        correctAnswer: 0,
        feedback: "El ENS exige una auditoría regular ordinaria al menos cada dieciocho meses, con posibilidad de extensión de seis meses."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Indique cuál de los siguientes es un principio básico del Esquema Nacional de Seguridad (ENS):",
        options: [
            "Identificación, corrección y protección",
            "Monitoreo, intervención y preservación",
            "Existencia de líneas de defensa",
            "Vigilancia discontinua"
        ],
        correctAnswer: 2,
        feedback: "'Existencia de líneas de defensa' es uno de los principios básicos del ENS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué elemento distingue principalmente el análisis cualitativo del cuantitativo en MAGERIT?",
        options: [
            "El uso de escalas de valores discretos para valorar activos y amenazas",
            "La implementación de controles de seguridad específicos",
            "El tiempo necesario para realizar el análisis",
            "La necesidad de usar la herramienta PILAR"
        ],
        correctAnswer: 0,
        feedback: "El análisis cualitativo en MAGERIT se distingue por el uso de escalas de valores discretos para valorar activos y amenazas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En un centro de salud, ante la solicitud de acceso a la historia clínica de un paciente fallecido por parte de un familiar, ¿cuál de las siguientes actuaciones es correcta según la normativa vigente?",
        options: [
            "Proporcionar acceso a la historia clínica cuando se acredite un riesgo para la salud del familiar, salvo que exista prohibición expresa del fallecido",
            "Facilitar el acceso completo a la historia clínica a cualquier heredero que acredite su condición",
            "Proporcionar exclusivamente los datos de carácter patrimonial si existe prohibición expresa de acceso",
            "Permitir el acceso íntegro a cualquier familiar por razones de hecho o derecho"
        ],
        correctAnswer: 0,
        feedback: "Se debe proporcionar acceso cuando se acredite un riesgo para la salud del familiar, salvo que exista prohibición expresa del fallecido."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Cuál de los siguientes NO es uno de los objetivos principales de la aplicación BandeJA?",
        options: [
            "Suprimir el papel, ahorrando tiempo al convertir los envíos en algo inmediato",
            "Simplificar los procesos administrativos, no registrando en @ries el registro de entrada y salida de la Junta de Andalucía",
            "Facilitar la integración automática con los sistemas de archivo digital corporativo",
            "Definir la trazabilidad en envíos de cada comunicación"
        ],
        correctAnswer: 1,
        feedback: "Simplificar los procesos administrativos NO registrando en @ries NO es un objetivo de BandeJA; sí registra en @ries."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En relación con la gestión de la Voluntad Vital Anticipada a través de ClicSalud+ ¿qué afirmación es correcta?",
        options: [
            "Se puede realizar completamente el registro de forma telemática",
            "Permite consultar la declaración y solicitar cita para su registro o modificación",
            "Solo permite la consulta de declaraciones ya registradas presencialmente",
            "Únicamente facilita información sobre el proceso sin opciones de gestión"
        ],
        correctAnswer: 1,
        feedback: "ClicSalud+ permite consultar la declaración y solicitar cita para su registro o modificación."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el contexto de transferencia de archivos, ¿qué protocolo está diseñado específicamente para garantizar la integridad en transferencias masivas de datos científicos?",
        options: ["FTPS", "GridFTP", "SFTP", "WebDAV"],
        correctAnswer: 1,
        feedback: "GridFTP está diseñado específicamente para garantizar la integridad en transferencias masivas de datos científicos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué ventajas aporta la integración de herramientas de suscripción y personalización en los portales corporativos del SAS?",
        options: [
            "Optimizan la gestión de recursos y facilitan el seguimiento personalizado de pacientes",
            "Mejoran la experiencia del usuario al facilitar el acceso a información y servicios adaptados",
            "Aumentan la eficiencia operativa mediante la automatización de procesos administrativos",
            "Permiten una mejor integración de servicios y comunicación entre profesionales sanitarios"
        ],
        correctAnswer: 1,
        feedback: "Las herramientas de suscripción y personalización mejoran la experiencia del usuario al facilitar el acceso a información y servicios adaptados."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué sistema del SAS gestiona integralmente la logística, compras y aprovisionamiento de sus centros sanitarios?",
        options: [
            "HERMES (Herramienta Electrónica de Recursos Materiales y Equipamiento Sanitario)",
            "LOGyAPROVCS (Logística y Aprovisionamiento de Centros Sanitarios)",
            "SIGLO (Sistema Integral de Gestión Logística)",
            "AGD (Almacenaje y Gestión de Distribución)"
        ],
        correctAnswer: 2,
        feedback: "SIGLO es el sistema del SAS que gestiona integralmente la logística, compras y aprovisionamiento."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "¿Qué canal de comunicación NO está disponible para reportar incidencias en AyudaDigital del SAS?",
        options: ["Portal web de autoservicio", "Telegram", "WhatsApp", "Centro de atención telefónica"],
        correctAnswer: 1,
        feedback: "Telegram NO es un canal disponible para reportar incidencias en AyudaDigital del SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "Respecto a los servicios que ofrece AyudaDigital del SAS en su web, ¿cuál de los siguientes no es correcto?",
        options: [
            "En la sección CAPACITACIÓN podemos conocer el catálogo de cursos y tutoriales",
            "En la sección ACOGIDA se encuentran los manuales de acogida de los centros sanitarios",
            "En la sección APLICACIONES se puede acceder a recursos de las aplicaciones favoritas del usuario",
            "La sección NOVEDADES ofrece información sobre noticias y mejoras en las aplicaciones"
        ],
        correctAnswer: 1,
        feedback: "En la sección ACOGIDA NO se encuentran los manuales de acogida de los centros sanitarios; esa información está en otra sección."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre",
        question: "En el contexto de la virtualización del puesto de trabajo, ¿qué significa DaaS?",
        options: ["Data as a Service", "Desktop as a Service", "Development as a Service", "Database as a Service"],
        correctAnswer: 1,
        feedback: "DaaS significa Desktop as a Service (Escritorio como Servicio)."
    },
	
// --- PREGUNTAS EXAMEN 3 (TÉCNICO MEDIO - ACCESO LIBRE) - PRÁCTICO ---
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: En la fase inicial del proyecto según PMBOK, ¿qué documento fundamental deben elaborar para definir el alcance, los objetivos y los recursos necesarios?",
        options: ["Diagrama de Gantt", "Acta de constitución del proyecto", "Diagrama de flujo de datos", "Matriz de riesgos"],
        correctAnswer: 1,
        feedback: "El Acta de constitución del proyecto es el documento fundamental para definir el alcance, objetivos y recursos necesarios según PMBOK."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: En uno de los proyectos deciden trabajar bajo el marco metodológico de Scrum, ¿qué elemento central en Scrum proporciona una visión general de todo el trabajo necesario para el producto?",
        options: ["Sprint Backlog", "Incremento", "Product Backlog", "Burndown Chart"],
        correctAnswer: 2,
        feedback: "El Product Backlog proporciona una visión general de todo el trabajo necesario para el producto en Scrum."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: Dentro del marco de Scrum, ¿qué ocurre en la reunión de Sprint Review?",
        options: [
            "Es la fase donde el equipo analiza su desempeño y propone mejoras en su proceso de trabajo",
            "Se presenta el incremento del producto terminado y se obtiene retroalimentación de los interesados",
            "Se planifica en detalle cada tarea a realizar en los próximos meses",
            "Se asignan roles y responsabilidades fijas para todos los miembros del equipo"
        ],
        correctAnswer: 1,
        feedback: "En la Sprint Review se presenta el incremento del producto terminado y se obtiene retroalimentación de los interesados."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: El equipo decide adoptar el enfoque de Kanban para el control de flujos de trabajo, ¿qué tipo de diagrama se utiliza comúnmente en Kanban para visualizar el flujo de trabajo y el tiempo de ciclo?",
        options: ["Diagrama de Gantt", "Diagrama de flujo acumulativo (CFD)", "Diagrama de casos de uso", "Diagrama de clases"],
        correctAnswer: 1,
        feedback: "El diagrama de flujo acumulativo (CFD) se utiliza en Kanban para visualizar el flujo de trabajo y el tiempo de ciclo."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: El equipo de TI ha adoptado los principios de Lean para optimizar sus procesos, ¿cuál de los siguientes no es un principio fundamental del Lean Software Development?",
        options: [
            "Eliminar el desperdicio",
            "Amplificar el aprendizaje",
            "Decidir lo más tarde posible",
            "Maximizar la documentación exhaustiva"
        ],
        correctAnswer: 3,
        feedback: "Maximizar la documentación exhaustiva no es un principio de Lean Software Development."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: ¿Qué guía de buenas prácticas se centra en la gestión de servicios de TI y podría ser útil para asegurar la calidad del servicio del nuevo sistema?",
        options: ["ITIL", "ISO 27001", "COBIT", "PRINCE2"],
        correctAnswer: 0,
        feedback: "ITIL se centra en la gestión de servicios de TI y es la guía más adecuada para asegurar la calidad del servicio."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 1: El equipo pretende mejorar su Sistema de Gestión de Servicios (SGS) basado en ISO 20000, en este contexto, ¿qué papel desempeña el 'plan de servicio'?",
        options: [
            "Documentar los procedimientos para la resolución de incidentes y problemas",
            "Definir los objetivos y requisitos de los servicios de TI ofrecidos a los clientes",
            "Establecer los acuerdos de nivel de servicio (SLA) con los proveedores externos",
            "Planificar las actividades de mejora continua del SGS"
        ],
        correctAnswer: 1,
        feedback: "El plan de servicio define los objetivos y requisitos de los servicios de TI ofrecidos a los clientes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: El jefe de proyecto para el desarrollo de la aplicación web debe elegir una tecnología adecuada para el backend, ¿cuál de las siguientes opciones es una tecnología válida para este propósito?",
        options: ["XML", "CSS", "HTML", "PHP"],
        correctAnswer: 3,
        feedback: "PHP es una tecnología válida para el desarrollo backend de aplicaciones web."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: Una de las premisas en el desarrollo es que el contenido Web cumpla las recomendaciones del W3C. Seleccione qué principio según las pautas de accesibilidad para el contenido Web (WCAG) deben seguir para la accesibilidad web, de forma que asegure que el contenido sea accesible en una gama amplia de navegadores y tecnologías presentes y futuras.",
        options: [
            "La web debe ser atractiva visualmente",
            "La web debe ser rápida",
            "La web debe ser robusta",
            "La web debe ser operable"
        ],
        correctAnswer: 2,
        feedback: "El principio de 'robustez' (Robust) asegura que el contenido sea accesible en una gama amplia de navegadores y tecnologías."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: El equipo de desarrollo necesita un framework de JavaScript para la interfaz web de la aplicación. ¿Cuál de los siguientes frameworks es más adecuado para el desarrollo de aplicaciones SPA (Single Page Applications)?",
        options: ["Vue.js", "Django", "Laravel", "Express.js"],
        correctAnswer: 0,
        feedback: "Vue.js es un framework de JavaScript adecuado para el desarrollo de Single Page Applications (SPA)."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: Para facilitar la reutilización y escalabilidad de componentes se necesita desplegar su sistema en la nube con escalabilidad automática. ¿Cuál de las siguientes opciones es una plataforma de contenedores administrada en la nube que permite escalado automático?",
        options: ["Kubernetes (K8s)", "AWS RDS", "Azure DevOps", "GitLab CI/CD"],
        correctAnswer: 0,
        feedback: "Kubernetes es una plataforma de contenedores que permite escalado automático en la nube."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: Para el control de versiones de manera eficiente y colaborativa, el equipo de desarrollo utiliza GIT. ¿Qué comando deben usar para enviar cambios locales a un repositorio remoto?",
        options: ["git add", "git pull", "git commit", "git push"],
        correctAnswer: 3,
        feedback: "El comando 'git push' se utiliza para enviar cambios locales a un repositorio remoto."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 2: En la fase de implementación es posible que tengan que instalar la máquina virtual java (JVM) para el funcionamiento del sistema final, ¿cuál de las siguientes características describe mejor la portabilidad de las aplicaciones Java proporcionada por la JVM?",
        options: [
            "Las aplicaciones Java solo se pueden ejecutar en sistemas operativos Windows",
            "Las aplicaciones Java se compilan directamente en código máquina específico del sistema operativo",
            "Las aplicaciones Java se ejecutan en cualquier plataforma que tenga una JVM instalada",
            "Las aplicaciones Java requieren una recompilación completa para cada sistema operativo"
        ],
        correctAnswer: 2,
        feedback: "La JVM permite que las aplicaciones Java se ejecuten en cualquier plataforma que tenga una JVM instalada."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: ¿Qué protocolo del grupo de trabajo 802 de la IEEE se debe de utilizar para implementar el control de acceso a red (NAC) basada en puertos de red?",
        options: ["802.1af", "802.1Q", "802.D", "802.1X"],
        correctAnswer: 3,
        feedback: "IEEE 802.1X es el protocolo para implementar control de acceso a red (NAC) basada en puertos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: Teniendo en cuenta que la red se van a conectar teléfonos IP, ¿qué estándar deben de cumplir la electrónica de acceso para poder ofrecer alimentación eléctrica a través del cable Ethernet?",
        options: ["802.1af", "802.3af", "802.3X", "802.1Q"],
        correctAnswer: 1,
        feedback: "IEEE 802.3af es el estándar para Power over Ethernet (PoE) que permite alimentar dispositivos como teléfonos IP."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: El Hospital Universitario del Sur cuenta con un sistema de virtualización basado en hiperconvergencia. ¿qué significa dicha tecnología?",
        options: [
            "Se dispone de una arquitectura tradicional en capas, con el almacenamiento, red y servidores de manera independiente",
            "Se unifica computación, almacenamiento, red y software en un único sistema para minimizar la complejidad de la arquitectura",
            "En realidad, la hiperconvergencia hace referencia a implantación de servidores físicos no virtualizados",
            "La hiperconvergencia solo utiliza virtualización por contenedores"
        ],
        correctAnswer: 1,
        feedback: "La hiperconvergencia unifica computación, almacenamiento, red y software en un único sistema para minimizar la complejidad."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: A la hora de segmentar la red del hospital en varias subredes, se dispone de un direccionamiento inicial 10.34.10.0/24. ¿Cuál de las siguientes máscaras de subred permitiría crear la mayor cantidad de subredes donde cada una pueda alojar al menos 10 hosts direccionables?",
        options: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
        correctAnswer: 2,
        feedback: "La máscara 255.255.255.240 (/28) permite 16 subredes con 14 hosts cada una, cumpliendo el requisito de al menos 10 hosts."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: La base de datos Oracle de la aplicación hospitalaria está sufriendo problemas de rendimiento. Para intentar diagnosticar el problema, el administrador de sistemas consulta el fichero alert.log de la base de datos. ¿Qué clase de información puede existir en dicho fichero?",
        options: [
            "En el alert.log se registran todas las sentencias SQL que son ejecutadas en la base de datos",
            "En el alert.log se registra la información de errores, advertencias y otros eventos importantes de la base de datos",
            "En el alert.log se registran informes de rendimiento de la base de datos de forma periódica",
            "En el alert.log se registran todas las conexiones de los usuarios de la base de datos"
        ],
        correctAnswer: 1,
        feedback: "El archivo alert.log contiene información de errores, advertencias y otros eventos importantes de la base de datos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: El administrador de bases de datos, continuando con el análisis del rendimiento de ORACLE, utiliza una herramienta para identificar posibles cuellos de botella y optimizar la ejecución de consultas. ¿Cuál de las siguientes herramientas nos ofrece información sobre recursos, tiempos de espera y estadísticas de ejecución de sentencias SQL?",
        options: ["RAC", "AWR", "RMAN", "DataGuard"],
        correctAnswer: 1,
        feedback: "AWR (Automatic Workload Repository) proporciona información sobre recursos, tiempos de espera y estadísticas de ejecución de sentencias SQL."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 3: En la base de datos Oracle, el administrador necesita simplificar la gestión del almacenamiento, mejorar el rendimiento y garantizar la alta disponibilidad mediante la distribución automática de datos entre varios discos. ¿Qué tecnología nativa de Oracle debería utilizar para lograr esto?",
        options: ["Oracle Data Pump", "Oracle RAC", "Oracle ASM", "Oracle Data Guard"],
        correctAnswer: 2,
        feedback: "Oracle ASM (Automatic Storage Management) simplifica la gestión del almacenamiento y distribuye datos automáticamente entre discos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: Atendiendo al Régimen de la Hacienda Pública de la Comunidad Autónoma de Andalucía, según la clasificación económica de los estados de gastos de la AGS X, ¿a qué capítulo se debe imputar el gasto que se producirá con la adquisición del router?",
        options: ["Capítulo 2", "Capítulo 4", "Capítulo 6", "Capítulo 7"],
        correctAnswer: 2,
        feedback: "La adquisición de un router se imputa al Capítulo 6: Inversiones reales."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: Con respecto al proceso económico y financiero producido con ambas adquisiciones, ¿qué sistema se utiliza para la gestión integral de recursos organizativos de la Administración de la Junta de Andalucía y sus entidades instrumentales?",
        options: ["Sistema JÚPITER", "Sistema GIRO", "Sistema SIRhUS", "Sistema SIGMA"],
        correctAnswer: 3,
        feedback: "El Sistema SIGMA es el sistema de gestión integral de recursos organizativos de la Junta de Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: En la Junta de Andalucía, la adquisición de bienes y servicios relacionados con las Tecnologías de la Información y la Comunicación (TIC) está sujeta a una normativa específica que establece la necesidad de obtener un informe vinculante. Según esta normativa, ¿qué debemos hacer previo a la adquisición del Armario RACK?",
        options: [
            "Está excluido de la necesidad de solicitar el informe vinculante y no está sometidos a la obligación de comunicación",
            "Está excluido de la necesidad de solicitar el informe vinculante pero está sometidos a la obligación de comunicación de su adquisición",
            "Es necesario el informe vinculante ya que no se considera informado favorablemente debido al precio",
            "Es obligatorio el informe vinculante independientemente del precio"
        ],
        correctAnswer: 1,
        feedback: "Está excluido de la necesidad de solicitar el informe vinculante pero está sometido a la obligación de comunicación de su adquisición."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: El proceso de gestión para la emisión de los informes por medios electrónicos se llevará a cabo a través de la plataforma:",
        options: ["TreW@", "Vincul@", "Plataforma de contratación", "Infocor"],
        correctAnswer: 0,
        feedback: "La plataforma TreW@ se utiliza para la emisión de informes por medios electrónicos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, el contrato de adquisición del Router tendrán la consideración de:",
        options: ["Contrato de servicios", "Contrato de suministro", "Contrato de consultoría y asistencia", "Contrato mixto"],
        correctAnswer: 1,
        feedback: "La adquisición de un router es un contrato de suministro según la Ley 9/2017."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, ¿cuál es el procedimiento de contratación adecuado para la adquisición del router atendiendo a la cuantía y naturaleza del contrato?",
        options: ["Procedimiento abierto", "Procedimiento restringido", "Procedimiento Negociado", "Contrato Menor"],
        correctAnswer: 0,
        feedback: "Para la adquisición del router (4.679€), el procedimiento adecuado es el Contrato Menor."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 4: ¿Qué documento establece las condiciones técnicas que han de regir la ejecución de la prestación en un contrato público?",
        options: ["Pliego de Cláusulas Administrativas Particulares", "Pliego de Prescripciones Técnicas Particulares", "Documento de Licitación", "Memoria Justificativa"],
        correctAnswer: 1,
        feedback: "El Pliego de Prescripciones Técnicas Particulares establece las condiciones técnicas de la prestación."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: Con IPv4, ¿cuántas subredes /26 pueden configurarse de forma simultánea en la red 192.168.0.0/24?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        feedback: "En una red /24 se pueden configurar 4 subredes /26."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: ¿Cuál sería la nueva mascara de red resultante de segmentar la red en el numero de subredes /26?",
        options: ["255.255.255.0", "255.255.255.255", "255.255.255.128", "255.255.255.192"],
        correctAnswer: 3,
        feedback: "La máscara para /26 es 255.255.255.192."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: ¿Cuál sería la dirección IP de broadcast de la subred 192.168.0.64/26?",
        options: ["192.168.0.127", "192.168.0.128", "192.168.0.63", "192.168.0.255"],
        correctAnswer: 0,
        feedback: "La dirección de broadcast de la subred 192.168.0.64/26 es 192.168.0.127."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: ¿Qué capa del modelo OSI brinda los servicios para permitir el intercambio de datos entre los dispositivos finales ubicados en diferentes subredes?",
        options: ["Capa 1: Física", "Capa 2: Enlace de datos", "Capa 3: Red", "Capa 4: Transporte"],
        correctAnswer: 2,
        feedback: "La capa de Red (Capa 3) brinda los servicios para el intercambio de datos entre diferentes subredes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: En relación con las políticas de seguridad para redes inalámbricas establecidas por la Orden de 2 de junio de 2017, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Son medidas de seguridad obligatorias el filtrado de direcciones MAC",
            "Son medidas de seguridad obligatorias prevenir el acceso físico a los AP's y la restricción del alcance",
            "Se establece con carácter obligatorio el uso del SSID 'Juntadeandalucia'",
            "Se exige que todas las redes inalámbricas utilicen autenticación basada en certificados digitales"
        ],
        correctAnswer: 1,
        feedback: "La Orden establece como medidas obligatorias prevenir el acceso físico a los AP's y restringir su alcance."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 5: En relación con el uso de algoritmos de cifrado en la implantación de redes inalámbricas en el ámbito de la Junta de Andalucía:",
        options: [
            "No está regulado",
            "Es obligatorio el uso de cifrado WEP y recomendable el uso de cifrado WPA2",
            "Es obligatorio desactivar el mecanismo WPS",
            "Se obliga al uso exclusivo de canales de frecuencia autorizados"
        ],
        correctAnswer: 2,
        feedback: "Es obligatorio desactivar el mecanismo WPS en las redes inalámbricas de la Junta de Andalucía."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 6: ¿Qué algoritmo se utiliza para evitar deadlocks manteniendo al sistema en un estado seguro?",
        options: [
            "Asignación de recursos bajo el algoritmo FIFO",
            "Implementación del algoritmo de detección y recuperación",
            "Evitación del deadlock mediante el algoritmo del banquero",
            "Asignación cíclica de recursos a cada proceso"
        ],
        correctAnswer: 2,
        feedback: "El algoritmo del banquero se utiliza para evitar deadlocks manteniendo al sistema en un estado seguro."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 6: ¿Cuál de las siguientes técnicas NO se utiliza como estrategia para manejar un deadlock?",
        options: ["Prevención", "Detección y recuperación", "Evitación", "Incremento aleatorio de la prioridad de los procesos"],
        correctAnswer: 3,
        feedback: "El incremento aleatorio de la prioridad de los procesos no es una estrategia para manejar deadlocks."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 6: ¿Cuál de las siguientes afirmaciones es correcta en relación con la segmentación en la gestión de memoria?",
        options: [
            "La segmentación divide la memoria en unidades fijas denominadas páginas",
            "La segmentación permite dividir la memoria en segmentos de tamaño variable",
            "La segmentación elimina completamente la fragmentación externa",
            "La segmentación impide el intercambio de datos entre procesos"
        ],
        correctAnswer: 1,
        feedback: "La segmentación permite dividir la memoria en segmentos de tamaño variable."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 6: ¿Cuál de las siguientes herramientas de Windows es la más adecuada para diagnosticar y solucionar problemas relacionados con el rendimiento del sistema y los recursos del hardware?",
        options: ["Resource Monitor", "Event Viewer", "System Configuration (msconfig)", "Task Manager"],
        correctAnswer: 0,
        feedback: "Resource Monitor es la herramienta más adecuada para diagnosticar problemas de rendimiento y recursos del hardware."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 6: ¿Qué herramienta permite monitorización de rendimiento en Linux?",
        options: ["sart", "vmstat", "xxtop", "Mnom"],
        correctAnswer: 1,
        feedback: "Vmstat es una herramienta de monitorización de rendimiento en Linux."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: Para la aplicación de incidentes, ¿qué atributo input HTML5 es necesario para mostrar un selector de fechas?",
        options: ["type='calendar'", "type='datetime'", "type='date'", "type='day'"],
        correctAnswer: 2,
        feedback: "El atributo type='date' en HTML5 muestra un selector de fechas."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: ¿Cuál de las siguientes combinaciones de factores de autenticación NO se considera una buena práctica de seguridad?",
        options: [
            "Contraseña + token de hardware",
            "Contraseña + dato biométrico (huella dactilar)",
            "Contraseña + pregunta de seguridad + fecha de nacimiento",
            "Contraseña + código de verificación enviado por SMS"
        ],
        correctAnswer: 2,
        feedback: "Contraseña + pregunta de seguridad + fecha de nacimiento no es una buena práctica, ya que son información fácilmente obtenible."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: ¿Qué sentencia SQL es correcta para obtener el número total de incidencias por servicio y prioridad?",
        options: [
            "SELECT servicio, COUNT(*) FROM incidencias GROUPING BY servicio, prioridad",
            "SELECT servicio, prioridad, COUNT(*) FROM incidencias GROUP BY servicio, prioridad",
            "SELECT servicio, COUNT(prioridad) FROM incidencias HAVING servicio",
            "SELECT COUNT(*), prioridad, servicios WHERE incidencias GROUP BY prioridad"
        ],
        correctAnswer: 1,
        feedback: "La sentencia correcta es 'SELECT servicio, prioridad, COUNT(*) FROM incidencias GROUP BY servicio, prioridad'."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: ¿Cuál es la base legitimadora del RGPD que justifica el tratamiento de datos de salud de pacientes que pudieran registrarse en el incidente?",
        options: [
            "El interés legítimo del hospital",
            "El consentimiento explícito del paciente",
            "La misión de interés público y el ejercicio de poderes públicos",
            "La ejecución de un contrato"
        ],
        correctAnswer: 2,
        feedback: "La misión de interés público y el ejercicio de poderes públicos es la base legitimadora para el tratamiento de datos de salud en el SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: ¿Qué código Java previene la inyección SQL?",
        options: [
            "String query = 'SELECT * FROM incidencias WHERE id_servicio=' + idServicio + '';",
            "String query = 'SELECT * FROM incidencias WHERE id_servicio=?'; PreparedStatement ps = conn.prepareStatement(query); ps.setString(1, idServicio);",
            "String query = String.format('SELECT * FROM incidencias WHERE id_servicio=%s', idServicio);",
            "String query = 'SELECT * FROM incidencias WHERE id_servicio=' + idServicio;"
        ],
        correctAnswer: 1,
        feedback: "El uso de PreparedStatement con parámetros previene la inyección SQL."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: Se han detectado llamadas al personal del hospital, supuestamente desde el servicio de informática, solicitando sus credenciales, ¿qué tipo de ataque es este?",
        options: ["Phishing tradicional", "Vishing", "Smishing", "Spear phishing"],
        correctAnswer: 1,
        feedback: "Vishing (voice phishing) es el ataque que utiliza llamadas telefónicas para obtener credenciales."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 7: Tras el incidente anterior detectado, y según el ENS, ¿qué medida de seguridad debe reforzarse prioritariamente?",
        options: [
            "[mp.per.1] Medidas contra ataques",
            "[mp.per.4] Formación",
            "[mp.per.2] Deberes y obligaciones",
            "[mp.s.1] Segregación de funciones"
        ],
        correctAnswer: 0,
        feedback: "La medida [mp.per.1] Medidas contra ataques debe reforzarse prioritariamente ante este tipo de incidentes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 8: ¿Qué aplicación del SAS podrá usar el cirujano para cambiar autónomamente su contraseña?",
        options: ["MACO", "AGESCON", "TELEMACO", "IDENTIC"],
        correctAnswer: 3,
        feedback: "IDENTIC es la aplicación del SAS que permite cambiar autónomamente la contraseña."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 8: ¿Qué alta NO se da automáticamente desde IDENTIC?",
        options: [
            "El alta en el correo electrónico",
            "El alta en Pruebas Diagnósticas por Imagen (PDI)",
            "El alta en e-atencion al profesional",
            "El alta en Clic Salud asistencial"
        ],
        correctAnswer: 1,
        feedback: "El alta en Pruebas Diagnósticas por Imagen (PDI) NO se da automáticamente desde IDENTIC."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 8: ¿Qué herramienta ha establecido el SAS que debe usar el técnico de AyudaDigital para atenderle?",
        options: ["VNC", "Dameware", "Telemaco", "Teamviewer"],
        correctAnswer: 1,
        feedback: "Dameware es la herramienta establecida por el SAS para que los técnicos de AyudaDigital atiendan incidencias."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 8: ¿Dónde debe solicitar el alta de VPN y quién debe validarla?",
        options: [
            "El alta de la VPN es automática a través de IDENTIC",
            "Solicita el alta en Ayuda Digital, indicando su responsable jerárquico, quien deberá aprobar esta petición",
            "Solicita el alta en Ayuda Digital y es aprobada por el jefe de servicio de la DGSIC",
            "Solicita el alta en Ayuda Digital y es aprobada por el jefe de servicio de la ADA"
        ],
        correctAnswer: 1,
        feedback: "El alta de VPN se solicita en Ayuda Digital, indicando el responsable jerárquico para aprobación, y posteriormente la autoriza la DGSIC del SAS."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "CASO PRÁCTICO 8: ¿Qué módulo corporativo de DIRAYA podría utilizar para recibir consultas, con datos clínicos e incluso fotos, de otros facultativos?",
        options: ["Citaweb", "Telemedicina", "Estación de gestión", "Teleconsulta"],
        correctAnswer: 3,
        feedback: "Teleconsulta es el módulo de DIRAYA que permite recibir consultas con datos clínicos e imágenes de otros facultativos."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "¿En qué fase del ciclo de vida de un sistema de información se definen la arquitectura del sistema, el entorno tecnológico que lo soportará y se especifican detalladamente sus componentes?",
        options: ["Análisis del sistema", "Estudio de viabilidad", "Diseño del sistema", "Construcción del sistema"],
        correctAnswer: 2,
        feedback: "En la fase de Diseño del sistema se definen la arquitectura, el entorno tecnológico y se especifican detalladamente sus componentes."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "¿Cuál NO es una característica de la WIFI 6?",
        options: [
            "Utiliza MU-MIMO para que sirva a múltiples dispositivos simultáneamente",
            "Sólo opera en la banda 5 Ghz",
            "Es compatible con WPA3",
            "Introduce una tecnología llamada TWT (Target Wake Time)"
        ],
        correctAnswer: 1,
        feedback: "Wi-Fi 6 (802.11ax) opera tanto en 2.4 GHz como en 5 GHz, no solo en 5 GHz."
    },
    {
        topic: "Examen Técnico Medio - Acceso Libre - Práctico",
        question: "¿Qué significa oficialmente el acrónimo PILAR en el contexto de MAGERIT?",
        options: [
            "Programa de Implementación Lógica de Análisis de Redes",
            "Procedimiento Integral de Levantamiento de Arquitecturas Resilientes",
            "Proceso Informático de Localización de Amenazas y Riesgos",
            "Procedimiento Informático-Lógico para el Análisis de Riesgos"
        ],
        correctAnswer: 3,
        feedback: "PILAR significa Procedimiento Informático-Lógico para el Análisis de Riesgos en el contexto de MAGERIT."
    }
];
