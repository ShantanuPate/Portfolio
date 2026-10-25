import { Button } from "../app/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-10 text-stone-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
        <p className="font-mono text-xs uppercase tracking-wider">
          © {new Date().getFullYear()} Shantanu Pate · Designed with evidence
        </p>
        <div className="flex items-center gap-5">
          <Button
            asChild
            variant="link"
            className="h-auto p-0 font-mono text-xs uppercase tracking-wider text-stone-400 hover:text-emerald-400"
          >
            <a href="https://www.linkedin.com/in/shantanu-pate" target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
          <Button
            asChild
            variant="link"
            className="h-auto p-0 font-mono text-xs uppercase tracking-wider text-stone-400 hover:text-emerald-400"
          >
            <a href="mailto:shantanupate0@gmail.com">Email</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
