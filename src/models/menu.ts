export enum MenuType {
  Simple = 'simple',
  Combined = 'combined',
  Tasting = 'tasting',
}

export interface MenuBase {
  id: string;
  name: string;
  description?: string;
  items?: (MenuItem | MenuHeader)[];
  type: MenuType;
}

export interface SimpleMenu extends MenuBase {
  type: MenuType.Simple;
}

export interface SubMenu {
  name: string;
  id: string;
  description?: string;
  icon?: string;
  overPrice: number;
  mainItemLabel?: string;
  additionalItemLabel?: string;
  additionalItems?: MenuItem[];
}

export interface CombinedMenu extends MenuBase {
  subMenus: SubMenu[];
  type: MenuType.Combined;
}

export interface TastingMenu extends MenuBase {
  price: number;
  type: MenuType.Tasting;
}

export type Menu = SimpleMenu | CombinedMenu | TastingMenu;

export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  age?: string;
  origin?: string;
  notes?: string[];
  size?: string;
  allergens?: string[];
}

export interface MenuHeader {
  name: string;
  description?: string;
}
