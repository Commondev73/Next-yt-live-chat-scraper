import { MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
import ThemeSwitch from './themes/themes-switch';
import LocaleSwitch from './common/locale-switch';

const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-solid">
      <div className="flex p-3 gap-5 items-center text-center">
        <Link href="/">
          <MessageOutlined className="text-4xl ml-5" />
        </Link>
        <span className="text-lg font-bold">Live Chat Scraper</span>
      </div>
      <div className='flex gap-3 items-center'>
        <LocaleSwitch/>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
