import { produce } from "immer";

let book = { title: "Dune" };

function publish(book) {
  book.isPublished = true;
}
publish(book);
console.log(book);

let immerBook = { title: "Dune" };
function immerPublish(book) {
  produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = immerPublish(immerBook);
console.log(updated);
