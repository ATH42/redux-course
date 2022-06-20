import { Map } from "immutable";

// references the book object and mutates it
let book = { title: "Dune" };
function publish(book) {
  book.isPublished = true;
}
publish(book);

// creates a new object
let immutableBook = Map({ title: "Dune" });
function publishImmutable(immutableBook) {
  return immutableBook.set("isPublished", true);
}
console.log(immutableBook.get("title"));

immutableBook = publishImmutable(immutableBook);
console.log(immutableBook.toJS());
