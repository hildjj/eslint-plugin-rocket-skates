/**
 * @fileoverview Acronyms, when a part of a word, should be capitalized.
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Acronyms, when a part of a word, should be capitalized.",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: [
          {
            type: "array",
            items: {
              type: "string"
            }
          }
        ]
    },
    create: function(context) {
        var acronyms = context.options[0];
        var acroRE = acronyms.map((a) => new RegExp(`(.*)(${a})(.*)`, 'i'))

        function checkID(context, id) {
          for (let re of acroRE) {
            if (id.name) {
              const m = id.name.match(re);
              if (m && (m[1] || m[3])) {
                if (m[2] !== m[2].toUpperCase()) {
                  context.report(
                    id,
                    `Acronym (${m[2]}) must be upper case`
                  );
                }
                if (m[1] && !m[1].match(/^[A-Za-z][a-z0-9_]*$/)) {
                  context.report(
                    id,
                    `Acronym (${m[2]}) begins with invalid part`
                  );
                }
                if (m[3] && !m[3].match(/^[0-9]*[A-Z][a-z0-9]*$/)) {
                  context.report(
                    id,
                    `Acronym (${m[2]}) ends with invalid part`
                  );
                }
              }
            }
          }
        }

        return {
            VariableDeclaration: function(node) {
                for (let d of node.declarations) {
                  checkID(context, d.id);
                }
            },
            Property: function(node) {
                checkID(context, node.key);
            }
        };
    }
};