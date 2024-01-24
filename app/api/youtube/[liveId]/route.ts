import { scraperYoutubeLiveChatHelper } from '@/helpers/scraper.helper';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface'

interface Context {
    params: {
        liveId: string
    }
}

export async function GET(request: Request, context: Context) {
    const { params } = context
    const liveId = params.liveId
    const messages: YouTubeChatMessageInterface[] = await scraperYoutubeLiveChatHelper(liveId);
    return Response.json({ status: 200, messages })
}