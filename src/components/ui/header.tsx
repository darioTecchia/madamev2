import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-lg font-medium hover:underline"
      >
        Home
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
