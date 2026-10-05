// ========================================
// CONTENIDO EDITABLE DEL PORTFOLIO
// ========================================
// Aquí está TODO el contenido de tu web. Puedes cambiar textos, cifras y enlaces sin tocar nada más.
//
// CÓMO LEER ESTO:
//  - Un texto con { es: "...", en: "..." } se traduce: edita el español (es) y el inglés (en).
//  - Un texto entre comillas sin es/en es igual en los dos idiomas.
//  - <br> = salto de línea.   <b>texto</b> = negrita.   Mantén siempre las comillas "" y las comas al final.
//  - Si quitas un elemento de una lista [ ... ], desaparece de la web; si añades uno, aparece.
// ========================================
const portfolioContent = {

    // ---------- DATOS GENERALES ----------
    site: {
        name: "AITANA BRIET",                                    // EDITABLE: nombre (navegación, hero y footer)
        tagline: "Marketing · Digital Strategy · Analytics · Digital Product",   // EDITABLE: línea del footer
        copyright: "© 2026 Aitana Briet",                        // EDITABLE: copyright
        metaTitle: "Aitana Briet | Marketing & Digital Strategy",// EDITABLE: título de la pestaña del navegador
        metaDescription: {                                       // EDITABLE: descripción para buscadores
            es: "Portfolio de Aitana Briet — Marketing Digital, Estrategia, Analítica, E-commerce y proyectos digitales.",
            en: "Aitana Briet's portfolio — Digital Marketing, Strategy, Analytics, E-commerce and digital projects."
        }
    },

    // ---------- NAVEGACIÓN ----------
    nav: {
        about: { es: "SOBRE MÍ",
        en: "ABOUT" },
        projects: { es: "PROYECTOS",
        en: "PROJECTS" },
        toolkit: "TOOLKIT",
        contact: { es: "CONTACTO",
        en: "CONTACT" }
    },

    // ---------- HERO (portada) ----------
    hero: {
        name: "Aitana Briet",                                    // EDITABLE: nombre grande en cursiva
        title: "MARKETING &amp;<br>DIGITAL STRATEGY",             // EDITABLE: titular principal
        lead: { es: "Creo estrategias y soluciones digitales combinando análisis, creatividad y ejecución.",
        en: "I create digital strategies and solutions combining analysis, creativity and execution." },                                     // EDITABLE: descripción
        areas: { es: "Marketing Digital · Estrategia · Analítica · E-commerce · Producto Digital",
        en: "Digital Marketing · Strategy · Analytics · E-commerce · Digital Product" },                                   // EDITABLE: áreas de perfil
        buttonProjects: { es: "VER PROYECTOS",
        en: "VIEW PROJECTS" },                           // EDITABLE: texto del botón 1
        buttonContact: { es: "CONTACTAR",
        en: "GET IN TOUCH" }                            // EDITABLE: texto del botón 2
    },

    // ---------- SOBRE MÍ ----------
    about: {
        title: { es: "SOBRE<br/>MÍ",
        en: "ABOUT<br>ME" },                                       // EDITABLE: título
        p1: { es: "Soy graduada en <b>Publicidad y Relaciones Públicas</b> y especializada en <b>Marketing y Venta Digital</b>.",
        en: "I hold a degree in <b>Advertising and Public Relations</b> and specialise in <b>Digital Marketing and Sales</b>." },                                          // EDITABLE: párrafo 1
        p2: { es: "Me interesa especialmente la intersección entre <b>estrategia</b>, <b>marketing digital</b>, <b>analítica</b>, <b>negocio</b> y <b>producto digital</b>.",
        en: "I am especially interested in the intersection of <b>strategy</b>, <b>digital marketing</b>, <b>analytics</b>, <b>business</b> and <b>digital product</b>." },                                          // EDITABLE: párrafo 2
        p3: { es: "Me gusta trabajar desde el análisis del problema hasta la ejecución: investigar, definir estrategias, construir soluciones, medir resultados y convertir los datos en decisiones.",
        en: "I like to work from problem analysis through to execution: researching, defining strategies, building solutions, measuring results and turning data into decisions." },                                          // EDITABLE: párrafo 3
        tags: [
            { es: "ESTRATEGIA DE MARKETING", en: "MARKETING STRATEGY" },
            { es: "MARKETING DIGITAL", en: "DIGITAL MARKETING" },
            { es: "ANALÍTICA", en: "ANALYTICS" },
            "E-COMMERCE",
            { es: "PRODUCTO DIGITAL", en: "DIGITAL PRODUCT" },
            { es: "IA Y AUTOMATIZACIÓN", en: "AI &amp; AUTOMATION" },
        ]                                      // EDITABLE: etiquetas
    },

    // ---------- TÍTULO DE LA SECCIÓN PROYECTOS ----------
    projects: {
        title: { es: "PROYECTOS<br/>SELECCIONADOS",
        en: "SELECTED<br>PROJECTS" },                                       // EDITABLE
        subtitle: { es: "Proyectos donde estrategia, datos, creatividad y ejecución se unen.",
        en: "Projects where strategy, data, creativity and execution come together." }                                   // EDITABLE
    },

    // ---------- PROYECTO 01 · FLIPFLOW ----------
    flipflow: {
        title: "FLIPFLOW",                                       // EDITABLE: título del proyecto
        category: "GO-TO-MARKET · STRATEGY · CRM · ANALYTICS",   // EDITABLE: categorías
        subtitle: { es: "PLAN GO-TO-MARKET",
        en: "GO-TO-MARKET PLAN" },                                  // EDITABLE: subtítulo
        badgeTitle: { es: "PROYECTO GANADOR",
        en: "WINNING PROJECT" },                                // EDITABLE: etiqueta ganador
        badgeDetail: "MMVD IX · EDEM · 2026",                    // EDITABLE: detalle de la etiqueta
        description: { es: "Proyecto de expansión internacional de <b>Flipflow</b> hacia <b>Países Bajos</b> dentro del vertical Beauty &amp; Personal Care. Es mi Trabajo de Fin de Máster del Máster en Marketing y Venta Digital de <b>EDEM</b>.",
        en: "International expansion project for <b>Flipflow</b> into the <b>Netherlands</b> within the Beauty & Personal Care vertical. It is my Master's Thesis for the Master in Digital Marketing and Sales at <b>EDEM</b>." },                                 // EDITABLE: texto del proyecto
        skills: [
            { es: "ANÁLISIS DE MERCADO", en: "MARKET ANALYSIS" },
            "ICP",
            { es: "SEGMENTACIÓN", en: "SEGMENTATION" },
            "ABM",
            { es: "ADQUISICIÓN", en: "ACQUISITION" },
            "LINKEDIN ADS",
            "OUTBOUND",
            "INBOUND / LEAD NURTURING",
            "HUBSPOT CRM",
            "LEAD SCORING",
            { es: "AUTOMATIZACIONES", en: "AUTOMATIONS" },
            "KPIs",
            "FORECAST",
            "RETENTION",
        ],                                   // EDITABLE: skills
        link: "https://aitanabriet.github.io/gtm.aitanabriet/",  // EDITABLE: enlace del proyecto (se abre en pestaña nueva)
        buttonLabel: { es: "VER CASE STUDY →",
        en: "VIEW CASE STUDY →" },                               // EDITABLE: texto del botón
        // EDITABLE: métricas (value = cifra, label = nombre). Cambia solo la cifra y se actualiza.
        metrics: {
            deliverables: { value: "14+", label: { es: "ENTREGABLES",
        en: "DELIVERABLES" } },
            accounts: { value: "74", label: { es: "CUENTAS ANALIZADAS",
        en: "ACCOUNTS ANALYZED" } },
            tam: { value: "€14.84M", label: "TAM" },
            sam: { value: "€9.2M", label: "SAM" },
            som: { value: "€3.1M", label: "SOM Y3" },
            automations: { value: "3", label: { es: "AUTOMATIZACIONES",
        en: "AUTOMATIONS" } },
            pipeline: { value: "9", label: { es: "FASES DEL PIPELINE",
        en: "PIPELINE STAGES" } },
        }
    },

    // ---------- PROYECTO 02 · MUDEAPP ----------
    mudeapp: {
        title: "MUDEAPP",                                        // EDITABLE
        category: "DIGITAL PRODUCT · NO-CODE · AI-ASSISTED DEVELOPMENT",  // EDITABLE
        subtitle: { es: "PRODUCTO DIGITAL PARA LA FILÀ MUDÉJARES",
        en: "DIGITAL PRODUCT FOR FILÀ MUDÉJARES" },                                  // EDITABLE
        description: { es: "MudeApp es una solución digital creada para simplificar y digitalizar la gestión económica y contable de una asociación.",
        en: "MudeApp is a digital solution created to simplify and digitise the financial and accounting management of an association." },                                 // EDITABLE
        flowTitle: { es: "DEL PROBLEMA AL PRODUCTO",
        en: "FROM PROBLEM TO PRODUCT" },
        problemLabel: { es: "PROBLEMA",
        en: "PROBLEM" },
        problemText: { es: "Gestión económica manual de miembros, cuotas, obligaciones, ingresos, gastos, pagos, balances y ejercicios.",
        en: "Manual financial management of members, fees, obligations, income, expenses, payments, balances and financial years." },                             // EDITABLE
        productLabel: { es: "PRODUCTO",
        en: "PRODUCT" },
        productText: { es: "Una herramienta digital centralizada que reúne toda la gestión en un único lugar.",
        en: "A centralised digital tool that brings all the management together in one place." },                             // EDITABLE
        features: [
            { es: "MIEMBROS", en: "MEMBERS" },
            { es: "OBLIGACIONES", en: "OBLIGATIONS" },
            { es: "INGRESOS", en: "INCOME" },
            { es: "GASTOS", en: "EXPENSES" },
            "BALANCES",
            { es: "PAGOS", en: "PAYMENTS" },
            { es: "CUOTAS", en: "FEES" },
            { es: "EJERCICIOS ECONÓMICOS", en: "ECONOMIC YEARS" },
        ],                                 // EDITABLE: etiquetas de la app
        roleTitle: { es: "MI ROL",
        en: "MY ROLE" },
        roles: [
            "PRODUCT THINKING",
            { es: "DISEÑO FUNCIONAL", en: "FUNCTIONAL DESIGN" },
            { es: "GESTIÓN DE PROYECTO", en: "PROJECT MANAGEMENT" },
            { es: "DESARROLLO ASISTIDO POR IA", en: "AI-ASSISTED DEVELOPMENT" },
            { es: "RESOLUCIÓN DE PROBLEMAS", en: "PROBLEM SOLVING" },
            { es: "UX / FLUJOS DE USUARIO", en: "UX / USER FLOWS" },
            { es: "DESARROLLO NO-CODE", en: "NO-CODE DEVELOPMENT" },
            "PROMPT ENGINEERING",
            { es: "LÓGICA DE NEGOCIO", en: "BUSINESS LOGIC" },
            { es: "ESTRUCTURA DE DATOS", en: "DATA STRUCTURE" },
            { es: "TESTING FUNCIONAL", en: "FUNCTIONAL TESTING" },
        ],                                   // EDITABLE: mi rol
        approachTitle: { es: "ENFOQUE",
        en: "APPROACH" },
        approach: { es: "PRODUCT THINKING + DISEÑO FUNCIONAL + GESTIÓN DE PROYECTO + DESARROLLO ASISTIDO POR IA + RESOLUCIÓN DE PROBLEMAS",
        en: "PRODUCT THINKING + FUNCTIONAL DESIGN + PROJECT MANAGEMENT + AI-ASSISTED DEVELOPMENT + PROBLEM SOLVING" },                                  // EDITABLE
        structureTitle: { es: "ESTRUCTURA DE LA APP",
        en: "APP STRUCTURE" },
        structure: { es: "INICIO · MIEMBROS · OBLIGACIONES · BALANCES · CONFIGURACIÓN",
        en: "HOME · MEMBERS · OBLIGATIONS · BALANCES · SETTINGS" },                                // EDITABLE
        toolsTitle: { es: "HERRAMIENTAS",
        en: "TOOLS" },
        tools: "LOVABLE · LOVABLE CLOUD · CLAUDE · CHATGPT"      // EDITABLE: herramientas
    },

    // ---------- PROYECTO 03 · BAR MONTE ----------
    barMonte: {
        title: "BAR MONTE",                                      // EDITABLE
        category: "CONTENT STRATEGY · SOCIAL MEDIA · META ADS",  // EDITABLE
        subtitle: { es: "ESTRATEGIA DE CONTENIDO Y PAID MEDIA",
        en: "CONTENT & PAID MEDIA STRATEGY" },                                  // EDITABLE
        description: { es: "Proyecto realizado para un negocio familiar. Objetivo: <b>ATRAER UNA AUDIENCIA MÁS JOVEN</b>. Redefinición de la presencia del negocio en Instagram mediante una estrategia de contenidos orientada a conectar con un público más joven y generar mayor interacción y tráfico hacia el establecimiento.",
        en: "A project for a family business. Goal: <b>ATTRACT A YOUNGER AUDIENCE</b>. The business's Instagram presence was redefined through a content strategy aimed at connecting with a younger audience and generating more interaction and traffic to the venue." },                                 // EDITABLE
        challengeTitle: { es: "EL<br/>RETO",
        en: "THE<br>CHALLENGE" },
        beforeLabel: { es: "FEED ANTES",
        en: "BEFORE FEED" },
        afterLabel: { es: "FEED DESPUÉS",
        en: "AFTER FEED" },
        contentTitle: { es: "ESTRATEGIA<br/>DE CONTENIDO",
        en: "CONTENT<br>STRATEGY" },
        contentText: { es: "Redefinición de la presencia digital del negocio mediante una estrategia de contenidos más visual, atractiva y orientada a conectar con un público joven.",
        en: "Redefining the business's digital presence through a more visual, attractive content strategy aimed at connecting with a young audience." },                               // EDITABLE
        resultsTitle: { es: "RESULTADOS<br/>REALES",
        en: "REAL<br>RESULTS" },
        resultsText: { es: "El contenido no se quedó únicamente en una mejora estética. La estrategia se complementó con una campaña de <b>Meta Ads</b> con resultados medibles.",
        en: "The content was not just an aesthetic improvement. The strategy was complemented by a <b>Meta Ads</b> campaign with measurable results." },                               // EDITABLE
        // EDITABLE: métricas (highlight: true = cifra gigante destacada)
        metrics: {
            investment: { value: "€13.95", label: { es: "INVERSIÓN",
        en: "INVESTMENT" }, highlight: true },
            directionTaps: { value: "78", label: { es: "TOQUES EN DIRECCIÓN",
        en: "DIRECTION TAPS" }, highlight: true },
            plays: { value: "24,719", label: { es: "REPRODUCCIONES",
        en: "PLAYS" } },
            reach: { value: "12,863", label: { es: "ALCANCE",
        en: "REACH" } },
            followers: { value: "+70", label: { es: "SEGUIDORES",
        en: "FOLLOWERS" } },
            interactions: { value: "734", label: { es: "INTERACCIONES",
        en: "INTERACTIONS" } },
            profileVisits: { value: "653", label: { es: "VISITAS AL PERFIL",
        en: "PROFILE VISITS" } },
            cpv: { value: "€0.03", label: "CPV" },
        },
        quote: { es: "“Con una micro-inversión de menos de 14 €, logramos inyectar 488 visitas cualificadas al embudo de ventas. Esto demuestra la capacidad de escalar eventos físicos mediante segmentación en Meta Ads.”",
        en: "“With a micro-investment of less than €14, we injected 488 qualified visits into the sales funnel. This demonstrates the ability to scale physical events through Meta Ads segmentation.”" },                                       // EDITABLE: cita de resultados
        metaAdsTitle: { es: "CASO<br/>META ADS",
        en: "META ADS<br>CASE STUDY" },
        performanceTitle: { es: "RENDIMIENTO<br/>DEL CONTENIDO",
        en: "CONTENT<br>PERFORMANCE" },
        performanceText: { es: "Carrusel visto más de <b>2 veces por persona</b>.",
        en: "Carousel viewed more than <b>2 times per person</b>." }                            // EDITABLE
    },

    // ---------- TOOLKIT ----------
    toolkit: {
        title: { es: "MI<br/>TOOLKIT",
        en: "MY<br>TOOLKIT" },                                       // EDITABLE
        groups: [                                                // EDITABLE: cada bloque = título + herramientas
        { title: { es: "MARKETING Y ANALÍTICA",
        en: "MARKETING & ANALYTICS" },
          items: { es: "Google Analytics 4 · Google Tag Manager · Dashboards · KPIs · Informes · Análisis de datos",
        en: "Google Analytics 4 · Google Tag Manager · Dashboards · KPIs · Reporting · Data Analysis" } },
        { title: { es: "CRM Y AUTOMATIZACIÓN",
        en: "CRM & AUTOMATION" },
          items: { es: "HubSpot · CRM · Lead Scoring · Workflows · Email Marketing",
        en: "HubSpot · CRM · Lead Scoring · Workflows · Email Marketing" } },
        { title: { es: "CONTENIDO Y PAID MEDIA",
        en: "CONTENT & PAID MEDIA" },
          items: { es: "Instagram · Meta Ads · Estrategia de contenidos · Copywriting",
        en: "Instagram · Meta Ads · Content Strategy · Copywriting" } },
        { title: { es: "DISEÑO Y CREATIVIDAD",
        en: "DESIGN & CREATIVE" },
          items: "Photoshop · Illustrator · Canva · Figma · CapCut" },
        { title: { es: "WEB Y DIGITAL",
        en: "WEB & DIGITAL" },
          items: "WordPress" },
        { title: { es: "IA Y NO-CODE",
        en: "AI & NO-CODE" },
          items: "ChatGPT · Claude · Lovable" },
        ]
    },

    // ---------- QUÉ APORTO ----------
    bring: {
        title: { es: "QUÉ<br/>APORTO",
        en: "WHAT<br>I BRING" },                                       // EDITABLE
        items: [
        { title: { es: "ESTRATEGIA",
        en: "STRATEGY" },
          text: { es: "Convertir retos de negocio en planes de marketing accionables.",
        en: "Turning business challenges into actionable marketing plans." } },
        { title: { es: "DATOS",
        en: "DATA" },
          text: { es: "Usar métricas para entender el rendimiento y respaldar decisiones.",
        en: "Using metrics to understand performance and support decisions." } },
        { title: "DIGITAL",
          text: { es: "Construir experiencias digitales, campañas y contenido.",
        en: "Building digital experiences, campaigns and content." } },
        { title: { es: "EJECUCIÓN",
        en: "EXECUTION" },
          text: { es: "Convertir ideas en proyectos tangibles y resultados medibles.",
        en: "Turning ideas into tangible projects and measurable results." } },
        ]
    },

    // ---------- CONTACTO ----------
    contact: {
        title: { es: "HABLEMOS",
        en: "LET'S<br>TALK" },                                       // EDITABLE
        text: { es: "¿Tienes un proyecto, una oportunidad o quieres conocer más sobre mi trabajo?",
        en: "Do you have a project, an opportunity, or want to know more about my work?" },                                        // EDITABLE
        buttonContact: { es: "CONTACTAR",
        en: "CONTACT" },                             // EDITABLE: texto del botón principal
        email: "tuemail@ejemplo.com",                            // EDITABLE: tu email
        linkedin: "https://www.linkedin.com/in/TU-USUARIO",      // EDITABLE: tu LinkedIn
        cv: "assets/cv.pdf",                                     // EDITABLE: tu CV (sube el PDF a assets/ con ese nombre)
        buttonLinkedin: "LINKEDIN",
        buttonCv: "CV"
    }
};

