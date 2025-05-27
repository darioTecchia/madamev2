import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto mt-12 border-t border-gray-200 px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-600">
          © 2025 Madame Lounge Bar. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/contatti"
            className="text-sm text-gray-600 hover:underline"
          >
            Contatti
          </Link>
        </div>
      </div>
    </footer>
  );
}
