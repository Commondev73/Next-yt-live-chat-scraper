import LiveChat from '@/components/live-chat';
import LiveChatId from '@/components/live-chat-id';
// import { scraperYoutubeLiveChatHelper } from '@/helpers/scraper.helper';

// const yt1 = async () => {
//   const messages = await scraperYoutubeLiveChatHelper('aJEeEQ99PjY');
//   console.log('messages', messages);
// };

const Home = () => {
  return (
    <>
      <LiveChatId></LiveChatId>
      <LiveChat></LiveChat>
    </>
  );
};

export default Home;
