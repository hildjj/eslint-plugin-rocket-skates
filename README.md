# eslint-plugin-rocket-skates

Extra lint rules for rocket-skates

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-rocket-skates`:

```
$ npm install eslint-plugin-rocket-skates --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rocket-skates` globally.

## Usage

Add `rocket-skates` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rocket-skates"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "rocket-skates/const-require": 2
    }
}
```

