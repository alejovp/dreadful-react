# dreadful-react
A simple video content app builded with modern React. 

## Requiriments
- Target UI design located at: [UI designs dir](./__ui__).
- Components library: [Carbon Components React](https://react.carbondesignsystem.com/).
- Code unit testing with [Jest](https://jestjs.io/docs/en/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- Use this [json](./__mocks__/data.json) as the mocking data for api response.
- Base project tooling includes node, webpack, babel and eslint.

## Setup:

Builded using node `v14.15.0`.

Clone this repo and at the root level run:
```
$ npm i
```

## Running the project:

In order to run the project just do:
```
$ npm run dev
```

This will create the app bundle, run eslint, a local server on port `8081` with hot reloading and open a browser window pointing to this server.

For unit testing:
```
$ npm run test
```
or for code coverage:
```
$ npm run test-coverage
```
