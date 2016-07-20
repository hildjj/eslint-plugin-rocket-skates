/**
 * @fileoverview Acronyms, when a part of a word, should be capitalized.
 * @author Joe Hildebrand
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/capitalize-acronyms"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("capitalize-acronyms", rule, {

    valid: [
        { code: "var http;", options: [['HTTP']] },
        { code: "var HTTPFoo;", options: [['HTTP', 'BAR']] },
        { code: "var HTTP01Challenge;", options: [['HTTP']] },
        { code: "var some1HTTP;", options: [['HTTP']] },
        { code: "var some1HTTP01Challenge;", options: [['HTTP']] },
        { code: "var h = { http: 1, HTTPFoo: 2}", options: [['HTTP', 'JS']] },
    ],

    invalid: [
        {
            code: "var HttpFoo",
            options: [['HTTP']],
            errors: [{
                message: "Acronym (Http) must be upper case",
                type: "Identifier"
            }]
        },
        {
            code: "var HTTPfoo",
            options: [['HTTP']],
            errors: [{
                message: "Acronym (HTTP) ends with invalid part",
                type: "Identifier"
            }]
        },
        {
            code: "var h = { httpFoo: 3 }",
            options: [['HTTP']],
            errors: [{
                message: "Acronym (http) must be upper case",
                type: "Identifier"
            }]
        },
    ]
});
