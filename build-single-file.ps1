# Builds a single self-contained HTML file containing the whole course.
#
# index.html loads the 341 lessons from 40 separate files in data/. That works
# when the folder is kept together, but not if the HTML is moved on its own.
# This script inlines every data file into one portable document.
#
# Run it from the project folder:   .\build-single-file.ps1
# Re-run it whenever you edit a lesson or add an update.

$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

$source = Join-Path $here "index.html"
$target = Join-Path $here "meta-ads-mastery-single-file.html"

if (-not (Test-Path $source)) { throw "index.html not found in $here" }

$html  = [IO.File]::ReadAllText($source)
$tags  = [regex]::Matches($html, '<script src="data/([^"]+)"></script>')
if ($tags.Count -eq 0) { throw "No data script tags found. Has index.html already been inlined?" }

$inlined = 0
foreach ($tag in $tags) {
    $name = $tag.Groups[1].Value
    $path = Join-Path $here ("data\" + $name)
    if (-not (Test-Path $path)) { throw "Missing data file: $name" }

    $js = [IO.File]::ReadAllText($path)
    if ($js -match '</script>') { throw "$name contains a closing script tag and cannot be inlined safely" }

    $html = $html.Replace($tag.Value, "<script>`r`n/* $name */`r`n$js`r`n</script>")
    $inlined++
}

# Write without a byte order mark so the emoji and dashes render correctly everywhere
[IO.File]::WriteAllText($target, $html, (New-Object Text.UTF8Encoding $false))

$kb = [math]::Round((Get-Item $target).Length / 1KB)
Write-Host ""
Write-Host "  Inlined $inlined data files"
Write-Host "  Created meta-ads-mastery-single-file.html  ($kb KB)"
Write-Host ""
Write-Host "  This one file contains the entire course. It can be emailed, copied to"
Write-Host "  a memory stick, or opened from anywhere with no other files beside it."
Write-Host ""
