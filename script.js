/**
 * =========================================================================
 * 1. BASE DE DATOS COMPLETA CON IMÁGENES REALES DE INSTITUCIONES Y DATOS PDF
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
            "Arte y Comunicación Visual"
        ],
        beneficiosMigrantes: `
            <p><strong>Población Elegible:</strong> Costarricenses por nacimiento o naturalización; Centroamericanos y del Caribe con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio; Estudiantes extranjeras de México y Sudamérica con condición migratoria vigente de residente permanente, refugiado o solicitante de refugio (se resuelve según posibilidades presupuestarias)[cite: 8].</p>
            
            <p><strong>Exoneración de créditos según Categoría Socioeconómica:</strong> Cat 1: 20%, Cat 2: 40%, Cat 3: 60%, Cat 4: 80%, Cat 5: 100%[cite: 8]. Contempla ayudas complementarias y beneficios económicos adicionales[cite: 8].</p>

            <p><strong>Periodo de solicitud (Admisión 2027):</strong> Del 2 de diciembre 2026 al 8 de enero 2027 (período para descargar solicitud de categoría de beca, Beca Omar Dengo y Beca Luis Felipe González)[cite: 8].</p>

            <p><strong>Beca Luis Felipe González Flores:</strong> Aporte económico mensual en período lectivo + acciones socioeducativas[cite: 8]. <em>Requisitos/Obligaciones:</em> Solicitud en período; Tener aprobada y vigente categoría 5; Matricular bloque completo de materias (excepciones Art. 26 y 34)[cite: 8]; No ser funcionario/a de la UNA; Asistir y cumplir programas institucionales de logro académico en caso de pérdida o rezago[cite: 8].</p>

            <p><strong>Beca Omar Dengo (Residencia Estudiantil):</strong> Aporte económico mensual + ubicación en residencia (Campus Omar Dengo, Benjamín Núñez, Pérez Zeledón, Sarapiquí, Nicoya y Liberia)[cite: 8]. <em>Requisitos:</em> Solicitud en período ante DBE; Categoría socioeconómica 5 aprobada; Matricular bloque completo (excepciones Art. 26 y 34); Nuevo ingreso: promedio >= 80 en los dos últimos años de secundaria; Regulares: promedio >= 8.0 en período lectivo anterior con 100% de créditos aprobados (excepcionalmente se justifica 1 curso reprobado si asistió y es de alta repitencia)[cite: 8]; Asistir a programas de logro académico; En renovación: máximo 2 llamadas de atención escritas por incumplir condiciones de residencia; No laborar en institución pública o privada[cite: 8]. <em>Obligaciones:</em> Cumplir condiciones de uso de residencia; Participación activa en al menos 1 proyecto de promoción y sana convivencia; Asistir a programas de logro académico[cite: 8].</p>

            <p><strong>Beca de Posgrado:</strong> Aporte económico mensual para grado obtenido en UNA u otra U, admitido en posgrado institucional y de limitada condición socioeconómica[cite: 8]. <em>Requisitos:</em> Bloque completo matriculado; Valoración socioeconómica; No pertenecer al funcionariado UNA; Aprobar el 100% de cursos matriculados[cite: 8].</p>

            <p><strong>Beca de Honor:</strong> Exoneración total de créditos[cite: 8]. <em>Requisitos:</em> Solicitud en plazo ante DBE; Matricular mínimo 8 créditos trimestrales, 12 en ciclo o 24 anuales (mínimo 12 en período actual)[cite: 8]; Nuevo ingreso: promedio >= 9.0 en dos últimos años de secundaria Y nota de admisión Y nota >= 9.0; Regulares: año anterior con promedio >= 9.0, matrícula mínima de 24 créditos y 100% aprobados[cite: 8].</p>

            <p><strong>Categorías de Estudiante Asistente:</strong>
                <ul>
                    <li><em>Asistente Académico:</em> Exención 100% créditos + aporte mensual (requiere horas tipo "académico")[cite: 8].</li>
                    <li><em>Asistente en Vida Estudiantil:</em> Exención 100% créditos + aporte mensual (requiere horas tipo "vida estudiantil")[cite: 8].</li>
                    <li><em>Asistente Graduado:</em> Únicamente aporte económico mensual (requiere horas tipo "graduado")[cite: 8].</li>
                    <li><em>Asistente sin aporte económico:</em> Exención 100% créditos (mínimo 1 ciclo lectivo, 10 horas/semana)[cite: 8].</li>
                    <li><em>Asistente del Consejo Universitario:</em> Exención 100% créditos + aporte mensual (mínimo 3er nivel)[cite: 8].</li>
                </ul>
                <em>Requisitos Asistentes:</em> Matrícula mínima de 6 cr trimestrales, 9 ciclo o 18 anuales; Promedio >= 7.5 (>= 8.0 para Graduado); Mínimo 4h, máximo 20h semanales; No ser funcionario/a UNA; Cuenta en BNCR y registro en SIBEUNA[cite: 8].
            </p>

            <p><strong>Movilidad Internacional e Intercambio de Grado:</strong>
                <ul>
                    <li><em>Ayuda Económica Movilidad:</em> Aporte para eventos, cursos cortos, pasantías y ponencias (Promedio >= 7.5, matrícula mínima, costarricense o residente)[cite: 8].</li>
                    <li><em>Becas Intercambio Grado:</em> Promedio >= 8.0, matricular mínimo 4 cursos en U anfitriona y retribuir 1/8 de tiempo sin remuneración por 1 ciclo al regresar[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Becas por Participación Relevante:</strong>
                <ul>
                    <li><em>Artísticas y Deportivas:</em> Integrantes de grupos representativos (www.vidaestudiantil.una.ac.cr/becaarteydeporte). Aprobar mínimo 6 cr trimestrales / 9 ciclo / 18 anuales[cite: 8].</li>
                    <li><em>Movimiento Estudiantil:</em> Directorio FEUNA, TEE, Consejo de Asociaciones, Gobiernos estudiantiles. Exoneración 100% de crédito[cite: 8].</li>
                </ul>
            </p>
        `,
        contacto: "Fuente: Universidad Nacional. (2026). Sistema de Becas Estudiantiles. Vicerrectoría de Vida Estudiantil. https://www.vidaestudiantil.una.ac.cr/becas[cite: 8]"
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
            "Contaduría Pública"
        ],
        beneficiosMigrantes: `
            <p><strong>Marco General:</strong> Reglamento de Adjudicación de Becas a la Población Estudiantil[cite: 8].</p>

            <p><strong>Población Elegible (Art. 5):</strong> Población estudiantil nacional; Población extranjera con residencia permanente; Población con estatus cubierto por tratados e instrumentos internacionales vigentes en Costa Rica[cite: 8].</p>

            <p><strong>Períodos y Documentación:</strong> Solicitud ante la OBAS (Art. 7)[cite: 8]. Fechas definidas en el Calendario Estudiantil (Art. 8)[cite: 8]. Información socioeconómica se actualiza cada 6 años (Art. 15)[cite: 8].</p>

            <p><strong>Categorías de Beca Socioeconómica, Exoneración y Beneficios:</strong>
                <ul>
                    <li><em>Beca 1:</em> 45% exoneración | Préstamo para libros, equipo e instrumentos[cite: 8].</li>
                    <li><em>Beca 2:</em> 70% exoneración | Préstamo para libros, equipo e instrumentos[cite: 8].</li>
                    <li><em>Beca 3:</em> 90% exoneración | Subsidio 70% almuerzo; préstamo de libros y dinero[cite: 8].</li>
                    <li><em>Beca 4:</em> 100% exoneración | 50% en laboratorios/deportes/graduación; 100% para transporte o alojamiento[cite: 8].</li>
                    <li><em>Beca 5:</em> 100% exoneración | 100% laboratorios/deportes/graduación; monto económico para gastos de carrera, transporte, alojamiento y alimentación[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Requisitos de Permanencia (UCR):</strong> Consolidar mínimo 12 créditos por ciclo lectivo (proporcional si es menor)[cite: 8]. Promedio anual >= 7.0 en grado Y >= 8.0 en posgrado[cite: 8]. Excepciones justificadas por emergencias de salud o familiares[cite: 8].</p>

            <p><strong>Becas por Actividades Universitarias (Art. 26 - 30):</strong> Beca de Estímulo (personal UCR), Beca por Representación (FEUCR/Consejo U) y Beca por Participación (grupos artísticos, deportivos y Horas Estudiante/Asistente)[cite: 8]. Exoneración total o parcial de matrícula[cite: 8].</p>

            <p><strong>Beca de Excelencia Académica (Art. 31):</strong> Nota >= 9.0 en PAA de admisión o promedio >= 9.0 en año anterior con mínimo 15 créditos por ciclo[cite: 8].</p>

            <p><strong>Reconocimiento Jorge Debravo (Art. 33):</strong> Galardón nacional/internacional conferido por institución pública. Beneficio: Exoneración de matrícula por 1 año lectivo[cite: 8].</p>
        `,
        contacto: "Oficina de Becas y Atención Social (OBAS) - Vicerrectoría de Vida Estudiantil, UCR[cite: 8]."
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
            "Diseño Industrial"
        ],
        beneficiosMigrantes: `
            <p><strong>Documentación de Identidad:</strong> Costarricenses: copia de cédula del grupo familiar Y del estudiante[cite: 8]. Extranjeros en condición regular: DIMEX vigente[cite: 8].</p>

            <p><strong>Requisitos de Solicitud Socioeconómica:</strong> Encuesta socioeconómica impresa y firmada; Consentimiento informado; Comprobantes de ingresos/gastos; Cuenta activa en el BNCR[cite: 8].</p>

            <p><strong>Periodos de Solicitud TEC:</strong>
                <ul>
                    <li><em>II Semestre 2026:</em> Solicitud del 18 al 22 de junio 2026; Entrega encuesta hasta el 3 de julio 2026[cite: 8].</li>
                    <li><em>I Semestre 2026:</em> Solicitud del 20 al 22 de octubre 2025[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Requisitos de Becas TEC:</strong>
                <ul>
                    <li><em>Beca de Honor:</em> Promedio >= 90; Nota > 80 en cada curso; Bloque completo (asignación automática)[cite: 8].</li>
                    <li><em>Horas Estudiante / Asistente:</em> Promedio >= 70 en último semestre; Mínimo 50 horas semestrales (Asistente exige nota >= 80 en el curso asistido). Exoneración 100% + monto económico[cite: 8].</li>
                    <li><em>Beca Egresado Colegio Científico:</em> Promedio >= 90 en IV ciclo; Aprobar mínimo 15 créditos por semestre[cite: 8].</li>
                    <li><em>Beca Participación Destacada:</em> Exoneración 100% con 9 cr, 70% con 6 cr, 40% con 3 cr aprobados (FEITEC/Cultura y Deporte)[cite: 8].</li>
                </ul>
            </p>
        `,
        contacto: "Departamento de Becas y Salud / FEITEC / Depto. de Cultura y Deporte - TEC[cite: 8]."
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
            "Ingeniería en Acuicultura"
        ],
        beneficiosMigrantes: `
            <p><strong>Marco Reglamentario:</strong> Reglamento del Sistema de Becas y Beneficios Estudiantiles de la UTN[cite: 8].</p>

            <p><strong>Principios Clave:</strong>
                <ul>
                    <li><em>Principio de Oportunidad Única:</em> Exclusivamente para estudiantes sin título universitario previo (diplomado, bachillerato o licenciatura)[cite: 8].</li>
                    <li><em>Carga Académica y Rendimiento:</em> Bloque completo o mínimo aprobado por Vida Estudiantil. Promedio ponderado mínimo de 7.0[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Tipos de Becas y Subsidios:</strong>
                <ul>
                    <li><em>Exoneraciones:</em> Socioeconómica (Categorías 1 a 5 con exoneración del 25% al 100%), Rendimiento Académico y Estímulo/Representación (FEUTN/Arte/Deporte)[cite: 8].</li>
                    <li><em>Subsidios Complementarios (Beca 4 y 5):</em> Alimentación (almuerzo/cena), Transporte diario y Residencia/Reubicación Geográfica[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Identificación Oficial Aceptada para Migrantes:</strong> Cédula para nacionales; <strong>Pasaporte al día, DIMEX vigente o Documento Oficial que acredite la condición de Solicitante de Refugio en Costa Rica</strong>[cite: 8]. Requiere formulario socioeconómico digital y comprobantes probatorios[cite: 8].</p>

            <p><strong>Periodo de Solicitud UTN:</strong> Del 21 al 25 de setiembre de 2026[cite: 8].</p>
        `,
        contacto: "Fuente: Universidad Técnica Nacional. Solicitud de Beca. https://www.utn.ac.cr/solicitud-de-beca[cite: 8]"
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
            "Manejo de Recursos Naturales"
        ],
        beneficiosMigrantes: `
            <p><strong>Documentación Requerida UNED:</strong> Identificación vigente; Constancias salariales/orden patronal (asalariados); Declaraciones juradas de ingresos (informales); Certificación de contador (cuenta propia) y comprobantes de pensiones o ayudas[cite: 8]. Documentos con emisión no mayor a 1 mes[cite: 8].</p>

            <p><strong>Requisitos de Asignación:</strong> Solicitud 100% virtual en fechas habilitadas web[cite: 8]. Estar admitido y empadronado; Residir en Costa Rica; No contar con título de Licenciatura/Posgrado ni beca de otra institución para la misma carrera[cite: 8].</p>

            <p><strong>Categorías y Porcentajes de Exoneración:</strong>
                <ul>
                    <li><em>Categoría A:</em> 100% arancel de matrícula, cuota Federación, asignaturas y graduación[cite: 8].</li>
                    <li><em>Categoría B:</em> 100% cuota inscripción, asignaturas y graduación[cite: 8].</li>
                    <li><em>Categoría C:</em> 75% cuota inscripción, asignaturas y graduación[cite: 8].</li>
                    <li><em>Categoría D:</em> 50% cuota inscripción, asignaturas y graduación[cite: 8].</li>
                    <li><em>Categoría E:</em> 25% cuota inscripción, asignaturas y graduación[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Permanencia Académica:</strong> Cobertura máxima de 12 asignaturas por año[cite: 8]. Matricular y aprobar al menos 6 asignaturas al año[cite: 8]. Si aprueba entre 3 y 5 materias, baja a la categoría inmediata inferior por 1 periodo[cite: 8]. Vigencia hasta 6 años (renovable por 4 años más)[cite: 8]. Dispone de 1 año para matricular tras ser aprobada[cite: 8].</p>
        `,
        contacto: "Oficina de Atención Socioeconómica (OAS) - UNED, www.uned.ac.cr[cite: 8]."
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
            "Técnico en Contabilidad y Finanzas"
        ],
        beneficiosMigrantes: `
            <p><strong>Documentación Digital:</strong> Solicitud vía SISAE[cite: 8]. Identificación: Cédula para mayores; TIM + cédula encargado para menores; <strong>DIMEX vigente para personas extranjeras</strong>[cite: 8]. Plazo de 2 días hábiles para enviar documentos; Trabajo Social resuelve en 3 días naturales[cite: 8].</p>

            <p><strong>Requisitos Generales:</strong> Matrícula activa en curso INA o centro público/privado avalado[cite: 8]. Condición de pobreza extrema, pobreza o vulnerabilidad (SINIRUBE / Estudio Social)[cite: 8].</p>

            <p><strong>Conceptos Cubiertos por Becas INA:</strong> Transporte, Reubicación geográfica, Alimentación, Cuido de personas dependientes, Gastos personales, Conectividad, Productos de apoyo para discapacidad y Apoyo por desempleo[cite: 8].</p>

            <p><strong>Becas para Estudiantes Externos (Centros Públicos/Privados):</strong>
                <ul>
                    <li><em>Elegibilidad:</em> Mayores de 15 años registrados en www.ane.cr en pobreza o vulnerabilidad[cite: 8]. Personas desalentadas, desocupadas o con empleo informal[cite: 8].</li>
                    <li><em>Requisitos:</em> Cédula o DIMEX vigente; Inscrito y prematriculado en www.ane.cr; No haber abandonado injustificadamente un programa INA en los últimos 2 años[cite: 8].</li>
                    <li><em>Cancelación:</em> Reprobar materias, abandonar el curso, perder condición de estudiante o incumplir deberes[cite: 8].</li>
                </ul>
            </p>
        `,
        contacto: "Tel: (506) 2210-6000 | Email: informacion@ina.ac.cr | Web: www.ane.cr / www.ina.ac.cr[cite: 8]"
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
            "Carreras de Ciencias Económicas"
        ],
        beneficiosMigrantes: `
            <p><strong>Objetivo:</strong> Subsidios económicos para pago de matrícula y materias en centros universitarios y parauniversitarios públicos y privados de todo el país para personas en pobreza extrema, pobreza y vulnerabilidad según SINIRUBE[cite: 8].</p>

            <p><strong>Montos Mensuales de Subsidio:</strong>
                <ul>
                    <li><strong>₡65.740:</strong> De 2 a 3 materias matriculadas por ciclo lectivo[cite: 8].</li>
                    <li><strong>₡105.330:</strong> De 4 materias en adelante por ciclo lectivo[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Requisitos de Solicitud (Art. 14, Inciso 5):</strong>
                <ul>
                    <li>Constancia/Certificación de matrícula firmada y sellada con detalle de nombre, Cédula o DIMEX, materias, centro y carrera[cite: 8].</li>
                    <li>Plan de estudios completo, firmado y sellado[cite: 8].</li>
                    <li>Copia de documento de identificación vigente: <strong>Cédula de Identidad o DIMEX</strong>[cite: 8].</li>
                    <li>Certificación de cuenta cliente e IBAN a nombre del solicitante (máximo 3 meses de emisión)[cite: 8].</li>
                    <li>Si estudia en centro público: Constancia detallando si recibe beca institucional y monto[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Periodo:</strong> Solicitudes entre Enero y Febrero vía Módulo de Regionalización Digital (actualmente en pausa presupuestaria con lista de espera)[cite: 8].</p>
        `,
        contacto: "Fuente: Ministerio de Educación Pública. (2026). Becas Postsecundaria. https://www.mep.go.cr/becas-postsecundaria[cite: 8]"
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
            "Psicología"
        ],
        beneficiosMigrantes: `
            <p><strong>Población Beneficiaria:</strong> Líderes comunales, de cambio climático, emprendedores, defensores de DDHH, talentos deportivos, artísticos y <strong>personas refugiadas con alto potencial</strong>[cite: 8].</p>

            <p><strong>Compromisos de las Personas Becarias:</strong> Promedio académico mínimo >= 80%; Carga continua de cursos; Respetar Reglamento Estudiantil Y Política de Becas; Participar en servicio comunitario/clubes; Representar con orgullo a ULACIT[cite: 8].</p>

            <p><strong>Ecosistema de Apoyo:</strong> Student Success Center, acompañamiento psicosocial, laboratorios, clínicas y centros de innovación[cite: 8].</p>

            <p><strong>Pasos para Aplicar a la Beca ULACIT:</strong>
                <ol>
                    <li>Promedio ponderado mínimo de 80% en calificaciones[cite: 8].</li>
                    <li>Completar formulario de aplicación a becas de liderazgo en el sitio web[cite: 8].</li>
                    <li>Adjuntar certificación de notas de los dos últimos años[cite: 8].</li>
                    <li>Realizar pruebas, audiciones o actividades del área de liderazgo[cite: 8].</li>
                    <li>Asistir a entrevistas y evaluaciones según el calendario oficial de postulaciones[cite: 8].</li>
                </ol>
            </p>
        `,
        contacto: "Fuente: Universidad Latinoamericana de Ciencia y Tecnología. (2026). Becas ULACIT. https://ulacit.ac.cr/financiamiento-y-becas/becas/[cite: 8]"
    },
    {
        id: 9,
        nombre: "Coopelesca - Programa de Becas",
        tipo: "Cooperativa de Electrificación",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs59kfc-KJ6QAmK0BleuX0jZFVtaYASogsAH_gD4_GJw&s=10",
        carreras: [
            "Carreras Universitarias en Sedes Regionales de la Zona Norte (UCR, UNA, UTN, ITCR San Carlos)",
            "Carreras Parauniversitarias y Técnicas Regionales",
            "Educación Secundaria Técnica Agrópecuaria y del Sector Servicios",
            "Educación Secundaria Académica",
            "Educación en Centros Educativos Cooperativos",
            "Educación Primaria Completa",
            "Técnicos Agroindustriales",
            "Técnicos en Electricidad y Energías Renovables",
            "Técnicos en Administración Empresarial",
            "Técnicos en Informática y Redes"
        ],
        beneficiosMigrantes: `
            <p><strong>Ámbito Geográfico:</strong> Dirigido a estudiantes de la Zona Norte del país dentro de la zona de concesión de la Cooperativa[cite: 8].</p>

            <p><strong>Requisitos de Solicitud:</strong>
                <ul>
                    <li>El padre, madre o responsable legal debe ser asociado activo de Coopelesca al día en sus obligaciones[cite: 8].</li>
                    <li>El estudiante NO debe contar con beca otorgada por otra institución[cite: 8].</li>
                    <li>Provenir de familias con limitaciones económicas[cite: 8].</li>
                    <li>Haber aprobado el período académico inmediatamente anterior[cite: 8].</li>
                </ul>
            </p>

            <p><strong>Periodo:</strong> Solicitudes en el mes de Noviembre de cada año[cite: 8].</p>
        `,
        contacto: "Teléfonos de contacto: 2401-2275 o 2401-2875 | Web: https://coopelesca.com/beneficios/becas/[cite: 8]"
    }
];

/**
 * Diccionario de beneficios por Categoría Migratoria en Costa Rica
 */
