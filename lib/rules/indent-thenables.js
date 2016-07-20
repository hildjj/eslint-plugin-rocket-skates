/**
 * @fileoverview Ensure .then, .catch, and .finally are on a new line, indented
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensure .then, .catch, and .finally are on a new line, indented",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: [] // no options
    },
    create: function(context) {
        var sourceCode = context.getSourceCode();

        function isThenable(node) {
          if (node.computed) {
            return false;
          }
          switch (node.property.name) {
            case 'then':
            case 'catch':
            case 'finally':
              return true;
            default:
              return false;
          }
        }

        function getNodeIndent(node) {
            var token = sourceCode.getFirstToken(node);
            var src = sourceCode.getText(token, token.loc.start.column);
            return src.match(/^\s*/)[0].length;
        }

        return {
          MemberExpression: function(node) {
            if (isThenable(node)) {
              if (node.object.loc.end.line !== node.property.loc.start.line) {
                if (getNodeIndent(node.property) <= getNodeIndent(node.object)) {
                  context.report(
                    node.property,
                    `.${node.property.name}() must be indented`
                  );
                }
              }
            }
          }
        };
    }
};