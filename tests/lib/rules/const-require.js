/**
 * @fileoverview Ensure requires go into a const
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/const-require"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("const-require", rule, {

    valid: [
      { code: "const fs = require('fs')", parserOptions: { ecmaVersion: 6 } },
      { code: "const foo = require('fs').foo", parserOptions: { ecmaVersion: 6 } },
    ],

    invalid: [
        {
          code: "var fs = require('fs')",
          errors: [{
            message: "require must go into a const variable",
            type: "VariableDeclaration"
          }]
        },
        {
          code: "let fs = require('fs')",
          errors: [{
            message: "require must go into a const variable",
            type: "VariableDeclaration"
          }],
          parserOptions: { ecmaVersion: 6 }
        }

    ]
});
