import Link from "next/link";

/** Simple 404 page. Refined in a later phase. */
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-24 text-center">
      <p className="font-display text-5xl font-semibold text-accent">404</p>
      <h1 className="font-display text-2xl text-foreground">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 text-sm font-medium text-primary underline underline-offset-4"
      >
        Return home
      </Link>
    </main>
  );
}