// IMÁGENES Y VÍDEOS (no se editan aquí; basta con sustituir el archivo con el MISMO nombre):
//  assets/images/aitana.jpg
//  assets/images/flipflow/flipflow-01.jpg
//  assets/images/mudeapp/screen-01.jpg · screen-02.jpg · screen-03.jpg
//  assets/images/bar-monte/before-feed.jpg · after-feed.jpg · content-01…04.jpg · meta-ads-01…03.jpg · performance.jpg
//  assets/videos/bar-monte/content-01…04.mp4   (vídeo vertical 9:16; si existe, sustituye a la imagen)
// ========================================
// FIN DEL CONTENIDO EDITABLE
// ========================================

// ===================================================================
// MOTOR DE LA WEB — NO NECESITAS TOCAR NADA DE AQUÍ HACIA ABAJO
// (rellena la página con el contenido de arriba y gestiona menú,
//  idiomas, animaciones, vídeos y lightbox)
// ===================================================================
let lang = 'es';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const get = path => path.split('.').reduce((o, k) => (o == null ? o : o[k]), portfolioContent);
const tx = v => (v && typeof v === 'object' && !Array.isArray(v) && ('es' in v || 'en' in v)) ? (v[lang] ?? v.es ?? '') : v;
const val = path => { const v = tx(get(path)); if (v === undefined) console.warn('Contenido no encontrado:', path); return v ?? ''; };

