import DB from '@/data/db';
import { EMenuKind, IMenu, IMenuItem, ITastingMenu } from '@/models/menu';
import Link from 'next/link';

interface TastingMenuProps {
  menu?: ITastingMenu;
}

export default function TastingMenu({ menu }: TastingMenuProps) {
  const otherTastingMenus = DB.menus.filter(
    (otherMenu: IMenu) =>
      otherMenu.kind === EMenuKind.Tasting && otherMenu.id !== menu?.id,
  ) as ITastingMenu[];

  return (
    <>
      {/* <div className="mb-12 text-center">
        <div className="mx-auto mb-6 h-0.5 w-16 bg-black"></div>
        <p className="mx-auto max-w-lg text-gray-700">{menu?.description}</p>
      </div> */}

      {/* Rum List */}
      {menu?.items && (
        <div className="mb-12 w-full space-y-12">
          {menu.items.map((item, index) => (
            <TastingItem key={index} item={item} index={index + 1} />
          ))}
        </div>
      )}

      {/* Price and Booking */}
      <div className="mb-12 flex w-full flex-col items-center justify-between border-b border-t border-gray-200 py-6 md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="mb-1 text-sm text-gray-500">Prezzo per persona</p>
          <p className="text-3xl font-light">{menu?.price} €</p>
        </div>
      </div>

      {/* Other Tastings */}
      {otherTastingMenus.length > 0 && (
        <div className="mb-12 w-full">
          <h3 className="mb-6 text-xl font-medium">Altre degustazioni</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherTastingMenus.map((menu) => (
              <Link href={`/menu/${menu.id}`} className="group" key={menu.id}>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="p-4">
                    <h4 className="mb-1 font-serif text-5xl italic">
                      {menu.name}
                    </h4>
                    <p className="mb-2 text-sm text-gray-600">
                      {menu.description}
                    </p>
                    <p className="font-medium">{menu.price} €</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

interface ITastingItemProps {
  item: IMenuItem;
  index: number;
}

function TastingItem({ item, index }: ITastingItemProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {/* item Details */}
      <div className="w-full md:w-2/3">
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
            {index}
          </span>
          <h3 className="text-xl font-medium">{item.name}</h3>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <span className={`fi text-sm fi-${item.origin}`}></span>
        </div>

        <p className="mb-4 text-gray-700">{item.description}</p>

        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium">Note di degustazione:</h4>
          <div className="flex flex-wrap gap-2">
            {item.notes?.map((note, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
