/**
 * =========================================================================
 * 1. BASE DE DATOS DETALLADA DE INSTITUCIONES
 * =========================================================================
 */
const UNIVERSIDADES = [
    {
        id: 1,
        nombre: "Universidad Nacional (UNA)",
        tipo: "Universidad Pública",
        imagenUrl: "https://i0.wp.com/surcosdigital.com/wp-content/uploads/2022/11/UNA.jpg?fit=1024%2C768&ssl=1",
        carreras: [
            "Ingeniería en Sistemas de Información",
            "Relaciones Internacionales",
            "Administración de Empresas",
            "Medicina Veterinaria",
            "Biología Marina",
            "Química Industrial",
            "Sociología",
            "Pedagogía con especialidad en Educación Primaria",
            "Comercio y Negocios Internacionales",
            "Arte y Comunicación Visual",
            "Ingeniería en Agronomía",
            "Economía",
            "Enfermería",
            "Geografía",
            "Ingeniería Forestal",
            "Educación Física y Deportes",
            "Danza",
            "Música con Énfasis en Ejecución o Enseñanza",
            "Psicología",
            "Traducción e Interpretación Francés-Español"
        ],
        beneficiosMigrantes: `
            <p><strong>Población Elegible para Becas Socioeconómicas:</strong></p>
            <ul>
                <li>Costarricenses por nacimiento o naturalización.</li>
                <li>Personas de Centroamérica y del Caribe (excluyendo el Caribe fuera de Centroamérica) con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio.</li>
                <li>Estudiantes extranjeras de México y Sudamérica con condición vigente de residente permanente, refugiado o solicitante de refugio (sujeto a disponibilidad presupuestaria).</li>
            </ul>
            <p><strong>⚠️ Restricción Importante:</strong> Las personas con Régimen Especial o Categoría Especial otorgada por la Dirección General de Migración y Extranjería, así como personas de la región del Caribe ubicada fuera de Centroamérica, <strong>NO pueden optar por becas socioeconómicas</strong> en la UNA, a menos que cuenten con una solicitud de refugio tramitada o el estatus de refugio aprobado.</p>
            <p><strong>Exoneración de créditos según Categoría Socioeconómica:</strong></p>
            <ul>
                <li>Categoría 1: Exoneración del 20% en los derechos de estudio.</li>
                <li>Categoría 2: Exoneración del 40% en los derechos de estudio.</li>
                <li>Categoría 3: Exoneración del 60% en los derechos de estudio.</li>
                <li>Categoría 4: Exoneración del 80% en los derechos de estudio.</li>
                <li>Categoría 5: Exoneración del 100% en los derechos de estudio.</li>
            </ul>
            <p><strong>Beneficios Complementarios:</strong></p>
            <ul>
                <li><strong>Beca Luis Felipe González Flores:</strong> Aporte económico mensual asignado durante el período lectivo para estudiantes con Categoría 5 aprobada.</li>
                <li><strong>Beca Omar Dengo (Residencia Estudiantil):</strong> Aporte mensual y residencia para estudiantes con limitaciones socioeconómicas provenientes de zonas alejadas (Sedes Omar Dengo, Benjamín Núñez, Pérez Zeledón, Sarapiquí, Nicoya y Liberia).</li>
            </ul>
            <p><strong>Periodo de solicitud (Admisión 2027):</strong> Del 2 de diciembre de 2026 al 8 de enero de 2027.</p>
        `,
        contacto: "Fuente: Universidad Nacional. (2026). Sistema de Becas Estudiantiles. Vicerrectoría de Vida Estudiantil. https://www.vidaestudiantil.una.ac.cr/becas"
    },
    {
        id: 2,
        nombre: "Universidad de Costa Rica (UCR)",
        tipo: "Universidad Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtGp-bgU8rTbjcVl1y-rQkJLyK1onA1kWbg53PuRTLPq0F-Bpxd4BJ3o&s=10",
        carreras: [
            "Medicina y Cirugía",
            "Derecho",
            "Ingeniería Industrial",
            "Informática Empresarial",
            "Microbiología y Química Clínica",
            "Arquitectura",
            "Farmacia",
            "Ingeniería Eléctrica",
            "Psicología",
            "Contaduría Pública",
            "Odontología",
            "Ingeniería Civil",
            "Ingeniería Química",
            "Biología",
            "Dirección de Empresas",
            "Trabajo Social",
            "Nutrición",
            "Geología",
            "Artes Plásticas",
            "Ingeniería Agronómica"
        ],
        beneficiosMigrantes: `
            <p><strong>Población Elegible para Becas Socioeconómicas (Art. 5):</strong></p>
            <ul>
                <li>Población estudiantil nacional.</li>
                <li>Población extranjera con residencia permanente.</li>
                <li><strong>Personas en condición de Solicitante de Refugio o Refugiado Aprobado.</strong></li>
                <li>Personas con estatus cubierto por tratados e instrumentos internacionales vigentes en Costa Rica.</li>
            </ul>
            <p><strong>Categorías de Beca Socioeconómica y Coberturas:</strong></p>
            <ul>
                <li><em>Beca 1:</em> 45% de exoneración en matrícula | Préstamo de libros y materiales.</li>
                <li><em>Beca 2:</em> 70% de exoneración en matrícula | Préstamo de libros y materiales.</li>
                <li><em>Beca 3:</em> 90% de exoneración en matrícula | Subsidio del 70% en almuerzo, préstamo de libros y ayuda económica.</li>
                <li><em>Beca 4:</em> 100% de exoneración en matrícula | 50% en laboratorios o cursos prácticos | 100% transporte o alojamiento según residencia.</li>
                <li><em>Beca 5:</em> 100% de exoneración en matrícula | 100% en laboratorios o actividades complementarias | Monto económico mensual asignado para gastos de carrera, transporte, alojamiento y alimentación.</li>
            </ul>
            <p><strong>Requisitos de Permanencia:</strong> Matricular y consolidar un mínimo de 12 créditos por ciclo lectivo y mantener un promedio ponderado anual o modificado igual o superior a 7.0.</p>
        `,
        contacto: "Oficina de Becas y Atención Social (OBAS) - Vicerrectoría de Vida Estudiantil, UCR. https://becas.ucr.ac.cr"
    },
    {
        id: 3,
        nombre: "Tecnológico de Costa Rica (TEC)",
        tipo: "Universidad Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN-yRlOI_NtbZFCpTjgwo7HODZndGvYdksjlrX_WCBPW9i3M24hDdw7hx&s=10",
        carreras: [
            "Ingeniería en Computación",
            "Ingeniería Mecatrónica",
            "Ingeniería Industrial",
            "Ingeniería en Biotecnología",
            "Ingeniería Electrónica",
            "Ingeniería en Construcción",
            "Administración de Empresas",
            "Ingeniería Ambiental",
            "Ingeniería Agrícola",
            "Diseño Industrial",
            "Ingeniería en Materiales",
            "Ingeniería en Mantenimiento Industrial",
            "Ingeniería en Seguridad Laboral e Higiene Ambiental",
            "Ingeniería Forestal",
            "Ingeniería en Física",
            "Administración de Tecnologías de Información",
            "Ingeniería en Computadores",
            "Gestión del Turismo Sostenible",
            "Ingeniería Agronegocios",
            "Enseñanza de la Matemática Asistida por Computadora"
        ],
        beneficiosMigrantes: `
            <p><strong>Requisitos de Documentación para Solicitud de Beca:</strong></p>
            <ul>
                <li>Estudiantes costarricenses: copia de cédula del grupo familiar.</li>
                <li>Estudiantes extranjeros en condición regular: DIMEX vigente (Residencia Permanente, Temporal o Refugio Aprobado).</li>
            </ul>
            <p><strong>Proceso Socioeconómico:</strong> Llenado de encuesta socioeconómica, firma de consentimiento informado, comprobantes probatorios de ingresos y egresos familiares, y apertura de cuenta bancaria en el Banco Nacional de Costa Rica.</p>
            <p><strong>Fechas Clave de Solicitud:</strong></p>
            <ul>
                <li><em>II Semestre 2026:</em> Recepción del 18 al 22 de junio de 2026.</li>
                <li><em>I Semestre 2026:</em> Recepción del 20 al 22 de octubre de 2025.</li>
            </ul>
        `,
        contacto: "Departamento de Becas y Salud / Federación de Estudiantes del TEC (FEITEC). https://www.tec.ac.cr"
    },
    {
        id: 4,
        nombre: "Universidad Técnica Nacional (UTN)",
        tipo: "Universidad Pública",
        imagenUrl: "https://utn.ac.cr/sites/default/files/IMG_9447%281%29.jpg",
        carreras: [
            "Ingeniería en Software",
            "Administración y Gestión de Empresas",
            "Ingeniería en Electrónica",
            "Contaduría Pública",
            "Ingeniería Agroindustrial",
            "Gestión Turística Sostenible",
            "Ingeniería en Salud Ocupacional y Ambiente",
            "Gestión de Redes y Sistemas Operativos",
            "Diseño Gráfico",
            "Ingeniería en Acuicultura",
            "Gestión y Dirección de Empresas Turísticas",
            "Ingeniería en Agronomía",
            "Ingeniería en Producción Industrial",
            "Gestión Ecoturística",
            "Ingeniería en Calidad",
            "Comercio Exterior",
            "Asistencia Administrativa",
            "Gestión de Recursos Humanos",
            "Tecnología Alimentaria",
            "Ingeniería en Electromecánica"
        ],
        beneficiosMigrantes: `
            <p><strong>Documentos de Identificación Aceptados:</strong> Cédula de identidad para nacionales. Para estudiantes migrantes se requiere pasaporte al día, DIMEX vigente o <strong>Documento Oficial que acredite la condición de Solicitante de Refugio en Costa Rica</strong>.</p>
            <p><strong>Tipos de Becas Ofrecidas:</strong></p>
            <ul>
                <li>Exoneración socioeconómica gradual de matrícula y créditos (25%, 50%, 75% y 100%).</li>
                <li>Subsidios económicos directos para alimentación, transporte y reubicación geográfica para beneficiarios en categorías de mayor vulnerabilidad (Categorías 4 y 5).</li>
            </ul>
            <p><strong>Periodo de Solicitud:</strong> Del 21 al 25 de septiembre de 2026.</p>
        `,
        contacto: "Fuente: Universidad Técnica Nacional. Solicitud de Beca. https://www.utn.ac.cr/solicitud-de-beca"
    },
    {
        id: 5,
        nombre: "Universidad Estatal a Distancia (UNED)",
        tipo: "Universidad Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7vvYgv-cnvhIRgtbvc6ep9K2XYor8oGnIii7Hosbpg&s=10",
        carreras: [
            "Administración de Empresas",
            "Ingeniería Informática",
            "Criminología",
            "Docencia (I y II Ciclos)",
            "Ingeniería Agroindustrial",
            "Gestión Turística Sostenible",
            "Educación Preescolar",
            "Administración de Servicios de Salud",
            "Ingeniería Industrial",
            "Manejo de Recursos Naturales",
            "Educación Especial",
            "Gestión Municipal",
            "Ingeniería Agronómica",
            "Registros y Estadísticas de Salud",
            "Administración Policial",
            "Enseñanza del Inglés",
            "Gestión y Administración Ambiental",
            "Ciencias Policiales",
            "Estudios Generales",
            "Enseñanza de las Ciencias Naturales"
        ],
        beneficiosMigrantes: `
            <p><strong>Requisitos de Asignación:</strong> Solicitud 100% virtual a través del entorno de estudiantes en las fechas establecidas. El estudiante debe estar formalmente admitido, residir en el país y presentar documento de identificación vigente (Cédula o DIMEX).</p>
            <p><strong>Niveles de Exoneración Socioeconómica:</strong></p>
            <ul>
                <li>Categorías A a E con exoneraciones del 25%, 50%, 75% y 100% en los derechos de matrícula, asignaturas y derechos de graduación.</li>
            </ul>
        `,
        contacto: "Oficina de Atención Socioeconómica (OAS) - UNED. https://www.uned.ac.cr"
    },
    {
        id: 6,
        nombre: "Instituto Nacional de Aprendizaje (INA)",
        tipo: "Institución Autónoma / Técnica",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ_JuVSFiDPQgH41A7rUDklejy25Ito7PZcg8VhxcJjKY_hrqWB4RIQ8&s=10",
        carreras: [
            "Técnico en Ciberseguridad",
            "Técnico en Programación de Aplicaciones Web",
            "Técnico en Mecánica Automotriz",
            "Técnico en Gastronomía y Cocina",
            "Técnico en Electricidad Industrial",
            "Técnico en Refrigeración y Aire Acondicionado",
            "Técnico en Logística e Inventarios",
            "Técnico en Soporte de Redes y TI",
            "Técnico en Estética y Belleza Integral",
            "Técnico en Contabilidad y Finanzas",
            "Técnico en Diseño y Desarrollo Web",
            "Técnico en Soldadura Industrial",
            "Técnico en Electrónica Industrial",
            "Técnico en Operaciones Agrícolas",
            "Técnico en Control de Calidad",
            "Técnico en Mercadeo Digital y Ventas",
            "Técnico en Asistencia Administrativa",
            "Técnico en Manipulación Higiénica de Alimentos",
            "Técnico en Mecanizado Industrial",
            "Técnico en Mantenimiento de Sistemas Informáticos"
        ],
        beneficiosMigrantes: `
            <p><strong>Requisitos de Identificación Aceptados:</strong> Cédula de identidad para nacionales mayores de edad, Tarjeta de Identificación de Menores (TIM) y DIMEX vigente para personas extranjeras en condición regular.</p>
            <p><strong>Ayudas Económicas Directas:</strong> Subsidios económicos para transporte, alimentación, alojamiento y cuido de personas dependientes para estudiantes evaluados en situación de pobreza o vulnerabilidad socioeconómica mediante estudio de Trabajo Social.</p>
        `,
        contacto: "Teléfono: (506) 2210-6000 | Correo: informacion@ina.ac.cr | Web: https://www.ane.cr"
    },
    {
        id: 7,
        nombre: "Ministerio de Educación Pública (MEP) - Becas Postsecundaria",
        tipo: "Ministerio / Educación Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vPSDbBXnd-9guT_Z7ExAJXDnMtVtUzBqlYxs_q7GWA&s=10",
        carreras: [
            "Carreras Universitarias Públicas (UCR, UNA, TEC, UTN, UNED)",
            "Carreras Parauniversitarias Públicas",
            "Carreras en Universidades Privadas (Acreditadas por SINAES)",
            "Diplomados Técnicos Superiores",
            "Bachilleratos Universitarios Diversos"
        ],
        beneficiosMigrantes: `
            <p><strong>Subsidios Económicos Mensuales Directos:</strong></p>
            <ul>
                <li>₡65.740 mensuales para estudiantes matriculados en 2 a 3 materias.</li>
                <li>₡105.330 mensuales para estudiantes matriculados en 4 materias o más.</li>
            </ul>
            <p><strong>Población Meta y Requisitos:</strong> Dirigido a estudiantes en condición de pobreza extrema, pobreza u otra situación de vulnerabilidad evaluada por el SINIRUBE. Requiere presentación de Cédula de Identidad o DIMEX vigente.</p>
        `,
        contacto: "Fuente: Ministerio de Educación Pública. (2026). Becas Postsecundaria. https://www.mep.go.cr/becas-postsecundaria"
    },
    {
        id: 8,
        nombre: "Coopelesca - Programa de Becas",
        tipo: "Cooperativa de Electrificación",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs59kfc-KJ6QAmK0BleuX0jZFVtaYASogsAH_gD4_GJw&s=10",
        carreras: [
            "Estudios Universitarios en Sedes Regionales de la Zona Norte",
            "Estudios Parauniversitarios e Institutos Técnicos Superiores",
            "Educación Secundaria Técnica y Académica",
            "Educación Primaria"
        ],
        beneficiosMigrantes: `
            <p><strong>Cobertura y Becas Universitarias:</strong> Coopelesca otorga becas económicas financieras directas para la realización de estudios universitarios y parauniversitarios.</p>
            <p><strong>Condición Migratoria:</strong> <strong>No importa la categoría migratoria</strong> que posea el estudiante, siempre y cuando su documento se encuentre <strong>vigente</strong> al momento de presentar la postulación.</p>
            <p><strong>Requisitos Fundamentales:</strong></p>
            <ul>
                <li>Demostrar una condición real de limitación socioeconómica mediante estudio.</li>
                <li>Ser asociado cooperativo de Coopelesca o hijo/a de un asociado activo al día con sus obligaciones.</li>
                <li>Residir en la zona de concesión de la Cooperativa (Zona Norte / San Carlos y cantones aledaños) y contar con algún servicio activo registrado (por ejemplo, servicio de electrificación).</li>
                <li>No contar con beca otorgada por otra institución para el mismo fin.</li>
            </ul>
            <p><strong>Periodo de Solicitud:</strong> Las inscripciones se habilitan anualmente durante el mes de noviembre.</p>
        `,
        contacto: "Teléfonos: 2401-2275 / 2401-2875 | Web: https://coopelesca.com/beneficios/becas/"
    },
    {
        id: 9,
        nombre: "Universidad Latinoamericana de Ciencia y Tecnología (ULACIT)",
        tipo: "Universidad Privada",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VE-Eub4bwliAa5hTQYGyDuDtj7q72rAt2SOInt5Yzg&s=10",
        carreras: [
            "Ingeniería en Informática",
            "Administración de Negocios",
            "Derecho",
            "Odontología",
            "Relaciones Internacionales",
            "Ingeniería Industrial",
            "Criminología",
            "Psicología"
        ],
        beneficiosMigrantes: `
            <p><strong>Beca de Liderazgo (hasta 100% de cobertura):</strong> Programa enfocado en líderes comunales, emprendedores, personas con méritos deportivos/artísticos y <strong>personas refugiadas con alto potencial de desarrollo</strong>.</p>
            <p><strong>Requisito Académico:</strong> Mantener un promedio ponderado de notas igual o superior a 80% en los últimos dos años de estudio cursados.</p>
        `,
        contacto: "Fuente: ULACIT. (2026). Becas ULACIT. https://ulacit.ac.cr/financiamiento-y-becas/becas/"
    }
];