/* ===== CONTADOR DE MÉTRICAS (aparición progresiva) ===== */
function animateMetric(el) {
  const final = el.textContent, m = final.match(/\d[\d,]*\.?\d*/);
  if (!m || reduceMotion) return;
  const target = parseFloat(m[0].replace(/,/g, '')), dec = (m[0].split('.')[1] || '').length;
  if (isNaN(target)) return;
  const start = performance.now(), dur = 1200;
  (function tick(t) {
    const p = Math.min((t - start) / dur, 1);
    if (p < 1) {
      el.textContent = final.replace(m[0], (target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }));
      requestAnimationFrame(tick);
    } else el.textContent = final;
  })(start);
}
const metricObserver = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { animateMetric(e.target); metricObserver.unobserve(e.target); }
}), { threshold: 0.6 });

/* ===== RELLENAR LA PÁGINA CON EL CONTENIDO ===== */
function renderMetrics() {
  document.querySelectorAll('[data-metrics]').forEach(box => {
    const list = Object.values(get(box.dataset.metrics) || {});
    if (!box.querySelector('.metric:not(.cta)')) {
      const cta = box.querySelector('.cta');
      list.forEach(m => {
        const d = document.createElement('div');
        d.className = 'metric' + (m.highlight ? ' hi' : '');
        d.innerHTML = '<strong></strong><span></span>';
        d.firstElementChild.textContent = m.value;
        box.insertBefore(d, cta);
        metricObserver.observe(d.firstElementChild);
      });
    }
    box.querySelectorAll('.metric:not(.cta) span').forEach((s, i) => { s.innerHTML = tx(list[i].label); });
  });
}
function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-c]').forEach(el => { el.innerHTML = val(el.dataset.c); });
  document.querySelectorAll('[data-c-list]').forEach(el => {
    el.innerHTML = (get(el.dataset.cList) || []).map(i => '<li>' + tx(i) + '</li>').join('');
  });
  document.querySelectorAll('[data-groups]').forEach(el => {
    el.innerHTML = (get(el.dataset.groups) || []).map(g => '<div><h4>' + tx(g.title) + '</h4><p>' + tx(g.items) + '</p></div>').join('');
  });
  document.querySelectorAll('[data-items]').forEach(el => {
    el.innerHTML = (get(el.dataset.items) || []).map(i => '<div><h3>' + tx(i.title) + '</h3><p>' + tx(i.text) + '</p></div>').join('');
  });
  document.querySelectorAll('[data-href]').forEach(el => { el.href = val(el.dataset.href); });
  document.querySelectorAll('[data-mailto]').forEach(el => { el.href = 'mailto:' + val(el.dataset.mailto); });
  renderMetrics();
  document.title = val('site.metaTitle');
  document.querySelector('meta[name=description]').content = val('site.metaDescription');
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
}

