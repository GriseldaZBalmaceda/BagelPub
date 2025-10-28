export function wixMediaToUrl(wixImage: string): string | null {
  if (!wixImage || !wixImage.startsWith("wix:image://")) return null

  try {
    // Extract the part after 'v1/' and before '#' or '?' if present
    const match = wixImage.match(/^wix:image:\/\/v1\/([^#?]+)/)
    if (!match) return null

    const relativeUrl = match[1]
      .split("/")[0] // remove the trailing filename if present
      .trim()

    return `https://static.wixstatic.com/media/${relativeUrl}`
  } catch (err) {
    console.error("Failed to parse Wix image:", err)
    return null
  }
}
