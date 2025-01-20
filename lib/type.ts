
export type Opengraph = {
  title: string
  description: string
  type: string
  domain: string,
  twitter?: {
    card: 'summary' | 'summary_large_image' | 'app' | 'player',
    site: string,
    creator: string,
  }
}