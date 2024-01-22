import { scraperYoutubeLiveChatHelper } from '@/helpers/scraper.helper';

type Props = {
  params: {
    id: string;
  };
};

const getChatMessage = async (liveId: string) => {
  const messages = await scraperYoutubeLiveChatHelper(liveId);
  console.log('messages', messages);
  return messages;
};

const YtLiveChatPage = async ({ params }: Props) => {
  const id = params.id;
  return <h2 style={{ fontSize: 30, fontWeight: 'bold' }}>id: {id}</h2>;
};

export default YtLiveChatPage;
