/**
 * =========================================================================
 * 1. BASE DE DATOS ACTUALIZADA
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
            <p><strong>Población Elegible para Becas Socioeconómicas:</strong> Costarricenses por nacimiento o naturalización; Centroamericanos y del Caribe (excluyendo el Caribe fuera de Centroamérica) con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio; Estudiantes extranjeras de México y Sudamérica con condición vigente de residente permanente, refugiado o solicitante de refugio (según disponibilidad presupuestaria).</p>
            <p><strong>⚠️ Restricción Importante:</strong> Las personas con Régimen Especial o Categoría Especial otorgada por Migración y Extranjería, así como personas del Caribe fuera de Centroamérica, <strong>NO pueden optar por becas socioeconómicas</strong> en la UNA, a menos que cuenten con una solicitud de refugio tramitada o el estatus de refugio aprobado.</p>
            <p><strong>Exoneración de créditos según Categoría Socioeconómica:</strong> Cat 1: 20%, Cat 2: 40%, Cat 3: 60%, Cat 4: 80%, Cat 5: 100%. Contempla ayudas complementarias y beneficios económicos adicionales.</p>
            <p><strong>Periodo de solicitud (Admisión 2027):</strong> Del 2 de diciembre 2026 al 8 de enero 2027.</p>
            <p><strong>Beca Luis Felipe González Flores:</strong> Aporte económico mensual durante el período lectivo para quienes cuenten con Categoría 5 aprobada.</p>
            <p><strong>Beca Omar Dengo (Residencia Estudiantil):</strong> Aporte mensual y residencia para estudiantes de escasos recursos o zonas alejadas (Campus Omar Dengo, Benjamín Núñez, Pérez Zeledón, Sarapiquí, Nicoya y Liberia).</p>
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
            "Antropología",
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
            <p><strong>Población Elegible para Becas Socioeconómicas (Art. 5):</strong> Población estudiantil nacional; Población extranjera con residencia permanente; <strong>Personas en condición de Solicitante de Refugio o Refugiado Aprobado</strong>; y personas con estatus cubierto por tratados e instrumentos internacionales vigentes en Costa Rica.</p>
            <p><strong>Categorías de Beca Socioeconómica, Exoneración y Beneficios:</strong>
                <ul>
                    <li><em>Beca 1:</em> 45% exoneración | Préstamo para libros y equipos.</li>
                    <li><em>Beca 2:</em> 70% exoneración | Préstamo para libros y equipos.</li>
                    <li><em>Beca 3:</em> 90% exoneración | Subsidio del 70% en almuerzo, préstamo de libros y dinero.</li>
                    <li><em>Beca 4:</em> 100% exoneración | 50% en laboratorios/actividades; 100% transporte o alojamiento.</li>
                    <li><em>Beca 5:</em> 100% exoneración | 100% en laboratorios/actividades; monto económico mensual para gastos de carrera, transporte, alojamiento y alimentación.</li>
                </ul>
            </p>
            <p><strong>Requisitos de Permanencia:</strong> Consolidar mínimo 12 créditos por ciclo lectivo y mantener un promedio ponderado anual o modificado igual o superior a 7.0.</p>
        `,
        contacto: "Oficina de Becas y Atención Social (OBAS) - Vicerrectoría de Vida Estudiantil, UCR."
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
            "Arquitectura",
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
            <p><strong>Documentación de Identidad:</strong> Costarricenses: copia de cédula del grupo familiar. Extranjeros en condición regular: DIMEX vigente.</p>
            <p><strong>Requisitos de Solicitud Socioeconómica:</strong> Encuesta socioeconómica, consentimiento informado, comprobantes de ingresos/gastos y cuenta bancaria en el BNCR.</p>
            <p><strong>Periodos de Solicitud:</strong>
                <ul>
                    <li><em>II Semestre 2026:</em> Solicitud del 18 al 22 de junio 2026.</li>
                    <li><em>I Semestre 2026:</em> Solicitud del 20 al 22 de octubre 2025.</li>
                </ul>
            </p>
        `,
        contacto: "Departamento de Becas y Salud / FEITEC - TEC."
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
            <p><strong>Identificación Aceptada para Migrantes:</strong> Cédula para nacionales. En el caso de personas migrantes, se requiere pasaporte al día, DIMEX vigente o <strong>Documento Oficial que acredite la condición de Solicitante de Refugio en Costa Rica</strong>.</p>
            <p><strong>Tipos de Becas:</strong> Exoneraciones socioeconómicas (25% al 100%) y subsidios de alimentación, transporte y reubicación para categorías 4 y 5.</p>
            <p><strong>Periodo de Solicitud:</strong> Del 21 al 25 de setiembre de 2026.</p>
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
            <p><strong>Requisitos para Asignación:</strong> Solicitud 100% virtual en fechas habilitadas. Estar admitido, residir en el país y contar con documento de identificación vigente.</p>
            <p><strong>Categorías de Beca:</strong> Exoneraciones del 25% al 100% (Categorías A a E) en aranceles de matrícula, asignaturas y derechos de graduación.</p>
        `,
        contacto: "Oficina de Atención Socioeconómica (OAS) - UNED, www.uned.ac.cr."
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
            <p><strong>Requisitos de Identificación:</strong> Cédula para mayores, TIM para menores y DIMEX vigente para personas extranjeras.</p>
            <p><strong>Beneficios:</strong> Ayudas económicas de transporte, alimentación, alojamiento y cuido de dependientes para población en vulnerabilidad socioeconómica.</p>
        `,
        contacto: "Tel: (506) 2210-6000 | Email: informacion@ina.ac.cr | Web: www.ane.cr"
    },
    {
        id: 7,
        nombre: "Ministerio de Educación Pública (MEP) - Becas Postsecundaria",
        tipo: "Ministerio / Educación Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vPSDbBXnd-9guT_Z7ExAJXDnMtVtUzBqlYxs_q7GWA&s=10",
        carreras: [
            "Carreras Universitarias Públicas (UCR, UNA, TEC, UTN, UNED)",
            "Carreras Parauniversitarias Públicas",
            "Carreras en Universidades Privadas (Acreditadas SINAES)",
            "Diplomados Técnicos Superiores",
            "Bachilleratos Universitarios Diversos"
        ],
        beneficiosMigrantes: `
            <p><strong>Subsidios Económicos Mensuales:</strong> ₡65.740 (de 2 a 3 materias) o ₡105.330 (4 materias en adelante) para estudiantes en condición de pobreza extrema, pobreza o vulnerabilidad (según SINIRUBE).</p>
            <p><strong>Requisito de Identificación:</strong> Copia de Cédula de Identidad o DIMEX vigente.</p>
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
            "Estudios Parauniversitarios y Institutos Técnicos Superior",
            "Educación Secundaria Técnica y Académica",
            "Educación Primaria"
        ],
        beneficiosMigrantes: `
            <p><strong>Cobertura y Becas Universitarias:</strong> Coopelesca brinda becas económicas destinadas a estudios universitarios y parauniversitarios.</p>
            <p><strong>Condición Migratoria:</strong> <strong>No importa la categoría migratoria</strong> que posea el estudiante, siempre y cuando se encuentre <strong>vigente</strong>.</p>
            <p><strong>Requisitos de Aplicación:</strong>
                <ul>
                    <li>Demostrar condición de limitación socioeconómica.</li>
                    <li>Ser asociado cooperativo de Coopelesca o hijo/a de un asociado activo al día con sus obligaciones.</li>
                    <li>Residir en la zona de concesión de la Cooperativa (Zona Norte / San Carlos) y contar con algún servicio activo (por ejemplo, electrificación).</li>
                    <li>No contar con beca otorgada por otra institución.</li>
                </ul>
            </p>
            <p><strong>Periodo de Solicitud:</strong> Durante el mes de Noviembre de cada año.</p>
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
            <p><strong>Beca de Liderazgo 100%:</strong> Dirigida a líderes comunales, emprendedores, talentos deportivos/artísticos y <strong>personas refugiadas con alto potencial</strong>.</p>
            <p><strong>Requisito Académico:</strong> Promedio ponderado mínimo de 80% en los últimos dos años de estudio.</p>
        `,
        contacto: "Fuente: ULACIT. (2026). Becas ULACIT. https://ulacit.ac.cr/financiamiento-y-becas/becas/"
    }
];

/**
 * DICCIONARIO DE BENEFICIOS POR CATEGORÍA MIGRATORIA
 */
