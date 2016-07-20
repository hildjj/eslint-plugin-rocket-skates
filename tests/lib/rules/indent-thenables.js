/**
 * @fileoverview Ensure .then, .catch, and .finally are on a new line, indented
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/indent-thenables"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("indent-thenables", rule, {

    valid: [
      "foo()\n  .then(console.log)",
      "foo().bar(console.log)",
      "  foo()\n    .then(console.log)",
      "p.then(console.log)",
      "p().then(console.log)",
    ],

    invalid: [
        {
          code: "foo()\n.then(console.log)",
          errors: [{
            message: ".then() must be indented",
            type: "Identifier"
          }]
        },
        {
          code: "foo()\n.catch(console.log)",
          errors: [{
            message: ".catch() must be indented",
            type: "Identifier"
          }]
        },
        {
          code: "foo()\n.finally(console.log)",
          errors: [{
            message: ".finally() must be indented",
            type: "Identifier"
          }]
        },
        {
          code: "  foo()\n  .then(console.log)",
          errors: [{
            message: ".then() must be indented",
            type: "Identifier"
          }]
        },
        {
          code: "  foo()\n.then(console.log)",
          errors: [{
            message: ".then() must be indented",
            type: "Identifier"
          }]
        },
    ]
});
