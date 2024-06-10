import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
    '/', // Add any additional routes here
]);

// Define public routes
const publicRoutes = createRouteMatcher([
    '/api/uploadThing' // Add any additional public routes here
]);

// Combined middleware function
export default clerkMiddleware((auth, req, res) => {
    if (publicRoutes(req)) {
        // Allow access to public routes without authentication
        return;
    }

    if (isProtectedRoute(req)) {
        // Protect the route if it matches the defined criteria
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
