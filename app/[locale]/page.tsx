import LiveChatId from '@/components/live-chat-id';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Index');
  return (
    <div className="h-[90vh] flex justify-center items-center">
      {t('title')}
      <LiveChatId version={process.env.npm_package_version!}></LiveChatId>
    </div>
  );
};

export default Home;
