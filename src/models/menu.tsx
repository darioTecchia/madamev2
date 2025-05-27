export enum EMenuKind {
  Simple = "simple",
  Combined = "combined",
  Tasting = "tasting",
}

export interface IMenu {
  id: string;
  name: string;
  href: string;
  description?: string;
  items?: IMenuItem[];
  additionalItems?: IMenuItem[];
  kind: EMenuKind;
}

export interface ICombinedMenu extends IMenu {
  kind: EMenuKind.Combined;
}

export interface ITastingMenu extends IMenu {
  includes: string;
  price: number;
  kind: EMenuKind.Tasting;
}

export interface IMenuItem {
  name: string;
  description: string;
  price?: number;
  age?: string;
  origin?: string;
  notes?: string[];
  size?: string;
}
