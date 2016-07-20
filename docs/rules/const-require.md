# Ensure requires go into a const (const-require)

Modifying required modules is rarely going to be a good idea.

## Rule Details

This rule aims to ensure that packages that are imported using nodejs's
`require` statement go into `const` variables.

The following patterns are considered warnings:

```js

var fs = require('fs');
let util = require('util');

```

The following patterns are not warnings:

```js

const fs = require('fs'),
      util = require('util');

```