const BENEFICIOS_POR_CATEGORIA = {
    residencia: {
        titulo: "Categoría: Residencia Permanente / Persona Regularizada (DIMEX)",
        descripcion: "Acceso total a beneficios socioeconómicos en universidades e instituciones públicas:",
        lista: [
            "<strong>UNA:</strong> Elegible para solicitar beca socioeconómica (Categorías 1 a 5), Beca Luis Felipe González y Beca Omar Dengo (Residencias Estudiantiles).",
            "<strong>UCR:</strong> Equiparación total para postular a Becas Socioeconómicas (Categorías 1 a 5) y beneficios complementarios.",
            "<strong>TEC:</strong> Elegibilidad completa presentando DIMEX vigente para Encuesta Socioeconómica y horas asistente.",
            "<strong>MEP & UNED:</strong> Acreditación con DIMEX para el cobro de subsidios mensuales o exoneraciones de matrícula del 25% al 100%."
        ]
    },
    refugiado: {
        titulo: "Categoría: Refugiado Aprobado (Estatus Oficial)",
        descripcion: "Protección y equiparación plena de derechos estudiantiles en Costa Rica:",
        lista: [
            "<strong>UNA:</strong> Equiparación plena. Exoneraciones de crédito según condición socioeconómica, ayuda económica mensual y residencias estudiantiles.",
            "<strong>UCR:</strong> Elegible bajo el Art. 5 del Reglamento de Becas para optar por becas de la 1 a la 5.",
            "<strong>UTN:</strong> Admisión formal presentando el documento oficial de refugio para exoneraciones del 25% al 100%.",
            "<strong>ULACIT:</strong> Acceso a la Beca de Liderazgo 100% para personas refugiadas con alto promedio académico."
        ]
    },
    solicitante: {
        titulo: "Categoría: Solicitante de Refugio (Documento / Carnet en Trámite)",
        descripcion: "Opciones confirmadas de educación superior que reconocen el trámite de refugio:",
        lista: [
            "<strong>UNA:</strong> Acceso permitido para solicitar Categoría de Beca Socioeconómica, Beca Luis Felipe González y Residencia Omar Dengo.",
            "<strong>UCR:</strong> Elegible para la postulación de becas socioeconómicas (Categorías 1 a 5).",
            "<strong>UTN:</strong> Requisito oficial que reconoce la acreditación de solicitante de refugio para procesar solicitudes de beca.",
            "<strong>INA:</strong> Posibilidad de ingreso y evaluación de ayudas económicas tras estudio de Trabajo Social."
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
 * 2. CONTROL DEL DOM Y LOGICA DEL SISTEMA
 * =========================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
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

    // MODO CLARO / OSCURO FUNCIONAL Y PERSISTENTE
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeText) themeText.textContent = 'Modo Claro';
    } else {
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeText) themeText.textContent = 'Modo Oscuro';
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

    // RENDERIZADO DE TARJETAS
    function renderUniversidades(listado) {
        if (!carouselTrack) return;
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
                                <span>🎓 Oferta académica</span> ▶
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

    // BUSCADOR EN TIEMPO REAL
    function normalizarTexto(texto) {
        return (texto || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    if (inputBusqueda) {
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
    }

    // NAVEGACIÓN DEL CARRUSEL
    if (btnNext && btnPrev) {
        btnNext.addEventListener('click', () => {
            const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 350;
            carouselTrack.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 350;
            carouselTrack.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
        });
    }

    // FORMULARIO CATEGORÍA MIGRATORIA
    if (formEstatus) {
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
    }

    // INICIALIZACIÓN
    renderUniversidades(UNIVERSIDADES);
});

// FUNCIONES GLOBALES PARA COLAPSABLES
window.toggleCard = function(button) {
    const card = button.closest('.uni-card');
    card.classList.toggle('expanded');
    button.innerHTML = card.classList.contains('expanded') ? '<span>Ver menos información</span> ▲' : '<span>Ver más información institucional</span> ▼';
};

window.toggleCarreras = function(button) {
    const collapsible = button.nextElementSibling;
    collapsible.classList.toggle('hidden');
    button.innerHTML = collapsible.classList.contains('hidden') ? '<span>🎓 Oferta académica</span> ▶' : '<span>🎓 Oferta académica</span> ▼';
};
