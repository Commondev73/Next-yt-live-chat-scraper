import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LocaleEnum } from './i18n';

export const locales = Object.values(LocaleEnum)

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });