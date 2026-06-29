// ============================================================
// ==================== EXAMEN 2 ===============================
// ============================================================
// Técnico/a de Función Administrativa, Sistemas y Tecnología de la Información
// Promoción Interna 2025

// --- PREGUNTAS EXAMEN 2 (PROMOCIÓN INTERNA) - TEÓRICO ---

const examen2_TFA = [
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Dentro del modelo de mejora continua PDCA, ¿en qué fase se recomienda implementar el plan a pequeña escala para recopilar datos?",
        options: ["Planificar", "Hacer", "Comprobar", "Actuar"],
        correctAnswer: 1,
        feedback: "En la fase 'Hacer' se implementa el plan a pequeña escala para recopilar datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué afirmación describe correctamente el uso del diagrama de Gantt?",
        options: [
            "Permite visualizar dependencias básicas entre tareas, pero no muestra caminos alternativos",
            "No permite la gestión de recursos, ya que solo muestra tareas y su duración",
            "Muestra la duración de cada tarea, pero no indica explícitamente cuáles son críticas, por lo que debe complementarse con CPM",
            "Su principal ventaja es que permite calcular con precisión la probabilidad de finalización del proyecto"
        ],
        correctAnswer: 2,
        feedback: "El diagrama de Gantt muestra la duración de cada tarea, pero no indica explícitamente cuáles son críticas, por lo que debe complementarse con CPM."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la planificación e instalación de un centro de proceso de datos (CPD), el concepto TIER es un tipo de indicación mundial usada frecuentemente para mencionar un CPD. En referencia a dicho concepto, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "El TIER indica la fiabilidad de un CPD asociado a cuatro niveles de disponibilidad definidos",
            "Es un concepto inventado por el 'Uptime Institute' para puntuar entre 0 y 99.999 la complejidad de los CPDs",
            "TIER Indica el Ratio de Eficiencia de Interacción Térmica y refleja la eficiencia energética",
            "TIER no es un concepto relacionado con la planificación e instalación de un centro de proceso de datos"
        ],
        correctAnswer: 0,
        feedback: "El TIER indica la fiabilidad de un CPD asociado a cuatro niveles de disponibilidad definidos (I a IV)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la hiperconvergencia y virtualización de servidores, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Es una técnica de virtualización de redes SAN que permite el uso de la misma cabina de discos por parte de múltiples servidores físicos",
            "Es una técnica de unificación de recursos de servidores que permite compartir toda la memoria de los mismos de forma unificada. Es una técnica también conocida como NUMA",
            "Es una técnica de unificación de recursos que simplifica la gestión y reduce el espacio físico, pero empeora la escalabilidad",
            "Es un sistema unificado, definido por software, que reúne todos los elementos hardware de un grupo de servidores de forma que se puedan administrar desde una misma consola"
        ],
        correctAnswer: 3,
        feedback: "La hiperconvergencia es un sistema unificado, definido por software, que reúne todos los elementos hardware de un grupo de servidores para administrarlos desde una misma consola."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En referencia a las redes de telecomunicaciones y los conceptos de ancho de banda y latencia, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La latencia y el ancho de banda son dos conceptos opuestos, de tal forma que a menor ancho de banda, mayor latencia y viceversa",
            "La latencia y el ancho de banda son dos conceptos distintos, de tal forma que el ancho de banda y la latencia no tienen una relación directa de causa y efecto entre ellos",
            "La latencia y el ancho de banda son dos conceptos similares, de tal forma que a menor ancho de banda, menor latencia y viceversa",
            "La latencia y el ancho de banda son dos conceptos separados, aunque generalmente a mayor ancho de banda mayor latencia"
        ],
        correctAnswer: 1,
        feedback: "La latencia y el ancho de banda son dos conceptos distintos, no tienen una relación directa de causa y efecto entre ellos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes protocolos sirve para la autenticación de una conexión Wifi WPA2 Empresarial?",
        options: ["PAP", "EAP-SSH", "RCM", "TSSL"],
        correctAnswer: 1,
        feedback: "EAP-SSH es uno de los protocolos utilizados para la autenticación en WPA2 Empresarial."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es el nombre con el que se conoce la red Wifi gratuita que ofrece la Junta de Andalucía en sus centros públicos?",
        options: ["Vuela", "RCJA Corporativo", "Invitado", "Eduroam"],
        correctAnswer: 0,
        feedback: "La red Wifi gratuita de la Junta de Andalucía se llama 'Vuela'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el intercambio electrónico de datos, XML se utiliza principalmente para:",
        options: [
            "Reemplazar todos los archivos PDF de un organismo, sin necesidad de transformaciones",
            "Almacenar datos binarios como imágenes sin posibilidad de lectura o análisis humano",
            "Definir transacciones bancarias cifradas sin esquema concreto",
            "Estructurar y describir datos de forma jerárquica y legible"
        ],
        correctAnswer: 3,
        feedback: "XML se utiliza para estructurar y describir datos de forma jerárquica y legible."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Real Decreto 4/2010, de 8 de enero por el que se regula el Esquema Nacional de Interoperabilidad (ENI) en el ámbito de la Administración Electrónica, ¿qué dimensión de las que se recogen a continuación NO ESTÁ recogida en el ENI?",
        options: [
            "Interoperabilidad organizativa para que las entidades colaboren para alcanzar sus logros mutuamente acordados",
            "Interoperabilidad semántica para que la información intercambiada pueda ser interpretable de forma automática y reutilizable",
            "Interoperabilidad en el tiempo para la conservación de la información en soporte electrónico",
            "Interoperabilidad funcional para la estandarización de los datos en los sistemas de información"
        ],
        correctAnswer: 3,
        feedback: "La 'Interoperabilidad funcional' NO está recogida en el ENI."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la principal ventaja del modelo Clinical Document Architecture (CDA) de HL7 frente a los mensajes de HL7 v2?",
        options: [
            "Permite almacenar información clínica en formato estructurado y legible por humanos",
            "Es más eficiente en la transmisión de datos en tiempo real",
            "No requiere terminologías estandarizadas como SNOMED CT o LOINC",
            "Sólo puede utilizarse en entornos hospitalarios y no en atención primaria"
        ],
        correctAnswer: 0,
        feedback: "CDA permite almacenar información clínica en formato estructurado y legible por humanos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes NO se considera un tipo elemental de datos en la mayoría de lenguajes de programación?",
        options: ["Integer", "Boolean", "List", "Char"],
        correctAnswer: 2,
        feedback: "List (lista) no es un tipo elemental de datos; es una estructura de datos compuesta."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el control de concurrencia de bases de datos, ¿qué técnica minimiza la posibilidad de un deadlock entre transacciones concurrentes?",
        options: [
            "Bloqueo exclusivo en todas las transacciones para evitar conflictos de acceso",
            "Uso de timestamp ordering para garantizar la ejecución de transacciones en un orden específico",
            "Implementación de una política de espera infinita para que las transacciones se ejecuten en cualquier orden",
            "Eliminación del sistema de logs de transacciones para acelerar la ejecución de consultas"
        ],
        correctAnswer: 1,
        feedback: "El uso de timestamp ordering minimiza la posibilidad de deadlock al garantizar la ejecución en un orden específico."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes medidas de seguridad del ENS está orientada a la gestión de incidentes de seguridad en las administraciones públicas?",
        options: [
            "Registro de eventos y trazabilidad",
            "Reducción de la superficie de exposición",
            "Autenticación reforzada de usuarios",
            "Auditoría interna de procesos administrativos"
        ],
        correctAnswer: 0,
        feedback: "El registro de eventos y trazabilidad es una medida orientada a la gestión de incidentes de seguridad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto de la seguridad en Internet, SSL y su sucesor TLS:",
        options: [
            "Proporcionan cifrado y autenticación a nivel de transporte, protegiendo la confidencialidad e integridad de los datos",
            "Eliminan la necesidad de tener un firewall o sistemas de detección de intrusos",
            "Se usan exclusivamente en la transferencia de archivos vía FTP",
            "Únicamente sirven para cifrar correo electrónico en IMAP"
        ],
        correctAnswer: 0,
        feedback: "SSL/TLS proporcionan cifrado y autenticación a nivel de transporte, protegiendo confidencialidad e integridad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es el portal destinado a facilitar el acceso remoto de los profesionales del Servicio Andaluz de Salud a aplicaciones corporativas desde fuera de la Red Corporativa de la Junta de Andalucía?",
        options: ["Diraya Ciudadanía", "Portal de Transparencia", "SARAC", "Portal de Farmacia"],
        correctAnswer: 2,
        feedback: "SARAC es el portal destinado a facilitar el acceso remoto de los profesionales del SAS a aplicaciones corporativas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes prácticas es fundamental para asegurar la precisión y la eficiencia en la gestión de activos informáticos en el Servicio Andaluz de Salud?",
        options: [
            "Realizar auditorías de seguridad periódicas en los sistemas de información",
            "Implementar un sistema de seguimiento y control de activos que incluya la identificación, el registro y el monitoreo continuo de todos los activos informáticos",
            "Facilitar la gestión de citas médicas y el acceso a información sanitaria mediante guías y tutoriales en línea",
            "Proporcionar soporte técnico en tiempo real para resolver problemas de hardware"
        ],
        correctAnswer: 1,
        feedback: "La gestión de activos requiere un sistema de seguimiento y control que incluya identificación, registro y monitoreo continuo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley 9/2017, de Contratos del Sector Público, ¿cuál de los siguientes contratos tiene la consideración de contrato menor?",
        options: [
            "Un contrato de servicios con un valor estimado de 35.000 euros",
            "Un contrato de suministros con un valor estimado de 17.500 euros",
            "Un contrato de obras con un valor estimado de 40.000 euros",
            "Un contrato de concesión de obras con un valor estimado de 40.000 euros"
        ],
        correctAnswer: 0,
        feedback: "Un contrato de servicios de 35.000 euros es un contrato menor según la Ley 9/2017 (límite 50.000€ para servicios)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "De acuerdo con la Ley 9/2017, de Contratos del Sector Público, ¿cuál de los siguientes principios debe regir la contratación del sector público?",
        options: [
            "Competencia desleal, publicidad limitada y discrecionalidad",
            "Confidencialidad, libre designación y beneficio económico",
            "Libertad de elección, contratación directa y urgencia",
            "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores"
        ],
        correctAnswer: 3,
        feedback: "La Ley 9/2017 establece como principios: libertad de acceso, publicidad, transparencia, no discriminación e igualdad de trato."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 1.1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, ¿qué se entiende por contrato oneroso?",
        options: [
            "Cuando el contratista obtenga algún tipo de beneficio económico, ya sea de forma directa o indirecta",
            "Cuando el contratista obtenga algún tipo de beneficio económico de forma directa",
            "Cuando la Administración Pública obtenga algún tipo de beneficio económico",
            "Ninguna de las anteriores"
        ],
        correctAnswer: 0,
        feedback: "El contrato oneroso es aquel en el que el contratista obtiene algún tipo de beneficio económico, directo o indirecto."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 14.2 de la Ley 39/2015, ¿qué sujetos de los siguientes están obligados a relacionarse a través de medios electrónicos con las Administraciones Públicas para la realización de cualquier trámite de un procedimiento administrativo?",
        options: [
            "Cualquier ciudadano mayor de edad",
            "Las personas físicas que presenten escritos en nombre propio",
            "Los empleados de las Administraciones Públicas para los trámites y actuaciones que realicen con ellas por razón de su condición de empleado público",
            "Sólo las empresas que contraten con la Administración"
        ],
        correctAnswer: 2,
        feedback: "El artículo 14.2 de la Ley 39/2015 establece que los empleados públicos están obligados a relacionarse electrónicamente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué técnica se utiliza en la gestión por procesos para mapear visualmente un flujo de trabajo?",
        options: ["Análisis PESTEL", "Diagrama de Ishikawa", "Mapeo de procesos (Business Process Mapping)", "Benchmarking"],
        correctAnswer: 2,
        feedback: "El mapeo de procesos (Business Process Mapping) se utiliza para representar visualmente un flujo de trabajo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la Estrategia de Salud Digital de Andalucía, ¿cuál de los siguientes objetivos se encuentra más alineado con la evolución de los sistemas de información asistenciales del SAS?",
        options: [
            "Unificación de sistemas departamentales locales de cada hospital",
            "Garantizar la trazabilidad del dato clínico mediante arquitectura de historia clínica distribuida",
            "Fortalecer los sistemas de información corporativos con enfoque en la satisfacción del personal facultativo",
            "Minimizar la visibilidad de datos clínicos para evitar problemas de confidencialidad y privacidad"
        ],
        correctAnswer: 1,
        feedback: "La Estrategia de Salud Digital de Andalucía busca garantizar la trazabilidad del dato clínico mediante historia clínica distribuida."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué principio de diseño de los servicios digitales del SAS permite que una persona representante pueda acceder a los datos de salud de menores o dependientes a su cargo a través de ClicSalud+?",
        options: ["Principio de custodia clínica", "Delegación asistencial familiar", "Representación legal verificada", "Acceso familiar delegado"],
        correctAnswer: 2,
        feedback: "El principio de 'Representación legal verificada' permite el acceso a los datos de salud de menores o dependientes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto del SAS, ¿qué es 'Ventana Abierta a la Familia' y cuál es su propósito principal?",
        options: [
            "Un programa de formación para profesionales sanitarios sobre atención familiar",
            "Una plataforma que permite a las familias acceder a información y servicios relacionados con la salud infantil y el seguimiento del desarrollo de los menores",
            "Un servicio de atención psicológica dirigido a familias con miembros en tratamiento médico prolongado",
            "Un sistema para consultas médicas familiares a distancia"
        ],
        correctAnswer: 1,
        feedback: "Ventana Abierta a la Familia es una plataforma para que las familias accedan a información sobre salud infantil."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el uso de hojas de cálculo avanzadas, ¿qué funcionalidad permite realizar análisis dinámico de grandes volúmenes de datos sin modificar los datos originales?",
        options: [
            "Formularios de entrada vinculados a macros",
            "Tablas dinámicas (o Pivot Tables)",
            "Referencias circulares para iteración automática",
            "Validación de datos mediante expresiones regulares"
        ],
        correctAnswer: 1,
        feedback: "Las tablas dinámicas (Pivot Tables) permiten analizar grandes volúmenes de datos sin modificar los datos originales."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema de gestión documental institucional, ¿qué estándar o norma debe tenerse en cuenta para asegurar la interoperabilidad con el archivo electrónico administrativo en España?",
        options: ["EI ENS", "La ISO/IEC 27001", "NTI de Política de Gestión de Documentos Electrónicos del ENI", "Ley 9/2017 de Contratos del Sector Público"],
        correctAnswer: 2,
        feedback: "La NTI de Política de Gestión de Documentos Electrónicos del ENI asegura la interoperabilidad con el archivo electrónico administrativo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué técnica permite mejorar la capacidad y flexibilidad de almacenamiento en un centro de datos sin necesidad de añadir más servidores físicos?",
        options: [
            "Implementación de almacenamiento en la nube con capacidad bajo demanda",
            "Configuración de RAID 0 para aumentar la velocidad de escritura sin redundancia",
            "Migración de todos los datos a unidades de estado sólido (SSD)",
            "Reducción de la resolución de archivos multimedia almacenados en el servidor"
        ],
        correctAnswer: 0,
        feedback: "El almacenamiento en la nube con capacidad bajo demanda permite mejorar la capacidad y flexibilidad sin añadir servidores físicos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un entorno donde se requiere alta disponibilidad, ¿qué factor es crítico para evitar interrupciones en el servicio?",
        options: [
            "Garantizar redundancia en los componentes críticos del sistema",
            "Utilizar servidores con la mayor cantidad posible de memoria RAM",
            "Evitar el uso de redes de respaldo para reducir costos de infraestructura",
            "Programar mantenimientos frecuentes que impliquen apagados completos del sistema"
        ],
        correctAnswer: 0,
        feedback: "La redundancia en componentes críticos es fundamental para garantizar la alta disponibilidad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes afirmaciones sobre SNOMED CT es correcta?",
        options: [
            "Es un sistema de codificación exclusivamente diseñado para la facturación de procedimientos médicos",
            "Organiza los conceptos clínicos en una estructura jerárquica con relaciones definidas",
            "Sólo se usa en Estados Unidos, no cuenta con reconocimiento a nivel internacional",
            "No permite la interoperabilidad con otros estándares como HL7 FHIR"
        ],
        correctAnswer: 1,
        feedback: "SNOMED CT organiza los conceptos clínicos en una estructura jerárquica con relaciones definidas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la herramienta PILAR, utilizada para el análisis y gestión de riesgos en sistemas de información, ¿qué función principal desempeña el 'perfil de seguridad'?",
        options: [
            "Cuantifica el impacto financiero y reputacional de cada vulnerabilidad identificada",
            "Asigna responsables de seguridad dentro de la organización",
            "Genera un inventario detallado de todos los activos físicos de la infraestructura",
            "Define los umbrales de seguridad que deben cumplir los sistemas en función de su categorización"
        ],
        correctAnswer: 3,
        feedback: "El perfil de seguridad en PILAR define los umbrales de seguridad que deben cumplir los sistemas según su categorización."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En España, dentro de la Plataforma CL@VE, ¿cuál de los siguientes mecanismos proporciona el mayor nivel de seguridad en autenticación electrónica?",
        options: [
            "Cl@ve PIN, basado en un código de un sólo uso enviado por SMS",
            "Cl@ve Permanente, utilizando usuario y contraseña con verificación OTP",
            "DNIe y Certificado Electrónico, basado en criptografía de clave pública",
            "Acceso con credenciales delegadas verificadas"
        ],
        correctAnswer: 2,
        feedback: "El DNIe y Certificado Electrónico proporcionan el mayor nivel de seguridad al usar criptografía de clave pública."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto de los protocolos de transferencia de ficheros en Internet, ¿qué ventaja aporta el protocolo SFTP (SSH File Transfer Protocol) frente a FTP y FTPS?",
        options: [
            "SFTP requiere menos recursos computacionales que FTP al utilizar cifrado parcial",
            "SFTP cifra tanto el canal de control como el de datos mediante una única conexión segura",
            "SFTP permite la autenticación mediante certificados X.509, a diferencia de FTPS",
            "SFTP usa el mismo puerto y estructura de comandos que FTP, lo que facilita su compatibilidad"
        ],
        correctAnswer: 1,
        feedback: "SFTP cifra tanto el canal de control como el de datos mediante una única conexión segura."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es una diferencia clave entre un sistema de gestión documental tradicional (como Alfresco o SharePoint) y un espacio colaborativo tipo Confluence en cuanto al control de versiones y estructura del contenido?",
        options: [
            "Confluence almacena documentos sin posibilidad de control de versiones en archivos independientes",
            "Los gestores documentales tradicionales ofrecen versiones automáticas sólo en archivos PDF",
            "Confluence organiza el contenido en páginas jerárquicas con versionado integrado, mientras los gestores documentales lo hacen sobre archivos independientes",
            "Los gestores documentales no permiten colaboración simultánea en entornos web"
        ],
        correctAnswer: 2,
        feedback: "Confluence organiza el contenido en páginas jerárquicas con versionado integrado, mientras los gestores documentales trabajan sobre archivos independientes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el estándar DICOM, ¿qué protocolo de red se emplea para la transmisión de imágenes médicas?",
        options: [
            "SOAP sobre HTTP",
            "TLS sobre TCP/IP con codificación Base64",
            "C-STORE sobre el protocolo DIMSE basado en TCP/IP",
            "MQTT con cifrado AES-256"
        ],
        correctAnswer: 2,
        feedback: "DICOM utiliza C-STORE sobre el protocolo DIMSE basado en TCP/IP para la transmisión de imágenes médicas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la metodología LEAN aplicada al desarrollo de software, ¿cuál de los siguientes conceptos describe mejor el objetivo de eliminar desperdicios ('waste')?",
        options: [
            "Minimizar la documentación del código fuente para reducir tiempos de desarrollo",
            "Evitar el desarrollo de características que no aporten valor real al usuario final",
            "Reducir la interacción con el cliente para evitar retrasos en la toma de decisiones",
            "Limitar la refactorización del código para reducir el número de iteraciones en el desarrollo"
        ],
        correctAnswer: 1,
        feedback: "En LEAN, eliminar desperdicios significa evitar el desarrollo de características que no aporten valor real al usuario final."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la evolución de la arquitectura de procesadores, ¿cuál de las siguientes técnicas ha sido clave para mejorar el rendimiento sin aumentar el consumo energético de manera proporcional?",
        options: [
            "Implementación de instrucciones SIMD (Single Instruction Multiple Data)",
            "Aumento de la frecuencia del reloj en cada generación de procesadores",
            "Uso de registros de propósito general con mayor tamaño en bits",
            "Eliminación del soporte para ejecución especulativa para reducir consumo"
        ],
        correctAnswer: 0,
        feedback: "Las instrucciones SIMD permiten mejorar el rendimiento sin aumentar proporcionalmente el consumo energético."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según MAGERIT, ¿cuál es la diferencia clave entre un análisis de impacto y un análisis de riesgos en la gestión de seguridad?",
        options: [
            "El análisis de impacto se centra en las consecuencias de una amenaza, mientras que el análisis de riesgos considera tanto la probabilidad como el impacto",
            "El análisis de impacto sólo evalúa daños económicos, mientras que el análisis de riesgos considera factores técnicos y organizativos",
            "El análisis de riesgos se aplica únicamente a sistemas informáticos, mientras que el análisis de impacto se enfoca en la continuidad del negocio",
            "El análisis de impacto es opcional en MAGERIT, mientras que el análisis de riesgos es obligatorio"
        ],
        correctAnswer: 0,
        feedback: "El análisis de impacto se centra en las consecuencias de una amenaza, mientras que el análisis de riesgos considera tanto probabilidad como impacto."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la principal diferencia entre técnicas descriptivas y predictivas en Inteligencia Artificial?",
        options: [
            "Las técnicas descriptivas generan modelos supervisados, mientras que las predictivas sólo utilizan datos sin etiquetar",
            "Las técnicas predictivas identifican patrones sin necesidad de variables objetivo",
            "Las técnicas descriptivas buscan entender estructuras y relaciones en los datos, mientras que las predictivas hacen estimaciones sobre datos futuros",
            "Las técnicas descriptivas sólo se aplican en bases de datos estructuradas"
        ],
        correctAnswer: 2,
        feedback: "Las técnicas descriptivas buscan entender estructuras y relaciones en los datos, mientras que las predictivas hacen estimaciones sobre datos futuros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Esquema Nacional de Seguridad (ENS), ¿cuál es la principal diferencia entre las medidas de seguridad de nivel ALTO y nivel MEDIO?",
        options: [
            "Las medidas de seguridad de nivel ALTO requieren la implementación obligatoria de un SOC",
            "En el nivel ALTO, se exige una auditoría de seguridad con una periodicidad máxima de 1 año, mientras que en el nivel MEDIO es cada 2 años",
            "Las organizaciones con nivel MEDIO no están obligadas a implementar planes de continuidad del servicio",
            "El nivel MEDIO permite el uso de contraseñas sin autenticación multifactor"
        ],
        correctAnswer: 1,
        feedback: "En el nivel ALTO, se exige una auditoría de seguridad con periodicidad máxima de 1 año, mientras que en el nivel MEDIO es cada 2 años."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el marco del Reglamento eIDAS2, ¿cuál de los siguientes elementos es obligatorio para los monederos de identidad digital (EUID Wallets)?",
        options: [
            "Almacenamiento de datos biométricos en una base de datos centralizada",
            "Posibilidad de que los ciudadanos gestionen qué atributos de su identidad comparten con terceros",
            "Uso exclusivo para autenticación en servicios gubernamentales",
            "Integración con sistemas de firma electrónica exclusivamente en formato PAdES"
        ],
        correctAnswer: 1,
        feedback: "eIDAS2 exige que los ciudadanos puedan gestionar qué atributos de su identidad comparten con terceros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la jerarquía de memoria de un sistema informático, ¿qué efecto puede tener la inclusión de una caché de nivel L3 en el rendimiento de la CPU cuando ya existen cachés L1 y L2?",
        options: [
            "Disminuye el tiempo medio de acceso a la memoria en todas las cargas de trabajo",
            "Sólo mejora el rendimiento en aplicaciones que hacen uso intensivo de cálculos en coma flotante",
            "Actúa como un buffer de alta capacidad para reducir la tasa de fallos en la memoria RAM",
            "No tiene impacto significativo en el rendimiento"
        ],
        correctAnswer: 0,
        feedback: "La caché L3 disminuye el tiempo medio de acceso a la memoria en la mayoría de las cargas de trabajo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un entorno cliente-servidor, una de las características principales es:",
        options: [
            "No diferenciar capas ni funciones dentro de la arquitectura",
            "Ejecutar todos los procesos y la lógica de negocio en el cliente",
            "No existir comunicación en red: todo ocurre en un único equipo físico",
            "El cliente solicita servicios y el servidor los provee, separando la capa de presentación de la lógica y datos"
        ],
        correctAnswer: 3,
        feedback: "En cliente-servidor, el cliente solicita servicios y el servidor los provee, separando la capa de presentación de la lógica y datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La iniciativa de 'supresión de certificados en soporte papel' en la administración pública busca:",
        options: [
            "Obligar a los ciudadanos a presentar más documentos en ventanilla",
            "Evitar la necesidad de aportar copias en papel de ciertos certificados, facilitando que las administraciones consulten o intercambien los datos electrónicamente",
            "Imponer el uso de fax en todos los trámites oficiales",
            "Eliminar cualquier tipo de registro administrativo digital"
        ],
        correctAnswer: 1,
        feedback: "La supresión de certificados en papel busca evitar la necesidad de aportar copias en papel, facilitando el intercambio electrónico de datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La clave primaria en una tabla relacional se caracteriza por:",
        options: [
            "Ser un atributo o grupo de atributos que identifica de forma única cada fila y no admite valores repetidos ni nulos",
            "Ser siempre la primera columna definida en la tabla",
            "Permitir valores duplicados si los demás campos coinciden",
            "Ser un atributo opcional que puede repetirse sin inconvenientes"
        ],
        correctAnswer: 0,
        feedback: "La clave primaria identifica de forma única cada fila y no admite valores repetidos ni nulos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué es el desarrollo low-code?",
        options: [
            "Un método para desarrollar software exclusivamente en sistemas mainframe",
            "Un procedimiento que se basa en reescribir cada línea de código a bajo nivel",
            "Un modelo de desarrollo de software que emplea principalmente lenguajes de máquina",
            "Un modelo de desarrollo de software que permite crear aplicaciones con mínimas líneas de código y con herramientas gráficas"
        ],
        correctAnswer: 3,
        feedback: "El desarrollo low-code permite crear aplicaciones con mínimas líneas de código y con herramientas gráficas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El protocolo HTTPS consiste en:",
        options: [
            "Un método para compartir archivos en redes locales sin autenticación",
            "El uso de HTTP sin ningún tipo de cifrado",
            "Un protocolo P2P diseñado para transmisión de vídeo en tiempo real",
            "Ejecutar HTTP sobre una conexión cifrada con SSL/TLS"
        ],
        correctAnswer: 3,
        feedback: "HTTPS es HTTP ejecutado sobre una conexión cifrada con SSL/TLS."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Al diseñar un sistema de información con altos requisitos de seguridad, ¿cuál de las siguientes buenas prácticas suele recomendarse?",
        options: [
            "No emplear cifrado para agilizar el tráfico de datos",
            "Implementar mecanismos de autenticación y autorización, además de cifrar los datos",
            "Permitir conexiones anónimas sin restricciones para facilitar la puesta en marcha",
            "Todas las respuestas anteriores son correctas"
        ],
        correctAnswer: 1,
        feedback: "Se recomienda implementar mecanismos de autenticación y autorización, además de cifrar los datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la construcción de sistemas de información, el uso de repositorios Git facilita:",
        options: [
            "Eliminar la necesidad de pruebas unitarias y de integración",
            "Que sólo un desarrollador trabaje en el proyecto mientras el resto espera",
            "Ignorar por completo la gestión de la configuración",
            "El seguimiento detallado de cambios, la colaboración simultánea entre varios desarrolladores y la posibilidad de revertir o fusionar versiones"
        ],
        correctAnswer: 3,
        feedback: "Git facilita el seguimiento detallado de cambios, la colaboración simultánea entre varios desarrolladores y la posibilidad de revertir o fusionar versiones."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La usabilidad en el diseño web se relaciona directamente con:",
        options: [
            "La facilidad de aprendizaje, eficacia, eficiencia y satisfacción que experimentan los usuarios al interactuar con una interfaz",
            "La estética puramente gráfica sin tener en cuenta la experiencia del usuario",
            "La capacidad del sitio para bloquear accesos no autorizados",
            "El volumen de datos transmitidos por segundo"
        ],
        correctAnswer: 0,
        feedback: "La usabilidad se relaciona con la facilidad de aprendizaje, eficacia, eficiencia y satisfacción del usuario."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Una de las características más destacadas al adoptar software libre en la administración pública es:",
        options: [
            "No poder acceder nunca al código fuente ni auditar su funcionamiento interno",
            "La dependencia total de un único proveedor que controle la evolución del software",
            "La reducción de costes de licenciamiento y la independencia de proveedores, permitiendo adaptar el software a necesidades específicas",
            "La imposibilidad de realizar desarrollos propios o mejoras a medida"
        ],
        correctAnswer: 2,
        feedback: "El software libre permite reducir costes de licenciamiento y la independencia de proveedores, adaptando el software a necesidades específicas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Un inconveniente que con frecuencia se menciona sobre el software libre y de código abierto es:",
        options: [
            "La posible falta de soporte oficial o inmediato",
            "La ausencia absoluta de documentación en cada proyecto",
            "La licencia siempre es privativa, impidiendo su redistribución",
            "La imposibilidad de modificar libremente el código fuente en caso de bugs"
        ],
        correctAnswer: 0,
        feedback: "Un inconveniente del software libre es la posible falta de soporte oficial o inmediato."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Un bus de interoperabilidad o ESB:",
        options: [
            "Es un canal físico para transferir datos mediante discos externos",
            "Orquesta y media la comunicación entre servicios, facilitando la transformación de mensajes, enrutamiento y monitorización",
            "Limita la escalabilidad del sistema al obligar a usar un único protocolo de comunicación",
            "Sólo aplica en arquitecturas de dos niveles"
        ],
        correctAnswer: 1,
        feedback: "Un ESB orquesta y media la comunicación entre servicios, facilitando la transformación de mensajes, enrutamiento y monitorización."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La normalización en el diseño de bases de datos persigue principalmente:",
        options: [
            "Organizar toda la información en una única tabla para facilitar su consulta",
            "Repetir los mismos datos en múltiples ubicaciones",
            "Establecer como norma que todos los datos deben almacenarse únicamente en texto",
            "Estructurar los datos en distintas tablas normalizadas para minimizar la redundancia y evitar inconsistencias en su almacenamiento"
        ],
        correctAnswer: 3,
        feedback: "La normalización busca estructurar los datos en distintas tablas para minimizar la redundancia y evitar inconsistencias."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la elaboración de prototipos, una de las ventajas principales es:",
        options: [
            "La generación de un producto final sin requerir pruebas posteriores",
            "La ausencia de retroalimentación por parte de los usuarios",
            "La rápida obtención de versiones preliminares que ayudan a concretar requisitos",
            "La eliminación total de los riesgos del proyecto"
        ],
        correctAnswer: 2,
        feedback: "La elaboración de prototipos permite obtener rápidamente versiones preliminares que ayudan a concretar requisitos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la generación automática de código, una de las ventajas principales es:",
        options: [
            "La imposibilidad de adaptar la lógica de negocio a necesidades específicas",
            "Obligar a que todo el código sea monolítico sin posibilidad de modularidad",
            "Aumentar la complejidad del sistema y la curva de aprendizaje del equipo",
            "Disminuir los errores humanos al automatizar la creación de partes repetitivas o plantillas estándar del código"
        ],
        correctAnswer: 3,
        feedback: "La generación automática de código disminuye los errores humanos al automatizar la creación de partes repetitivas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En Python, para la siguiente definición de bucle for i in [10]: ¿cuántas veces se ejecutará el bucle?",
        options: ["10", "2", "1", "0"],
        correctAnswer: 2,
        feedback: "El bucle se ejecutará 1 vez, ya que itera sobre una lista con un solo elemento (10)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes características distingue principalmente a HTTP/2 de HTTP/1.1?",
        options: [
            "El uso de cabeceras en texto plano para cada petición y respuesta",
            "El requerimiento de utilizar siempre un protocolo UDP en vez de TCP",
            "La multiplexación de varias peticiones y respuestas en una única conexión",
            "El abandono completo de TLS/SSL como método de cifrado"
        ],
        correctAnswer: 2,
        feedback: "HTTP/2 introduce la multiplexación de varias peticiones y respuestas en una única conexión."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito del modelado de dominio, un modelo Entidad–Relación se utiliza para:",
        options: [
            "Definir la estructura de datos de forma conceptual",
            "Representar gráficamente los procesos de negocio y sus flujos de actividad",
            "Describir la interacción temporal entre objetos del sistema",
            "Identificar los requerimientos no funcionales del sistema"
        ],
        correctAnswer: 0,
        feedback: "El modelo Entidad-Relación se utiliza para definir la estructura de datos de forma conceptual."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Una característica de los ficheros indexados es que:",
        options: [
            "Se utilizan para compartir información en redes P2P",
            "Almacenan los datos de forma secuencial e incorporan un índice auxiliar que permite localizar registros rápidamente",
            "Su uso principal se orienta al almacenamiento estructurado de datos exclusivamente en formatos como JSON",
            "No permiten realizar operaciones de inserción o eliminación de registros"
        ],
        correctAnswer: 1,
        feedback: "Los ficheros indexados almacenan los datos de forma secuencial e incorporan un índice auxiliar para localizar registros rápidamente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el catálogo de componentes del Servicio Andaluz de Salud, ¿cuál es el criterio principal que define la estructura del nombre de estos componentes?",
        options: [
            "Se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), seguido de la descripción del componente",
            "Se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), en el que la parte final del nombre está compuesta únicamente por la numeración de la versión",
            "Se define de forma aleatoria por el equipo que desarrolla el componente",
            "Se asigna un identificador automático e incremental para cada nuevo componente"
        ],
        correctAnswer: 0,
        feedback: "La estructura del nombre se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), seguido de la descripción del componente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Dentro de las atribuciones de la persona titular de la Dirección General de Sistemas de Información y Comunicaciones según el Decreto 198/2024, de 3 de septiembre, por el que se establece la estructura orgánica de la Consejería de Salud y Consumo, ¿qué busca asegurar en cuanto al uso de tecnologías?",
        options: [
            "La retirada de aplicaciones sin una planificación de su transición",
            "Un uso eficiente y sostenible de los recursos tecnológicos",
            "La implantación de múltiples herramientas para una misma función",
            "Ninguna de las respuestas es correcta"
        ],
        correctAnswer: 1,
        feedback: "La Dirección General de Sistemas de Información y Comunicaciones busca asegurar un uso eficiente y sostenible de los recursos tecnológicos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Base Poblacional de Salud (BPS) del Sistema Sanitario Público de Andalucía, la información acerca del uso de recursos sanitarios se centra en:",
        options: [
            "Mostrar los datos administrativo-clínicos en base al CMBD hospitalario y la Historia Clínica Digital (Diraya)",
            "Mostrar las consultas de AP y AE, las urgencias, los distintos procesos de atención hospitalaria y el consumo de farmacia",
            "Mostrar la información demográfica recogida a través de su integración con BDU",
            "Ninguna de las respuestas es correcta"
        ],
        correctAnswer: 1,
        feedback: "La BPS muestra las consultas de AP y AE, urgencias, procesos de atención hospitalaria y consumo de farmacia."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes metodologías se utilizan para abordar la gestión de cambios en las organizaciones?",
        options: ["Modelo de Kurt Lewin", "Modelo de Kotter", "ADKAR (Prosic) incluido en HCMBOK", "Todas las respuestas son correctas"],
        correctAnswer: 3,
        feedback: "Todos los modelos mencionados (Kurt Lewin, Kotter y ADKAR) se utilizan para abordar la gestión de cambios en las organizaciones."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En ITIL v4 se definen una serie de prácticas, entre las que se encuentran las de gestión general. ¿Cuál de las siguientes opciones es una práctica de gestión general?",
        options: ["Gestión del talento y personal", "Análisis de negocio", "Gestión de catálogo de servicios de TI", "Gestión de diseño y transición"],
        correctAnswer: 2,
        feedback: "La gestión de catálogo de servicios de TI es una práctica de gestión general en ITIL v4."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el Modelo Corporativo Marco de Implantaciones (MCMI) del Servicio Andaluz de Salud, ¿cuál de las siguientes actividades se realiza en la fase de 'Reingeniería de procesos'?",
        options: [
            "[ACT-RP-FUNC-5] Verificar estado inicial",
            "[ACT-RP-FUNC-1] Definir impacto de la implantación",
            "[ACT-RP-FUNC-8] Definir Plan de formación",
            "[ACT-RP-SIST-3] Catalogar los sistemas de información"
        ],
        correctAnswer: 1,
        feedback: "En la fase de Reingeniería de procesos se realiza la actividad [ACT-RP-FUNC-1] Definir impacto de la implantación."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes es un sistema de información del ámbito de recursos humanos del Servicio Andaluz de Salud?",
        options: ["Código Numérico Profesional", "FARO, herramienta de gestión de recursos humanos", "Red de datos de profesionales", "Todas las respuestas son correctas"],
        correctAnswer: 3,
        feedback: "Todos los sistemas mencionados son sistemas de información del ámbito de recursos humanos del SAS."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El artículo 22 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, indica el umbral de los contratos de servicios sujetos a una regulación armonizada cuando los contratos hayan de adjudicarse por entidades del sector público distintas a la Administración General del Estado. ¿Cuál es ese umbral?",
        options: ["143.000 euros", "221.000 euros", "750.000 euros", "Ninguna de las respuestas es correcta"],
        correctAnswer: 0,
        feedback: "El umbral para contratos de servicios sujetos a regulación armonizada es de 143.000 euros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "AviSAS es el sistema de información de referencia en el Servicio Andaluz de Salud para la notificación de eventos de distinta naturaleza hacia sus usuarios a través de diversos canales. ¿Cuál de los siguientes NO ES un canal actualmente disponible en AviSAS para la comunicación con los ciudadanos?",
        options: ["Correo electrónico", "Correo postal", "Notificación push en la App Salud Andalucía", "Mensaje SMS"],
        correctAnswer: 1,
        feedback: "El correo postal NO es un canal actualmente disponible en AviSAS para la comunicación con los ciudadanos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un diagrama de PERT, ¿a qué tipo de holgura corresponde el tiempo suplementario para la ejecución de una actividad si las precedentes terminaran lo más tarde posible y las posteriores lo antes posible?",
        options: ["Holgura libre", "Holgura total", "Holgura independiente", "Holgura condicional"],
        correctAnswer: 2,
        feedback: "La holgura independiente es el tiempo suplementario para una actividad si las precedentes terminan lo más tarde posible y las posteriores lo antes posible."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito de la explotación de datos, ¿qué es un 'Data Fabric'?",
        options: [
            "Una arquitectura de servicios y funcionalidades que contribuye a procesar mejor los volúmenes de datos procedentes de multitud de fuentes con la capacidad de agruparlos bajo un sistema de administración",
            "Un repositorio de almacenamiento centralizado que contiene gran cantidad de datos en bruto",
            "Una base de datos corporativa para la integración y depuración de información procedente de múltiples fuentes",
            "Un subconjunto de los datos guardados en un Data Warehouse"
        ],
        correctAnswer: 0,
        feedback: "Data Fabric es una arquitectura de servicios que procesa volúmenes de datos de múltiples fuentes bajo un sistema de administración."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Tras realizar el análisis de la situación actual de la organización, la matriz CAME permite definir estrategias en función éste. ¿Cuál de las siguientes opciones corresponde de manera directa a una de las estrategias de la matriz CAME?",
        options: [
            "Corregir las debilidades detectadas en el análisis",
            "Asegurar que se han identificado los puntos de mejora de la organización",
            "Minimizar la desviación de costes asociados a la ejecución de los proyectos estratégicos",
            "Elaborar un conjunto de lecciones aprendidas que favorezcan la mejora continua"
        ],
        correctAnswer: 0,
        feedback: "La matriz CAME incluye la estrategia de 'Corregir las debilidades detectadas en el análisis'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto del procesamiento analítico en línea (OLAP), se distinguen diferentes tipos de sistemas según su arquitectura y modo de procesamiento. ¿Cuál de las siguientes opciones representa correctamente una clasificación de los sistemas OLAP?",
        options: ["MOLAP, EOLAP y COLAP", "MOLAP, ZOLAP y RTOLAP", "MOLAP, ROLAP y RTOLAP", "EOLAP, NOLAP, ZOLAP y OLAP"],
        correctAnswer: 2,
        feedback: "Los sistemas OLAP se clasifican en MOLAP, ROLAP y RTOLAP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En COBIT 2019, ¿cuál de las siguientes opciones representa un principio del sistema de gobierno?",
        options: [
            "Basado en un modelo conceptual",
            "Alineado con los estándares más relevantes",
            "Abierto y flexible, permitiendo la adición de nuevo contenido y abordando nuevos problemas de manera flexible",
            "Adaptarse a las necesidades de la empresa"
        ],
        correctAnswer: 3,
        feedback: "COBIT 2019 establece como principio 'Adaptarse a las necesidades de la empresa'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué aspecto forma parte de la 'fase de arranque, sub-fase 5.4' según el Modelo Corporativo Marco de Implantaciones (MCMI)?",
        options: [
            "Realizar copias de seguridad de los sistemas destino",
            "Configurar el sistema con posterioridad al arranque",
            "Ejecutar el plan de pruebas de aceptación del sistema",
            "Preparar las sesiones de transferencia a N3"
        ],
        correctAnswer: 0,
        feedback: "En la sub-fase 5.4 de arranque se realizan copias de seguridad de los sistemas destino."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el Modelo Corporativo Marco de Implantaciones (MCMI) del Servicio Andaluz de Salud se recogen un conjunto de entregables para cada área de conocimiento. ¿Cuál de los siguientes NO ES un entregable del MCMI?",
        options: [
            "[FORM02] Encuesta de satisfacción",
            "[INTE05] Plan de pruebas técnicas de las integraciones",
            "[GEST04] Registro de riesgos",
            "[MIGR01] Catálogo de reglas de negocio"
        ],
        correctAnswer: 3,
        feedback: "[MIGR01] Catálogo de reglas de negocio NO es un entregable del MCMI."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El portal 'E-atención al profesional' y la App 'mGerhonte' son herramientas diseñadas para los profesionales del SAS. Sin embargo, en la actualidad no ofrecen exactamente los mismos servicios. ¿Cuál de las siguientes funcionalidades está disponible sólo en una de las aplicaciones y debería implementarse en ambas para garantizar una experiencia omnicanal?",
        options: [
            "Consulta y descarga de nóminas",
            "Informe CRP, con el detalle del abono del Complemento al Rendimiento Profesional",
            "Curriculum Digital, espacio para completar la información del profesional",
            "Modificación de cuenta bancaria"
        ],
        correctAnswer: 2,
        feedback: "El Curriculum Digital está disponible sólo en una de las aplicaciones y debería implementarse en ambas para garantizar una experiencia omnicanal."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 39 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, es causa de nulidad de derecho administrativo:",
        options: [
            "La insuficiencia de crédito en el período vigente",
            "La falta de publicación del anuncio de licitación en el medio de publicidad en que sea preceptivo",
            "El incumplimiento leve de normas de derecho de la Unión Europea en materia de contratación pública",
            "La observancia por parte del órgano de contratación del plazo para la formalización del contrato"
        ],
        correctAnswer: 1,
        feedback: "La falta de publicación del anuncio de licitación en el medio de publicidad preceptivo es causa de nulidad de derecho administrativo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales, en relación con el derecho de acceso, ¿en qué casos un responsable del tratamiento podrá limitar el ejercicio del derecho de acceso por parte del interesado?",
        options: [
            "Cuando el interesado no haya justificado suficientemente su solicitud",
            "Cuando el acceso implique un esfuerzo desproporcionado para el responsable del tratamiento",
            "Cuando el acceso pueda afectar negativamente a los derechos y libertades de terceros",
            "Cuando el interesado haya ejercido previamente el derecho de acceso en el mismo año en cualquier caso"
        ],
        correctAnswer: 2,
        feedback: "El responsable del tratamiento puede limitar el acceso cuando pueda afectar negativamente a los derechos y libertades de terceros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, ¿cuál de los siguientes es un principio que el sector público deberá respetar según su Artículo 2?",
        options: ["Flexibilidad", "Accesibilidad", "Portabilidad", "Disponibilidad"],
        correctAnswer: 1,
        feedback: "El artículo 2 del RD 203/2021 establece la accesibilidad como uno de los principios que debe respetar el sector público."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, en relación con la prórroga de los contratos públicos:",
        options: [
            "La prórroga debe ser aprobada por la mesa de contratación y ratificada por el empresario",
            "La prórroga será obligatoria para el empresario, siempre que su preaviso se produzca al menos con 1 mes de antelación",
            "En determinadas circunstancias, cuando al vencimiento de un contrato no se hubiera formalizado el nuevo, se podrá prorrogar el originario un máximo de 12 meses",
            "Pueden preverse una o varias prórrogas siempre que las características del contrato permanezcan inalterables"
        ],
        correctAnswer: 3,
        feedback: "La Ley 9/2017 permite prever una o varias prórrogas siempre que las características del contrato permanezcan inalterables."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El sistema LetSAS está diseñado para que se pueda administrar y prestar soporte in-situ con diferentes herramientas. ¿Cuál de las siguientes combinaciones de herramientas es correcta para desempeñar dichas tareas de administración?",
        options: [
            "Panel Web local, telnet, ssh al puerto 443 y Altiris",
            "Terminal de Consola, Panel Web local y Altiris",
            "Telnet al puerto 443, Panel Web local y Altiris",
            "AyudaDigital y Altiris"
        ],
        correctAnswer: 1,
        feedback: "La combinación correcta para administrar LetSAS es Terminal de Consola, Panel Web local y Altiris."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el centro de servicios al usuario de informática del Servicio Andaluz de Salud, la aplicación que utilizan los usuarios para registrar sus peticiones es conocida como 'ayudaDIGITAL'. En relación a la versión de escritorio de dicha aplicación, ¿cuál de las siguientes afirmaciones NO es correcta?",
        options: [
            "Te avisará cuando se aproxime la fecha de renovación de la contraseña de tu usuario DMSAS",
            "Te ayuda a convertir teléfonos de la Red Corporativa",
            "Te enviará notificaciones con información de interés",
            "Te permitirá cambiar la contraseña de DMSAS cuando esté a punto de caducar"
        ],
        correctAnswer: 1,
        feedback: "La versión de escritorio de ayudaDIGITAL NO ayuda a convertir teléfonos de la Red Corporativa."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Con cuál de los siguientes protocolos opera el comando de windows 'tracert -d 10.20.30.40'?",
        options: ["TTLvD", "DNS", "UDP", "ICMP"],
        correctAnswer: 3,
        feedback: "El comando tracert opera con el protocolo ICMP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes afirmaciones describe mejor el propósito de una auditoría informática?",
        options: [
            "Evaluar la eficiencia de los procesos de negocio de una organización",
            "Revisar y mejorar la experiencia del usuario en aplicaciones de software",
            "Examinar y evaluar la seguridad, integridad y eficiencia de los sistemas de información de una organización",
            "Aconsejar el desarrollo de nuevas aplicaciones de software para mejorar la productividad"
        ],
        correctAnswer: 2,
        feedback: "La auditoría informática examina y evalúa la seguridad, integridad y eficiencia de los sistemas de información."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito del diseño de un centro de proceso de datos, ¿cuál de las siguientes definiciones correspondería al concepto de RTO?",
        options: [
            "Cálculo de cuánta pérdida de datos puede experimentar una compañía",
            "Tiempo que una aplicación puede estar inactiva sin causar un daño significativo y tiempo dedicado a restaurarla",
            "Resistencia al fuego que deben tener las puertas y muros",
            "Normativa en cuanto a la retención de oxígeno que deben cumplir los gases propelentes"
        ],
        correctAnswer: 1,
        feedback: "RTO (Recovery Time Objective) es el tiempo que una aplicación puede estar inactiva y el tiempo dedicado a restaurarla."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación al modelo de referencia de interconexión de sistemas abiertos (OSI), ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La capa 8, o de usuario, define las funciones que el sistema de comunicación le ofrece al usuario",
            "La arquitectura TCP/IP no se adapta exactamente al modelo OSI, mezclando algunas de las capas de OSI en su definición",
            "La capa 1, o física, garantiza la comunicación extremo a extremo",
            "Todas las capas del modelo OSI disponen de funciones de códigos de redundancia"
        ],
        correctAnswer: 1,
        feedback: "TCP/IP no se adapta exactamente al modelo OSI, mezclando algunas de las capas de OSI en su definición."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación al modelo de referencia de interconexión de sistemas abiertos (OSI), ¿cuál de las siguientes afirmaciones correspondería a las funciones de la capa número 3 o 'capa de red'?",
        options: [
            "Gestiona el direccionamiento lógico y el enrutamiento de datos entre diferentes redes",
            "Garantiza la transferencia de datos libre de errores entre dos dispositivos directamente conectados",
            "Se encarga de la traducción de los datos para asegurar su correcta interpretación",
            "Se encarga de la transmisión a través del medio físico"
        ],
        correctAnswer: 0,
        feedback: "La capa de red (Capa 3) gestiona el direccionamiento lógico y el enrutamiento de datos entre diferentes redes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación a la arquitectura TCP/IP y el servicio de resolución de nombres DNS, el puerto definido en el estándar para la transferencia de zonas DNS es:",
        options: ["El puerto 53", "El puerto 54", "El puerto 443", "El puerto 1521"],
        correctAnswer: 0,
        feedback: "El puerto estándar para la transferencia de zonas DNS es el puerto 53."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el ámbito de la auditoría informática, ¿qué auditoría evalúa la seguridad de la infraestructura tecnológica?",
        options: ["Auditoría de desarrollo de software", "Auditoría de cumplimiento", "Auditoría de procesos", "Auditoría de seguridad"],
        correctAnswer: 3,
        feedback: "La auditoría de seguridad evalúa la seguridad de la infraestructura tecnológica."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la característica principal de un ataque DDoS?",
        options: [
            "El atacante utiliza vulnerabilidades del sistema final para acceder de forma no detectada",
            "Es como un ataque DoS, pero coordinando infinidad de equipos para que realicen el ataque a la vez",
            "El atacante utiliza señuelos para engañar al usuario e infectar el sistema atacado",
            "Rapta el ancho de banda del sistema atacado para descifrar el tráfico"
        ],
        correctAnswer: 1,
        feedback: "Un ataque DDoS coordina múltiples equipos para realizar un ataque DoS a la vez."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación a un sistema operativo linux y con respecto a la gestión de usuarios y el concepto UID, ¿cuál de estas afirmaciones es correcta?",
        options: [
            "Dos usuarios de linux nunca pueden tener el mismo UID",
            "El UID identifica a qué grupo de ACLs pertenece un login concreto",
            "El UID es el código interno que usa el sistema operativo para saber a quién pertenecen determinados objetos",
            "El comando chown fija el UID de un proceso en memoria"
        ],
        correctAnswer: 2,
        feedback: "El UID es el código interno que usa el sistema operativo para saber a quién pertenecen determinados objetos (ficheros, procesos, dispositivos, etc.)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la Red Corporativa de Telecomunicaciones de la Junta de Andalucía (RCJA) y la Red SARA, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La Red SARA es una infraestructura de interconexión que permite a las diferentes administraciones públicas españolas compartir información y servicios de manera segura, por lo que tiene conexiones específicas con la Red RCJA",
            "La Red RCJA está incluida en la licitación de la Red SARA para garantizar la conectividad con la misma",
            "La Red SARA es la red de emergencias usada por 061, por lo que tiene conexión directa con la Red RCJA",
            "Son dos redes de entidades públicas que no tienen ningún punto en común"
        ],
        correctAnswer: 0,
        feedback: "La Red SARA permite compartir información entre administraciones públicas y tiene conexiones específicas con la Red RCJA."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema operativo Linux, ¿cuál de las siguientes expresiones sería correcta, en relación con las funciones del comando sudo?",
        options: [
            "El comando sudo fue creado originalmente en el año 1995",
            "La ejecución de un comando mediante sudo necesita introducir siempre la password del usuario que lanza el comando",
            "La ejecución de un comando mediante sudo necesita introducir siempre la password del usuario con el que se ejecutará el comando",
            "Permite a un usuario ejecutar programas como usuario root sin conocer la clave de este y sin introducir la clave del primero"
        ],
        correctAnswer: 3,
        feedback: "sudo permite a un usuario ejecutar programas como usuario root sin conocer la clave de este y sin introducir la clave del primero."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con las técnicas de almacenamiento basado en objetos y sistemas de redundancia en el almacenamiento, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "El almacenamiento de objetos tipo Amazon S3 permite almacenar ficheros en un cluster de servidores, la unidad mínima de consumo se conoce como 'locker'",
            "Amazon S3 es un estándar de almacenamiento de ficheros que se ha liberado para poder usarlo dentro del tipo de licencia GPL",
            "Amazon S3 es un servicio que sólo puede consumirse en entornos cloud de Amazon",
            "Amazon S3 permite almacenar elementos de forma abstracta, desvinculando la estructura interna del almacenamiento del acceso al fichero"
        ],
        correctAnswer: 3,
        feedback: "El almacenamiento S3 permite almacenar elementos de forma abstracta, desvinculando la estructura interna del almacenamiento del acceso al fichero."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Para cuál de las siguientes aplicaciones de videoconferencia se usa de forma nativa el estándar H.323 para servicios multimedia sobre redes de paquetes?",
        options: ["Unify Circuit", "Microsoft Teams", "Zoom", "Ninguno de ellos usa H.323 de forma nativa"],
        correctAnswer: 3,
        feedback: "Ninguna de las aplicaciones mencionadas usa H.323 de forma nativa."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes opciones corresponde con un sistema de redundancia en el almacenamiento de datos?",
        options: ["Erasure Code", "RAID 0", "Almacenamiento S3", "Hyperconverged Data Resilience"],
        correctAnswer: 0,
        feedback: "Erasure Code es un sistema de redundancia en el almacenamiento de datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema operativo multiusuario con separación de memoria por usuario, sólo el sistema operativo y los procesos con privilegios especiales pueden acceder a la memoria de otros procesos. En este contexto y en referencia a un mensaje de error 'segmentation fault' arrojado por un sistema operativo, ¿cuál de estas afirmaciones es correcta?",
        options: [
            "Es una advertencia de que un proceso de usuario básico ha conseguido leer información de otro proceso con privilegios",
            "Es la forma de comunicar el error de ejecución 'null pointer exception' del lenguaje C",
            "El antivirus ha detectado que un proceso de malware está accediendo a segmentos del disco duro no permitidos",
            "Es el mensaje del sistema operativo al eliminar un proceso que está intentando acceder a zonas de memoria restringidas"
        ],
        correctAnswer: 3,
        feedback: "Un 'segmentation fault' es el mensaje del sistema operativo al eliminar un proceso que intenta acceder a zonas de memoria restringidas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes respuestas corresponde con una de las aplicaciones básicas del QoS en la red de datos del Servicio Andaluz de Salud?",
        options: [
            "Garantizar la calidad de los servicios VoIP",
            "Garantizar la redundancia de los enlaces WAN de RCJA v5",
            "Cualificar los paquetes para prevenir ataques IDS",
            "Cualificar los paquetes de servicio cuando se usa H.232 para videoconferencias"
        ],
        correctAnswer: 0,
        feedback: "QoS se aplica para garantizar la calidad de los servicios VoIP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito de los servicios de datos corporativos y en relación con las siglas ZTNA, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "ZTNA define un formato de cifrado WAN dentro de la Red Corporativa de la Junta de Andalucía",
            "ZTNA es el acrónimo para referenciar las Redes de Área Extensa Definidas por Software",
            "ZTNA permite un acceso seguro a las aplicaciones y recursos de una empresa mejorando la seguridad de las conexiones VPN",
            "ZTNA no está reconocido por el CCN como una forma de acceso segura"
        ],
        correctAnswer: 2,
        feedback: "ZTNA (Zero Trust Network Access) permite un acceso seguro a las aplicaciones y recursos mejorando la seguridad de las conexiones VPN."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la normativa reguladora del diseño e implementación de infraestructuras de red de área local (cableadas e inalámbricas) y enlaces inalámbricos en la Administración Pública de la Junta de Andalucía y el código de colores usado en los enlaces de RJ45 para el conexionado de cable UTP de par trenzado sin apantallar, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Define un único orden posible de disposición de los hilos",
            "Define dos órdenes posibles de disposición de los hilos",
            "Define tres órdenes posibles de disposición de los hilos",
            "No define un orden de disposición de los hilos"
        ],
        correctAnswer: 1,
        feedback: "La normativa define dos órdenes posibles de disposición de los hilos (T568A y T568B)."
    },

