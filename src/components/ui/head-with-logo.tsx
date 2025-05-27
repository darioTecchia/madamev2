import Image from "next/image";

export default function HeadWithLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/madame.svg"
      alt="Madame Lounge Bar Logo"
      width={120}
      height={120}
      priority
      className={`mx-auto ${className}`}
    />
  );
}
