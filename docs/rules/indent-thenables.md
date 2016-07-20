# Ensure .then, .catch, and .finally are on a new line, indented (indent-thenables)

Lots of promises.  Let's get them consistent.

## Rule Details

This rule aims to ensure that promise functions (then, catch, finally)
are all on the next line, indented relative to the previous line.

The following patterns are considered warnings:

```js

foo().then(console.log);
foo()
.then(console.log);
  foo()
.then(console.log)

```

The following patterns are not warnings:

```js

foo()
  .then(console.log)

```