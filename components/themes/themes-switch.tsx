'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BulbFilled, CloudFilled } from '@ant-design/icons';
import { Switch } from 'antd';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const onChange = (checked: boolean) => {
    checked ? setTheme('light') : setTheme('dark');
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex mr-5 items-center text-center">
      <Switch
        checkedChildren={<BulbFilled className="text-base" />}
        unCheckedChildren={<CloudFilled className="text-base" />}
        defaultValue={!['system', 'dark'].includes(theme!)}
        onChange={onChange}
      />
    </div>
  );
};

export default ThemeSwitch;
