'use client';

import { LocaleEnum } from '@/i18n';
import { Link, usePathname } from '@/navigation';
import { Dropdown, Button, Space, MenuProps } from 'antd';
import { useLocale } from 'next-intl';

const LocaleSwitch = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const localeName =
  Object.keys(LocaleEnum)[
    Object.values(LocaleEnum).indexOf(locale as LocaleEnum)
  ];
  const items: MenuProps['items'] = Object.entries(LocaleEnum).map(
    ([key, value]) => ({
      label: (
        <Link href={pathname} locale={value}>
          {key}
        </Link>
      ),
      key: value,
    }),
  );

  const menuProps = {
    items,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button size="small">
        <Space>{localeName}</Space>
      </Button>
    </Dropdown>
  );
};

export default LocaleSwitch;
