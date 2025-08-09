# Downloads Wikimedia Commons/Wikipedia images via Wikipedia API into assets/superstars
# Usage: run from project root with PowerShell 5+ or 7+

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $root
$dest = Join-Path $projectRoot 'assets/superstars'

if (!(Test-Path $dest)) {
  New-Item -Path $dest -ItemType Directory | Out-Null
}

# Map of id -> Wikipedia page title
$pages = @{
  'khali'           = 'The_Great_Khali'
  'gama-singh'      = 'Gama_Singh'
  'tiger-ali-singh' = 'Tiger_Ali_Singh'
  'singh-brothers'  = 'The_Bollywood_Boyz'
  'jinder-mahal'    = 'Jinder_Mahal'
  'akam'            = 'Akam_(wrestler)'
  'kavita-devi'     = 'Kavita_Devi_(wrestler)'
  'jeet-rama'       = 'Jeet_Rama'
  'mahabali-shera'  = 'Mahabali_Shera'
  'sanga'           = 'Saurav_Gurjar'
  'veer-mahaan'     = 'Rinku_Singh_(baseball)'
  'shanky'          = 'Shanky'
  'giant-zanjeer'   = ''
  'guru-raaj'       = ''
  'mustafa-ali'     = 'Mustafa_Ali'
}

function Get-WikiImageUrl([string]$title){
  if([string]::IsNullOrWhiteSpace($title)){ return $null }
  $api = "https://en.wikipedia.org/w/api.php?action=query&titles=$title&prop=pageimages&format=json&pithumbsize=900&origin=*"
  try {
    $resp = Invoke-WebRequest -Uri $api -UseBasicParsing -Headers @{ 'User-Agent' = 'WWE-India-Downloader/1.0' }
    $json = $resp.Content | ConvertFrom-Json
    $pagesObj = $json.query.pages
    $page = $pagesObj.PSObject.Properties.Value | Select-Object -First 1
    if($page -and $page.thumbnail -and $page.thumbnail.source){
      return $page.thumbnail.source
    }
    # Try original image if thumbnail not present
    $api2 = "https://en.wikipedia.org/w/api.php?action=query&titles=$title&prop=pageimages&format=json&piprop=original&origin=*"
    $resp2 = Invoke-WebRequest -Uri $api2 -UseBasicParsing -Headers @{ 'User-Agent' = 'WWE-India-Downloader/1.0' }
    $json2 = $resp2.Content | ConvertFrom-Json
    $pagesObj2 = $json2.query.pages
    $page2 = $pagesObj2.PSObject.Properties.Value | Select-Object -First 1
    if($page2 -and $page2.original -and $page2.original.source){
      return $page2.original.source
    }
  } catch {
    Write-Warning "API error for ${title}: $($_.Exception.Message)"
  }
  return $null
}

foreach($id in $pages.Keys){
  $title = $pages[$id]
  if(-not $title){ Write-Host "Skipping $id (no page title)"; continue }
  Write-Host "Resolving image for $id ($title)"
  $imgUrl = Get-WikiImageUrl -title $title
  if(-not $imgUrl){ Write-Warning "No image found for ${id}"; continue }
  $ext = [System.IO.Path]::GetExtension($imgUrl)
  if([string]::IsNullOrWhiteSpace($ext)){ $ext = '.jpg' }
  $outPath = Join-Path $dest ("$id$ext")
  try {
    Write-Host "Downloading $id from $imgUrl"
    Invoke-WebRequest -Uri $imgUrl -OutFile $outPath -UseBasicParsing
  } catch {
    Write-Warning "Failed to download ${id}: $($_.Exception.Message)"
  }
}

Write-Host "Done. Images saved to $dest"
