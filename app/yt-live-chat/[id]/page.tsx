import { scraperYoutubeLiveChatHelper } from '@/helpers/scraper.helper';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';

type Props = {
  params: {
    id: string;
  };
};

const getMessages = (liveId: string) => setInterval(async () => {
  let messages: YouTubeChatMessageInterface[] = [];
  messages = await scraperYoutubeLiveChatHelper(liveId);
  console.log('liveId', liveId);
  console.log('message', messages);
  return messages;
}, 10000);

const YtLiveChatPage = async ({ params }: Props) => {
  const id = params.id;
  getMessages(id);
  return (
    <>
      <h2 style={{ fontSize: 30, fontWeight: 'bold' }}>id: {id}</h2>
    </>
  );
};

export default YtLiveChatPage;
