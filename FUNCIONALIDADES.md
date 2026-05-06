# 🎮 Catálogo de Videojuegos - Nuevas Funcionalidades

## ✅ Problemas Solucionados

### 1. **Imágenes Ahora Funcionan** 🖼️
- Las imágenes usan **SVG Data URIs embebidos** que siempre cargan
- Cada juego incluido muestra una imagen de 300x400px con colores únicos
- **Generación automática de portadas**: Si no proporcionas una URL de imagen al agregar un juego, el sistema genera automáticamente una portada colorida con el título del juego
- 20 colores diferentes rotando según el ID del juego
- Tamaño de fuente adaptativo según la longitud del título
- Sin dependencias externas - las imágenes siempre funcionan

### 2. **Botón "Ver Detalles" Mejorado** 👁️
- **Color de fondo rojo (#ff2a2a)** para mejor contraste
- **Texto blanco** siempre visible
- Efecto hover mejorado (borde rojo brillante)
- 100% legible en modo oscuro y claro

### 3. **Sistema Multiidioma (ES/EN)** 🌐
- Switch en el navbar para cambiar entre Español e Inglés
- Traducciones completas de toda la interfaz
- Preferencia guardada en localStorage
- Traducciones incluyen:
  - Navegación
  - Títulos y botones
  - Mensajes del sistema
  - Formularios

### 4. **Modo Claro/Oscuro** 🌓
- Switch en el navbar para alternar temas
- **Modo Oscuro** (predeterminado):
  - Fondo negro (#0d1117)
  - Acentos rojos y azules
  - Tema gaming moderno

- **Modo Claro**:
  - Fondo blanco
  - Texto oscuro
  - Acentos rojos y azules
  - Perfecto para uso diurno

- Preferencia guardada en localStorage
- Transición suave entre temas

## 🎯 Características Principales

### Controles en el Navbar
```
[🌙 Oscuro] ◯━━━━━ [☀️ Claro]    [ES] ━━━━━◯ [EN]
```

### 12 Juegos Incluidos
1. Devil May Cry (2001) - Hack and Slash - PS2
2. Castlevania: SOTN (1997) - Metroidvania - PS1
3. NieR: Automata (2017) - Action RPG - PS4
4. Call of Duty: Warzone (2020) - Battle Royale - PC
5. Fishing Planet (2015) - Simulador - PC
6. Zelda: BOTW (2017) - Aventura - Switch
7. Elden Ring (2022) - Action RPG - PS5
8. God of War Ragnarök (2022) - Aventura - PS5
9. Cyberpunk 2077 (2020) - RPG - PC
10. Minecraft (2011) - Sandbox - PC
11. GTA V (2013) - Acción - Xbox Series X
12. Hollow Knight (2017) - Metroidvania - Switch

### Diseño Responsivo
- ✅ Desktop (grid de 3-4 columnas)
- ✅ Tablet (grid de 2 columnas)
- ✅ Móvil (1 columna)

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Razor Pages, HTML5, CSS3
- **JavaScript**: Vanilla JS (sin frameworks)
- **Persistencia**: localStorage
- **Estilos**: CSS Variables para temas dinámicos
- **Fuentes**: Google Fonts (Teko + Chakra Petch)

## 📱 Cómo Usar

### Cambiar Tema
1. Haz clic en el switch "Oscuro/Claro" en el navbar
2. El tema se guarda automáticamente
3. Se mantiene al recargar la página

### Cambiar Idioma
1. Haz clic en el switch "ES/EN" en el navbar
2. Toda la interfaz cambia instantáneamente
3. La preferencia se guarda automáticamente

### Agregar Nuevos Juegos
1. Haz clic en "Agregar Videojuego"
2. Completa el formulario:
   - Título (requerido)
   - Género
   - Consola
   - Año
   - Descripción
   - **URL de Imagen** (opcional)
     - Si dejas este campo vacío, se generará automáticamente una portada colorida con el título del juego
     - Si quieres una imagen personalizada, puedes pegar una URL válida
3. Haz clic en "Guardar Juego"

### Generación Automática de Portadas
El sistema incluye un generador automático de portadas SVG que:
- Selecciona un color de una paleta de 20 colores vibrantes
- Ajusta el tamaño de fuente según la longitud del título
- Trunca títulos muy largos (más de 30 caracteres)
- Centra el texto perfectamente en la portada
- Usa el ID del juego para asignar colores consistentemente

**No necesitas preocuparte por las imágenes** - simplemente agrega el juego y se verá genial automáticamente.
```
https://via.placeholder.com/300x400/COLOR/TEXTO?text=NOMBRE
```

Ejemplos:
- `https://via.placeholder.com/300x400/FF0000/FFFFFF?text=Mi+Juego`
- `https://via.placeholder.com/300x400/00FF00/000000?text=Aventura`

## 🎨 Paleta de Colores

### Modo Oscuro
- Fondo Principal: `#0d1117`
- Fondo Secundario: `#161b22`
- Texto: `#c9d1d9`
- Acento Rojo: `#ff2a2a`
- Acento Azul: `#58a6ff`

### Modo Claro
- Fondo Principal: `#ffffff`
- Fondo Secundario: `#f6f8fa`
- Texto: `#24292f`
- Acento Rojo: `#ff2a2a`
- Acento Azul: `#0969da`

## 🚀 Próximas Mejoras Sugeridas

- [ ] Subida directa de imágenes
- [ ] Filtro por consola/plataforma
- [ ] Búsqueda en tiempo real
- [ ] Ordenamiento (por título, año, género)
- [ ] Sistema de favoritos
- [ ] Calificación de juegos (estrellas)
- [ ] Modo de vista (grid/lista)
- [ ] Exportar/Importar catálogo (JSON)

## 📝 Notas Técnicas

### Archivos Modificados
- `Controllers/CatalogoController.cs` - URLs de imágenes
- `Models/Item.cs` - Propiedad ImagenUrl
- `Views/Shared/_Layout.cshtml` - Controles de tema/idioma
- `Views/Catalogo/Index.cshtml` - Data attributes para traducciones
- `wwwroot/css/site.css` - Variables CSS y estilos de tema
- `wwwroot/js/site.js` - Lógica de tema e idioma

### localStorage Keys
- `theme`: 'dark' | 'light'
- `language`: 'es' | 'en'

---

**Versión**: 2.0  
**Última actualización**: 2026  
**Desarrollado con**: .NET 10 + ASP.NET Core MVC
