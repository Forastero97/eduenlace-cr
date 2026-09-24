/**
 * =========================================================================
 * 1. BASE DE DATOS COMPLETA CON 20 CARRERAS Y DATOS NORMATIVOS OFICIALES
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
            <p><strong>Población Elegible:</strong> Costarricenses por nacimiento o naturalización; Centroamericanos y del Caribe con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio; Estudiantes extranjeras de México y Sudamérica con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio (se resuelve según posibilidades presupuestarias).</p>
            <p><strong>Exoneración de créditos según Categoría Socioeconómica:</strong> Cat 1: 20%, Cat 2: 40%, Cat 3: 60%, Cat 4: 80%, Cat 5: 100%. Contempla ayudas complementarias y beneficios económicos adicionales.</p>
            <p><strong>Periodo de solicitud (Admisión 2027):</strong> Del 2 de diciembre 2026 al 8 de enero 2027 (período para descargar solicitud de categoría de beca, Beca Omar Dengo y Beca Luis Felipe González).</p>
            <p><strong>Beca Luis Felipe González Flores:</strong> Aporte económico mensual en período lectivo + acciones socioeducativas. <em>Requisitos/Obligaciones:</em> Solicitud en período; Tener aprobada y vigente categoría 5; Matricular bloque completo de materias (excepciones Art. 26 y 34); No ser funcionario/a de la UNA; Asistir y cumplir programas institucionales de logro académico en caso de pérdida o rezago.</p>
            <p><strong>Beca Omar Dengo (Residencia Estudiantil):</strong> Aporte económico mensual + ubicación en residencia (Campus Omar Dengo, Benjamín Núñez, Pérez Zeledón, Sarapiquí, Nicoya y Liberia). <em>Requisitos:</em> Solicitud en período ante DBE; Categoría socioeconómica 5 aprobada; Matricular bloque completo (excepciones Art. 26 y 34); Nuevo ingreso: promedio >= 80 en los dos últimos años de secundaria; Regulares: promedio >= 8.0 en período lectivo anterior con 100% de créditos aprobados (excepcionalmente se justifica 1 curso reprobado si asistió y es de alta repitencia); Asistir a programas de logro académico; En renovación: máximo 2 llamadas de atención escritas por incumplir condiciones de residencia; No laborar en institución pública o privada. <em>Obligaciones:</em> Cumplir condiciones de uso de residencia; Participación activa en al menos 1 proyecto de promoción y sana convivencia; Asistir a programas de logro académico.</p>
            <p><strong>Beca de Posgrado:</strong> Aporte económico mensual para grado obtenido en UNA u otra U, admitido en posgrado institucional y de limitada condición socioeconómica. <em>Requisitos:</em> Bloque completo matriculado; Valoración socioeconómica; No pertenecer al funcionariado UNA; Aprobar el 100% de cursos matriculados.</p>
            <p><strong>Beca de Honor:</strong> Exoneración total de créditos. <em>Requisitos:</em> Solicitud en plazo ante DBE; Matricular mínimo 8 créditos trimestrales, 12 en ciclo o 24 anuales (mínimo 12 en período actual); Nuevo ingreso: promedio >= 9.0 en dos últimos años de secundaria Y nota de admisión Y nota >= 9.0; Regulares: año anterior con promedio >= 9.0, matrícula mínima de 24 créditos y 100% aprobados.</p>
            <p><strong>Categorías de Estudiante Asistente:</strong>
                <ul>
                    <li><em>Asistente Académico:</em> Exención 100% créditos + aporte mensual (requiere horas tipo "académico").</li>
                    <li><em>Asistente en Vida Estudiantil:</em> Exención 100% créditos + aporte mensual (requiere horas tipo "vida estudiantil").</li>
                    <li><em>Asistente Graduado:</em> Únicamente aporte económico mensual (requiere horas tipo "graduado").</li>
                    <li><em>Asistente sin aporte económico:</em> Exención 100% créditos (mínimo 1 ciclo lectivo, 10 horas/semana).</li>
                    <li><em>Asistente del Consejo Universitario:</em> Exención 100% créditos + aporte mensual (mínimo 3er nivel).</li>
                </ul>
                <em>Requisitos Asistentes:</em> Matrícula mínima de 6 cr trimestrales, 9 ciclo o 18 anuales; Promedio >= 7.5 (>= 8.0 para Graduado); Mínimo 4h, máximo 20h semanales; No ser funcionario/a UNA; Cuenta en BNCR y registro en SIBEUNA.
            </p>
            <p><strong>Movilidad Internacional e Intercambio de Grado:</strong>
                <ul>
                    <li><em>Ayuda Económica Movilidad:</em> Aporte para eventos, cursos cortos, pasantías y ponencias (Promedio >= 7.5, matrícula mínima, costarricense o residente).</li>
                    <li><em>Becas Intercambio Grado:</em> Promedio >= 8.0, matricular mínimo 4 cursos en U anfitriona y retribuir 1/8 de tiempo sin remuneración por 1 ciclo al regresar.</li>
                </ul>
            </p>
            <p><strong>Becas por Participación Relevante:</strong>
                <ul>
                    <li><em>Artísticas y Deportivas:</em> Integrantes de grupos representativos (www.vidaestudiantil.una.ac.cr/becaarteydeporte). Aprobar mínimo 6 cr trimestrales / 9 ciclo / 18 anuales.</li>
                    <li><em>Movimiento Estudiantil:</em> Directorio FEUNA, TEE, Consejo de Asociaciones, Gobiernos estudiantiles. Exoneración 100% de crédito.</li>
                </ul>
            </p>
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
            <p><strong>Marco General:</strong> Reglamento de Adjudicación de Becas a la Población Estudiantil.</p>
            <p><strong>Población Elegible (Art. 5):</strong> Población estudiantil nacional; Población extranjera con residencia permanente; Población con estatus cubierto por tratados e instrumentos internacionales vigentes en Costa Rica.</p>
            <p><strong>Períodos y Documentación:</strong> Solicitud ante la OBAS (Art. 7). Fechas definidas en el Calendario Estudiantil (Art. 8). Información socioeconómica se actualiza cada 6 años (Art. 15).</p>
            <p><strong>Categorías de Beca Socioeconómica, Exoneración y Beneficios:</strong>
                <ul>
                    <li><em>Beca 1:</em> 45% exoneración | Préstamo para libros, equipo e instrumentos.</li>
                    <li><em>Beca 2:</em> 70% exoneración | Préstamo para libros, equipo e instrumentos.</li>
                    <li><em>Beca 3:</em> 90% exoneración | Subsidio 70% almuerzo; préstamo de libros y dinero.</li>
                    <li><em>Beca 4:</em> 100% exoneración | 50% en laboratorios/deportes/graduación; 100% para transporte o alojamiento.</li>
                    <li><em>Beca 5:</em> 100% exoneración | 100% laboratorios/deportes/graduación; monto económico para gastos de carrera, transporte, alojamiento y alimentación.</li>
                </ul>
            </p>
            <p><strong>Requisitos de Permanencia (UCR):</strong> Consolidar mínimo 12 créditos por ciclo lectivo (proporcional si es menor). Promedio anual >= 7.0 en grado Y >= 8.0 en posgrado. Excepciones justificadas por emergencias de salud o familiares.</p>
            <p><strong>Becas por Actividades Universitarias (Art. 26 - 30):</strong> Beca de Estímulo (personal UCR), Beca por Representación (FEUCR/Consejo U) y Beca por Participación (grupos artísticos, deportivos y Horas Estudiante/Asistente). Exoneración total o parcial de matrícula.</p>
            <p><strong>Beca de Excelencia Académica (Art. 31):</strong> Nota >= 9.0 en PAA de admisión o promedio >= 9.0 en año anterior con mínimo 15 créditos por ciclo.</p>
            <p><strong>Reconocimiento Jorge Debravo (Art. 33):</strong> Galardón nacional/internacional conferido por institución pública. Beneficio: Exoneración de matrícula por 1 año lectivo.</p>
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
            <p><strong>Documentación de Identidad:</strong> Costarricenses: copia de cédula del grupo familiar Y del estudiante. Extranjeros en condición regular: DIMEX vigente.</p>
            <p><strong>Requisitos de Solicitud Socioeconómica:</strong> Encuesta socioeconómica impresa y firmada; Consentimiento informado; Comprobantes de ingresos/gastos; Cuenta activa en el BNCR.</p>
            <p><strong>Periodos de Solicitud TEC:</strong>
                <ul>
                    <li><em>II Semestre 2026:</em> Solicitud del 18 al 22 de junio 2026; Entrega encuesta hasta el 3 de julio 2026.</li>
                    <li><em>I Semestre 2026:</em> Solicitud del 20 al 22 de octubre 2025.</li>
                </ul>
            </p>
            <p><strong>Requisitos de Becas TEC:</strong>
                <ul>
                    <li><em>Beca de Honor:</em> Promedio >= 90; Nota > 80 en cada curso; Bloque completo (asignación automática).</li>
                    <li><em>Horas Estudiante / Asistente:</em> Promedio >= 70 en último semestre; Mínimo 50 horas semestrales (Asistente exige nota >= 80 en el curso asistido). Exoneración 100% + monto económico.</li>
                    <li><em>Beca Egresado Colegio Científico:</em> Promedio >= 90 en IV ciclo; Aprobar mínimo 15 créditos por semestre.</li>
                    <li><em>Beca Participación Destacada:</em> Exoneración 100% con 9 cr, 70% con 6 cr, 40% con 3 cr aprobados (FEITEC/Cultura y Deporte).</li>
                </ul>
            </p>
        `,
        contacto: "Departamento de Becas y Salud / FEITEC / Depto. de Cultura y Deporte - TEC."
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
            <p><strong>Marco Reglamentario:</strong> Reglamento del Sistema de Becas y Beneficios Estudiantiles de la UTN.</p>
            <p><strong>Principios Clave:</strong>
                <ul>
                    <li><em>Principio de Oportunidad Única:</em> Exclusivamente para estudiantes sin título universitario previo (diplomado, bachillerato o licenciatura).</li>
                    <li><em>Carga Académica y Rendimiento:</em> Bloque completo o mínimo aprobado por Vida Estudiantil. Promedio ponderado mínimo de 7.0.</li>
                </ul>
            </p>
            <p><strong>Tipos de Becas y Subsidios:</strong>
                <ul>
                    <li><em>Exoneraciones:</em> Socioeconómica (Categorías 1 a 5 con exoneración del 25% al 100%), Rendimiento Académico y Estímulo/Representación (FEUTN/Arte/Deporte).</li>
                    <li><em>Subsidios Complementarios (Beca 4 y 5):</em> Alimentación (almuerzo/cena), Transporte diario y Residencia/Reubicación Geográfica.</li>
                </ul>
            </p>
            <p><strong>Identificación Oficial Aceptada para Migrantes:</strong> Cédula para nacionales; <strong>Pasaporte al día, DIMEX vigente o Documento Oficial que acredite la condición de Solicitante de Refugio en Costa Rica</strong>. Requiere formulario socioeconómico digital y comprobantes probatorios.</p>
            <p><strong>Periodo de Solicitud UTN:</strong> Del 21 al 25 de setiembre de 2026.</p>
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
            <p><strong>Documentación Requerida UNED:</strong> Identificación vigente; Constancias salariales/orden patronal (asalariados); Declaraciones juradas de ingresos (informales); Certificación de contador (cuenta propia) y comprobantes de pensiones o ayudas. Documentos con emisión no mayor a 1 mes.</p>
            <p><strong>Requisitos de Asignación:</strong> Solicitud 100% virtual en fechas habilitadas web. Estar admitido y empadronado; Residir en Costa Rica; No contar con título de Licenciatura/Posgrado ni beca de otra institución para la misma carrera.</p>
            <p><strong>Categorías y Porcentajes de Exoneración:</strong>
                <ul>
                    <li><em>Categoría A:</em> 100% arancel de matrícula, cuota Federación, asignaturas y graduación.</li>
                    <li><em>Categoría B:</em> 100% cuota inscripción, asignaturas y graduación.</li>
                    <li><em>Categoría C:</em> 75% cuota inscripción, asignaturas y graduación.</li>
                    <li><em>Categoría D:</em> 50% cuota inscripción, asignaturas y graduación.</li>
                    <li><em>Categoría E:</em> 25% cuota inscripción, asignaturas y graduación.</li>
                </ul>
            </p>
            <p><strong>Permanencia Académica:</strong> Cobertura máxima de 12 asignaturas por año. Matricular y aprobar al menos 6 asignaturas al año. Si aprueba entre 3 y 5 materias, baja a la categoría inmediata inferior por 1 periodo. Vigencia hasta 6 años (renovable por 4 años más). Dispone de 1 año para matricular tras ser aprobada.</p>
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
            <p><strong>Documentación Digital:</strong> Solicitud vía SISAE. Identificación: Cédula para mayores; TIM + cédula encargado para menores; <strong>DIMEX vigente para personas extranjeras</strong>. Plazo de 2 días hábiles para enviar documentos; Trabajo Social resuelve en 3 días naturales.</p>
            <p><strong>Requisitos Generales:</strong> Matrícula activa en curso INA o centro público/privado avalado. Condición de pobreza extrema, pobreza o vulnerabilidad (SINIRUBE / Estudio Social).</p>
            <p><strong>Conceptos Cubiertos por Becas INA:</strong> Transporte, Reubicación geográfica, Alimentación, Cuido de personas dependientes, Gastos personales, Conectividad, Productos de apoyo para discapacidad y Apoyo por desempleo.</p>
            <p><strong>Becas para Estudiantes Externos (Centros Públicos/Privados):</strong>
                <ul>
                    <li><em>Elegibilidad:</em> Mayores de 15 años registrados en www.ane.cr en pobreza o vulnerabilidad. Personas desalentadas, desocupadas o con empleo informal.</li>
                    <li><em>Requisitos:</em> Cédula o DIMEX vigente; Inscrito y prematriculado en www.ane.cr; No haber abandonado injustificadamente un programa INA en los últimos 2 años.</li>
                    <li><em>Cancelación:</em> Reprobar materias, abandonar el curso, perder condición de estudiante o incumplir deberes.</li>
                </ul>
            </p>
        `,
        contacto: "Tel: (506) 2210-6000 | Email: informacion@ina.ac.cr | Web: www.ane.cr / www.ina.ac.cr"
    },
    {
        id: 7,
        nombre: "Ministerio de Educación Pública (MEP) - Becas Postsecundaria",
        tipo: "Ministerio / Educación Pública",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vPSDbBXnd-9guT_Z7ExAJXDnMtVtUzBqlYxs_q7GWA&s=10",
        carreras: [
            "Carreras Universitarias Públicas (UCR, UNA, TEC, UTN, UNED)",
            "Carreras Parauniversitarias Públicas (CUNA, CUNLIMON, CUNTAV, etc.)",
            "Carreras en Universidades Privadas (Acreditadas SINAES)",
            "Diplomados Técnicos Superiores",
            "Bachilleratos Universitarios Diversos",
            "Licenciaturas Postsecundarias",
            "Carreras del Área de Salud y Enfermería",
            "Carreras de Educación y Pedagogía",
            "Carreras de Ingeniería y Tecnología",
            "Carreras de Ciencias Económicas",
            "Técnicos Superiores en Informática",
            "Técnicos Superiores en Administración",
            "Carreras de Innovación Tecnológica",
            "Diplomados en Gastronomía y Turismo",
            "Carreras de Ciencias Sociales",
            "Programas de Desarrollo Agropecuario",
            "Especialidades Técnicas Industriales",
            "Licenciaturas en Gestión Ambiental",
            "Carreras de Diseño y Comunicación Digital",
            "Diplomados en Salud Ocupacional"
        ],
        beneficiosMigrantes: `
            <p><strong>Objetivo:</strong> Subsidios económicos para pago de matrícula y materias en centros universitarios y parauniversitarios públicos y privados de todo el país para personas en pobreza extrema, pobreza y vulnerabilidad según SINIRUBE.</p>
            <p><strong>Montos Mensuales de Subsidio:</strong>
                <ul>
                    <li><strong>₡65.740:</strong> De 2 a 3 materias matriculadas por ciclo lectivo.</li>
                    <li><strong>₡105.330:</strong> De 4 materias en adelante por ciclo lectivo.</li>
                </ul>
            </p>
            <p><strong>Requisitos de Solicitud (Art. 14, Inciso 5):</strong>
                <ul>
                    <li>Constancia/Certificación de matrícula firmada y sellada con detalle de nombre, Cédula o DIMEX, materias, centro y carrera.</li>
                    <li>Plan de estudios completo, firmado y sellado.</li>
                    <li>Copia de documento de identificación vigente: <strong>Cédula de Identidad o DIMEX</strong>.</li>
                    <li>Certificación de cuenta cliente e IBAN a nombre del solicitante (máximo 3 meses de emisión).</li>
                    <li>Si estudia en centro público: Constancia detallando si recibe beca institucional y monto.</li>
                </ul>
            </p>
            <p><strong>Periodo:</strong> Solicitudes entre Enero y Febrero vía Módulo de Regionalización Digital (actualmente en pausa presupuestaria con lista de espera).</p>
        `,
        contacto: "Fuente: Ministerio de Educación Pública. (2026). Becas Postsecundaria. https://www.mep.go.cr/becas-postsecundaria"
    },
    {
        id: 8,
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
            "Mercadeo con énfasis en Medios Digitales",
            "Diseño e Interacción Digital",
            "Criminología",
            "Psicología",
            "Ingeniería Biomédica",
            "Ingeniería en Ciberseguridad",
            "Especialidad en Ortodoncia y Ortopedia Funcional",
            "Ingeniería en Circuitos y Sistemas Electrónicos",
            "Contaduría Pública",
            "Publicidad con énfasis en Producción Digital",
            "Administración Hotelera",
            "Ingeniería Química",
            "Enseñanza del Inglés",
            "Maestría en Administración de Empresas (MBA)"
        ],
        beneficiosMigrantes: `
            <p><strong>Población Beneficiaria:</strong> Líderes comunales, de cambio climático, emprendedores, defensores de DDHH, talentos deportivos, artísticos y <strong>personas refugiadas con alto potencial</strong>.</p>
            <p><strong>Compromisos de las Personas Becarias:</strong> Promedio académico mínimo >= 80%; Carga continua de cursos; Respetar Reglamento Estudiantil Y Política de Becas; Participar en servicio comunitario/clubes; Representar con orgullo a ULACIT.</p>
            <p><strong>Ecosistema de Apoyo:</strong> Student Success Center, acompañamiento psicosocial, laboratorios, clínicas y centros de innovación.</p>
            <p><strong>Pasos para Aplicar a la Beca ULACIT:</strong>
                <ol>
                    <li>Promedio ponderado mínimo de 80% en calificaciones.</li>
                    <li>Completar formulario de aplicación a becas de liderazgo en el sitio web.</li>
                    <li>Adjuntar certificación de notas de los dos últimos años.</li>
                    <li>Realizar pruebas, audiciones o actividades del área de liderazgo.</li>
                    <li>Asistir a entrevistas y evaluaciones según el calendario oficial de postulaciones.</li>
                </ol>
            </p>
        `,
        contacto: "Fuente: Universidad Latinoamericana de Ciencia y Tecnología. (2026). Becas ULACIT. https://ulacit.ac.cr/financiamiento-y-becas/becas/"
    },
    {
        id: 9,
        nombre: "Coopelesca - Programa de Becas",
        tipo: "Cooperativa de Electrificación",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs59kfc-KJ6QAmK0BleuX0jZFVtaYASogsAH_gD4_GJw&s=10",
        carreras: [
            "Carreras Universitarias en Sedes Regionales de la Zona Norte (UCR, UNA, UTN, ITCR San Carlos)",
            "Carreras Parauniversitarias y Técnicas Regionales",
            "Educación Secundaria Técnica Agropecuaria y del Sector Servicios",
            "Educación Secundaria Académica",
            "Educación en Centros Educativos Cooperativos",
            "Educación Primaria Completa",
            "Técnicos Agroindustriales",
            "Técnicos en Electricidad y Energías Renovables",
            "Técnicos en Administración Empresarial",
            "Técnicos en Informática y Redes",
            "Técnicos en Gestión Ambiental Regional",
            "Técnicos en Mecánica Agroindustrial",
            "Técnicos en Ecoturismo y Guía Local",
            "Técnicos en Agroecología",
            "Técnicos en Salud Ocupacional",
            "Técnicos en Mantenimiento Eléctrico",
            "Técnicos en Producción Ganadera Sostenible",
            "Técnicos en Logística y Almacenamiento",
            "Técnicos en Contabilidad y Finanzas Rurales",
            "Técnicos en Operaciones Turísticas"
        ],
        beneficiosMigrantes: `
            <p><strong>Ámbito Geográfico:</strong> Dirigido a estudiantes de la Zona Norte del país dentro de la zona de concesión de la Cooperativa.</p>
            <p><strong>Requisitos de Solicitud:</strong>
                <ul>
                    <li>El padre, madre o responsable legal debe ser asociado activo de Coopelesca al día en sus obligaciones.</li>
                    <li>El estudiante NO debe contar con beca otorgada por otra institución.</li>
                    <li>Provenir de familias con limitaciones económicas.</li>
                    <li>Haber aprobado el período académico inmediatamente anterior.</li>
                </ul>
            </p>
            <p><strong>Periodo:</strong> Solicitudes en el mes de Noviembre de cada año.</p>
        `,
        contacto: "Teléfonos de contacto: 2401-2275 o 2401-2875 | Web: https://coopelesca.com/beneficios/becas/"
    }
];

/**
 * Diccionario de beneficios por Categoría Migratoria
 */
