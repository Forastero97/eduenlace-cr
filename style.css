/* =========================================================================
   ESTILOS GENERALES Y PALETA: AZULES, ROJOS Y BLANCO
   =========================================================================
   - Azul 1 (Profundo): #0a192f
   - Azul 2 (Marino): #1e3a8a
   - Azul 3 (Cobalto): #2563eb
   - Rojo 1 (Rubí): #991b1b
   - Rojo 2 (Carmesí): #dc2626
   - Rojo 3 (Coral): #f87171
   - Blanco: #ffffff / Fondo neutro: #f8fafc
   ========================================================================= */

body {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #f8fafc; /* Blanco grisáceo neutro */
    color: #0f172a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* --- HEADER Y NAVEGACIÓN --- */
.main-header {
    background: linear-gradient(135deg, #0a192f 0%, #1e3a8a 60%, #2563eb 100%); /* Degradado de los 3 tonos de azul */
    color: #ffffff;
    padding: 25px 20px;
    border-bottom: 5px solid #dc2626; /* Detalle Rojo Carmesí */
    box-shadow: 0 4px 14px rgba(10, 25, 47, 0.25);
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.logo {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ffffff;
}

.sub-logo {
    color: #ffffff;
    background-color: #dc2626; /* Fondo Rojo Carmesí */
    padding: 2px 8px;
    border-radius: 6px;
    margin-left: 4px;
}

.tagline {
    font-size: 14px;
    font-style: italic;
    color: #e2e8f0;
}

/* --- CONTENIDO PRINCIPAL Y SECCIONES --- */
.main-content {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
}

.section-card {
    background-color: #ffffff;
    border-radius: 14px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);
    border-left: 7px solid #1e3a8a; /* Borde Azul Marino */
    position: relative;
}

/* Alternancia cromática para la segunda tarjeta */
.section-card:nth-of-type(2) {
    border-left-color: #991b1b; /* Borde Rojo Rubí */
}

.section-title {
    margin: 0 0 10px 0;
    color: #0a192f; /* Azul Profundo */
    font-size: 24px;
    font-weight: 700;
}

.section-subtitle {
    margin: 0 0 20px 0;
    color: #475569;
    line-height: 1.6;
}

/* --- FORMULARIOS E INPUTS --- */
.form-inline {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

input[type="text"] {
    flex: 1;
    min-width: 220px;
    padding: 14px;
    border-radius: 8px;
    border: 2px solid #cbd5e1;
    font-size: 15px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    background-color: #ffffff;
}

input[type="text"]:focus {
    outline: none;
    border-color: #2563eb; /* Azul Cobalto */
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.18);
}

.input-full {
    width: 100%;
    margin-bottom: 25px;
}

.button-primary {
    background-color: #dc2626; /* Rojo Carmesí */
    color: #ffffff;
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 3px 8px rgba(220, 38, 38, 0.3);
}

.button-primary:hover {
    background-color: #991b1b; /* Rojo Rubí */
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(153, 27, 27, 0.4);
}

/* --- CAJA DE RESULTADOS DE DOCUMENTO --- */
.result-box {
    margin-top: 25px;
    padding: 22px 25px;
    background-color: #eff6ff; /* Fondo Azul clarito */
    border-left: 7px solid #2563eb; /* Azul Cobalto */
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
}

.result-box h3 {
    margin: 0 0 10px 0;
    color: #1e3a8a; /* Azul Marino */
}

.result-box ul {
    margin: 10px 0 0 0;
    padding-left: 20px;
}

.result-box li {
    margin-bottom: 8px;
    line-height: 1.5;
}

/* =========================================================================
   CARRUSEL DE INSTITUCIONES (ESTILO INSTAGRAM FEED)
   ========================================================================= */
.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.carousel-track {
    display: flex;
    gap: 22px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding: 10px 5px 25px 5px;
    width: 100%;
    -webkit-overflow-scrolling: touch;
}

.carousel-track::-webkit-scrollbar {
    height: 10px;
}

.carousel-track::-webkit-scrollbar-thumb {
    background: #dc2626; /* Scrollbar Rojo Carmesí */
    border-radius: 5px;
}

/* FLECHAS DE NAVEGACIÓN LATERAL */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    color: #1e3a8a;
    border: 2px solid #2563eb; /* Borde Azul Cobalto */
    border-radius: 50%;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(10, 25, 47, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.carousel-arrow:hover {
    background-color: #1e3a8a; /* Fondo Azul Marino */
    color: #ffffff;
    border-color: #1e3a8a;
}

.left-arrow {
    left: -20px;
}

.right-arrow {
    right: -20px;
}

/* TARJETAS DEL CARRUSEL */
.uni-card {
    flex: 0 0 85%;
    max-width: 650px;
    scroll-snap-align: center;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    background-color: #ffffff;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    align-self: flex-start;
}

/* BANNER DE IMAGEN MÁS ALTO (340px) */
.uni-banner {
    width: 100%;
    height: 340px;
    object-fit: cover;
    display: block;
    border-bottom: 3px solid #dc2626; /* Borde Rojo Carmesí */
}

.uni-header {
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    background-color: #ffffff;
}

.uni-name {
    margin: 0;
    font-size: 20px;
    color: #0a192f; /* Azul Profundo */
    font-weight: 700;
}

.badge {
    background-color: #fef2f2; /* Rojo clarito */
    color: #991b1b; /* Texto Rojo Rubí */
    border: 1px solid #fca5a5;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
}

.uni-preview {
    padding: 0 24px 15px 24px;
    color: #475569;
    font-size: 14px;
    line-height: 1.5;
}

.btn-toggle-container {
    padding: 0 24px 18px 24px;
}

.btn-toggle {
    background: none;
    border: none;
    color: #2563eb; /* Azul Cobalto */
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.btn-toggle:hover {
    color: #dc2626; /* Rojo Carmesí al pasar el ratón */
    text-decoration: underline;
}

/* DESPLEGABLE HACIA ABAJO */
.uni-collapsible {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
    background-color: #fafafa;
    border-top: 1px dashed #e2e8f0;
}

.uni-card.expanded .uni-collapsible {
    max-height: 4000px;
    transition: max-height 0.5s ease-in-out;
}

.uni-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.uni-body h4 {
    color: #1e3a8a; /* Encabezado "Oferta académica" en Azul Marino */
    margin: 0;
    font-size: 17px;
    font-weight: 700;
}

.carreras-ul {
    margin: 8px 0 0 20px;
    padding: 0;
    color: #334155;
    font-size: 14px;
}

.carreras-ul li {
    margin-bottom: 6px;
}

/* CAJA DE REQUISITOS */
.alert-box {
    background-color: #ffffff;
    border: 1px solid #cbd5e1;
    border-left: 6px solid #dc2626; /* Borde Rojo Carmesí */
    padding: 18px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.6;
    color: #0f172a;
}

.alert-box p {
    margin: 8px 0;
}

.contacto-text {
    margin-top: 10px;
    font-size: 13px;
    color: #64748b;
    border-top: 1px dashed #e2e8f0;
    padding-top: 12px;
    word-break: break-word;
}

/* --- UTILIDADES Y FOOTER --- */
.hidden {
    display: none !important;
}

.no-results {
    width: 100%;
    text-align: center;
    color: #64748b;
    padding: 40px 20px;
    font-size: 16px;
}

.main-footer {
    background-color: #0a192f; /* Azul Profundo */
    color: #ffffff;
    text-align: center;
    padding: 22px;
    font-size: 13px;
    margin-top: auto;
    border-top: 4px solid #dc2626; /* Detalle Rojo */
}

/* =========================================================================
   RESPONSIVO
   ========================================================================= */
@media (min-width: 769px) {
    .uni-card {
        flex: 0 0 600px;
    }
}

@media (max-width: 768px) {
    .nav-bar {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .main-content {
        padding: 0 10px;
        margin: 15px auto;
    }
    
    .section-card {
        padding: 18px 12px;
    }
    
    .form-inline {
        flex-direction: column;
        gap: 12px;
    }
    
    input[type="text"], .button-primary {
        width: 100%;
    }

    .carousel-arrow {
        width: 38px;
        height: 38px;
        font-size: 16px;
    }

    .left-arrow {
        left: -5px;
    }

    .right-arrow {
        right: -5px;
    }

    .uni-card {
        flex: 0 0 92%;
    }

    .uni-banner {
        height: 240px; /* Altura en móviles */
    }

    .uni-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 15px;
    }

    .uni-preview, .btn-toggle-container, .uni-body {
        padding-left: 15px;
        padding-right: 15px;
    }
}
