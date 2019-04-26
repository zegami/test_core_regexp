# Test project for babel/core-js on-usage polyfilling

## Setup

Fetch and install dependencies for project build:

```
npm install
```

## Run

Build and then load page serve page to default web browser:

```
npm start
```

The page background will be green if the polyfill has worked and red if it has
not. This should work in IE 11 and Edge which require new `RegExp.toString`
implementation, but they instead create the output `/a/undefined` unless the
`RegExp.flags` polyfill is included as well.

For further debugging, can pass extra flags to the webpack build:

```
npm run prestart -- --no-min --no-concat --report --debug
```
