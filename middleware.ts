import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt"; // ✅ Edge-compatible

export const publicRoutes = ["/", "/actualites-nationales", "/articles", "/podcasts", "/galerie", "/a-la-une", "/sports", "/dailies"];

// Middleware d'internationalisation
const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';

  // Récupère ton token JWT (généré par NextAuth dans tes callbacks)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (process.env.NODE_ENV === "production") {
    console.log(`Page dans le middleware : "${pathWithoutLocale}"`)
    console.log(token)
  };

  if (pathWithoutLocale.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const isPublicPage = publicRoutes.some(route => pathWithoutLocale === route || pathWithoutLocale.startsWith(route + '/'));

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    if (!token) {
      let callbackUrl = pathname;
      if (req.nextUrl.search) {
        callbackUrl += req.nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      const loginUrl = new URL(`/?callbackUrl=${encodedCallbackUrl}`, req.url);

      return Response.redirect(loginUrl);
    }

    return intlMiddleware(req);
  }
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|_vercel).*)",
    "/",
    "/(api|trpc)(.*)",
  ]
};
