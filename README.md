polymer-test
======================

This is a harness for testing polymer apps

## Status
This shows that the current state of Polymer prevents testing with this harness.
Hopefully, this project will help us figure out what's wrong.

## Getting Started

1.  Clone the repo.
1.  (once) Install [node](http://nodejs.org/).
1.  (once) Install bower, `npm install -g bower`
1.  (once) Install testem, `npm install -g testem`
1.  `npm run deps`

## Running the Tests

1.  `npm test` (currently shows a passing test where Polymer is not loaded)
1.  `npm run test-broken-1` (never executes, tries to load Platform)
1.  `npm run test-broken-2` (never executes, tries to load Platform and Polymer)

## Breaking the Tests

Try running any of the tests in browser:

1.  `npm run serve-test` (works, but doesn't load Polymer)
1.  `npm run serve-broken-test-1` (never executes, but you can see all dependencies loaded)
1.  `npm run serve-broken-test-2` (never executes, also loads all dependencies)

## See the "app"

1.  `npm run app` (loads the app and its single Polymer component, paper-button)

## For science

Tracking progress in https://github.com/Polymer/polymer/issues/733