/**
 * =========================================================================
 * 1. BASE DE DATOS LOCAL (MOCK DATA)
 * =========================================================================
 * Aquí se almacena la información que alimentará al buscador. Puedes agregar,
 * quitar o modificar los objetos de este arreglo según lo necesites.
 */
const UNIVERSIDADES = [
    {
        id: 1,
        nombre: "Universidad de Costa Rica (UCR)",
        tipo: "Pública",
        carreras: ["Informática Empresarial", "Ingeniería Industrial", "Medicina", "Derecho"],
        beneficiosMigrantes: "Exoneración de matrícula por condición de refugio, convenios de validación de títulos con el Ministerio de Relaciones Exteriores y acceso a becas socioeconómicas completas.",
        contacto: "Oficina de Becas y Atención Social (OBAS)"
    },
    {
        id: 2,
        nombre: "Universidad Nacional (UNA)",
        tipo: "Pública",
        carreras: ["Sistemas de Información", "Administración", "Sociología", "Relaciones Internacionales"],
        beneficiosMigrantes: "Exención de cobros de matrícula diferenciada para extranjeros si cuentan con estatus de refugio (pagan como nacionales). Cupos especiales de vulnerabilidad.",
        contacto: "Departamento de Registro y Vida Estudiantil"
    },
    {
        id: 3,
        nombre: "Universidad Tecnológica Costarricense (Ejemplo)",
        tipo: "Privada",
        carreras: ["Ingeniería del Software", "Diseño Gráfico"],
        beneficiosMigrantes: "Beca de asistencia del 20% en las mensualidades regulares al presentar el carnet de solicitud de refugio emitido por Migración.",
        contacto: "Departamento de Admisiones y Mercadeo"
    }
];

/**
 * Diccionario de beneficios según el estatus detectado por el documento.
 */
const BENEFICIOS_POR_ESTATUS = {
    refugiado: {
        titulo: "Estatus: Refugiado Aprobado",
        descripcion: "Usted cuenta con plenos derechos de equiparación de costos de matrícula en la educación superior pública.",
        lista: [
            "Pago de aranceles idéntico al de un ciudadano costarricense.",
            "Acceso completo a postulación de becas socioeconómicas, de residencia y alimentación.",
            "Procesos específicos de validación de títulos previos mediante ACNUR."
        ]
    },
    solicitante: {
        titulo: "Estatus: Solicitante de Refugio",
        descripcion: "Aunque tu condición está en trámite, existen alternativas de apoyo vigentes en Costa Rica.",
        lista: [
            "Permiso de estudio válido ante los consejos universitarios utilizando tu carnet provisional.",
            "Acceso a programas institucionales de extensión comunitaria y cursos técnicos gratuitos.",
            "Elegibilidad para convenios de asistencia financiera en universidades privadas aliadas."
        ]
    },
    dimex: {
        titulo: "Estatus: Residencia Regularizada (DIMEX)",
        descripcion: "Tu estatus de residencia facilita los trámites ordinarios de ingreso.",
        lista: [
            "Acceso a financiamiento educativo estatal (CONAPE) bajo las regulaciones de residencia.",
            "Procesos de convalidación regulares ante el CONARE."
        ]
    },
    desconocido: {
        titulo: "Estatus No Identificado",
        descripcion: "El formato del documento no coincide con las alertas automáticas.",
        lista: [
            "Te recomendamos acercarte a la oficina de orientación académica de la universidad o contactar directamente a las agencias de apoyo al refugiado (como ACNUR o HIAS) para validar tu caso de forma personalizada."
        ]
    }
};


/**
 * =========================================================================
 * 2. SELECCIÓN DE ELEMENTOS DEL DOM (HTML)
 * =========================================================================
 * Enlazamos las variables de JavaScript con las etiquetas idénticas del HTML.
 */
const gridUniversidades = document.getElementById('grid-universidades');
const inputBusqueda = document.getElementById('input-busqueda');
const formEstatus = document.getElementById('form-estatus');
const inputDocumento = document.getElementById('input-documento');

