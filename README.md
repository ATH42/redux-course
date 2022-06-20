# Redux Course

Created: June 17, 2022 12:00 AM
Created by: Anonymous
Resources: https://www.youtube.com/watch?v=poQXNp9ItL4
Tags: Code

# Functional Javascript

<aside>
💡 Javascript is a multi paradigm language

</aside>

## Benefits

- easy testing
- readability of small functions
- chaining of functions
  - comes also with a downside of making them more unreadable
  - utility libraries like lodash help with this problem. (e.g pipe, compose)
  [Lodash](https://lodash.com/)
- function currying:
  - splitting arguments in chained fn’s (const curry = (a) ⇒ (b) => a+b )

## Pure Functions

- no random values
- no current date/time
- no global state (DOM, files, db, etc…)
- no mutations
  ### Benefits of Pure Functions
  - self-documenting
  - easily testable
  - concurrency
  - cacheable

<aside>
⚠️ IMMUTABILITY 
Javascript is not a pure functional programming language, arrays and objects are mutable.

</aside>

### Benefits of Immutabilty?

- Predictabilty
- Faster Change Detection
- Concurrency

### Cons

- Performance
- memory overhead → “structural sharing”

<aside>
⚠️ To enforce immutabilty in Javascript libraries are used

- Immutable
- Immer
- Mori
</aside>

# Redux

## Architecture

### Consists of 3 main building blocks

1. Action / Event
2. Store
3. Reducer / Event Handler

<aside>
💡 Keep in Mind

- data can’t be mutated like in normal javascript
- redux uses pure functions
- redux has no opinion our data
- takes a function with the store as argument to update the store
</aside>

```jsx
// reducer functions take the current instance of a store
// and return an updated version of it

store = {
  categories: [],
  products: [],
  cart: {},
  user: {},
};

function reducer(store, action) {
  const updated = { ...store };
}
```

### Example Action

1. User adds something to a shopping cart
   1. create an action object
   2. dispatch t o the store << dispatch(action) >>
2. Store forwards the action to the reducer
   1. reducer isn’t called directly
   2. the store is in charge to call the reducer
3. Reducer computes the new state and returns it
4. The Store will set the state internally and notify the UI component

<aside>
💡 Redux uses this to funnel every action through the same entry by dispatching.
This lets you log every action.
Undo and Redo are therefore always possible

</aside>

## First things to Do when using Redux

- Design the store
- define the actions
- create reducers
- set up the store
