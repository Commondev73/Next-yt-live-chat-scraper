import { scraperYoutubeLiveChatHelper } from '@/helpers/scraper.helper';
import { useRouter } from 'next/router';

const getChatMessage = async (liveId: string) => {
  const messages = await scraperYoutubeLiveChatHelper(liveId);
  console.log('messages', messages);
};

const YtLiveChatPage = () => {
  const router = useRouter();
  // const { id } = router.query;
  // getChatMessage(id);
  return <></>;
};

export default YtLiveChatPage;
