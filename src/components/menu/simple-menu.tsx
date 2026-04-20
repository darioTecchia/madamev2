import { Menu, MenuItem as IMenuItem } from '@/models/menu';
import { MenuItem } from './menu-item';

interface SimpleMenuProps {
  menu?: Menu;
}

export default function SimpleMenu({ menu }: SimpleMenuProps) {
  return (
    <div className="w-full space-y-6">
      {menu?.items?.map((item, index: number) => {
        if ('price' in item) {
          return (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              size={item.size}
              allergens={item.allergens}
              // image={item.image}
            />
          );
        } else {
          return (
            <div key={index} className="">
              <h2 className="text-xl font-bold">{item.name}</h2>
              {item.description && (
                <p className="text-gray-600">{item.description}</p>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
