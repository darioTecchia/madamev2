import CombinedMenu from '@/components/menu/combined-menu';
import SimpleMenu from '@/components/menu/simple-menu';
import TastingMenu from '@/components/menu/tasting-menu';
import HeadWithLogo from '@/components/ui/head-with-logo';
import Link from '@/components/ui/Link';
import DB from '@/data/db';
import {
  MenuType,
  CombinedMenu as ICombinedMenu,
  Menu,
  TastingMenu as ITastingMenu,
} from '@/models/menu';

export default async function MenuPage({
  params,
}: {
  params: Promise<{ menuId: string }>;
}) {
  const { menuId } = await params;

  const menu: Menu | undefined =
    DB.menus.find((m) => m.id === menuId) || undefined;

  return (
    <>
      {/* Logo */}
      <HeadWithLogo className="mb-6" />

      <div className="mb-12 text-center">
        <h1 className="mb-3 font-serif text-sabilaHeading italic">
          {menu?.name}
        </h1>
        <div className="mx-auto mb-6 h-0.5 w-16 bg-black"></div>
        {menu?.description && (
          <p className="mx-auto max-w-lg text-gray-700">{menu.description}</p>
        )}
      </div>

      {/* Menu Items */}
      {menu?.type === MenuType.Simple && <SimpleMenu menu={menu} />}
      {menu?.type === MenuType.Combined && (
        <CombinedMenu menu={menu as ICombinedMenu} />
      )}
      {menu?.type === MenuType.Tasting && (
        <TastingMenu menu={menu as ITastingMenu} />
      )}

      {/* Navigation to Other Categories */}
      <div className="mt-16 w-full">
        <h3 className="mb-4 text-lg font-medium">Esplora il nostro menù</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {DB.menus.map((menu) => (
            <CategoryLink
              key={menu.id}
              href={`/menu/${menu.id}`}
              name={menu.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

interface CategoryLinkProps {
  href: string;
  name: string;
}

function CategoryLink({ href, name }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className="border border-gray-200 px-4 py-3 text-center transition-colors hover:bg-gray-50"
    >
      {name}
    </Link>
  );
}
