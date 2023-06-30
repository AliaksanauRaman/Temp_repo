import { MenuItem } from './menu-item.class';

export class Menu {
  public isExpanded = true;

  constructor(public readonly items: Array<MenuItem>) {}

  public expand(): void {
    this.isExpanded = true;
  }

  public collapse(): void {
    this.isExpanded = false;
  }
}
