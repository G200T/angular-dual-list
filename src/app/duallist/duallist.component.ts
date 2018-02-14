import { Component, Input, Output, EventEmitter } from '@angular/core';

class BaseList {
  base: Array<any>;
  selected: Array<any> = [];

  constructor(list: Array<any> = []) {
    this.base = [...list];
  }

  selectNone(): void {
    this.selected = [];
  }

  isSelectedNone(): boolean {
    return this.selected.length === 0;
  }

  selectAll(): void {
    this.selected = [...this.base];
  }

  isSelectedAll(): boolean  {
    return this.selected.length === this.base.length && this.selected.every(v1 => this.base.find(v2 => v1 === v2));
  }
}

@Component({
  selector: 'app-dual-list',
  templateUrl: './duallist.component.html',
  styleUrls: ['./duallist.component.css'],
})
export class DualListComponent {

  public _leftList: BaseList;
  public _rightList: BaseList;

  @Input() display: String = 'name';
  @Input() leftTitle: String = 'Available';
  @Input() rightTitle: String = 'Chosen';

  @Input()
  set leftList(list: Array<any>) {
    this._leftList = new BaseList(list);
  }
  @Input()
  set rightList(list: Array<any>) {
    this._rightList = new BaseList(list);
  }

  @Output() updateLists = new EventEmitter<any>();

  constructor() { }

  isSelected(list: Array<any>, item: any): boolean {
    return Boolean(list.filter(e => Object.is(e, item)).length);
  }

  selectItem(list: Array<any>, item: any): void {
    const entryItems = list.filter(e => Object.is(e, item));

    if (entryItems.length) {
      entryItems.forEach(v => {
        const idx = list.indexOf(v);
        if (idx + 1) list.splice(idx, 1);
      });
    } else {
      list.push(item);
    }
  }

  moveSelectedItems(fromList: BaseList, toList: BaseList): void {
    fromList.base = fromList.base.filter(item => !(fromList.selected.indexOf(item) + 1));
    toList.base = toList.base.concat(fromList.selected);
    fromList.selectNone();

    this.updateLists.next({leftList: this._leftList.base, rightList: this._rightList.base});
  }
}
