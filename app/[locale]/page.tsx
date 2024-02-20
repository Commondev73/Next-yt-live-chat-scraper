import FontSizeSlider from '@/components/common/font-size-slider';
import LiveChatId from '@/components/live-chat-id';

const Home = () => {
  return (
    <>
      <div className="h-[90vh] flex justify-center items-center">
        <LiveChatId version={process.env.npm_package_version!}></LiveChatId>
      </div>
      <FontSizeSlider></FontSizeSlider>
    </>
  );
};

export default Home;
