export enum MenuType {
  Simple = 'simple',
  Combined = 'combined',
  Tasting = 'tasting',
}

export interface MenuBase {
  id: string;
  name: string;
  description?: string;
  items?: MenuItem[];
  type: MenuType;
}

export interface SimpleMenu extends MenuBase {
  type: MenuType.Simple;
}

export interface CombinedMenu extends MenuBase {
  additionalItems?: MenuItem[];
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
}
