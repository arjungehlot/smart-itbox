// Right-hand media on every solution / product page.
// SHOW_VIDEOS = false → every page shows its own image (public/pages/<slug>.svg).
// When your final videos are ready, set SHOW_VIDEOS = true and put the YouTube ids in data/pages.js (`video`).
export const SHOW_VIDEOS = false
export const pageImage = page => `/pages/${page.slug}.svg`
