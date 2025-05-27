import HeadWithLogo from "@/components/ui/head-with-logo";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contatti() {
  return (
    <>
      <HeadWithLogo className="mb-6" />

      {/* Page Title */}
      <div className="mb-12 text-center">
        <h1 className="mb-3 font-serif text-4xl italic md:text-5xl">
          Contatti
        </h1>
        <div className="mx-auto mb-6 h-0.5 w-16 bg-black"></div>
        <p className="mx-auto max-w-lg text-gray-700">
          Siamo a tua disposizione per qualsiasi informazione, prenotazione o
          richiesta speciale.
        </p>
      </div>

      {/* Contact Info and Form */}
      <div className="mb-16 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="mb-6 text-2xl font-medium">Informazioni</h2>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gray-700" />
            <div>
              <h3 className="mb-1 font-medium">Indirizzo</h3>
              <p className="text-gray-700">Piazza Generale Avitabile</p>
              <p className="text-gray-700">80051 Agerola NA</p>
              <p className="text-gray-700">Italia</p>
              <a
                href="https://maps.google.com/?q=Piazza+Generale+Avitabile,+80051+Agerola+NA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block border-b border-gray-300 text-sm transition-colors hover:border-black"
              >
                Visualizza su Google Maps
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gray-700" />
            <div>
              <h3 className="mb-1 font-medium">Telefono</h3>
              <a
                href="tel:+393293985389"
                className="text-gray-700 hover:underline"
              >
                +39 329 398 5389
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8 w-full border-t border-gray-200 pt-8">
        <h2 className="mb-6 text-xl font-medium">Collegamenti rapidi</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link
            href="/degustazioni"
            className="border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            Degustazioni
          </Link>
          <Link
            href="/stagionali"
            className="border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            Menu stagionale
          </Link>
          <Link
            href="/gin-list"
            className="border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            Gin List
          </Link>
          <Link
            href="/"
            className="border border-gray-200 p-4 text-center transition-colors hover:bg-gray-50"
          >
            Menu completo
          </Link>
        </div>
      </div>
    </>
  );
}
