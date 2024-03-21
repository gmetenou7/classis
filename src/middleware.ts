import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'fr',
  localePrefix,
  locales
});
 
export const config = {
  matcher: ['/', '/(fr|en)/:path*']
};