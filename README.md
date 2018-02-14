# Angular Dual-list

It's simple dual-list component for Angular 2+.
For this component need bootstrap styles.

## Demo
https://g200t.github.io/angular-dual-list/

## Usage
Copy `duallist` directory in your project and import and add `DualListComponent` to declarations.
After you can add `<app-dual-list (updateLists)="leftList=$event.leftList; rightList=$event.rightList" [leftList]="leftList" [rightList]="rightList"></app-dual-list>` to your html file.

### Component parameters:
1. **leftList** - The array of object for the left list.
2. **rightList** - The array of object for the left right.
3. **display** - The field name which display to object of list. Default: `name`.
4. **leftTitle** - The title for left list.
5. **rightTitle** - The title for right list.

## Example:
1. clone this project.
2. `npm install` for install dependencies.
3. `npm start` or `ng serve` for start local web server.