const BENEFICIOS_POR_CATEGORIA = {
    residencia: {
        titulo: "Categoría: Residencia Permanente / Persona Regularizada (DIMEX)",
        descripcion: "Acceso total y equiparación completa de derechos socioeconómicos en instituciones estatales y programas públicos:",
        lista: [
            "<strong>TEC:</strong> Elegibilidad completa presentando DIMEX vigente para la Encuesta Socioeconómica, Beca de Honor, Horas Asistente y Beca por Participación Destacada.",
            "<strong>MEP (Becas Postsecundaria):</strong> Opciones de subsidio económico mensual de ₡65.740 (2-3 materias) o ₡105.330 (4+ materias) acreditando copia de DIMEX vigente.",
            "<strong>UNED:</strong> Cobertura en todas las categorías de beca (A a E) con exoneración del 25% al 100% en aranceles y materias presentando DIMEX.",
            "<strong>INA:</strong> Presentación de DIMEX para gestionar ayudas económicas de transporte, alimentación, cuido, alojamiento y Becas para Estudiantes Externos vía ANE.",
            "<strong>UNA y UCR:</strong> Equiparación plena con estudiantes nacionales para exoneración del costo de crédito según categoría socioeconómica (1 a 5) y acceso a residencias estudiantiles."
        ]
    },
    refugiado: {
        titulo: "Categoría: Refugiado Aprobado (Estatus Oficial de Refugio)",
        descripcion: "Normativa que otorga protección y equiparación en universidades públicas y privadas:",
        lista: [
            "<strong>UNA:</strong> Equiparación con residentes permanentes. Acceso a exoneraciones socioeconómicas (Cat 1 al 100% en Cat 5), Beca Luis Felipe González y Beca Omar Dengo (Residencias).",
            "<strong>UCR:</strong> Cobertura amparada en el Art. 5 del Reglamento de Becas para personas bajo tratados e instrumentos internacionales vigentes (Becas 1 a 5).",
            "<strong>UTN:</strong> Admisión formal presentando el documento oficial de refugio para exoneraciones del 25% al 100% y subsidios de alimentación, transporte y reubicación.",
            "<strong>ULACIT:</strong> Programa especial 'Beca de Liderazgo 100%' para personas refugiadas con alto potencial académico, deportivo o artístico."
        ]
    },
    solicitante: {
        titulo: "Categoría: Solicitante de Refugio (Carnet / Documento en Trámite)",
        descripcion: "Opciones institucionales de educación superior con acreditación de solicitud de refugio:",
        lista: [
            "<strong>UTN:</strong> Acepta oficialmente en sus requisitos de identificación el 'Documento oficial que acredite la condición de solicitante de refugio en Costa Rica' para aplicar a becas socioeconómicas.",
            "<strong>UNA:</strong> Permite gestionar la solicitud de categoría socioeconómica, Beca Luis Felipe González y Residencia Omar Dengo acreditando la condición de solicitante de refugio vigente (sujeto a disponibilidad presupuestaria).",
            "<strong>INA:</strong> Posibilidad de valoración mediante estudio de Trabajo Social para ingresar a capacitaciones y recibir ayudas socioeconómicas."
        ]
    },
    categoria_especial: {
        titulo: "Categoría: Régimen Especial / Tratados (Centroamérica, Caribe, México y Sudamérica)",
        descripcion: "Condiciones reguladas bajo convenios bilaterales o regionales e instrumentos internacionales:",
        lista: [
            "<strong>UNA:</strong> Admite solicitudes de beca socioeconómica a estudiantes de Centroamérica, el Caribe, México y Sudamérica en condición regular o solicitantes de refugio (resuelto según disponibilidad presupuestaria).",
            "<strong>UCR:</strong> Acceso a becas socioeconómicas mediante el Art. 5 para estatus cubiertos por instrumentos internacionales de los que Costa Rica sea parte.",
            "<strong>UNED:</strong> Elegible para solicitar becas socioeconómicas (Categorías A-E) siempre que resida en el territorio nacional y cumpla con el proceso virtual."
        ]
    },
    internacional: {
        titulo: "Categoría: Estudiante Internacional / Visa Estudiantil / Sin Regularizar",
        descripcion: "Alternativas para personas en proceso de regularización o con estatus estudiantil:",
        lista: [
            "<strong>ULACIT:</strong> Postulación a Becas de Liderazgo del 100% por mérito académico, artístico o deportivo demostrando promedio mínimo de 80%.",
            "<strong>UNA:</strong> Acceso a programas de Movilidad e Intercambio Académico Internacional mediante convenios específicos con universidades extranjeras.",
            "<strong>Coopelesca:</strong> Becas de apoyo para la Zona Norte si el responsable legal o padre/madre es asociado activo de la cooperativa."
        ]
    }
};

