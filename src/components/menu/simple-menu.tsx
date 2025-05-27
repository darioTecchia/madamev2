import { IMenu, IMenuItem } from "@/models/menu";
import MenuItem from "./menu-item";

interface SimpleMenuProps {
  menu?: IMenu;
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
          // image={item.image}
        />
      ))}
    </div>
  );
}
