import Image from "next/image";

export interface MenuItemProps {
  name: string;
  price: number | undefined;
  description?: string;
  image?: string;
}

export default function MenuItem({
  name,
  price,
  description,
  image,
}: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between">
        <h3 className="font-medium text-lg group-hover:text-gray-800 transition-colors">
          {name}
        </h3>
        <div className="flex-1 mx-4 border-b border-dotted border-gray-300 self-end mb-1"></div>
        <p className="font-medium">€{price}</p>
      </div>
      {description && (
        <p className="text-gray-600 text-sm mt-1 mb-2">{description}</p>
      )}
      {image && (
        <div className="mt-3 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
