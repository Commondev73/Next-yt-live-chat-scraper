type Props = {
  params: {
    liveId: string;
  };
};

const YtLiveChatPage = async ({ params }: Props) => {
  const liveId = params.liveId;

  return (
    <>
      <h2 style={{ fontSize: 30, fontWeight: 'bold' }}>id: {liveId}</h2>
    </>
  );
};

export default YtLiveChatPage;
