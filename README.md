# Sign-up Demo

Prototype for a company website. It captures customer information via a sign-up form to share marketing content.

[Live version](https://sign-up-angular-demo.netlify.app/) is deployed on Netlify.

This project was implemented using [Outside-In Test-Driven Development](https://outsidein.dev/concepts/outside-in-tdd/).

You can follow the development steps through the [board](https://github.com/users/raskolnikov-rodion/projects/2/views/1) and [pull requests](https://github.com/raskolnikov-rodion/sign-up-demo/pulls?q=is%3Apr).

Some of the techniques illustrated in this demo:

- splitting an application into modules for independent linting, testing and building
- routing and lazy loading resources
- responsive design
- automated unit and end-to-end testing
- support for multiple languages
- componentization applying the presentational/container pattern
- sharing data between components
- using [BEM](https://getbem.com/) pattern for managing styles
- using CSS variables to improve maintainability
- using observables and OnPush change detection for efficient, reactive UI updates
- performing HTTP requests using a service
- using HTTP interceptors
- using type guards

## Running The App Via Local Server

- clone this repository to your machine
- install [Node.js](https://nodejs.org/) (version 18 recommended)
- install dependencies by running `npm i` or `npm ci`
- start the Angular application by running `npm run start:website`
- start the mock server by running `npm run start:mock-server`
- open your browser and navigate to http://localhost:4200/

## Tech Stack

- [Nx](https://nx.dev/)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Sass](https://sass-lang.com/)
- [RxJs](https://rxjs.dev/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Mocky](https://www.npmjs.com/package/mocky)
- [Netlify](https://www.netlify.com/)

## How Does It Work?

In the Home Page, the sign-up form is displayed to capture user data. The form is validated according to the following rules:

- first and last names require at least three characters
- email field requires a valid email
- all fields are required

Once all fields are correctly filled, the submit button is enabled. By clicking the button, the user triggers a HTTP request to a mock server.

The server responds randomly with either a 200 or 500 code, for successful or failed requests. This was implemented to illustrate how to handle different situations and provide feedback for the user.

## Local vs. Netlify Versions

Since the Netlify version does not connect to the local mock server, the HTTP request is intercepted by the app, and a successful response with status 200 is returned.
