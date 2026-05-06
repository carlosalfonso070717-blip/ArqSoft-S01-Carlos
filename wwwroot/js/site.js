// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// ===============================================
// TRADUCCIONES MULTIIDIOMA
// ===============================================
const translations = {
    es: {
        appTitle: "CATÁLOGO",
        navHome: "Inicio",
        navGames: "Juegos",
        navPrivacy: "Privacidad",
        catalogTitle: "MI CATÁLOGO",
        addGame: "Agregar Videojuego",
        filterLabel: "FILTRAR:",
        filterAll: "Todos",
        viewDetails: "Ver Detalles",
        noGames: "No hay juegos en tu catálogo",
        noGamesMessage: "Comienza agregando tu primer videojuego a la colección",
        addFirstGame: "Agregar Primer Juego",
        backToCatalog: "Volver al Catálogo",
        genre: "Género",
        console: "Consola",
        year: "Año de Lanzamiento",
        description: "Descripción",
        addGameTitle: "AGREGAR VIDEOJUEGO",
        addGameSubtitle: "Completa la información del nuevo juego para tu colección",
        gameTitle: "Título del Juego",
        platform: "Consola / Plataforma",
        imageUrl: "URL de la Imagen",
        saveGame: "Guardar Juego",
        cancel: "Cancelar",
        // Privacy Policy
        privacyTitle: "Política de Privacidad",
        privacyLastUpdate: "Última actualización: 6 de mayo de 2026",
        privacyIntroTitle: "📋 Introducción",
        privacyIntro: "En Catálogo de Videojuegos, respetamos tu privacidad y nos comprometemos a proteger cualquier información que puedas proporcionar mientras usas nuestra aplicación. Esta política de privacidad explica qué datos recopilamos y cómo los utilizamos.",
        privacyDataTitle: "🔒 Datos que Recopilamos",
        privacyDataIntro: "Esta aplicación recopila la siguiente información:",
        privacyData1: "Información de juegos: Título, género, consola, año de lanzamiento, descripción e imagen de los videojuegos que agregas al catálogo.",
        privacyData2: "Preferencias de usuario: Configuración de tema (modo oscuro/claro) e idioma (español/inglés) guardados en el almacenamiento local de tu navegador.",
        privacyData3: "Datos técnicos: Información básica del navegador necesaria para el funcionamiento de la aplicación (cookies de sesión).",
        privacyUseTitle: "🎯 Cómo Usamos tus Datos",
        privacyUseIntro: "Utilizamos la información recopilada para:",
        privacyUse1: "Mantener y mostrar tu catálogo personal de videojuegos.",
        privacyUse2: "Recordar tus preferencias de tema e idioma.",
        privacyUse3: "Mejorar la experiencia de usuario de la aplicación.",
        privacyUse4: "Proporcionar funcionalidades de filtrado y búsqueda.",
        privacyStorageTitle: "💾 Almacenamiento de Datos",
        privacyStorage1: "Datos locales: Tus preferencias (tema e idioma) se almacenan únicamente en el localStorage de tu navegador y nunca se envían a servidores externos.",
        privacyStorage2: "Datos del catálogo: La información de los videojuegos se almacena en la memoria del servidor mientras la aplicación está en ejecución. Esta es una aplicación de demostración y los datos pueden perderse al reiniciar el servidor.",
        privacyShareTitle: "🚫 Compartir Información",
        privacyShare: "No compartimos, vendemos ni distribuimos tu información personal a terceros. Esta aplicación no utiliza servicios de análisis externos ni publicidad.",
        privacyCookiesTitle: "🍪 Cookies",
        privacyCookies: "Esta aplicación utiliza cookies de sesión esenciales para su funcionamiento básico (autenticación y preferencias de usuario). No utilizamos cookies de seguimiento o publicitarias.",
        privacyRightsTitle: "⚖️ Tus Derechos",
        privacyRightsIntro: "Tienes derecho a:",
        privacyRight1: "Acceder a la información que has proporcionado.",
        privacyRight2: "Modificar o eliminar juegos de tu catálogo en cualquier momento.",
        privacyRight3: "Borrar tus preferencias limpiando el almacenamiento local del navegador.",
        privacyRight4: "Dejar de usar la aplicación en cualquier momento.",
        privacySecurityTitle: "🔐 Seguridad",
        privacySecurity: "Implementamos medidas de seguridad razonables para proteger tu información. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Esta es una aplicación educativa y de demostración.",
        privacyMinorsTitle: "👶 Menores de Edad",
        privacyMinors: "Esta aplicación no está dirigida a menores de 13 años. No recopilamos intencionalmente información personal de niños. Si eres padre o tutor y descubres que tu hijo nos ha proporcionado información, contáctanos para eliminarla.",
        privacyChangesTitle: "📝 Cambios a esta Política",
        privacyChanges: "Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de 'Última actualización' arriba.",
        privacyContactTitle: "📧 Contacto",
        privacyContact: "Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:",
        backToHome: "← Volver al Inicio"
    },
    en: {
        appTitle: "CATALOG",
        navHome: "Home",
        navGames: "Games",
        navPrivacy: "Privacy",
        catalogTitle: "MY CATALOG",
        addGame: "Add Video Game",
        filterLabel: "FILTER:",
        filterAll: "All",
        viewDetails: "View Details",
        noGames: "No games in your catalog",
        noGamesMessage: "Start by adding your first video game to the collection",
        addFirstGame: "Add First Game",
        backToCatalog: "Back to Catalog",
        genre: "Genre",
        console: "Console",
        year: "Release Year",
        description: "Description",
        addGameTitle: "ADD VIDEO GAME",
        addGameSubtitle: "Complete the information for the new game in your collection",
        gameTitle: "Game Title",
        platform: "Console / Platform",
        imageUrl: "Image URL",
        saveGame: "Save Game",
        cancel: "Cancel",
        // Privacy Policy
        privacyTitle: "Privacy Policy",
        privacyLastUpdate: "Last updated: May 6, 2026",
        privacyIntroTitle: "📋 Introduction",
        privacyIntro: "At Video Game Catalog, we respect your privacy and are committed to protecting any information you may provide while using our application. This privacy policy explains what data we collect and how we use it.",
        privacyDataTitle: "🔒 Data We Collect",
        privacyDataIntro: "This application collects the following information:",
        privacyData1: "Game information: Title, genre, console, release year, description, and image of the video games you add to the catalog.",
        privacyData2: "User preferences: Theme settings (dark/light mode) and language (Spanish/English) saved in your browser's local storage.",
        privacyData3: "Technical data: Basic browser information necessary for the application to function (session cookies).",
        privacyUseTitle: "🎯 How We Use Your Data",
        privacyUseIntro: "We use the collected information to:",
        privacyUse1: "Maintain and display your personal video game catalog.",
        privacyUse2: "Remember your theme and language preferences.",
        privacyUse3: "Improve the user experience of the application.",
        privacyUse4: "Provide filtering and search functionalities.",
        privacyStorageTitle: "💾 Data Storage",
        privacyStorage1: "Local data: Your preferences (theme and language) are stored only in your browser's localStorage and are never sent to external servers.",
        privacyStorage2: "Catalog data: Video game information is stored in server memory while the application is running. This is a demonstration application and data may be lost when the server restarts.",
        privacyShareTitle: "🚫 Information Sharing",
        privacyShare: "We do not share, sell, or distribute your personal information to third parties. This application does not use external analytics services or advertising.",
        privacyCookiesTitle: "🍪 Cookies",
        privacyCookies: "This application uses essential session cookies for its basic operation (authentication and user preferences). We do not use tracking or advertising cookies.",
        privacyRightsTitle: "⚖️ Your Rights",
        privacyRightsIntro: "You have the right to:",
        privacyRight1: "Access the information you have provided.",
        privacyRight2: "Modify or delete games from your catalog at any time.",
        privacyRight3: "Delete your preferences by clearing your browser's local storage.",
        privacyRight4: "Stop using the application at any time.",
        privacySecurityTitle: "🔐 Security",
        privacySecurity: "We implement reasonable security measures to protect your information. However, no method of Internet transmission or electronic storage is 100% secure. This is an educational and demonstration application.",
        privacyMinorsTitle: "👶 Minors",
        privacyMinors: "This application is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and discover that your child has provided us with information, please contact us to remove it.",
        privacyChangesTitle: "📝 Changes to This Policy",
        privacyChanges: "We may update this privacy policy occasionally. We will notify you of significant changes by posting the new policy on this page and updating the 'Last updated' date above.",
        privacyContactTitle: "📧 Contact",
        privacyContact: "If you have questions about this privacy policy, you can contact us at:",
        backToHome: "← Back to Home"
    }
};

// ===============================================
// FUNCIONES DE IDIOMA
// ===============================================
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'es';
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.checked = (savedLang === 'en');
        setLanguage(savedLang);
    }
}

// ===============================================
// FUNCIONES DE TEMA
// ===============================================
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.checked = (savedTheme === 'light');
        setTheme(savedTheme);
    }
}

// ===============================================
// INICIALIZACIÓN
// ===============================================
document.addEventListener('DOMContentLoaded', function () {
    // Cargar tema e idioma guardados
    loadTheme();
    loadLanguage();

    // Event listener para cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
            setTheme(this.checked ? 'light' : 'dark');
        });
    }

    // Event listener para cambio de idioma
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('change', function () {
            setLanguage(this.checked ? 'en' : 'es');
        });
    }
});
