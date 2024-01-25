import LiveChat from '@/components/live-chat';

type Props = {
  params: {
    liveId: string;
  };
};

const YtLiveChatPage = async ({ params }: Props) => {
  const liveId = params.liveId;

  return (
    <>
      <LiveChat liveId={liveId}></LiveChat>
    </>
  );
};

export default YtLiveChatPage;