// ============================================================
// ==================== EXAMEN 2 - CASOS PRÁCTICOS ============
// ============================================================

// --- PREGUNTAS EXAMEN 2 (PROMOCIÓN INTERNA) - PRÁCTICO ---
    // ============================================================
// ==================== EXAMEN 2 ===============================
// ============================================================
// Técnico/a de Función Administrativa, Sistemas y Tecnología de la Información
// Promoción Interna 2025

// --- PREGUNTAS EXAMEN 2 (PROMOCIÓN INTERNA) - TEÓRICO ---
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Dentro del modelo de mejora continua PDCA, ¿en qué fase se recomienda implementar el plan a pequeña escala para recopilar datos?",
        options: ["Planificar", "Hacer", "Comprobar", "Actuar"],
        correctAnswer: 1,
        feedback: "En la fase 'Hacer' se implementa el plan a pequeña escala para recopilar datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué afirmación describe correctamente el uso del diagrama de Gantt?",
        options: [
            "Permite visualizar dependencias básicas entre tareas, pero no muestra caminos alternativos",
            "No permite la gestión de recursos, ya que solo muestra tareas y su duración",
            "Muestra la duración de cada tarea, pero no indica explícitamente cuáles son críticas, por lo que debe complementarse con CPM",
            "Su principal ventaja es que permite calcular con precisión la probabilidad de finalización del proyecto"
        ],
        correctAnswer: 2,
        feedback: "El diagrama de Gantt muestra la duración de cada tarea, pero no indica explícitamente cuáles son críticas, por lo que debe complementarse con CPM."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la planificación e instalación de un centro de proceso de datos (CPD), el concepto TIER es un tipo de indicación mundial usada frecuentemente para mencionar un CPD. En referencia a dicho concepto, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "El TIER indica la fiabilidad de un CPD asociado a cuatro niveles de disponibilidad definidos",
            "Es un concepto inventado por el 'Uptime Institute' para puntuar entre 0 y 99.999 la complejidad de los CPDs",
            "TIER Indica el Ratio de Eficiencia de Interacción Térmica y refleja la eficiencia energética",
            "TIER no es un concepto relacionado con la planificación e instalación de un centro de proceso de datos"
        ],
        correctAnswer: 0,
        feedback: "El TIER indica la fiabilidad de un CPD asociado a cuatro niveles de disponibilidad definidos (I a IV)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la hiperconvergencia y virtualización de servidores, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Es una técnica de virtualización de redes SAN que permite el uso de la misma cabina de discos por parte de múltiples servidores físicos",
            "Es una técnica de unificación de recursos de servidores que permite compartir toda la memoria de los mismos de forma unificada. Es una técnica también conocida como NUMA",
            "Es una técnica de unificación de recursos que simplifica la gestión y reduce el espacio físico, pero empeora la escalabilidad",
            "Es un sistema unificado, definido por software, que reúne todos los elementos hardware de un grupo de servidores de forma que se puedan administrar desde una misma consola"
        ],
        correctAnswer: 3,
        feedback: "La hiperconvergencia es un sistema unificado, definido por software, que reúne todos los elementos hardware de un grupo de servidores para administrarlos desde una misma consola."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En referencia a las redes de telecomunicaciones y los conceptos de ancho de banda y latencia, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La latencia y el ancho de banda son dos conceptos opuestos, de tal forma que a menor ancho de banda, mayor latencia y viceversa",
            "La latencia y el ancho de banda son dos conceptos distintos, de tal forma que el ancho de banda y la latencia no tienen una relación directa de causa y efecto entre ellos",
            "La latencia y el ancho de banda son dos conceptos similares, de tal forma que a menor ancho de banda, menor latencia y viceversa",
            "La latencia y el ancho de banda son dos conceptos separados, aunque generalmente a mayor ancho de banda mayor latencia"
        ],
        correctAnswer: 1,
        feedback: "La latencia y el ancho de banda son dos conceptos distintos, no tienen una relación directa de causa y efecto entre ellos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes protocolos sirve para la autenticación de una conexión Wifi WPA2 Empresarial?",
        options: ["PAP", "EAP-SSH", "RCM", "TSSL"],
        correctAnswer: 1,
        feedback: "EAP-SSH es uno de los protocolos utilizados para la autenticación en WPA2 Empresarial."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es el nombre con el que se conoce la red Wifi gratuita que ofrece la Junta de Andalucía en sus centros públicos?",
        options: ["Vuela", "RCJA Corporativo", "Invitado", "Eduroam"],
        correctAnswer: 0,
        feedback: "La red Wifi gratuita de la Junta de Andalucía se llama 'Vuela'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el intercambio electrónico de datos, XML se utiliza principalmente para:",
        options: [
            "Reemplazar todos los archivos PDF de un organismo, sin necesidad de transformaciones",
            "Almacenar datos binarios como imágenes sin posibilidad de lectura o análisis humano",
            "Definir transacciones bancarias cifradas sin esquema concreto",
            "Estructurar y describir datos de forma jerárquica y legible"
        ],
        correctAnswer: 3,
        feedback: "XML se utiliza para estructurar y describir datos de forma jerárquica y legible."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Real Decreto 4/2010, de 8 de enero por el que se regula el Esquema Nacional de Interoperabilidad (ENI) en el ámbito de la Administración Electrónica, ¿qué dimensión de las que se recogen a continuación NO ESTÁ recogida en el ENI?",
        options: [
            "Interoperabilidad organizativa para que las entidades colaboren para alcanzar sus logros mutuamente acordados",
            "Interoperabilidad semántica para que la información intercambiada pueda ser interpretable de forma automática y reutilizable",
            "Interoperabilidad en el tiempo para la conservación de la información en soporte electrónico",
            "Interoperabilidad funcional para la estandarización de los datos en los sistemas de información"
        ],
        correctAnswer: 3,
        feedback: "La 'Interoperabilidad funcional' NO está recogida en el ENI."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la principal ventaja del modelo Clinical Document Architecture (CDA) de HL7 frente a los mensajes de HL7 v2?",
        options: [
            "Permite almacenar información clínica en formato estructurado y legible por humanos",
            "Es más eficiente en la transmisión de datos en tiempo real",
            "No requiere terminologías estandarizadas como SNOMED CT o LOINC",
            "Sólo puede utilizarse en entornos hospitalarios y no en atención primaria"
        ],
        correctAnswer: 0,
        feedback: "CDA permite almacenar información clínica en formato estructurado y legible por humanos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes NO se considera un tipo elemental de datos en la mayoría de lenguajes de programación?",
        options: ["Integer", "Boolean", "List", "Char"],
        correctAnswer: 2,
        feedback: "List (lista) no es un tipo elemental de datos; es una estructura de datos compuesta."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el control de concurrencia de bases de datos, ¿qué técnica minimiza la posibilidad de un deadlock entre transacciones concurrentes?",
        options: [
            "Bloqueo exclusivo en todas las transacciones para evitar conflictos de acceso",
            "Uso de timestamp ordering para garantizar la ejecución de transacciones en un orden específico",
            "Implementación de una política de espera infinita para que las transacciones se ejecuten en cualquier orden",
            "Eliminación del sistema de logs de transacciones para acelerar la ejecución de consultas"
        ],
        correctAnswer: 1,
        feedback: "El uso de timestamp ordering minimiza la posibilidad de deadlock al garantizar la ejecución en un orden específico."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes medidas de seguridad del ENS está orientada a la gestión de incidentes de seguridad en las administraciones públicas?",
        options: [
            "Registro de eventos y trazabilidad",
            "Reducción de la superficie de exposición",
            "Autenticación reforzada de usuarios",
            "Auditoría interna de procesos administrativos"
        ],
        correctAnswer: 0,
        feedback: "El registro de eventos y trazabilidad es una medida orientada a la gestión de incidentes de seguridad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto de la seguridad en Internet, SSL y su sucesor TLS:",
        options: [
            "Proporcionan cifrado y autenticación a nivel de transporte, protegiendo la confidencialidad e integridad de los datos",
            "Eliminan la necesidad de tener un firewall o sistemas de detección de intrusos",
            "Se usan exclusivamente en la transferencia de archivos vía FTP",
            "Únicamente sirven para cifrar correo electrónico en IMAP"
        ],
        correctAnswer: 0,
        feedback: "SSL/TLS proporcionan cifrado y autenticación a nivel de transporte, protegiendo confidencialidad e integridad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es el portal destinado a facilitar el acceso remoto de los profesionales del Servicio Andaluz de Salud a aplicaciones corporativas desde fuera de la Red Corporativa de la Junta de Andalucía?",
        options: ["Diraya Ciudadanía", "Portal de Transparencia", "SARAC", "Portal de Farmacia"],
        correctAnswer: 2,
        feedback: "SARAC es el portal destinado a facilitar el acceso remoto de los profesionales del SAS a aplicaciones corporativas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes prácticas es fundamental para asegurar la precisión y la eficiencia en la gestión de activos informáticos en el Servicio Andaluz de Salud?",
        options: [
            "Realizar auditorías de seguridad periódicas en los sistemas de información",
            "Implementar un sistema de seguimiento y control de activos que incluya la identificación, el registro y el monitoreo continuo de todos los activos informáticos",
            "Facilitar la gestión de citas médicas y el acceso a información sanitaria mediante guías y tutoriales en línea",
            "Proporcionar soporte técnico en tiempo real para resolver problemas de hardware"
        ],
        correctAnswer: 1,
        feedback: "La gestión de activos requiere un sistema de seguimiento y control que incluya identificación, registro y monitoreo continuo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley 9/2017, de Contratos del Sector Público, ¿cuál de los siguientes contratos tiene la consideración de contrato menor?",
        options: [
            "Un contrato de servicios con un valor estimado de 35.000 euros",
            "Un contrato de suministros con un valor estimado de 17.500 euros",
            "Un contrato de obras con un valor estimado de 40.000 euros",
            "Un contrato de concesión de obras con un valor estimado de 40.000 euros"
        ],
        correctAnswer: 0,
        feedback: "Un contrato de servicios de 35.000 euros es un contrato menor según la Ley 9/2017 (límite 50.000€ para servicios)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "De acuerdo con la Ley 9/2017, de Contratos del Sector Público, ¿cuál de los siguientes principios debe regir la contratación del sector público?",
        options: [
            "Competencia desleal, publicidad limitada y discrecionalidad",
            "Confidencialidad, libre designación y beneficio económico",
            "Libertad de elección, contratación directa y urgencia",
            "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores"
        ],
        correctAnswer: 3,
        feedback: "La Ley 9/2017 establece como principios: libertad de acceso, publicidad, transparencia, no discriminación e igualdad de trato."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 1.1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, ¿qué se entiende por contrato oneroso?",
        options: [
            "Cuando el contratista obtenga algún tipo de beneficio económico, ya sea de forma directa o indirecta",
            "Cuando el contratista obtenga algún tipo de beneficio económico de forma directa",
            "Cuando la Administración Pública obtenga algún tipo de beneficio económico",
            "Ninguna de las anteriores"
        ],
        correctAnswer: 0,
        feedback: "El contrato oneroso es aquel en el que el contratista obtiene algún tipo de beneficio económico, directo o indirecto."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 14.2 de la Ley 39/2015, ¿qué sujetos de los siguientes están obligados a relacionarse a través de medios electrónicos con las Administraciones Públicas para la realización de cualquier trámite de un procedimiento administrativo?",
        options: [
            "Cualquier ciudadano mayor de edad",
            "Las personas físicas que presenten escritos en nombre propio",
            "Los empleados de las Administraciones Públicas para los trámites y actuaciones que realicen con ellas por razón de su condición de empleado público",
            "Sólo las empresas que contraten con la Administración"
        ],
        correctAnswer: 2,
        feedback: "El artículo 14.2 de la Ley 39/2015 establece que los empleados públicos están obligados a relacionarse electrónicamente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué técnica se utiliza en la gestión por procesos para mapear visualmente un flujo de trabajo?",
        options: ["Análisis PESTEL", "Diagrama de Ishikawa", "Mapeo de procesos (Business Process Mapping)", "Benchmarking"],
        correctAnswer: 2,
        feedback: "El mapeo de procesos (Business Process Mapping) se utiliza para representar visualmente un flujo de trabajo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la Estrategia de Salud Digital de Andalucía, ¿cuál de los siguientes objetivos se encuentra más alineado con la evolución de los sistemas de información asistenciales del SAS?",
        options: [
            "Unificación de sistemas departamentales locales de cada hospital",
            "Garantizar la trazabilidad del dato clínico mediante arquitectura de historia clínica distribuida",
            "Fortalecer los sistemas de información corporativos con enfoque en la satisfacción del personal facultativo",
            "Minimizar la visibilidad de datos clínicos para evitar problemas de confidencialidad y privacidad"
        ],
        correctAnswer: 1,
        feedback: "La Estrategia de Salud Digital de Andalucía busca garantizar la trazabilidad del dato clínico mediante historia clínica distribuida."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué principio de diseño de los servicios digitales del SAS permite que una persona representante pueda acceder a los datos de salud de menores o dependientes a su cargo a través de ClicSalud+?",
        options: ["Principio de custodia clínica", "Delegación asistencial familiar", "Representación legal verificada", "Acceso familiar delegado"],
        correctAnswer: 2,
        feedback: "El principio de 'Representación legal verificada' permite el acceso a los datos de salud de menores o dependientes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto del SAS, ¿qué es 'Ventana Abierta a la Familia' y cuál es su propósito principal?",
        options: [
            "Un programa de formación para profesionales sanitarios sobre atención familiar",
            "Una plataforma que permite a las familias acceder a información y servicios relacionados con la salud infantil y el seguimiento del desarrollo de los menores",
            "Un servicio de atención psicológica dirigido a familias con miembros en tratamiento médico prolongado",
            "Un sistema para consultas médicas familiares a distancia"
        ],
        correctAnswer: 1,
        feedback: "Ventana Abierta a la Familia es una plataforma para que las familias accedan a información sobre salud infantil."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el uso de hojas de cálculo avanzadas, ¿qué funcionalidad permite realizar análisis dinámico de grandes volúmenes de datos sin modificar los datos originales?",
        options: [
            "Formularios de entrada vinculados a macros",
            "Tablas dinámicas (o Pivot Tables)",
            "Referencias circulares para iteración automática",
            "Validación de datos mediante expresiones regulares"
        ],
        correctAnswer: 1,
        feedback: "Las tablas dinámicas (Pivot Tables) permiten analizar grandes volúmenes de datos sin modificar los datos originales."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema de gestión documental institucional, ¿qué estándar o norma debe tenerse en cuenta para asegurar la interoperabilidad con el archivo electrónico administrativo en España?",
        options: ["EI ENS", "La ISO/IEC 27001", "NTI de Política de Gestión de Documentos Electrónicos del ENI", "Ley 9/2017 de Contratos del Sector Público"],
        correctAnswer: 2,
        feedback: "La NTI de Política de Gestión de Documentos Electrónicos del ENI asegura la interoperabilidad con el archivo electrónico administrativo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué técnica permite mejorar la capacidad y flexibilidad de almacenamiento en un centro de datos sin necesidad de añadir más servidores físicos?",
        options: [
            "Implementación de almacenamiento en la nube con capacidad bajo demanda",
            "Configuración de RAID 0 para aumentar la velocidad de escritura sin redundancia",
            "Migración de todos los datos a unidades de estado sólido (SSD)",
            "Reducción de la resolución de archivos multimedia almacenados en el servidor"
        ],
        correctAnswer: 0,
        feedback: "El almacenamiento en la nube con capacidad bajo demanda permite mejorar la capacidad y flexibilidad sin añadir servidores físicos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un entorno donde se requiere alta disponibilidad, ¿qué factor es crítico para evitar interrupciones en el servicio?",
        options: [
            "Garantizar redundancia en los componentes críticos del sistema",
            "Utilizar servidores con la mayor cantidad posible de memoria RAM",
            "Evitar el uso de redes de respaldo para reducir costos de infraestructura",
            "Programar mantenimientos frecuentes que impliquen apagados completos del sistema"
        ],
        correctAnswer: 0,
        feedback: "La redundancia en componentes críticos es fundamental para garantizar la alta disponibilidad."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes afirmaciones sobre SNOMED CT es correcta?",
        options: [
            "Es un sistema de codificación exclusivamente diseñado para la facturación de procedimientos médicos",
            "Organiza los conceptos clínicos en una estructura jerárquica con relaciones definidas",
            "Sólo se usa en Estados Unidos, no cuenta con reconocimiento a nivel internacional",
            "No permite la interoperabilidad con otros estándares como HL7 FHIR"
        ],
        correctAnswer: 1,
        feedback: "SNOMED CT organiza los conceptos clínicos en una estructura jerárquica con relaciones definidas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la herramienta PILAR, utilizada para el análisis y gestión de riesgos en sistemas de información, ¿qué función principal desempeña el 'perfil de seguridad'?",
        options: [
            "Cuantifica el impacto financiero y reputacional de cada vulnerabilidad identificada",
            "Asigna responsables de seguridad dentro de la organización",
            "Genera un inventario detallado de todos los activos físicos de la infraestructura",
            "Define los umbrales de seguridad que deben cumplir los sistemas en función de su categorización"
        ],
        correctAnswer: 3,
        feedback: "El perfil de seguridad en PILAR define los umbrales de seguridad que deben cumplir los sistemas según su categorización."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En España, dentro de la Plataforma CL@VE, ¿cuál de los siguientes mecanismos proporciona el mayor nivel de seguridad en autenticación electrónica?",
        options: [
            "Cl@ve PIN, basado en un código de un sólo uso enviado por SMS",
            "Cl@ve Permanente, utilizando usuario y contraseña con verificación OTP",
            "DNIe y Certificado Electrónico, basado en criptografía de clave pública",
            "Acceso con credenciales delegadas verificadas"
        ],
        correctAnswer: 2,
        feedback: "El DNIe y Certificado Electrónico proporcionan el mayor nivel de seguridad al usar criptografía de clave pública."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto de los protocolos de transferencia de ficheros en Internet, ¿qué ventaja aporta el protocolo SFTP (SSH File Transfer Protocol) frente a FTP y FTPS?",
        options: [
            "SFTP requiere menos recursos computacionales que FTP al utilizar cifrado parcial",
            "SFTP cifra tanto el canal de control como el de datos mediante una única conexión segura",
            "SFTP permite la autenticación mediante certificados X.509, a diferencia de FTPS",
            "SFTP usa el mismo puerto y estructura de comandos que FTP, lo que facilita su compatibilidad"
        ],
        correctAnswer: 1,
        feedback: "SFTP cifra tanto el canal de control como el de datos mediante una única conexión segura."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es una diferencia clave entre un sistema de gestión documental tradicional (como Alfresco o SharePoint) y un espacio colaborativo tipo Confluence en cuanto al control de versiones y estructura del contenido?",
        options: [
            "Confluence almacena documentos sin posibilidad de control de versiones en archivos independientes",
            "Los gestores documentales tradicionales ofrecen versiones automáticas sólo en archivos PDF",
            "Confluence organiza el contenido en páginas jerárquicas con versionado integrado, mientras los gestores documentales lo hacen sobre archivos independientes",
            "Los gestores documentales no permiten colaboración simultánea en entornos web"
        ],
        correctAnswer: 2,
        feedback: "Confluence organiza el contenido en páginas jerárquicas con versionado integrado, mientras los gestores documentales trabajan sobre archivos independientes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el estándar DICOM, ¿qué protocolo de red se emplea para la transmisión de imágenes médicas?",
        options: [
            "SOAP sobre HTTP",
            "TLS sobre TCP/IP con codificación Base64",
            "C-STORE sobre el protocolo DIMSE basado en TCP/IP",
            "MQTT con cifrado AES-256"
        ],
        correctAnswer: 2,
        feedback: "DICOM utiliza C-STORE sobre el protocolo DIMSE basado en TCP/IP para la transmisión de imágenes médicas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la metodología LEAN aplicada al desarrollo de software, ¿cuál de los siguientes conceptos describe mejor el objetivo de eliminar desperdicios ('waste')?",
        options: [
            "Minimizar la documentación del código fuente para reducir tiempos de desarrollo",
            "Evitar el desarrollo de características que no aporten valor real al usuario final",
            "Reducir la interacción con el cliente para evitar retrasos en la toma de decisiones",
            "Limitar la refactorización del código para reducir el número de iteraciones en el desarrollo"
        ],
        correctAnswer: 1,
        feedback: "En LEAN, eliminar desperdicios significa evitar el desarrollo de características que no aporten valor real al usuario final."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la evolución de la arquitectura de procesadores, ¿cuál de las siguientes técnicas ha sido clave para mejorar el rendimiento sin aumentar el consumo energético de manera proporcional?",
        options: [
            "Implementación de instrucciones SIMD (Single Instruction Multiple Data)",
            "Aumento de la frecuencia del reloj en cada generación de procesadores",
            "Uso de registros de propósito general con mayor tamaño en bits",
            "Eliminación del soporte para ejecución especulativa para reducir consumo"
        ],
        correctAnswer: 0,
        feedback: "Las instrucciones SIMD permiten mejorar el rendimiento sin aumentar proporcionalmente el consumo energético."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según MAGERIT, ¿cuál es la diferencia clave entre un análisis de impacto y un análisis de riesgos en la gestión de seguridad?",
        options: [
            "El análisis de impacto se centra en las consecuencias de una amenaza, mientras que el análisis de riesgos considera tanto la probabilidad como el impacto",
            "El análisis de impacto sólo evalúa daños económicos, mientras que el análisis de riesgos considera factores técnicos y organizativos",
            "El análisis de riesgos se aplica únicamente a sistemas informáticos, mientras que el análisis de impacto se enfoca en la continuidad del negocio",
            "El análisis de impacto es opcional en MAGERIT, mientras que el análisis de riesgos es obligatorio"
        ],
        correctAnswer: 0,
        feedback: "El análisis de impacto se centra en las consecuencias de una amenaza, mientras que el análisis de riesgos considera tanto probabilidad como impacto."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la principal diferencia entre técnicas descriptivas y predictivas en Inteligencia Artificial?",
        options: [
            "Las técnicas descriptivas generan modelos supervisados, mientras que las predictivas sólo utilizan datos sin etiquetar",
            "Las técnicas predictivas identifican patrones sin necesidad de variables objetivo",
            "Las técnicas descriptivas buscan entender estructuras y relaciones en los datos, mientras que las predictivas hacen estimaciones sobre datos futuros",
            "Las técnicas descriptivas sólo se aplican en bases de datos estructuradas"
        ],
        correctAnswer: 2,
        feedback: "Las técnicas descriptivas buscan entender estructuras y relaciones en los datos, mientras que las predictivas hacen estimaciones sobre datos futuros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Esquema Nacional de Seguridad (ENS), ¿cuál es la principal diferencia entre las medidas de seguridad de nivel ALTO y nivel MEDIO?",
        options: [
            "Las medidas de seguridad de nivel ALTO requieren la implementación obligatoria de un SOC",
            "En el nivel ALTO, se exige una auditoría de seguridad con una periodicidad máxima de 1 año, mientras que en el nivel MEDIO es cada 2 años",
            "Las organizaciones con nivel MEDIO no están obligadas a implementar planes de continuidad del servicio",
            "El nivel MEDIO permite el uso de contraseñas sin autenticación multifactor"
        ],
        correctAnswer: 1,
        feedback: "En el nivel ALTO, se exige una auditoría de seguridad con periodicidad máxima de 1 año, mientras que en el nivel MEDIO es cada 2 años."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el marco del Reglamento eIDAS2, ¿cuál de los siguientes elementos es obligatorio para los monederos de identidad digital (EUID Wallets)?",
        options: [
            "Almacenamiento de datos biométricos en una base de datos centralizada",
            "Posibilidad de que los ciudadanos gestionen qué atributos de su identidad comparten con terceros",
            "Uso exclusivo para autenticación en servicios gubernamentales",
            "Integración con sistemas de firma electrónica exclusivamente en formato PAdES"
        ],
        correctAnswer: 1,
        feedback: "eIDAS2 exige que los ciudadanos puedan gestionar qué atributos de su identidad comparten con terceros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la jerarquía de memoria de un sistema informático, ¿qué efecto puede tener la inclusión de una caché de nivel L3 en el rendimiento de la CPU cuando ya existen cachés L1 y L2?",
        options: [
            "Disminuye el tiempo medio de acceso a la memoria en todas las cargas de trabajo",
            "Sólo mejora el rendimiento en aplicaciones que hacen uso intensivo de cálculos en coma flotante",
            "Actúa como un buffer de alta capacidad para reducir la tasa de fallos en la memoria RAM",
            "No tiene impacto significativo en el rendimiento"
        ],
        correctAnswer: 0,
        feedback: "La caché L3 disminuye el tiempo medio de acceso a la memoria en la mayoría de las cargas de trabajo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un entorno cliente-servidor, una de las características principales es:",
        options: [
            "No diferenciar capas ni funciones dentro de la arquitectura",
            "Ejecutar todos los procesos y la lógica de negocio en el cliente",
            "No existir comunicación en red: todo ocurre en un único equipo físico",
            "El cliente solicita servicios y el servidor los provee, separando la capa de presentación de la lógica y datos"
        ],
        correctAnswer: 3,
        feedback: "En cliente-servidor, el cliente solicita servicios y el servidor los provee, separando la capa de presentación de la lógica y datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La iniciativa de 'supresión de certificados en soporte papel' en la administración pública busca:",
        options: [
            "Obligar a los ciudadanos a presentar más documentos en ventanilla",
            "Evitar la necesidad de aportar copias en papel de ciertos certificados, facilitando que las administraciones consulten o intercambien los datos electrónicamente",
            "Imponer el uso de fax en todos los trámites oficiales",
            "Eliminar cualquier tipo de registro administrativo digital"
        ],
        correctAnswer: 1,
        feedback: "La supresión de certificados en papel busca evitar la necesidad de aportar copias en papel, facilitando el intercambio electrónico de datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La clave primaria en una tabla relacional se caracteriza por:",
        options: [
            "Ser un atributo o grupo de atributos que identifica de forma única cada fila y no admite valores repetidos ni nulos",
            "Ser siempre la primera columna definida en la tabla",
            "Permitir valores duplicados si los demás campos coinciden",
            "Ser un atributo opcional que puede repetirse sin inconvenientes"
        ],
        correctAnswer: 0,
        feedback: "La clave primaria identifica de forma única cada fila y no admite valores repetidos ni nulos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué es el desarrollo low-code?",
        options: [
            "Un método para desarrollar software exclusivamente en sistemas mainframe",
            "Un procedimiento que se basa en reescribir cada línea de código a bajo nivel",
            "Un modelo de desarrollo de software que emplea principalmente lenguajes de máquina",
            "Un modelo de desarrollo de software que permite crear aplicaciones con mínimas líneas de código y con herramientas gráficas"
        ],
        correctAnswer: 3,
        feedback: "El desarrollo low-code permite crear aplicaciones con mínimas líneas de código y con herramientas gráficas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El protocolo HTTPS consiste en:",
        options: [
            "Un método para compartir archivos en redes locales sin autenticación",
            "El uso de HTTP sin ningún tipo de cifrado",
            "Un protocolo P2P diseñado para transmisión de vídeo en tiempo real",
            "Ejecutar HTTP sobre una conexión cifrada con SSL/TLS"
        ],
        correctAnswer: 3,
        feedback: "HTTPS es HTTP ejecutado sobre una conexión cifrada con SSL/TLS."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Al diseñar un sistema de información con altos requisitos de seguridad, ¿cuál de las siguientes buenas prácticas suele recomendarse?",
        options: [
            "No emplear cifrado para agilizar el tráfico de datos",
            "Implementar mecanismos de autenticación y autorización, además de cifrar los datos",
            "Permitir conexiones anónimas sin restricciones para facilitar la puesta en marcha",
            "Todas las respuestas anteriores son correctas"
        ],
        correctAnswer: 1,
        feedback: "Se recomienda implementar mecanismos de autenticación y autorización, además de cifrar los datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la construcción de sistemas de información, el uso de repositorios Git facilita:",
        options: [
            "Eliminar la necesidad de pruebas unitarias y de integración",
            "Que sólo un desarrollador trabaje en el proyecto mientras el resto espera",
            "Ignorar por completo la gestión de la configuración",
            "El seguimiento detallado de cambios, la colaboración simultánea entre varios desarrolladores y la posibilidad de revertir o fusionar versiones"
        ],
        correctAnswer: 3,
        feedback: "Git facilita el seguimiento detallado de cambios, la colaboración simultánea entre varios desarrolladores y la posibilidad de revertir o fusionar versiones."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La usabilidad en el diseño web se relaciona directamente con:",
        options: [
            "La facilidad de aprendizaje, eficacia, eficiencia y satisfacción que experimentan los usuarios al interactuar con una interfaz",
            "La estética puramente gráfica sin tener en cuenta la experiencia del usuario",
            "La capacidad del sitio para bloquear accesos no autorizados",
            "El volumen de datos transmitidos por segundo"
        ],
        correctAnswer: 0,
        feedback: "La usabilidad se relaciona con la facilidad de aprendizaje, eficacia, eficiencia y satisfacción del usuario."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Una de las características más destacadas al adoptar software libre en la administración pública es:",
        options: [
            "No poder acceder nunca al código fuente ni auditar su funcionamiento interno",
            "La dependencia total de un único proveedor que controle la evolución del software",
            "La reducción de costes de licenciamiento y la independencia de proveedores, permitiendo adaptar el software a necesidades específicas",
            "La imposibilidad de realizar desarrollos propios o mejoras a medida"
        ],
        correctAnswer: 2,
        feedback: "El software libre permite reducir costes de licenciamiento y la independencia de proveedores, adaptando el software a necesidades específicas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Un inconveniente que con frecuencia se menciona sobre el software libre y de código abierto es:",
        options: [
            "La posible falta de soporte oficial o inmediato",
            "La ausencia absoluta de documentación en cada proyecto",
            "La licencia siempre es privativa, impidiendo su redistribución",
            "La imposibilidad de modificar libremente el código fuente en caso de bugs"
        ],
        correctAnswer: 0,
        feedback: "Un inconveniente del software libre es la posible falta de soporte oficial o inmediato."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Un bus de interoperabilidad o ESB:",
        options: [
            "Es un canal físico para transferir datos mediante discos externos",
            "Orquesta y media la comunicación entre servicios, facilitando la transformación de mensajes, enrutamiento y monitorización",
            "Limita la escalabilidad del sistema al obligar a usar un único protocolo de comunicación",
            "Sólo aplica en arquitecturas de dos niveles"
        ],
        correctAnswer: 1,
        feedback: "Un ESB orquesta y media la comunicación entre servicios, facilitando la transformación de mensajes, enrutamiento y monitorización."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "La normalización en el diseño de bases de datos persigue principalmente:",
        options: [
            "Organizar toda la información en una única tabla para facilitar su consulta",
            "Repetir los mismos datos en múltiples ubicaciones",
            "Establecer como norma que todos los datos deben almacenarse únicamente en texto",
            "Estructurar los datos en distintas tablas normalizadas para minimizar la redundancia y evitar inconsistencias en su almacenamiento"
        ],
        correctAnswer: 3,
        feedback: "La normalización busca estructurar los datos en distintas tablas para minimizar la redundancia y evitar inconsistencias."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la elaboración de prototipos, una de las ventajas principales es:",
        options: [
            "La generación de un producto final sin requerir pruebas posteriores",
            "La ausencia de retroalimentación por parte de los usuarios",
            "La rápida obtención de versiones preliminares que ayudan a concretar requisitos",
            "La eliminación total de los riesgos del proyecto"
        ],
        correctAnswer: 2,
        feedback: "La elaboración de prototipos permite obtener rápidamente versiones preliminares que ayudan a concretar requisitos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En la generación automática de código, una de las ventajas principales es:",
        options: [
            "La imposibilidad de adaptar la lógica de negocio a necesidades específicas",
            "Obligar a que todo el código sea monolítico sin posibilidad de modularidad",
            "Aumentar la complejidad del sistema y la curva de aprendizaje del equipo",
            "Disminuir los errores humanos al automatizar la creación de partes repetitivas o plantillas estándar del código"
        ],
        correctAnswer: 3,
        feedback: "La generación automática de código disminuye los errores humanos al automatizar la creación de partes repetitivas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En Python, para la siguiente definición de bucle for i in [10]: ¿cuántas veces se ejecutará el bucle?",
        options: ["10", "2", "1", "0"],
        correctAnswer: 2,
        feedback: "El bucle se ejecutará 1 vez, ya que itera sobre una lista con un solo elemento (10)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes características distingue principalmente a HTTP/2 de HTTP/1.1?",
        options: [
            "El uso de cabeceras en texto plano para cada petición y respuesta",
            "El requerimiento de utilizar siempre un protocolo UDP en vez de TCP",
            "La multiplexación de varias peticiones y respuestas en una única conexión",
            "El abandono completo de TLS/SSL como método de cifrado"
        ],
        correctAnswer: 2,
        feedback: "HTTP/2 introduce la multiplexación de varias peticiones y respuestas en una única conexión."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito del modelado de dominio, un modelo Entidad–Relación se utiliza para:",
        options: [
            "Definir la estructura de datos de forma conceptual",
            "Representar gráficamente los procesos de negocio y sus flujos de actividad",
            "Describir la interacción temporal entre objetos del sistema",
            "Identificar los requerimientos no funcionales del sistema"
        ],
        correctAnswer: 0,
        feedback: "El modelo Entidad-Relación se utiliza para definir la estructura de datos de forma conceptual."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Una característica de los ficheros indexados es que:",
        options: [
            "Se utilizan para compartir información en redes P2P",
            "Almacenan los datos de forma secuencial e incorporan un índice auxiliar que permite localizar registros rápidamente",
            "Su uso principal se orienta al almacenamiento estructurado de datos exclusivamente en formatos como JSON",
            "No permiten realizar operaciones de inserción o eliminación de registros"
        ],
        correctAnswer: 1,
        feedback: "Los ficheros indexados almacenan los datos de forma secuencial e incorporan un índice auxiliar para localizar registros rápidamente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el catálogo de componentes del Servicio Andaluz de Salud, ¿cuál es el criterio principal que define la estructura del nombre de estos componentes?",
        options: [
            "Se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), seguido de la descripción del componente",
            "Se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), en el que la parte final del nombre está compuesta únicamente por la numeración de la versión",
            "Se define de forma aleatoria por el equipo que desarrolla el componente",
            "Se asigna un identificador automático e incremental para cada nuevo componente"
        ],
        correctAnswer: 0,
        feedback: "La estructura del nombre se compone de un espacio de nombres (@sas/) y un prefijo (wc-stic-), seguido de la descripción del componente."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Dentro de las atribuciones de la persona titular de la Dirección General de Sistemas de Información y Comunicaciones según el Decreto 198/2024, de 3 de septiembre, por el que se establece la estructura orgánica de la Consejería de Salud y Consumo, ¿qué busca asegurar en cuanto al uso de tecnologías?",
        options: [
            "La retirada de aplicaciones sin una planificación de su transición",
            "Un uso eficiente y sostenible de los recursos tecnológicos",
            "La implantación de múltiples herramientas para una misma función",
            "Ninguna de las respuestas es correcta"
        ],
        correctAnswer: 1,
        feedback: "La Dirección General de Sistemas de Información y Comunicaciones busca asegurar un uso eficiente y sostenible de los recursos tecnológicos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Base Poblacional de Salud (BPS) del Sistema Sanitario Público de Andalucía, la información acerca del uso de recursos sanitarios se centra en:",
        options: [
            "Mostrar los datos administrativo-clínicos en base al CMBD hospitalario y la Historia Clínica Digital (Diraya)",
            "Mostrar las consultas de AP y AE, las urgencias, los distintos procesos de atención hospitalaria y el consumo de farmacia",
            "Mostrar la información demográfica recogida a través de su integración con BDU",
            "Ninguna de las respuestas es correcta"
        ],
        correctAnswer: 1,
        feedback: "La BPS muestra las consultas de AP y AE, urgencias, procesos de atención hospitalaria y consumo de farmacia."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes metodologías se utilizan para abordar la gestión de cambios en las organizaciones?",
        options: ["Modelo de Kurt Lewin", "Modelo de Kotter", "ADKAR (Prosic) incluido en HCMBOK", "Todas las respuestas son correctas"],
        correctAnswer: 3,
        feedback: "Todos los modelos mencionados (Kurt Lewin, Kotter y ADKAR) se utilizan para abordar la gestión de cambios en las organizaciones."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En ITIL v4 se definen una serie de prácticas, entre las que se encuentran las de gestión general. ¿Cuál de las siguientes opciones es una práctica de gestión general?",
        options: ["Gestión del talento y personal", "Análisis de negocio", "Gestión de catálogo de servicios de TI", "Gestión de diseño y transición"],
        correctAnswer: 2,
        feedback: "La gestión de catálogo de servicios de TI es una práctica de gestión general en ITIL v4."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el Modelo Corporativo Marco de Implantaciones (MCMI) del Servicio Andaluz de Salud, ¿cuál de las siguientes actividades se realiza en la fase de 'Reingeniería de procesos'?",
        options: [
            "[ACT-RP-FUNC-5] Verificar estado inicial",
            "[ACT-RP-FUNC-1] Definir impacto de la implantación",
            "[ACT-RP-FUNC-8] Definir Plan de formación",
            "[ACT-RP-SIST-3] Catalogar los sistemas de información"
        ],
        correctAnswer: 1,
        feedback: "En la fase de Reingeniería de procesos se realiza la actividad [ACT-RP-FUNC-1] Definir impacto de la implantación."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de los siguientes es un sistema de información del ámbito de recursos humanos del Servicio Andaluz de Salud?",
        options: ["Código Numérico Profesional", "FARO, herramienta de gestión de recursos humanos", "Red de datos de profesionales", "Todas las respuestas son correctas"],
        correctAnswer: 3,
        feedback: "Todos los sistemas mencionados son sistemas de información del ámbito de recursos humanos del SAS."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El artículo 22 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, indica el umbral de los contratos de servicios sujetos a una regulación armonizada cuando los contratos hayan de adjudicarse por entidades del sector público distintas a la Administración General del Estado. ¿Cuál es ese umbral?",
        options: ["143.000 euros", "221.000 euros", "750.000 euros", "Ninguna de las respuestas es correcta"],
        correctAnswer: 0,
        feedback: "El umbral para contratos de servicios sujetos a regulación armonizada es de 143.000 euros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "AviSAS es el sistema de información de referencia en el Servicio Andaluz de Salud para la notificación de eventos de distinta naturaleza hacia sus usuarios a través de diversos canales. ¿Cuál de los siguientes NO ES un canal actualmente disponible en AviSAS para la comunicación con los ciudadanos?",
        options: ["Correo electrónico", "Correo postal", "Notificación push en la App Salud Andalucía", "Mensaje SMS"],
        correctAnswer: 1,
        feedback: "El correo postal NO es un canal actualmente disponible en AviSAS para la comunicación con los ciudadanos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un diagrama de PERT, ¿a qué tipo de holgura corresponde el tiempo suplementario para la ejecución de una actividad si las precedentes terminaran lo más tarde posible y las posteriores lo antes posible?",
        options: ["Holgura libre", "Holgura total", "Holgura independiente", "Holgura condicional"],
        correctAnswer: 2,
        feedback: "La holgura independiente es el tiempo suplementario para una actividad si las precedentes terminan lo más tarde posible y las posteriores lo antes posible."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito de la explotación de datos, ¿qué es un 'Data Fabric'?",
        options: [
            "Una arquitectura de servicios y funcionalidades que contribuye a procesar mejor los volúmenes de datos procedentes de multitud de fuentes con la capacidad de agruparlos bajo un sistema de administración",
            "Un repositorio de almacenamiento centralizado que contiene gran cantidad de datos en bruto",
            "Una base de datos corporativa para la integración y depuración de información procedente de múltiples fuentes",
            "Un subconjunto de los datos guardados en un Data Warehouse"
        ],
        correctAnswer: 0,
        feedback: "Data Fabric es una arquitectura de servicios que procesa volúmenes de datos de múltiples fuentes bajo un sistema de administración."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Tras realizar el análisis de la situación actual de la organización, la matriz CAME permite definir estrategias en función éste. ¿Cuál de las siguientes opciones corresponde de manera directa a una de las estrategias de la matriz CAME?",
        options: [
            "Corregir las debilidades detectadas en el análisis",
            "Asegurar que se han identificado los puntos de mejora de la organización",
            "Minimizar la desviación de costes asociados a la ejecución de los proyectos estratégicos",
            "Elaborar un conjunto de lecciones aprendidas que favorezcan la mejora continua"
        ],
        correctAnswer: 0,
        feedback: "La matriz CAME incluye la estrategia de 'Corregir las debilidades detectadas en el análisis'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el contexto del procesamiento analítico en línea (OLAP), se distinguen diferentes tipos de sistemas según su arquitectura y modo de procesamiento. ¿Cuál de las siguientes opciones representa correctamente una clasificación de los sistemas OLAP?",
        options: ["MOLAP, EOLAP y COLAP", "MOLAP, ZOLAP y RTOLAP", "MOLAP, ROLAP y RTOLAP", "EOLAP, NOLAP, ZOLAP y OLAP"],
        correctAnswer: 2,
        feedback: "Los sistemas OLAP se clasifican en MOLAP, ROLAP y RTOLAP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En COBIT 2019, ¿cuál de las siguientes opciones representa un principio del sistema de gobierno?",
        options: [
            "Basado en un modelo conceptual",
            "Alineado con los estándares más relevantes",
            "Abierto y flexible, permitiendo la adición de nuevo contenido y abordando nuevos problemas de manera flexible",
            "Adaptarse a las necesidades de la empresa"
        ],
        correctAnswer: 3,
        feedback: "COBIT 2019 establece como principio 'Adaptarse a las necesidades de la empresa'."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Qué aspecto forma parte de la 'fase de arranque, sub-fase 5.4' según el Modelo Corporativo Marco de Implantaciones (MCMI)?",
        options: [
            "Realizar copias de seguridad de los sistemas destino",
            "Configurar el sistema con posterioridad al arranque",
            "Ejecutar el plan de pruebas de aceptación del sistema",
            "Preparar las sesiones de transferencia a N3"
        ],
        correctAnswer: 0,
        feedback: "En la sub-fase 5.4 de arranque se realizan copias de seguridad de los sistemas destino."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el Modelo Corporativo Marco de Implantaciones (MCMI) del Servicio Andaluz de Salud se recogen un conjunto de entregables para cada área de conocimiento. ¿Cuál de los siguientes NO ES un entregable del MCMI?",
        options: [
            "[FORM02] Encuesta de satisfacción",
            "[INTE05] Plan de pruebas técnicas de las integraciones",
            "[GEST04] Registro de riesgos",
            "[MIGR01] Catálogo de reglas de negocio"
        ],
        correctAnswer: 3,
        feedback: "[MIGR01] Catálogo de reglas de negocio NO es un entregable del MCMI."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El portal 'E-atención al profesional' y la App 'mGerhonte' son herramientas diseñadas para los profesionales del SAS. Sin embargo, en la actualidad no ofrecen exactamente los mismos servicios. ¿Cuál de las siguientes funcionalidades está disponible sólo en una de las aplicaciones y debería implementarse en ambas para garantizar una experiencia omnicanal?",
        options: [
            "Consulta y descarga de nóminas",
            "Informe CRP, con el detalle del abono del Complemento al Rendimiento Profesional",
            "Curriculum Digital, espacio para completar la información del profesional",
            "Modificación de cuenta bancaria"
        ],
        correctAnswer: 2,
        feedback: "El Curriculum Digital está disponible sólo en una de las aplicaciones y debería implementarse en ambas para garantizar una experiencia omnicanal."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el artículo 39 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, es causa de nulidad de derecho administrativo:",
        options: [
            "La insuficiencia de crédito en el período vigente",
            "La falta de publicación del anuncio de licitación en el medio de publicidad en que sea preceptivo",
            "El incumplimiento leve de normas de derecho de la Unión Europea en materia de contratación pública",
            "La observancia por parte del órgano de contratación del plazo para la formalización del contrato"
        ],
        correctAnswer: 1,
        feedback: "La falta de publicación del anuncio de licitación en el medio de publicidad preceptivo es causa de nulidad de derecho administrativo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales, en relación con el derecho de acceso, ¿en qué casos un responsable del tratamiento podrá limitar el ejercicio del derecho de acceso por parte del interesado?",
        options: [
            "Cuando el interesado no haya justificado suficientemente su solicitud",
            "Cuando el acceso implique un esfuerzo desproporcionado para el responsable del tratamiento",
            "Cuando el acceso pueda afectar negativamente a los derechos y libertades de terceros",
            "Cuando el interesado haya ejercido previamente el derecho de acceso en el mismo año en cualquier caso"
        ],
        correctAnswer: 2,
        feedback: "El responsable del tratamiento puede limitar el acceso cuando pueda afectar negativamente a los derechos y libertades de terceros."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, ¿cuál de los siguientes es un principio que el sector público deberá respetar según su Artículo 2?",
        options: ["Flexibilidad", "Accesibilidad", "Portabilidad", "Disponibilidad"],
        correctAnswer: 1,
        feedback: "El artículo 2 del RD 203/2021 establece la accesibilidad como uno de los principios que debe respetar el sector público."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, en relación con la prórroga de los contratos públicos:",
        options: [
            "La prórroga debe ser aprobada por la mesa de contratación y ratificada por el empresario",
            "La prórroga será obligatoria para el empresario, siempre que su preaviso se produzca al menos con 1 mes de antelación",
            "En determinadas circunstancias, cuando al vencimiento de un contrato no se hubiera formalizado el nuevo, se podrá prorrogar el originario un máximo de 12 meses",
            "Pueden preverse una o varias prórrogas siempre que las características del contrato permanezcan inalterables"
        ],
        correctAnswer: 3,
        feedback: "La Ley 9/2017 permite prever una o varias prórrogas siempre que las características del contrato permanezcan inalterables."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "El sistema LetSAS está diseñado para que se pueda administrar y prestar soporte in-situ con diferentes herramientas. ¿Cuál de las siguientes combinaciones de herramientas es correcta para desempeñar dichas tareas de administración?",
        options: [
            "Panel Web local, telnet, ssh al puerto 443 y Altiris",
            "Terminal de Consola, Panel Web local y Altiris",
            "Telnet al puerto 443, Panel Web local y Altiris",
            "AyudaDigital y Altiris"
        ],
        correctAnswer: 1,
        feedback: "La combinación correcta para administrar LetSAS es Terminal de Consola, Panel Web local y Altiris."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el centro de servicios al usuario de informática del Servicio Andaluz de Salud, la aplicación que utilizan los usuarios para registrar sus peticiones es conocida como 'ayudaDIGITAL'. En relación a la versión de escritorio de dicha aplicación, ¿cuál de las siguientes afirmaciones NO es correcta?",
        options: [
            "Te avisará cuando se aproxime la fecha de renovación de la contraseña de tu usuario DMSAS",
            "Te ayuda a convertir teléfonos de la Red Corporativa",
            "Te enviará notificaciones con información de interés",
            "Te permitirá cambiar la contraseña de DMSAS cuando esté a punto de caducar"
        ],
        correctAnswer: 1,
        feedback: "La versión de escritorio de ayudaDIGITAL NO ayuda a convertir teléfonos de la Red Corporativa."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Con cuál de los siguientes protocolos opera el comando de windows 'tracert -d 10.20.30.40'?",
        options: ["TTLvD", "DNS", "UDP", "ICMP"],
        correctAnswer: 3,
        feedback: "El comando tracert opera con el protocolo ICMP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes afirmaciones describe mejor el propósito de una auditoría informática?",
        options: [
            "Evaluar la eficiencia de los procesos de negocio de una organización",
            "Revisar y mejorar la experiencia del usuario en aplicaciones de software",
            "Examinar y evaluar la seguridad, integridad y eficiencia de los sistemas de información de una organización",
            "Aconsejar el desarrollo de nuevas aplicaciones de software para mejorar la productividad"
        ],
        correctAnswer: 2,
        feedback: "La auditoría informática examina y evalúa la seguridad, integridad y eficiencia de los sistemas de información."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito del diseño de un centro de proceso de datos, ¿cuál de las siguientes definiciones correspondería al concepto de RTO?",
        options: [
            "Cálculo de cuánta pérdida de datos puede experimentar una compañía",
            "Tiempo que una aplicación puede estar inactiva sin causar un daño significativo y tiempo dedicado a restaurarla",
            "Resistencia al fuego que deben tener las puertas y muros",
            "Normativa en cuanto a la retención de oxígeno que deben cumplir los gases propelentes"
        ],
        correctAnswer: 1,
        feedback: "RTO (Recovery Time Objective) es el tiempo que una aplicación puede estar inactiva y el tiempo dedicado a restaurarla."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación al modelo de referencia de interconexión de sistemas abiertos (OSI), ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La capa 8, o de usuario, define las funciones que el sistema de comunicación le ofrece al usuario",
            "La arquitectura TCP/IP no se adapta exactamente al modelo OSI, mezclando algunas de las capas de OSI en su definición",
            "La capa 1, o física, garantiza la comunicación extremo a extremo",
            "Todas las capas del modelo OSI disponen de funciones de códigos de redundancia"
        ],
        correctAnswer: 1,
        feedback: "TCP/IP no se adapta exactamente al modelo OSI, mezclando algunas de las capas de OSI en su definición."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación al modelo de referencia de interconexión de sistemas abiertos (OSI), ¿cuál de las siguientes afirmaciones correspondería a las funciones de la capa número 3 o 'capa de red'?",
        options: [
            "Gestiona el direccionamiento lógico y el enrutamiento de datos entre diferentes redes",
            "Garantiza la transferencia de datos libre de errores entre dos dispositivos directamente conectados",
            "Se encarga de la traducción de los datos para asegurar su correcta interpretación",
            "Se encarga de la transmisión a través del medio físico"
        ],
        correctAnswer: 0,
        feedback: "La capa de red (Capa 3) gestiona el direccionamiento lógico y el enrutamiento de datos entre diferentes redes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación a la arquitectura TCP/IP y el servicio de resolución de nombres DNS, el puerto definido en el estándar para la transferencia de zonas DNS es:",
        options: ["El puerto 53", "El puerto 54", "El puerto 443", "El puerto 1521"],
        correctAnswer: 0,
        feedback: "El puerto estándar para la transferencia de zonas DNS es el puerto 53."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según el ámbito de la auditoría informática, ¿qué auditoría evalúa la seguridad de la infraestructura tecnológica?",
        options: ["Auditoría de desarrollo de software", "Auditoría de cumplimiento", "Auditoría de procesos", "Auditoría de seguridad"],
        correctAnswer: 3,
        feedback: "La auditoría de seguridad evalúa la seguridad de la infraestructura tecnológica."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál es la característica principal de un ataque DDoS?",
        options: [
            "El atacante utiliza vulnerabilidades del sistema final para acceder de forma no detectada",
            "Es como un ataque DoS, pero coordinando infinidad de equipos para que realicen el ataque a la vez",
            "El atacante utiliza señuelos para engañar al usuario e infectar el sistema atacado",
            "Rapta el ancho de banda del sistema atacado para descifrar el tráfico"
        ],
        correctAnswer: 1,
        feedback: "Un ataque DDoS coordina múltiples equipos para realizar un ataque DoS a la vez."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación a un sistema operativo linux y con respecto a la gestión de usuarios y el concepto UID, ¿cuál de estas afirmaciones es correcta?",
        options: [
            "Dos usuarios de linux nunca pueden tener el mismo UID",
            "El UID identifica a qué grupo de ACLs pertenece un login concreto",
            "El UID es el código interno que usa el sistema operativo para saber a quién pertenecen determinados objetos",
            "El comando chown fija el UID de un proceso en memoria"
        ],
        correctAnswer: 2,
        feedback: "El UID es el código interno que usa el sistema operativo para saber a quién pertenecen determinados objetos (ficheros, procesos, dispositivos, etc.)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con la Red Corporativa de Telecomunicaciones de la Junta de Andalucía (RCJA) y la Red SARA, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "La Red SARA es una infraestructura de interconexión que permite a las diferentes administraciones públicas españolas compartir información y servicios de manera segura, por lo que tiene conexiones específicas con la Red RCJA",
            "La Red RCJA está incluida en la licitación de la Red SARA para garantizar la conectividad con la misma",
            "La Red SARA es la red de emergencias usada por 061, por lo que tiene conexión directa con la Red RCJA",
            "Son dos redes de entidades públicas que no tienen ningún punto en común"
        ],
        correctAnswer: 0,
        feedback: "La Red SARA permite compartir información entre administraciones públicas y tiene conexiones específicas con la Red RCJA."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema operativo Linux, ¿cuál de las siguientes expresiones sería correcta, en relación con las funciones del comando sudo?",
        options: [
            "El comando sudo fue creado originalmente en el año 1995",
            "La ejecución de un comando mediante sudo necesita introducir siempre la password del usuario que lanza el comando",
            "La ejecución de un comando mediante sudo necesita introducir siempre la password del usuario con el que se ejecutará el comando",
            "Permite a un usuario ejecutar programas como usuario root sin conocer la clave de este y sin introducir la clave del primero"
        ],
        correctAnswer: 3,
        feedback: "sudo permite a un usuario ejecutar programas como usuario root sin conocer la clave de este y sin introducir la clave del primero."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En relación con las técnicas de almacenamiento basado en objetos y sistemas de redundancia en el almacenamiento, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "El almacenamiento de objetos tipo Amazon S3 permite almacenar ficheros en un cluster de servidores, la unidad mínima de consumo se conoce como 'locker'",
            "Amazon S3 es un estándar de almacenamiento de ficheros que se ha liberado para poder usarlo dentro del tipo de licencia GPL",
            "Amazon S3 es un servicio que sólo puede consumirse en entornos cloud de Amazon",
            "Amazon S3 permite almacenar elementos de forma abstracta, desvinculando la estructura interna del almacenamiento del acceso al fichero"
        ],
        correctAnswer: 3,
        feedback: "El almacenamiento S3 permite almacenar elementos de forma abstracta, desvinculando la estructura interna del almacenamiento del acceso al fichero."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Para cuál de las siguientes aplicaciones de videoconferencia se usa de forma nativa el estándar H.323 para servicios multimedia sobre redes de paquetes?",
        options: ["Unify Circuit", "Microsoft Teams", "Zoom", "Ninguno de ellos usa H.323 de forma nativa"],
        correctAnswer: 3,
        feedback: "Ninguna de las aplicaciones mencionadas usa H.323 de forma nativa."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes opciones corresponde con un sistema de redundancia en el almacenamiento de datos?",
        options: ["Erasure Code", "RAID 0", "Almacenamiento S3", "Hyperconverged Data Resilience"],
        correctAnswer: 0,
        feedback: "Erasure Code es un sistema de redundancia en el almacenamiento de datos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En un sistema operativo multiusuario con separación de memoria por usuario, sólo el sistema operativo y los procesos con privilegios especiales pueden acceder a la memoria de otros procesos. En este contexto y en referencia a un mensaje de error 'segmentation fault' arrojado por un sistema operativo, ¿cuál de estas afirmaciones es correcta?",
        options: [
            "Es una advertencia de que un proceso de usuario básico ha conseguido leer información de otro proceso con privilegios",
            "Es la forma de comunicar el error de ejecución 'null pointer exception' del lenguaje C",
            "El antivirus ha detectado que un proceso de malware está accediendo a segmentos del disco duro no permitidos",
            "Es el mensaje del sistema operativo al eliminar un proceso que está intentando acceder a zonas de memoria restringidas"
        ],
        correctAnswer: 3,
        feedback: "Un 'segmentation fault' es el mensaje del sistema operativo al eliminar un proceso que intenta acceder a zonas de memoria restringidas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "¿Cuál de las siguientes respuestas corresponde con una de las aplicaciones básicas del QoS en la red de datos del Servicio Andaluz de Salud?",
        options: [
            "Garantizar la calidad de los servicios VoIP",
            "Garantizar la redundancia de los enlaces WAN de RCJA v5",
            "Cualificar los paquetes para prevenir ataques IDS",
            "Cualificar los paquetes de servicio cuando se usa H.232 para videoconferencias"
        ],
        correctAnswer: 0,
        feedback: "QoS se aplica para garantizar la calidad de los servicios VoIP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "En el ámbito de los servicios de datos corporativos y en relación con las siglas ZTNA, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "ZTNA define un formato de cifrado WAN dentro de la Red Corporativa de la Junta de Andalucía",
            "ZTNA es el acrónimo para referenciar las Redes de Área Extensa Definidas por Software",
            "ZTNA permite un acceso seguro a las aplicaciones y recursos de una empresa mejorando la seguridad de las conexiones VPN",
            "ZTNA no está reconocido por el CCN como una forma de acceso segura"
        ],
        correctAnswer: 2,
        feedback: "ZTNA (Zero Trust Network Access) permite un acceso seguro a las aplicaciones y recursos mejorando la seguridad de las conexiones VPN."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna",
        question: "Según la normativa reguladora del diseño e implementación de infraestructuras de red de área local (cableadas e inalámbricas) y enlaces inalámbricos en la Administración Pública de la Junta de Andalucía y el código de colores usado en los enlaces de RJ45 para el conexionado de cable UTP de par trenzado sin apantallar, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Define un único orden posible de disposición de los hilos",
            "Define dos órdenes posibles de disposición de los hilos",
            "Define tres órdenes posibles de disposición de los hilos",
            "No define un orden de disposición de los hilos"
        ],
        correctAnswer: 1,
        feedback: "La normativa define dos órdenes posibles de disposición de los hilos (T568A y T568B)."
    },
	
	{
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 1: En la fase inicial del proyecto según PMBOK, ¿qué documento fundamental deben elaborar para definir el alcance, los objetivos y los recursos necesarios?",
        options: ["Diagrama de Gantt", "Acta de constitución del proyecto", "Diagrama de flujo de datos", "Matriz de riesgos"],
        correctAnswer: 1,
        feedback: "El Acta de constitución del proyecto es el documento fundamental para definir el alcance, objetivos y recursos necesarios según PMBOK."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 1: En uno de los proyectos deciden trabajar bajo el marco metodológico de Scrum, ¿qué elemento central en Scrum proporciona una visión general de todo el trabajo necesario para el producto?",
        options: ["Sprint Backlog", "Incremento", "Product Backlog", "Burndown Chart"],
        correctAnswer: 2,
        feedback: "El Product Backlog proporciona una visión general de todo el trabajo necesario para el producto en Scrum."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 1: El equipo decide adoptar el enfoque de Kanban para el control de flujos de trabajo, ¿qué tipo de diagrama se utiliza comúnmente en Kanban para visualizar el flujo de trabajo y el tiempo de ciclo?",
        options: ["Diagrama de Gantt", "Diagrama de flujo acumulativo (CFD)", "Diagrama de casos de uso", "Diagrama de clases"],
        correctAnswer: 1,
        feedback: "El diagrama de flujo acumulativo (CFD) se utiliza en Kanban para visualizar el flujo de trabajo y el tiempo de ciclo."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 1: El equipo de TI ha adoptado los principios de Lean para optimizar sus procesos, ¿cuál de los siguientes no es un principio fundamental del Lean Software Development?",
        options: [
            "Eliminar el desperdicio",
            "Amplificar el aprendizaje",
            "Decidir lo más tarde posible",
            "Maximizar la documentación exhaustiva"
        ],
        correctAnswer: 3,
        feedback: "Maximizar la documentación exhaustiva no es un principio de Lean Software Development; Lean prefiere documentación just-in-time."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 1: ¿Qué guía de buenas prácticas se centra en la gestión de servicios de TI y podría ser útil para asegurar la calidad del servicio del nuevo sistema?",
        options: ["ITIL (Information Technology Infrastructure Library)", "ISO 27001", "COBIT", "PRINCE2"],
        correctAnswer: 0,
        feedback: "ITIL se centra en la gestión de servicios de TI y es la guía más adecuada para asegurar la calidad del servicio."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 2: El jefe de proyecto para el desarrollo de la aplicación web debe elegir una tecnología adecuada para el backend, ¿cuál de las siguientes opciones es una tecnología válida para este propósito?",
        options: ["XML", "CSS", "HTML", "PHP"],
        correctAnswer: 3,
        feedback: "PHP es una tecnología válida para el desarrollo backend de aplicaciones web."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 2: El equipo de desarrollo necesita un framework de JavaScript para la interfaz web de la aplicación. ¿Cuál de los siguientes frameworks es más adecuado para el desarrollo de aplicaciones SPA (Single Page Applications)?",
        options: ["Vue.js", "Django", "Laravel", "Express.js"],
        correctAnswer: 0,
        feedback: "Vue.js es un framework de JavaScript adecuado para el desarrollo de Single Page Applications (SPA)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 2: Para facilitar la reutilización y escalabilidad de componentes se necesita desplegar su sistema en la nube con escalabilidad automática. ¿Cuál de las siguientes opciones es una plataforma de contenedores administrada en la nube que permite escalado automático?",
        options: ["Kubernetes (K8s)", "AWS RDS", "Azure DevOps", "GitLab CI/CD"],
        correctAnswer: 0,
        feedback: "Kubernetes es una plataforma de contenedores que permite escalado automático en la nube."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 2: Para el control de versiones de manera eficiente y colaborativa, el equipo de desarrollo utiliza GIT. ¿Qué comando deben usar para enviar cambios locales a un repositorio remoto?",
        options: ["git add", "git pull", "git commit", "git push"],
        correctAnswer: 3,
        feedback: "El comando 'git push' se utiliza para enviar cambios locales a un repositorio remoto."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 3: ¿Qué protocolo del grupo de trabajo 802 de la IEEE se debe de utilizar para implementar el control de acceso a red (NAC) basada en puertos de red?",
        options: ["802.1af", "802.1Q", "802.D", "802.1X"],
        correctAnswer: 3,
        feedback: "IEEE 802.1X es el protocolo para implementar control de acceso a red (NAC) basada en puertos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 3: Teniendo en cuenta que la red se van a conectar teléfonos IP, ¿qué estándar deben de cumplir la electrónica de acceso para poder ofrecer alimentación eléctrica a través del cable Ethernet?",
        options: ["802.1af", "802.3af", "802.3X", "802.1Q"],
        correctAnswer: 1,
        feedback: "IEEE 802.3af es el estándar para Power over Ethernet (PoE) que permite alimentar dispositivos como teléfonos IP."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 3: A la hora de segmentar la red del hospital en varias subredes, se dispone de un direccionamiento inicial 10.34.10.0/24. ¿Cuál de las siguientes máscaras de subred permitiría crear la mayor cantidad de subredes donde cada una pueda alojar al menos 10 hosts direccionables (sin contar la dirección de red y la dirección de broadcast)?",
        options: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
        correctAnswer: 2,
        feedback: "La máscara 255.255.255.240 (/28) permite 16 subredes con 14 hosts cada una, cumpliendo el requisito de al menos 10 hosts."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 3: El administrador de bases de datos, continuando con el análisis del rendimiento de ORACLE, utiliza una herramienta para identificar posibles cuellos de botella y optimizar la ejecución de consultas. ¿Cuál de las siguientes herramientas nos ofrece información sobre recursos, tiempos de espera y estadísticas de ejecución de sentencias SQL?",
        options: ["RAC", "AWR", "RMAN", "DataGuard"],
        correctAnswer: 1,
        feedback: "AWR (Automatic Workload Repository) proporciona información sobre recursos, tiempos de espera y estadísticas de ejecución de sentencias SQL."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 3: En la base de datos Oracle, el administrador necesita simplificar la gestión del almacenamiento, mejorar el rendimiento y garantizar la alta disponibilidad mediante la distribución automática de datos entre varios discos. ¿Qué tecnología nativa de Oracle debería utilizar para lograr esto?",
        options: ["Oracle Data Pump", "Oracle RAC", "Oracle ASM", "Oracle Data Guard"],
        correctAnswer: 2,
        feedback: "Oracle ASM (Automatic Storage Management) simplifica la gestión del almacenamiento y distribuye datos automáticamente entre discos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: Atendiendo al Régimen de la Hacienda Pública de la Comunidad Autónoma de Andalucía, según la clasificación económica de los estados de gastos de la AGS X, ¿a qué capítulo se debe imputar el gasto que se producirá con la adquisición del router?",
        options: ["Capítulo 2: Gastos en bienes corrientes y servicios", "Capítulo 4: Transferencias corrientes", "Capítulo 6: Inversiones reales", "Capítulo 7: Transferencias de Capital"],
        correctAnswer: 2,
        feedback: "La adquisición de un router se imputa al Capítulo 6: Inversiones reales."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: Con respecto al proceso económico y financiero producido con ambas adquisiciones, ¿qué sistema se utiliza para la gestión integral de recursos organizativos de la Administración de la Junta de Andalucía y sus entidades instrumentales?",
        options: ["Sistema JÚPITER", "Sistema GIRO", "Sistema SIRhUS", "Sistema SIGMA"],
        correctAnswer: 3,
        feedback: "El Sistema SIGMA es el sistema de gestión integral de recursos organizativos de la Junta de Andalucía."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: En la Junta de Andalucía, la adquisición de bienes y servicios relacionados con las Tecnologías de la Información y la Comunicación (TIC) está sujeta a una normativa específica que establece la necesidad de obtener un informe vinculante. Según esta normativa, ¿qué debemos hacer previo a la adquisición del Armario RACK?",
        options: [
            "Está excluido de la necesidad de solicitar el informe vinculante y no está sometidos a la obligación de comunicación",
            "Está excluido de la necesidad de solicitar el informe vinculante pero está sometidos a la obligación de comunicación de su adquisición",
            "Es necesario el informe vinculante ya que no se considera informado favorablemente debido al precio del Armario Rack",
            "Es obligatorio el informe vinculante independientemente del precio del Armario Rack"
        ],
        correctAnswer: 1,
        feedback: "Está excluido de la necesidad de solicitar el informe vinculante pero está sometido a la obligación de comunicación de su adquisición."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: El proceso de gestión para la emisión de los informes por medios electrónicos se llevará a cabo a través de la plataforma:",
        options: ["TreW@", "Vincul@", "Plataforma de contratación", "Infocor"],
        correctAnswer: 0,
        feedback: "La plataforma TreW@ se utiliza para la emisión de informes por medios electrónicos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, el contrato de adquisición del Router tendrán la consideración de:",
        options: ["Contrato de servicios", "Contrato de suministro", "Contrato de consultoría y asistencia", "Contrato mixto"],
        correctAnswer: 1,
        feedback: "La adquisición de un router es un contrato de suministro según la Ley 9/2017."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, ¿cuál es el procedimiento de contratación adecuado para la adquisición del router atendiendo a la cuantía y naturaleza del contrato?",
        options: ["Procedimiento abierto", "Procedimiento restringido", "Procedimiento Negociado", "Contrato Menor"],
        correctAnswer: 0,
        feedback: "Para la adquisición del router (4.679€), el procedimiento adecuado es el Procedimiento abierto o Contrato Menor según la cuantía."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 4: ¿Qué documento establece las condiciones técnicas que han de regir la ejecución de la prestación en un contrato público?",
        options: ["Pliego de Cláusulas Administrativas Particulares", "Pliego de Prescripciones Técnicas Particulares", "Documento de Licitación", "Memoria Justificativa"],
        correctAnswer: 1,
        feedback: "El Pliego de Prescripciones Técnicas Particulares establece las condiciones técnicas de la prestación en un contrato público."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 5: Con IPv4, ¿cuántas subredes /26 pueden configurarse de forma simultánea en la red 192.168.0.0/24?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        feedback: "En una red /24 se pueden configurar 4 subredes /26 (192.168.0.0/26, .64/26, .128/26, .192/26)."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 5: ¿Cuál sería la nueva mascara de red resultante de segmentar la red en el numero de subredes /26 que pueden configurarse de forma simultánea en la red 192.168.0.0/24?",
        options: ["255.255.255.0", "255.255.255.255", "255.255.255.128", "255.255.255.192"],
        correctAnswer: 3,
        feedback: "La máscara para /26 es 255.255.255.192."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 5: ¿Cuál sería la dirección IP de broadcast de la subred 192.168.0.64/26?",
        options: ["192.168.0.127", "192.168.0.128", "192.168.0.63", "192.168.0.255"],
        correctAnswer: 0,
        feedback: "La dirección de broadcast de la subred 192.168.0.64/26 es 192.168.0.127."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 5: ¿Qué capa del modelo OSI brinda los servicios para permitir el intercambio de datos entre los dispositivos finales ubicados en diferentes subredes?",
        options: ["Capa 1: Física", "Capa 2: Enlace de datos", "Capa 3: Red", "Capa 4: Transporte"],
        correctAnswer: 2,
        feedback: "La capa de Red (Capa 3) brinda los servicios para el intercambio de datos entre diferentes subredes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 5: En relación con las políticas de seguridad para redes inalámbricas establecidas por la Orden de 2 de junio de 2017, reguladora de los requisitos necesarios para el diseño e implementación de infraestructuras de cableado estructurado y de red de área local inalámbrica en el ámbito de la Administración de la Junta de Andalucía, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
            "Son medidas de seguridad obligatorias el filtrado de direcciones MAC",
            "Son medidas de seguridad obligatorias prevenir el acceso físico a los puntos de acceso (AP's) y la restricción del alcance de los AP's",
            "Se establece con carácter obligatorio el uso del SSID 'Juntadeandalucia' para todas las redes inalámbricas",
            "Se exige que todas las redes inalámbricas utilicen autenticación basada en certificados digitales"
        ],
        correctAnswer: 1,
        feedback: "La Orden de 2 de junio de 2017 establece como medidas obligatorias prevenir el acceso físico a los AP's y restringir su alcance."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 6: ¿Qué algoritmo se utiliza para evitar deadlocks manteniendo al sistema en un estado seguro?",
        options: [
            "Asignación de recursos bajo el algoritmo FIFO",
            "Implementación del algoritmo de detección y recuperación de deadlock",
            "Evitación del deadlock mediante el algoritmo del banquero",
            "Asignación cíclica de recursos a cada proceso"
        ],
        correctAnswer: 2,
        feedback: "El algoritmo del banquero se utiliza para evitar deadlocks manteniendo al sistema en un estado seguro."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 6: ¿Cuál de las siguientes técnicas NO se utiliza como estrategia para manejar un deadlock?",
        options: ["Prevención", "Detección y recuperación", "Evitación", "Incremento aleatorio de la prioridad de los procesos"],
        correctAnswer: 3,
        feedback: "El incremento aleatorio de la prioridad de los procesos no es una estrategia para manejar deadlocks."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 6: ¿Cuál de las siguientes herramientas de Windows es la más adecuada para diagnosticar y solucionar problemas relacionados con el rendimiento del sistema y los recursos del hardware?",
        options: ["Resource Monitor", "Event Viewer", "System Configuration (msconfig)", "Task Manager"],
        correctAnswer: 0,
        feedback: "Resource Monitor es la herramienta más adecuada para diagnosticar problemas de rendimiento y recursos del hardware."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 6: ¿Qué herramienta permite monitorización de rendimiento en Linux?",
        options: ["Sart", "Vmstat", "Xxtop", "Mnom"],
        correctAnswer: 1,
        feedback: "Vmstat es una herramienta de monitorización de rendimiento en Linux."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: Para la aplicación de incidentes, el departamento TIC necesita implementar un campo en un formulario para seleccionar días. ¿Qué atributo input HTML5 es necesario para mostrar un selector de fechas?",
        options: ["type='calendar'", "type='datetime'", "type='date'", "type='day'"],
        correctAnswer: 2,
        feedback: "El atributo type='date' en HTML5 muestra un selector de fechas."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: En la aplicación, se requiere implementar un sistema de autenticación robusto para proteger el acceso a los datos de los pacientes. ¿Cuál de las siguientes combinaciones de factores de autenticación NO se considera una buena práctica de seguridad?",
        options: [
            "Contraseña + token de hardware (generador de códigos)",
            "Contraseña + dato biométrico (huella dactilar)",
            "Contraseña + pregunta de seguridad + fecha de nacimiento",
            "Contraseña + código de verificación enviado por SMS"
        ],
        correctAnswer: 2,
        feedback: "Contraseña + pregunta de seguridad + fecha de nacimiento no es una buena práctica, ya que son información fácilmente obtenible."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: Para el análisis de la carga de trabajo, se necesita una consulta SQL que obtenga el número total de incidencias por servicio y prioridad. ¿Qué sentencia es correcta?",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: En la aplicación, ¿cuál es la base legitimadora del RGPD que justifica el tratamiento de datos de salud de pacientes que pudieran registrarse en el incidente?",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: Para la implementación del acceso a la base de datos de incidentes, ¿qué código Java previene la inyección SQL?",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: Se han detectado llamadas al personal del hospital, supuestamente desde el servicio de informática, solicitando sus credenciales de acceso a los sistemas, ¿qué tipo de ataque es este?",
        options: ["Phishing tradicional", "Vishing", "Smishing", "Spear phishing"],
        correctAnswer: 1,
        feedback: "Vishing (voice phishing) es el ataque que utiliza llamadas telefónicas para obtener credenciales."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 7: Tras el incidente anterior detectado, y según el Esquema Nacional de Seguridad (ENS), ¿qué medida de seguridad debe reforzarse prioritariamente?",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 8: El cirujano Cuchilla recibirá un SMS en el móvil que ha registrado en Gerhonte, en el que se le informará que ha sido dado de alta en los sistemas del SAS y cual es su usuario correspondiente. ¿Qué aplicación del SAS podrá usar para cambiar autónomamente su contraseña?",
        options: ["MACO", "AGESCON", "TELEMACO", "IDENTIC"],
        correctAnswer: 3,
        feedback: "IDENTIC es la aplicación del SAS que permite cambiar autónomamente la contraseña."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 8: Si las correspondientes reglas están creadas en IDENTIC, el usuario será automáticamente dado de alta en los diferentes módulos de DIRAYA, grupos de directorio activo DMSAS y aplicaciones externas integradas, ¿qué alta NO se da automáticamente desde IDENTIC?",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 8: Durante su primera guardia intenta usar el portátil corporativo que le ha sido entregado, registrado en ALTIRIS e incluido en DMSAS, pero este no conecta. Crea incidencia en AyudaDigital para recibir asistencia. ¿Qué herramienta ha establecido el SAS que debe usar el técnico de AyudaDigital para atenderle?",
        options: ["VNC", "Dameware", "Telemaco", "Teamviewer"],
        correctAnswer: 1,
        feedback: "Dameware es la herramienta establecida por el SAS para que los técnicos de AyudaDigital atiendan incidencias."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 8: Durante las guardias, Cuchilla debe acceder al PC de la unidad de cirugía donde consultar la disponibilidad de bolsas de sangre en el banco del hospital. Para lo que necesitará una conexión VPN corporativa, ¿dónde debe solicitarla y quién debe validarla?",
        options: [
            "El alta de la VPN es automática a través de IDENTIC al ser facultativo, no necesita validación",
            "Solicita el alta en Ayuda Digital, indicando su responsable jerárquico, quien deberá aprobar esta petición, que posteriormente autorizará la DGSIC del SAS",
            "Solicita el alta en Ayuda Digital y es aprobada por el jefe de servicio de la DGSIC del SAS",
            "Solicita el alta en Ayuda Digital y es aprobada por el jefe de servicio de la Agencia Digital de Andalucía (ADA)"
        ],
        correctAnswer: 1,
        feedback: "El alta de VPN se solicita en Ayuda Digital, indicando el responsable jerárquico para aprobación, y posteriormente la autoriza la DGSIC del SAS."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "CASO PRÁCTICO 8: ¿Qué módulo corporativo de DIRAYA podría utilizar para recibir consultas, con datos clínicos e incluso fotos, de otros facultativos de primaria o especializada?",
        options: ["Citaweb", "Telemedicina", "Estación de gestión", "Teleconsulta"],
        correctAnswer: 3,
        feedback: "Teleconsulta es el módulo de DIRAYA que permite recibir consultas con datos clínicos e imágenes de otros facultativos."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "¿En qué fase del ciclo de vida de un sistema de información se definen la arquitectura del sistema, el entorno tecnológico que lo soportará y se especifican detalladamente sus componentes?",
        options: ["Análisis del sistema", "Estudio de viabilidad", "Diseño del sistema", "Construcción del sistema"],
        correctAnswer: 2,
        feedback: "En la fase de Diseño del sistema se definen la arquitectura, el entorno tecnológico y se especifican detalladamente sus componentes."
    },
    {
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
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
        topic: "Examen Técnico FAS TI - Promoción Interna - Práctico",
        question: "¿Qué significa oficialmente el acrónimo PILAR en el contexto de MAGERIT?",
        options: [
            "Programa de Implementación Lógica de Análisis de Redes",
            "Procedimiento Integral de Levantamiento de Arquitecturas Resilientes",
            "Proceso Informático de Localización de Amenazas y Riesgos",
            "Procedimiento Informático-Lógico para el Análisis de Riesgos"
        ],
        correctAnswer: 3,
        feedback: "PILAR significa Procedimiento Informático-Lógico para el Análisis de Riesgos en el contexto de MAGERIT."
    },
];
