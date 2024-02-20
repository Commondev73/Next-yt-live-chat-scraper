import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LocaleEnum } from './enums/locale.enum';

// Can be imported from a shared config
export const locales = Object.values(LocaleEnum)

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as LocaleEnum)) notFound();

    return {
        messages: (await import(`@/locales/${locale}.json`)).default
    };
});