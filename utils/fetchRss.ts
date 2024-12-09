import { parseString } from 'xml2js'
import { promisify } from 'util'

const parseXML = promisify(parseString)

interface RSSResponse {
  rss: {
    channel: [{
      item: Array<{
        guid: string[];
        title: string[];
        description: string[];
        category: string[];
        pubDate: string[];
        link: string[];
      }>
    }]
  }
}

export async function fetchRssFeed() {
  try {
    const response = await fetch('https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0Wehpmuj2lUhuRhQaafhBjAJqaPU244mlTDK1i&aggregateId=7f83e8ca-6701-5ea0-96ee-072636b67336')
    const xmlText = await response.text()
    const result = await parseXML(xmlText) as RSSResponse
    const items = result.rss.channel[0].item

    return items.map((item: any) => ({
      id: item.guid?.[0] || Math.random().toString(),
      title: item.title?.[0]?.replace('<![CDATA[', '').replace(']]>', '') || '',
      description: item.description?.[0] || '',
      imageUrl: 'https://b.fssta.com/uploads/application/fscom/fox-sports-logo-black.png',
      category: item.category?.[0] || 'Sports',
      date: new Date(item.pubDate?.[0] || '').toLocaleDateString(),
      link: item.link?.[0] || '#'
    }))
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return []
  }
} 