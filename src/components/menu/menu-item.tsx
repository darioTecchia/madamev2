import Image from 'next/image';

export interface MenuItemProps {
  name: string;
  price: number | undefined;
  description?: string;
  image?: string;
  size?: string;
}

export default function MenuItem({
  name,
  price,
  description,
  image,
  size,
}: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-medium transition-colors group-hover:text-gray-800">
          {name}
        </h3>
        <div className="mx-4 mb-1 flex-1 self-end border-b border-dotted border-gray-300"></div>
        <p className="font-medium">€{price}</p>
      </div>
      {size && <p className="text-xs text-gray-500">{size}</p>}
      {description && (
        <p className="mb-2 mt-1 text-sm text-gray-600">{description}</p>
      )}
      {image && (
        <div className="mt-3 overflow-hidden rounded-lg">
          <Image
            src={image || '/placeholder.svg'}
            alt={name}
            width={600}
            height={400}
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
