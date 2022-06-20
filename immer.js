import { produce } from "immer";

let book = { title: "Dune" };

function publish(book) {
  book.isPublished = true;
}
publish(book);
console.log(book);

let immerBook = { title: "Dune" };
function immerPublish(immerBook) {
  // args: initial state, §
  return produce(immerBook, (draft) => {
    draft.isPublished = true;
  });
}

let updated = immerPublish(immerBook);
console.log(updated);
