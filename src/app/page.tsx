import Link from "next/link";
import { Phone, MapPin, ChevronRight } from "lucide-react";
import HeadWithLogo from "@/components/ui/head-with-logo";
import { EMenuKind, IMenu } from "@/models/menu";

export default function Home() {
  return (
    <>
      {/* Logo and Title */}
      <div className="mb-16 text-center">
        <HeadWithLogo className="mb-6" />

        <h1 className="mb-2 text-5xl font-light tracking-tight md:text-6xl">
          Madame
        </h1>
        <h2 className="mb-8 text-4xl font-light tracking-tight md:text-5xl">
          Lounge Bar
        </h2>

        <div className="flex flex-col items-center justify-center gap-3 text-sm text-gray-700 md:flex-row md:gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <p>Piazza Generale Avitabile, 80051 Agerola NA</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            <a href="tel:+393293985389" className="hover:underline">
              +39 329 398 5389
            </a>
          </div>
        </div>
      </div>

      {/* Menu Title */}
      <div className="mb-12 w-full text-center">
        <h2 className="text-sabilaHeading mb-2 font-serif italic">Menù</h2>
        <div className="mx-auto h-0.5 w-16 bg-black"></div>
      </div>

      {/* Menu Categories */}
      <div className="w-full space-y-6">
        {menus.map((category, index) => (
          <Link key={index} href={category.href} className="group block">
            <div className="flex items-center justify-between border-b border-gray-100 py-4">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
                <h3 className="text-xl font-medium transition-colors group-hover:text-gray-600">
                  {category.name}
                </h3>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <button className="rounded-none bg-black px-8 py-6 text-white hover:bg-gray-800">
          Prenota un tavolo
        </button>
      </div>
    </>
  );
}

// Sample data
const menus: IMenu[] = [
  {
    id: "caffetteria",
    name: "Caffetteria",
    href: "/menu/caffetteria",
    kind: EMenuKind.Simple,
  },
  {
    id: "gin-list",
    name: "Gin List",
    href: "/menu/gin-list",
    kind: EMenuKind.Combined,
  },
  {
    id: "la-via-del-rum",
    name: "La Via del Rum",
    href: "/menu/la-via-del-rum",
    kind: EMenuKind.Tasting,
  },
];
