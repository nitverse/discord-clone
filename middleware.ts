import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/',
]);

const isPublicRoute = createRouteMatcher(["/api/uploadthing"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
    if (!isPublicRoute(req)) {
      auth().protect();
    }
});