/**
 * =========================================================================
 * 2. DICCIONARIO DE BENEFICIOS POR CATEGORÍA MIGRATORIA
 * =========================================================================
 */
const BENEFICIOS_POR_CATEGORIA = {
    residencia: {
        titulo: "Categoría: Residencia Permanente / Persona Regularizada (DIMEX)",
        descripcion: "Acceso total a beneficios socioeconómicos en universidades e instituciones públicas:",
        lista: [
            "<strong>UNA:</strong> Elegible para solicitar beca socioeconómica (Categorías 1 a 5), Beca Luis Felipe González y Beca Omar Dengo (Residencias Estudiantiles).",
            "<strong>UCR:</strong> Equiparación total para postular a Becas Socioeconómicas (Categorías 1 a 5) y beneficios complementarios de alimentación, alojamiento y transporte.",
            "<strong>TEC:</strong> Elegibilidad completa presentando DIMEX vigente para Encuesta Socioeconómica y postulación a horas asistente o becas socioeconómicas.",
            "<strong>MEP & UNED:</strong> Acreditación con DIMEX para el cobro de subsidios mensuales o exoneraciones de matrícula del 25% al 100%."
        ]
    },
    refugiado: {
        titulo: "Categoría: Refugiado Aprobado (Estatus Oficial)",
        descripcion: "Protección y equiparación plena de derechos estudiantiles en Costa Rica:",
        lista: [
            "<strong>UNA:</strong> Equiparación plena. Exoneraciones de crédito según condición socioeconómica, ayuda económica mensual y residencias estudiantiles.",
            "<strong>UCR:</strong> Elegible bajo el Art. 5 del Reglamento de Becas para optar por becas de la 1 a la 5 en igualdad de condiciones.",
            "<strong>UTN:</strong> Admisión formal presentando el documento oficial de refugio para procesar exoneraciones del 25% al 100%.",
            "<strong>ULACIT:</strong> Acceso a la Beca de Liderazgo 100% para personas refugiadas con alto promedio académico."
        ]
    },
    solicitante: {
        titulo: "Categoría: Solicitante de Refugio (Documento / Carnet en Trámite)",
        descripcion: "Opciones confirmadas de educación superior que reconocen el trámite de refugio:",
        lista: [
            "<strong>UNA:</strong> Acceso permitido para solicitar Categoría de Beca Socioeconómica, Beca Luis Felipe González y Residencia Omar Dengo.",
            "<strong>UCR:</strong> Elegible para la postulación de becas socioeconómicas (Categorías 1 a 5) según la normativa vigente.",
            "<strong>UTN:</strong> Requisito oficial que reconoce la acreditación de solicitante de refugio para procesar solicitudes de beca.",
            "<strong>INA:</strong> Posibilidad de ingreso y evaluación de ayudas económicas tras estudio socioeconómico de Trabajo Social."
        ]
    },
    categoria_especial: {
        titulo: "Categoría: Régimen Especial / Categoría Especial / Convenios",
        descripcion: "Regulaciones específicas para categorías migratorias especiales:",
        lista: [
            "<strong>⚠️ UNA:</strong> Las personas con Régimen Especial o Categoría Especial dada por migración, así como del Caribe fuera de Centroamérica, <strong>NO pueden optar por becas socioeconómicas</strong>, salvo que cuenten con una solicitud de refugio o refugio aprobado.",
            "<strong>UCR:</strong> Válido para personas cubiertas por convenios o instrumentos internacionales ratificados por Costa Rica.",
            "<strong>Coopelesca:</strong> Permite solicitar becas universitarias con cualquier categoría migratoria mientras esté vigente y sea asociado de San Carlos."
        ]
    },
    coopelesca: {
        titulo: "Categoría: Asociados y Estudiantes de Coopelesca (Zona Norte / San Carlos)",
        descripcion: "Beneficios de becas económicas universitarias para la Zona Norte:",
        lista: [
            "<strong>Flexibilidad Migratoria:</strong> Acepta cualquier categoría migratoria siempre que se encuentre vigente.",
            "<strong>Requisitos:</strong> Ser asociado activo o familiar de un asociado (con servicio activo de electrificación o similar), residir en la zona de concesión y demostrar limitaciones socioeconómicas.",
            "<strong>Nivel de Estudios:</strong> Cubre carreras en universidades públicas, privadas y centros parauniversitarios."
        ]
    },
    internacional: {
        titulo: "Categoría: Estudiante Internacional / Visa Estudiantil / Sin Regularizar",
        descripcion: "Opciones generales de beca o financiamiento por mérito:",
        lista: [
            "<strong>Coopelesca:</strong> Acepta cualquier estatus migratorio vigente para residentes de la Zona Norte asociados a la cooperativa.",
            "<strong>ULACIT:</strong> Postulación a Beca de Liderazgo (hasta 100%) por mérito académico, deportivo o artístico (promedio mínimo de 80%)."
        ]
    }
};

