/**
 * @fileoverview Ensure requires go into a const
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensure requires go into a const",
            category: "Node.js and CommonJS",
            recommended: false
        },
        schema: [] // no options
    },
    create: function(context) {
        const options = context.options[0];
        return {
          VariableDeclaration: function(node) {
            if (node.kind !== 'const') {
              for (let d of node.declarations) {
                if (d.init &&
                    d.init.callee &&
                    (d.init.type === "CallExpression") &&
                    (d.init.callee.type === "Identifier") &&
                    (d.init.callee.name === "require")
                ) {
                  context.report(
                    node,
                    "require must go into a const variable"
                  );
                }
              }
            }
          }
        };
    }
};