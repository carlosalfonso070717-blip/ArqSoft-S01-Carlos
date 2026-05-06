using Catalogo.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Catalogo.Controllers
{
    public class CatalogoController : Controller
    {
        // Lista inicial con los 5 items requeridos + 7 nuevos juegos
        private static List<Item> _items = new()
        {
            new Item
            {
                Id = 1,
                Titulo = "Devil May Cry",
                Genero = "Hack and Slash",
                Ano = 2001,
                Consola = "PlayStation 2",
                Descripcion = "Videojuego que trata de un cazador de demonios.",
                ImagenUrl = "https://placehold.co/300x400/8B0000/FFFFFF/png?text=Devil+May+Cry"
            },
            new Item
            {
                Id = 2,
                Titulo = "Castlevania: Symphony of the Night",
                Genero = "Metroidvania",
                Ano = 1997,
                Consola = "PlayStation",
                Descripcion = "Exploración y acción en el castillo de Drácula.",
                ImagenUrl = "https://placehold.co/300x400/4B0082/FFD700/png?text=Castlevania+SOTN"
            },
            new Item
            {
                Id = 3,
                Titulo = "NieR: Automata",
                Genero = "Action RPG",
                Ano = 2017,
                Consola = "PlayStation 4",
                Descripcion = "Juego de acción con androides en guerra por la humanidad.",
                ImagenUrl = "https://placehold.co/300x400/2C3E50/ECF0F1/png?text=NieR+Automata"
            },
            new Item
            {
                Id = 4,
                Titulo = "Call of Duty: Warzone",
                Genero = "Battle Royale",
                Ano = 2020,
                Consola = "PC",
                Descripcion = "Shooter táctico multijugador masivo en primera persona.",
                ImagenUrl = "https://placehold.co/300x400/263238/FF6B00/png?text=COD+Warzone"
            },
            new Item
            {
                Id = 5,
                Titulo = "Fishing Planet",
                Genero = "Simulador",
                Ano = 2015,
                Consola = "PC",
                Descripcion = "Simulador de pesca deportiva con mecánicas realistas.",
                ImagenUrl = "https://placehold.co/300x400/4682B4/FFFFFF/png?text=Fishing+Planet"
            },
            new Item
            {
                Id = 6,
                Titulo = "The Legend of Zelda: Breath of the Wild",
                Genero = "Aventura",
                Ano = 2017,
                Consola = "Nintendo Switch",
                Descripcion = "Explora un vasto mundo abierto en Hyrule con libertad total para descubrir secretos, combatir enemigos y resolver puzzles.",
                ImagenUrl = "https://placehold.co/300x400/228B22/FFD700/png?text=Zelda+BOTW"
            },
            new Item
            {
                Id = 7,
                Titulo = "Elden Ring",
                Genero = "Action RPG",
                Ano = 2022,
                Consola = "PlayStation 5",
                Descripcion = "Un RPG de acción oscuro creado por FromSoftware y George R.R. Martin. Explora las Tierras Intermedias en un desafiante mundo abierto.",
                ImagenUrl = "https://placehold.co/300x400/000000/D4AF37/png?text=Elden+Ring"
            },
            new Item
            {
                Id = 8,
                Titulo = "God of War Ragnarök",
                Genero = "Aventura",
                Ano = 2022,
                Consola = "PlayStation 5",
                Descripcion = "Kratos y Atreus se embarcan en una épica aventura por los nueve reinos nórdicos mientras se preparan para el Ragnarök.",
                ImagenUrl = "https://placehold.co/300x400/8B0000/FFFFFF/png?text=God+of+War"
            },
            new Item
            {
                Id = 9,
                Titulo = "Cyberpunk 2077",
                Genero = "RPG",
                Ano = 2020,
                Consola = "PC",
                Descripcion = "Un RPG de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamour y las modificaciones corporales.",
                ImagenUrl = "https://placehold.co/300x400/000000/00FFFF/png?text=Cyberpunk+2077"
            },
            new Item
            {
                Id = 10,
                Titulo = "Minecraft",
                Genero = "Sandbox",
                Ano = 2011,
                Consola = "PC",
                Descripcion = "Un juego de construcción y aventura donde puedes crear cualquier cosa que imagines con bloques en mundos infinitos.",
                ImagenUrl = "https://placehold.co/300x400/32CD32/000000/png?text=Minecraft"
            },
            new Item
            {
                Id = 11,
                Titulo = "Grand Theft Auto V",
                Genero = "Acción",
                Ano = 2013,
                Consola = "Xbox Series X",
                Descripcion = "Experimenta la vida criminal en Los Santos con tres protagonistas en una narrativa épica llena de acción, robos y caos.",
                ImagenUrl = "https://placehold.co/300x400/000000/00FF00/png?text=GTA+V"
            },
            new Item
            {
                Id = 12,
                Titulo = "Hollow Knight",
                Genero = "Metroidvania",
                Ano = 2017,
                Consola = "Nintendo Switch",
                Descripcion = "Explora un reino de insectos olvidado bajo tierra. Combate enemigos, descubre secretos y mejora tus habilidades en este desafiante metroidvania.",
                ImagenUrl = "https://placehold.co/300x400/483D8B/FFFFFF/png?text=Hollow+Knight"
            }
        };

        // Lista — con filtro opcional por género
        public IActionResult Index(string genero)
        {
            var resultado = string.IsNullOrEmpty(genero)
                ? _items
                : _items.Where(i => i.Genero == genero).ToList();

            // Guardamos los géneros únicos para poder crear botones o un menú desplegable en la vista
            ViewBag.Generos = _items.Select(i => i.Genero).Distinct().ToList();
            ViewBag.GeneroActual = genero;

            return View(resultado);
        }

        // Detalle
        public IActionResult Detalle(int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            return item == null ? NotFound() : View(item);
        }

        // Formulario — GET
        public IActionResult Agregar()
        {
            return View();
        }

        // Formulario — POST
        [HttpPost]
        public IActionResult Agregar(Item item)
        {
            // Genera ID único
            item.Id = _items.Any() ? _items.Max(i => i.Id) + 1 : 1;

            // Si no se proporcionó imagen, generar un SVG automático
            if (string.IsNullOrWhiteSpace(item.ImagenUrl))
            {
                item.ImagenUrl = GenerarImagenSVG(item.Titulo, item.Id);
            }

            _items.Add(item);

            return RedirectToAction("Index");
        }

        // Método helper para generar imágenes SVG automáticas
        private static string GenerarImagenSVG(string titulo, int id)
        {
            // Paleta de colores para las portadas
            string[] colores = new[]
            {
                "FF6B6B", "4ECDC4", "45B7D1", "FFA07A", "98D8C8",
                "F7DC6F", "BB8FCE", "85C1E2", "F8B88B", "FAD7A0",
                "D98880", "85929E", "76D7C4", "F1948A", "AED6F1",
                "52BE80", "F39C12", "8E44AD", "E74C3C", "3498DB"
            };

            // Seleccionar color basado en el ID
            string color = colores[id % colores.Length];

            // Acortar el título si es muy largo
            string tituloCorto = titulo.Length > 30 
                ? titulo.Substring(0, 27) + "..." 
                : titulo;

            // Calcular tamaño de fuente basado en longitud del título
            int fontSize = tituloCorto.Length > 20 ? 18 : 
                          tituloCorto.Length > 15 ? 22 : 26;

            // Escapar caracteres especiales para SVG
            string tituloEscapado = tituloCorto
                .Replace("&", "&amp;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("'", "&apos;")
                .Replace("\"", "&quot;");

            // Generar SVG con Data URI
            string svg = $"<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400'>" +
                        $"<rect fill='#{color}' width='300' height='400'/>" +
                        $"<text x='50%' y='50%' font-size='{fontSize}' fill='white' text-anchor='middle' " +
                        $"dominant-baseline='middle' font-family='Arial' font-weight='bold'>{tituloEscapado}</text>" +
                        $"</svg>";

            return "data:image/svg+xml," + Uri.EscapeDataString(svg);
        }
    }
}