/**
 * =========================================================================
 * 3. CONTROL DEL DOM Y LOGICA DEL SISTEMA
 * =========================================================================
 */
const carouselTrack = document.getElementById('carousel-track');
const inputBusqueda = document.getElementById('input-busqueda');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const formEstatus = document.getElementById('form-estatus');
const selectCategoria = document.getElementById('select-categoria');
const resultBox = document.getElementById('result-box');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultList = document.getElementById('result-list');

const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// MODO CLARO / OSCURO
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Modo Claro';
}

if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        themeText.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// RENDERIZADO DE CARDS
function renderUniversidades(listado) {
    carouselTrack.innerHTML = ''; 

    if (listado.length === 0) {
        carouselTrack.innerHTML = `<p class="no-results" style="padding: 20px;">❌ No se encontraron coincidencias para "<strong>${inputBusqueda.value}</strong>".</p>`;
        return;
    }

    const esUnicoResultado = listado.length === 1;

    listado.forEach(uni => {
        const card = document.createElement('div');
        card.className = `uni-card ${esUnicoResultado ? 'single-card' : ''}`;
        
        const carrerasHTML = uni.carreras.map(c => `<li>${c}</li>`).join('');

        card.innerHTML = `
            <img src="${uni.imagenUrl}" alt="Imagen de ${uni.nombre}" class="uni-banner" loading="lazy" onerror="this.src='https://picsum.photos/800/300?building'">
            
            <div class="uni-header">
                <h3 class="uni-name">${uni.nombre}</h3>
                <span class="badge">${uni.tipo}</span>
            </div>

            <div class="uni-preview">
                <p>Opciones de becas socioeconómicas, requisitos migratorios y oferta académica.</p>
            </div>

            <div class="btn-toggle-container">
                <button type="button" class="btn-toggle" onclick="toggleCard(this)">
                    <span>Ver más información institucional</span> ▼
                </button>
            </div>

            <div class="uni-collapsible">
                <div class="uni-body">
                    <div class="carreras-dropdown-container">
                        <button type="button" class="btn-carreras-toggle" onclick="toggleCarreras(this)">
                            <span>🎓 Oferta académica (${uni.carreras.length} carreras)</span> ▶
                        </button>
                        <div class="carreras-collapsible hidden">
                            <ul class="carreras-ul">${carrerasHTML}</ul>
                        </div>
                    </div>
                    
                    <div class="alert-box">
                        <strong>📄 Detalles Normativos y Becas:</strong>
                        <div style="margin-top: 8px;">${uni.beneficiosMigrantes}</div>
                    </div>
                    
                    <p class="contacto-text">
                        <strong>Fuente:</strong> ${uni.contacto}
                    </p>
                </div>
            </div>
        `;
        
        carouselTrack.appendChild(card);
    });
}

