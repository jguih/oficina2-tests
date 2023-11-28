# oficina2-tests

This project is a bootstrap of oficina-de-integracao's web app and e2e testing using Cypress

More about Cypress here: https://docs.cypress.io/guides/overview/why-cypress

## Prerequisites

This project requires NodeJS and Git to be installed

More about Git here: https://git-scm.com/

More about NodeJS here: https://nodejs.org/en

## How to run this project

1. Run ```npm install``` to install all dependencies
2. Run ```npm run setup-test-open``` to configure the project and open cypress

Alternatively you can run ```npm run setup-test-run``` to configure the project and run cypress without opening the client

## About ```npm run setup-test``` script

This is a custom script that will start oficina-de-integracao's web application and Cypress client concurrently

Before initiating oficina-de-integracao's web server, NodeJS will try to clone the remote repository and then pull changes automatically
