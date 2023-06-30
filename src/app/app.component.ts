import { Component } from '@angular/core';
import { isExpandableMenuItem } from './utils/is-expandable-menu-item.util';
import { MenuItem } from './classes/menu-item.class';
import { ExpandableMenuItem } from './classes/expandable-menu-item.class';
import { ActionMenuItem } from './classes/action-menu-item.class';
import { Menu } from './classes/menu.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menu = new Menu([
    new ActionMenuItem('First', '1', () => (this.content = 'First')),
    new ExpandableMenuItem('Second', '2', [
      new ActionMenuItem('Second 1', '21', () => (this.content = 'Second 1')),
      new ExpandableMenuItem('Second 2', '22', [
        new ActionMenuItem(
          'Second 2 1',
          '221',
          () => (this.content = 'Second 2 1')
        ),
        new ActionMenuItem(
          'Second 2 2',
          '222',
          () => (this.content = 'Second 2 2')
        ),
        new ActionMenuItem(
          'Second 2 3',
          '223',
          () => (this.content = 'Second 2 3')
        ),
      ]),
    ]),
    new ActionMenuItem('Third', '3', () => {}),
    new ActionMenuItem('Fourth', '4', () => {}),
  ]);

  public content: string | null = null;

  public toggle(): void {
    this.menu.isExpanded ? this.menu.collapse() : this.menu.expand();
  }
}
