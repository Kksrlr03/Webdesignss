param([int]$Port = 4173)
$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath($PSScriptRoot)
$prefix = '/Webdesignss'
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
try {
  $listener.Start()
} catch {
  Write-Host "Could not start the local preview on port $Port. Close another preview using that port and try again." -ForegroundColor Red
  throw
}
$url = "http://127.0.0.1:$Port$prefix/"
Write-Host "Web Designss local preview: $url" -ForegroundColor Cyan
Write-Host 'Keep this window open while previewing. Press Ctrl+C to stop.'
Start-Process $url
$types = @{
  '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8';
  '.json'='application/json; charset=utf-8'; '.svg'='image/svg+xml'; '.png'='image/png'; '.jpg'='image/jpeg';
  '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.gif'='image/gif'; '.glb'='model/gltf-binary'; '.hdr'='application/octet-stream';
  '.wasm'='application/wasm'; '.mp4'='video/mp4'; '.webm'='video/webm'; '.mp3'='audio/mpeg'; '.ogg'='audio/ogg';
  '.wav'='audio/wav'; '.ttf'='font/ttf'; '.woff'='font/woff'; '.woff2'='font/woff2'; '.ico'='image/x-icon'
}
try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    try {
      $path = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath)
      if ($path -eq '/') {
        $relative = 'index.html'
      } elseif ($path -eq $prefix -or $path.StartsWith("$prefix/", [System.StringComparison]::Ordinal)) {
        $relative = $path.Substring($prefix.Length).TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($relative)) { $relative = 'index.html' }
      } else {
        $response.StatusCode = 404
        $response.Close()
        continue
      }
      $file = [System.IO.Path]::GetFullPath((Join-Path $root ($relative -replace '/', [System.IO.Path]::DirectorySeparatorChar)))
      if (-not $file.StartsWith(($root.TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar), [System.StringComparison]::OrdinalIgnoreCase) -and $file -ne (Join-Path $root 'index.html')) {
        $response.StatusCode = 403
        $response.Close()
        continue
      }
      if ([System.IO.Directory]::Exists($file)) { $file = Join-Path $file 'index.html' }
      if (-not [System.IO.File]::Exists($file)) {
        $response.StatusCode = 404
        $response.Close()
        continue
      }
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $extension = [System.IO.Path]::GetExtension($file).ToLowerInvariant()
      $response.StatusCode = 200
      $response.ContentType = if ($types.ContainsKey($extension)) { $types[$extension] } else { 'application/octet-stream' }
      $response.ContentLength64 = $bytes.LongLength
      $response.Headers['Cache-Control'] = 'no-cache'
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
      $response.Close()
    } catch {
      try { $response.StatusCode = 500; $response.Close() } catch {}
    }
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
