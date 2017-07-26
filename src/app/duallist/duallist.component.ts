import { Component, Input} from '@angular/core';

class BaseList {
  list: Array<any>;
  selected: Array<any> = [];

  constructor(list: Array<any> = []) {
    this.list = list;
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

  constructor() { }


  isSelected(list: Array<any>, item: any): Number {
    return list.filter(e => Object.is(e, item)).length;
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
    // fromList.list = fromList.list.filter(item => !(fromList.selected.indexOf(item)+1));
    const copy = [...fromList.list];
    fromList.list.length = 0;
    copy.forEach(e => {
      if (!(fromList.selected.indexOf(e) + 1)) fromList.list.push(e);
    });

    fromList.selected.forEach(item => toList.list.push(item));
    fromList.selected = [];
  }

  selectAll(list: BaseList): void {
    list.selected = [...list.list];
  }

  isSelectAll(list: BaseList): boolean  {
    return list.selected.length === list.list.length && list.selected.every(v1 => list.list.find(v2 => v1 === v2));
  }

  selectNone(list: BaseList): void {
    list.selected = [];
  }

  isSelectNone(list: BaseList): boolean {
    return list.selected.length === 0;
  }
}
