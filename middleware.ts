import createMiddleware from 'next-intl/middleware';
import { LocaleEnum, locales } from '@/i18n' 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: LocaleEnum.TH
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|en)/:path*']
};