import { isActionMenuItem } from './../../utils/is-action-menu-item.util';
import { Component, Input, HostListener } from '@angular/core';
import { isExpandableMenuItem } from './../../utils/is-expandable-menu-item.util';
import { ExpandableMenuItem } from './../../classes/expandable-menu-item.class';
import { MenuItem } from '../../classes/menu-item.class';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @HostListener('mouseleave')
  public handleHostMouseLeave(): void {
    if (this._isCollapsed) {
      this._menuItem?.onClick();
    }
  }

  @Input()
  public set menuItem(value: MenuItem) {
    this._menuItem = value;
  }

  @Input()
  public set isCollapsed(value: boolean) {
    this._isCollapsed = value;
  }

  public _menuItem: MenuItem | null = null;
  public _isCollapsed = false;

  public handleMenuItemClick(
    menuItem: MenuItem,
    highestLevelMenuItem: ExpandableMenuItem | null
  ): void {
    menuItem.onClick();

    if (isActionMenuItem(menuItem) && highestLevelMenuItem !== null) {
      highestLevelMenuItem.collapse();
    }
  }

  public handleMenuItemMouseEnter(menuItem: MenuItem): void {
    if (!isExpandableMenuItem(menuItem)) {
      return;
    }

    if (menuItem.isExpanded) {
      return;
    }

    menuItem.expand();
  }

  public isExpandableMenuItem(
    menuItem: MenuItem
  ): menuItem is ExpandableMenuItem {
    return isExpandableMenuItem(menuItem);
  }
}
