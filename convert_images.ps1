# Script para renombrar imágenes y convertir TIF a JPG

$imageDir = "c:\Users\Dante\Desktop\el dante\images"

# Mapeo de archivos TIF a JPG con nombres descriptivos
$tifToJpg = @{
    "calabreza_gd.tif" = "Calabreza_Grande.jpg"
    "fugazza_gd.tif" = "Fugazza_Grande.jpg"
    "huevo_y_jamon_gd.tif" = "HuevoJamon_Grande.jpg"
    "jamon_gd.tif" = "Jamon_Grande.jpg"
    "jamonymorron_gd.tif" = "JamonMorron_Grande.jpg"
    "muzza_gd.tif" = "Muzzarella_Grande.jpg"
    "muzza_ind.tif" = "Muzzarella_Individual.jpg"
    "napo_gd.tif" = "Napolitana_Grande.jpg"
    "pepperoni_gd.tif" = "Pepperoni_Grande.jpg"
    "roquefort_gd.tif" = "Roquefort_Grande.jpg"
}

# Usar ImageMagick si está disponible
$magickPath = "C:\Program Files\ImageMagick-7.1.1-Q16-HDRI\convert.exe"

if (Test-Path $magickPath) {
    Write-Host "ImageMagick encontrado, convirtiendo TIF a JPG..."
    foreach ($tif in $tifToJpg.Keys) {
        $tifPath = Join-Path $imageDir $tif
        $jpgPath = Join-Path $imageDir $tifToJpg[$tif]
        
        if (Test-Path $tifPath) {
            & $magickPath $tifPath -quality 95 $jpgPath
            Write-Host "✓ Convertido: $tif -> $($tifToJpg[$tif])"
        }
    }
} else {
    Write-Host "ImageMagick no encontrado. Usa este mapeo para renombrar manualmente:"
    $tifToJpg.GetEnumerator() | ForEach-Object {
        Write-Host "$($_.Key) -> $($_.Value)"
    }
}
