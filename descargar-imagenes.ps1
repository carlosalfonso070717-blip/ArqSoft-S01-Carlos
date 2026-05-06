# Script para descargar imágenes de portadas de juegos
# Ejecuta este script en PowerShell para descargar las imágenes reales

$games = @(
    @{name="devil-may-cry"; url="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"},
    @{name="castlevania-sotn"; url="https://media.rawg.io/media/games/d7a/d7a13f9025ec91eddaa2b3e6c156d63d.jpg"},
    @{name="nier-automata"; url="https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"},
    @{name="cod-warzone"; url="https://media.rawg.io/media/games/877/8779414153b9be922be616af18fb7442.jpg"},
    @{name="fishing-planet"; url="https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"},
    @{name="zelda-botw"; url="https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg"},
    @{name="elden-ring"; url="https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"},
    @{name="god-of-war-ragnarok"; url="https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a681b3b4e9e.jpg"},
    @{name="cyberpunk-2077"; url="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"},
    @{name="minecraft"; url="https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"},
    @{name="gta-v"; url="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"},
    @{name="hollow-knight"; url="https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"}
)

# Desactivar validación SSL temporalmente
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

Write-Host "Descargando imágenes de portadas..." -ForegroundColor Green

foreach ($game in $games) {
    $outputPath = "wwwroot/images/games/$($game.name).jpg"
    Write-Host "Descargando $($game.name)..." -ForegroundColor Yellow

    try {
        Invoke-WebRequest -Uri $game.url -OutFile $outputPath -UseBasicParsing
        Write-Host "✓ $($game.name) descargado" -ForegroundColor Green
    } catch {
        Write-Host "✗ Error descargando $($game.name): $_" -ForegroundColor Red
    }
}

Write-Host "`nProceso completado!" -ForegroundColor Green
Write-Host "Las imágenes están en: wwwroot/images/games/" -ForegroundColor Cyan
