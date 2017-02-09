# Angular 2 Dual-list

It's simple angular2 dual-list component.
For this component need bootstrap styles.

## Usage
Copy `duallist` directory in your project and import and add `DualListComponent` to declarations.
After you can add `<duallist [leftList]="leftList" [rightList]="rightList"></duallist>` to your html file.

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
