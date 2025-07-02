import { Menu, MenuItem as IMenuItem } from '@/models/menu';
import { MenuItem } from './menu-item';

interface SimpleMenuProps {
  menu?: Menu;
}

export default function SimpleMenu({ menu }: SimpleMenuProps) {
  return (
    <div className="w-full space-y-6">
      {menu?.items?.map((item: IMenuItem, index: number) => (
        <MenuItem
          key={index}
          name={item.name}
          price={item.price}
          description={item.description}
          size={item.size}
          // image={item.image}
        />
      ))}
    </div>
  );
}