const BENEFICIOS_POR_CATEGORIA = {
    residencia: {
        titulo: "Categoría: Residencia Permanente / Persona Regularizada (DIMEX)",
        descripcion: "Acceso total y equiparación completa de derechos socioeconómicos en instituciones estatales y programas públicos:",
        lista: [
            "<strong>TEC:</strong> Elegibilidad completa presentando DIMEX vigente para la Encuesta Socioeconómica, Beca de Honor, Horas Asistente y Beca por Participación Destacada[cite: 8].",
            "<strong>MEP (Becas Postsecundaria):</strong> Opciones de subsidio económico mensual de ₡65.740 (2-3 materias) o ₡105.330 (4+ materias) acreditando copia de DIMEX vigente[cite: 8].",
            "<strong>UNED:</strong> Cobertura en todas las categorías de beca (A a E) con exoneración del 25% al 100% en aranceles y materias presentando DIMEX[cite: 8].",
            "<strong>INA:</strong> Presentación de DIMEX para gestionar ayudas económicas de transporte, alimentación, cuido, alojamiento y Becas para Estudiantes Externos vía ANE[cite: 8].",
            "<strong>UNA y UCR:</strong> Equiparación plena con estudiantes nacionales para exoneración del costo de crédito según categoría socioeconómica (1 a 5) y acceso a residencias estudiantiles[cite: 8]."
        ]
    },
    refugiado: {
        titulo: "Categoría: Refugiado Aprobado (Estatus Oficial de Refugio)",
        descripcion: "Normativa que otorga protección y equiparación en universidades públicas y privadas:",
        lista: [
            "<strong>UNA:</strong> Equiparación con residentes permanentes. Acceso a exoneraciones socioeconómicas (Cat 1 al 100% en Cat 5), Beca Luis Felipe González y Beca Omar Dengo (Residencias)[cite: 8].",
            "<strong>UCR:</strong> Cobertura amparada en el Art. 5 del Reglamento de Becas para personas bajo tratados e instrumentos internacionales vigentes (Becas 1 a 5)[cite: 8].",
            "<strong>UTN:</strong> Admisión formal presentando el documento oficial de refugio para exoneraciones del 25% al 100% y subsidios de alimentación, transporte y reubicación[cite: 8].",
            "<strong>ULACIT:</strong> Programa especial 'Beca de Liderazgo 100%' para personas refugiadas con alto potencial académico, deportivo o artístico[cite: 8]."
        ]
    },
    solicitante: {
        titulo: "Categoría: Solicitante de Refugio (Carnet / Documento en Trámite)",
        descripcion: "Opciones institucionales de educación superior con acreditación de solicitud de refugio:",
        lista: [
            "<strong>UTN:</strong> Acepta oficialmente en sus requisitos de identificación el 'Documento oficial que acredite la condición de solicitante de refugio en Costa Rica' para aplicar a becas socioeconómicas[cite: 8].",
            "<strong>UNA:</strong> Permite gestionar la solicitud de categoría socioeconómica, Beca Luis Felipe González y Residencia Omar Dengo acreditando la condición de solicitante de refugio vigente (sujeto a disponibilidad presupuestaria)[cite: 8].",
            "<strong>INA:</strong> Posibilidad de valoración mediante estudio de Trabajo Social para ingresar a capacitaciones y recibir ayudas socioeconómicas[cite: 8]."
        ]
    },
    categoria_especial: {
        titulo: "Categoría: Régimen Especial / Tratados (Centroamérica, Caribe, México y Sudamérica)",
        descripcion: "Condiciones reguladas bajo convenios bilaterales o regionales e instrumentos internacionales:",
        lista: [
            "<strong>UNA:</strong> Admite solicitudes de beca socioeconómica a estudiantes de Centroamérica, el Caribe, México y Sudamérica en condición regular o solicitantes de refugio (resuelto según disponibilidad presupuestaria)[cite: 8].",
            "<strong>UCR:</strong> Acceso a becas socioeconómicas mediante el Art. 5 para estatus cubiertos por instrumentos internacionales de los que Costa Rica sea parte[cite: 8].",
            "<strong>UNED:</strong> Elegible para solicitar becas socioeconómicas (Categorías A-E) siempre que resida en el territorio nacional y cumpla con el proceso virtual[cite: 8]."
        ]
    },
    internacional: {
        titulo: "Categoría: Estudiante Internacional / Visa Estudiantil / Sin Regularizar",
        descripcion: "Alternativas para personas en proceso de regularización o con estatus estudiantil:",
        lista: [
            "<strong>ULACIT:</strong> Postulación a Becas de Liderazgo del 100% por mérito académico, artístico o deportivo demostrando promedio mínimo de 80%[cite: 8].",
            "<strong>UNA:</strong> Acceso a programas de Movilidad e Intercambio Académico Internacional mediante convenios específicos con universidades extranjeras[cite: 8].",
            "<strong>Coopelesca:</strong> Becas de apoyo para la Zona Norte si el responsable legal o padre/madre es asociado activo de la cooperativa[cite: 8]."
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

/**
 * =========================================================================
 * 3. FUNCIONES DE RENDERIZADO DEL CARRUSEL Y DESPLEGABLES
 * =========================================================================
 */

function renderUniversidades(listado) {
    carouselTrack.innerHTML = ''; 

    if (listado.length === 0) {
        carouselTrack.innerHTML = `
            <p class="no-results">
                ❌ No se encontraron instituciones o carreras que coincidan con "<strong>${inputBusqueda.value}</strong>".<br>
                Intenta con términos como: <em>Sistemas, Medicina, UCR, UNA, TEC, UTN, INA, Refugio o DIMEX</em>.
            </p>
        `;
        return;
    }

    listado.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'uni-card';
        
        const carrerasHTML = uni.carreras.map(c => `<li>${c}</li>`).join('');

        card.innerHTML = `
            <img src="${uni.imagenUrl}" alt="Recinto / Edificio de ${uni.nombre}" class="uni-banner" loading="lazy" onerror="this.src='https://picsum.photos/800/300?building'">
            
            <div class="uni-header">
                <h3 class="uni-name">${uni.nombre}</h3>
                <span class="badge">${uni.tipo}</span>
            </div>

            <div class="uni-preview">
                <p>Opciones de becas socioeconómicas, oportunidades de ingreso y carreras destacadas disponibles para postulación.</p>
            </div>

            <div class="btn-toggle-container">
                <button type="button" class="btn-toggle" onclick="toggleCard(this)">
                    <span>Ver más información</span> ▼
                </button>
            </div>

            <div class="uni-collapsible">
                <div class="uni-body">
                    <h4>Oferta académica</h4>
                    <ul class="carreras-ul">${carrerasHTML}</ul>
                    
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

// Función global para expandir/plegar tarjeta individualmente
window.toggleCard = function(button) {
    const card = button.closest('.uni-card');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        button.innerHTML = '<span>Ver menos información</span> ▲';
    } else {
        button.innerHTML = '<span>Ver más información</span> ▼';
    }
};

/**
 * =========================================================================
 * 4. LÓGICA DE CONTROL DEL CARRUSEL Y NAVEGACIÓN
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

/**
 * =========================================================================
 * 5. BUSCADOR EN TIEMPO REAL
 * =========================================================================
 */

inputBusqueda.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    
    const filtradas = UNIVERSIDADES.filter(uni => {
        const coincideNombre = uni.nombre.toLowerCase().includes(termino);
        const coincideTipo = uni.tipo.toLowerCase().includes(termino);
        const coincideCarreras = uni.carreras.some(c => c.toLowerCase().includes(termino));
        const coincideDetalle = uni.beneficiosMigrantes.toLowerCase().includes(termino);
        const coincideContacto = uni.contacto.toLowerCase().includes(termino);
        
        return coincideNombre || coincideTipo || coincideCarreras || coincideDetalle || coincideContacto;
    });
    
    renderUniversidades(filtradas);
    carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
});

/**
 * =========================================================================
 * 6. FORMULARIO DE CONSULTA POR CATEGORÍA MIGRATORIA
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