// Elementos de la caja de resultados
const resultBox = document.getElementById('result-box');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultList = document.getElementById('result-list');


/**
 * =========================================================================
 * 3. FUNCIONES DE RENDERIZADO Y LÓGICA
 * =========================================================================
 */

/**
 * Limpia el contenedor de la pantalla e inyecta las tarjetas de las universidades
 * @param {Array} listado - Arreglo de objetos de universidades a mostrar
 */
function renderUniversidades(listado) {
    // 1. Limpiar lo que haya adentro actualmente
    gridUniversidades.innerHTML = ''; 

    // 2. Si no hay coincidencias, mostrar un mensaje amigable
    if (listado.length === 0) {
        gridUniversidades.innerHTML = `
            <p class="no-results">
                No se encontraron universidades o carreras que coincidan con tu búsqueda. 
                Prueba con términos generales como "Informática" o "UCR".
            </p>
        `;
        return;
    }

    // 3. Crear y agregar la tarjeta de cada universidad al contenedor
    listado.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'uni-card';
        
        card.innerHTML = `
            <div class="uni-header">
                <h3 class="uni-name">${uni.nombre}</h3>
                <span class="badge">${uni.tipo}</span>
            </div>
            <div class="uni-body">
                <h4>Oferta Académica Destacada:</h4>
                <p class="carreras-list">${uni.carreras.join(', ')}</p>
                
                <div class="alert-box">
                    <strong>🌱 Apoyo Migrante / Refugio:</strong>
                    <p style="margin: 5px 0 0 0">${uni.beneficiosMigrantes}</p>
                </div>
                
                <p class="contacto-text">
                    <strong>Contacto de Gestión:</strong> ${uni.contacto}
                </p>
            </div>
        `;
        
        gridUniversidades.appendChild(card);
    });
}


/**
 * =========================================================================
 * 4. ESCUCHADORES DE EVENTOS (EVENT LISTENERS)
 * =========================================================================
 */

/**
 * Escucha lo que el usuario escribe en el buscador
 */
inputBusqueda.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    
    // Filtramos si el nombre de la U o alguna de sus carreras contiene el término escrito
    const universidadesFiltradas = UNIVERSIDADES.filter(uni => {
        const coincideNombre = uni.nombre.toLowerCase().includes(terminoBusqueda);
        const coincideCarrera = uni.carreras.some(carrera => carrera.toLowerCase().includes(terminoBusqueda));
        
        return coincideNombre || coincideCarrera;
    });
    
    // Volvemos a dibujar las tarjetas con el filtro aplicado
    renderUniversidades(universidadesFiltradas);
});

/**
 * Escucha el envío del formulario de identidad
 */
formEstatus.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue sola
    
    const documentoValue = inputDocumento.value.trim();
    let estatusDetectado = 'desconocido';

    // Algoritmo de simulación basado en formatos de identificación comunes en CR
    if (documentoValue.startsWith('115') || documentoValue.length === 12) {
        estatusDetectado = 'refugiado';
    } else if (documentoValue.startsWith('155')) {
        estatusDetectado = 'solicitante';
    } else if (documentoValue.length === 9) {
        estatusDetectado = 'dimex';
    }

    // Extraer la información correspondiente del diccionario
    const datosEstatus = BENEFICIOS_POR_ESTATUS[estatusDetectado];

    // Inyectar el texto en el cuadro de resultados del HTML
    resultTitle.textContent = datosEstatus.titulo;
    resultDescription.textContent = datosEstatus.descripcion;
    
    // Limpiar viñetas anteriores e inyectar las nuevas
    resultList.innerHTML = '';
    datosEstatus.lista.forEach(beneficio => {
        const li = document.createElement('li');
        li.textContent = beneficio;
        resultList.appendChild(li);
    });

    // Mostrar el cuadro de resultados eliminando la clase que lo oculta
    resultBox.classList.remove('hidden');
});


/**
 * =========================================================================
 * 5. EJECUCIÓN INICIAL
 * =========================================================================
 * Carga el listado completo de universidades de forma automática la primera vez que abre la web.
 */
renderUniversidades(UNIVERSIDADES);