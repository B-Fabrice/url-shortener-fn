export const apiUrl: string = process.env.API_URL || ''
export const apiKey: string = process.env.API_KEY || ''


export function errorExtractor(obj: any): string[] {
  const strings: string[] = []
  
  function traverse(obj: any) {
    if (Array.isArray(obj)) {
      for (const item of obj) {
        traverse(item)
      }
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        traverse(obj[key])
      }
    } else if (typeof obj === 'string') {
      strings.push(obj)
    }
  }
  
  traverse(obj)
  return strings
}