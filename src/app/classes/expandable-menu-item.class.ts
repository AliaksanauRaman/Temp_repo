import { isExpandableMenuItem } from '../utils/is-expandable-menu-item.util';
import { MenuItem } from './menu-item.class';

export class ExpandableMenuItem extends MenuItem {
  public isExpanded = false;

  constructor(
    text: string,
    shortcut: string,
    public readonly children: Array<MenuItem>
  ) {
    super(text, shortcut);
  }

  public override onClick(): void {
    if (this.isExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  public expand(): void {
    this.isExpanded = true;
  }

  public collapse(): void {
    this.children
      .filter(isExpandableMenuItem)
      .forEach((child) => child.collapse());

    this.isExpanded = false;
  }
}