/**
 * =========================================================================
 * 2. CAPTURA DE ELEMENTOS DEL DOM
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

/**
 * =========================================================================
 * 3. LÓGICA DE MODO CLARO / MODO OSCURO
 * =========================================================================
 */
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    if (themeIcon && themeText) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
    }
}

if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        if (isDark) {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Modo Oscuro';
            localStorage.setItem('theme', 'light');
        }
    });
}

/**
 * =========================================================================
 * 4. FUNCIONES DE RENDERIZADO
 * =========================================================================
 */
function renderUniversidades(listado) {
    carouselTrack.innerHTML = ''; 

    if (listado.length === 0) {
        carouselTrack.innerHTML = `
            <p class="no-results" style="padding: 20px;">
                ❌ No se encontraron instituciones o carreras que coincidan con "<strong>${inputBusqueda.value}</strong>".
            </p>
        `;
        return;
    }

    const esUnicoResultado = listado.length === 1;

    listado.forEach(uni => {
        const card = document.createElement('div');
        // Si hay un solo resultado, se le añade la clase 'single-card' para ocupar todo el ancho
        card.className = `uni-card ${esUnicoResultado ? 'single-card' : ''}`;
        
        const carrerasHTML = uni.carreras.map(c => `<li>${c}</li>`).join('');

        card.innerHTML = `
            <img src="${uni.imagenUrl}" alt="Recinto / Edificio de ${uni.nombre}" class="uni-banner" loading="lazy" onerror="this.src='https://picsum.photos/800/300?building'">
            
            <div class="uni-header">
                <h3 class="uni-name">${uni.nombre}</h3>
                <span class="badge">${uni.tipo}</span>
            </div>

            <div class="uni-preview">
                <p>Opciones de becas socioeconómicas, oportunidades de ingreso y oferta académica disponible para postulación.</p>
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
                        <strong>📄 Información Reglamentaria y Normativa Completa:</strong>
                        <div style="margin-top: 8px;">${uni.beneficiosMigrantes}</div>
                    </div>
                    
                    <p class="contacto-text">
                        <strong>Fuente y Contacto:</strong> ${uni.contacto}
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
    
    if (card.classList.contains('expanded')) {
        button.innerHTML = '<span>Ver menos información institucional</span> ▲';
    } else {
        button.innerHTML = '<span>Ver más información institucional</span> ▼';
    }
};

window.toggleCarreras = function(button) {
    const collapsible = button.nextElementSibling;
    collapsible.classList.toggle('hidden');
    
    if (collapsible.classList.contains('hidden')) {
        button.innerHTML = '<span>🎓 Oferta académica</span> ▶';
    } else {
        button.innerHTML = '<span>🎓 Oferta académica</span> ▼';
    }
};

/**
 * =========================================================================
 * 5. NAVEGACIÓN Y BÚSQUEDA
 * =========================================================================
 */
btnNext.addEventListener('click', () => {
    const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 300;
    carouselTrack.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    const cardWidth = carouselTrack.querySelector('.uni-card')?.offsetWidth || 300;
    carouselTrack.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
});

function normalizarTexto(texto) {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

inputBusqueda.addEventListener('input', (e) => {
    const terminoLimpio = normalizarTexto(e.target.value.trim());
    
    if (!terminoLimpio) {
        renderUniversidades(UNIVERSIDADES);
        return;
    }

    const palabrasClave = terminoLimpio.split(/\s+/);

    const filtradas = UNIVERSIDADES.filter(uni => {
        const textoCompletoTarjeta = normalizarTexto(`
            ${uni.nombre} 
            ${uni.tipo} 
            ${uni.carreras.join(' ')} 
            ${uni.beneficiosMigrantes} 
            ${uni.contacto}
        `);

        return palabrasClave.every(palabra => textoCompletoTarjeta.includes(palabra));
    });
    
    renderUniversidades(filtradas);
    carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
});

/**
 * =========================================================================
 * 6. FORMULARIO POR CATEGORÍA
 * =========================================================================
 */
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

/**
 * =========================================================================
 * 7. EJECUCIÓN INICIAL
 * =========================================================================
 */
renderUniversidades(UNIVERSIDADES);