/* ===== IDIOMA ES / EN ===== */
function setLang(l) {
  const main = document.querySelector('main');
  main.style.opacity = 0;
  setTimeout(() => { lang = l; render(); main.style.opacity = 1; }, 160);
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ===== MENÚ MÓVIL ===== */
const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false');
}));

/* ===== REVEAL ON SCROLL ===== */
const revealObserver = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== VÍDEO DE BAR MONTE: si no existe el .mp4 se muestra el .jpg (o el recuadro de ayuda); nunca autoplay ===== */
function videoFallback(v) {
  if (!v.isConnected || v.readyState > 0) return;
  const poster = v.getAttribute('poster'), box = v.parentElement;
  const img = new Image(); img.alt = 'Bar Monte content';
  img.onload = () => { v.replaceWith(img); box.style.aspectRatio = 'auto'; };
  img.onerror = () => v.remove();      // sin mp4 ni jpg: queda el placeholder con el nombre del archivo
  img.src = poster;
}
document.querySelectorAll('.reel video').forEach(v => {
  v.querySelector('source').addEventListener('error', () => videoFallback(v));
  v.addEventListener('loadedmetadata', () => v.parentElement.classList.add('has-video'));
});
window.addEventListener('load', () => document.querySelectorAll('.reel video').forEach(v => { if (v.networkState === 3) videoFallback(v); }));

/* ===== LIGHTBOX ===== */
const lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img');
document.querySelectorAll('.zoom img').forEach(img => img.addEventListener('click', () => { lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false; }));
const closeLb = () => { lb.hidden = true; lbImg.src = ''; };
lb.addEventListener('click', e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

/* ===== ARRANQUE ===== */
render();
