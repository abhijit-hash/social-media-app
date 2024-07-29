import { clerkMiddleware } from "@clerk/nextjs/server";

const customClerkMiddleware = async (req, res, next) => {
    console.log('Middleware applied to:', req.url);
    return clerkMiddleware()(req, res, next);
};

export default customClerkMiddleware;

export const config = {
    matcher: ['/api/(.)', '/trpc/(.)', '/'],
};