window.toggleCard = function(button) {
    const card = button.closest('.uni-card');
    card.classList.toggle('expanded');
    button.innerHTML = card.classList.contains('expanded') ? '<span>Ver menos información</span> ▲' : '<span>Ver más información institucional</span> ▼';
};

window.toggleCarreras = function(button) {
    const collapsible = button.nextElementSibling;
    collapsible.classList.toggle('hidden');
    button.innerHTML = collapsible.classList.contains('hidden') ? `<span>🎓 Oferta académica</span> ▶` : `<span>🎓 Oferta académica</span> ▼`;
};

// NAVEGACIÓN DEL CARRUSEL
btnNext.addEventListener('click', () => {
    const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 420;
    carouselTrack.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 420;
    carouselTrack.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
});

// NORMALIZADOR PARA BÚSQUEDAS SENSITIVAS
function normalizarTexto(texto) {
    return (texto || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

inputBusqueda.addEventListener('input', (e) => {
    const terminoLimpio = normalizarTexto(e.target.value.trim());
    if (!terminoLimpio) {
        renderUniversidades(UNIVERSIDADES);
        return;
    }

    const palabrasClave = terminoLimpio.split(/\s+/);
    const filtradas = UNIVERSIDADES.filter(uni => {
        const textoCompleto = normalizarTexto(`${uni.nombre} ${uni.tipo} ${uni.carreras.join(' ')} ${uni.beneficiosMigrantes} ${uni.contacto}`);
        return palabrasClave.every(palabra => textoCompleto.includes(palabra));
    });
    
    renderUniversidades(filtradas);
});

// FORMULARIO CATEGORÍA MIGRATORIA
formEstatus.addEventListener('submit', (e) => {
    e.preventDefault();
    const categoria = selectCategoria.value;
    const datos = BENEFICIOS_POR_CATEGORIA[categoria];

    if (datos) {
        resultTitle.textContent = datos.titulo;
        resultDescription.textContent = datos.descripcion;
        resultList.innerHTML = '';
        datos.lista.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            resultList.appendChild(li);
        });
        resultBox.classList.remove('hidden');
    }
});

// INICIALIZACIÓN
renderUniversidades(UNIVERSIDADES);
