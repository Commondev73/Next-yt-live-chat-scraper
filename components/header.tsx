import { MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="flex p-3 gap-5 items-center text-center border-b border-solid">
      <Link href="/">
        <MessageOutlined className="text-4xl ml-5" />
      </Link>
      <span className="text-lg font-bold">Live Chat Scraper</span>
    </div>
  );
};

export default Header;
