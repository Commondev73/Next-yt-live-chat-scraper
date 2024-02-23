import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LocaleEnum } from './enums/locale.enum';

export const locales = Object.values(LocaleEnum)

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });