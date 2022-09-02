// splice
// start index, delete, insert
// it changes the original array

const items = ["item1", "item2", "item3"];

items.splice(1, 1);
// it also returns the deleted items
console.log(items);  // op - ['item1', 'item3']

const newItems = ["i1", "i2", "i3", "i4"];
const deletedItems = newItems.splice(2,2,"ni1","ni2");
console.log(newItems, deletedItems); // ['i1', 'i2', 'ni1', 'ni2'], ['i3', 'i4']