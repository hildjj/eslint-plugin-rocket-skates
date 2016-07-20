# Acronyms, when a part of a word, should be capitalized. (capitalize-acronyms)

## Rule Details

This rule aims enforce rules for acronym use in identifiers and object keys.

The following patterns are considered warnings:

```js
var HttpFoo;
var HTTPfoo;
var h = { httpFoo: 3 };

```

The following patterns are not warnings:

```js

var http;
var HTTPFoo;
var h = { http: 1, HTTPFoo: 2};

```

### Options

[ 'LIST', 'OF', 'ACRONYMS' ]

## Further Reading

https://github.com/golang/go/wiki/CodeReviewComments#initialisms
