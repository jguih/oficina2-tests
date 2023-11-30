# oficina2-tests

This project is a bootstrap of oficina-de-integracao's web app and e2e testing using Cypress

Web app repository: https://github.com/brenaSF/oficina-de-integracao.git

More about Cypress here: https://docs.cypress.io/guides/overview/why-cypress

## Prerequisites

This project requires NodeJS, Git and Docker to be installed

More about Git here: https://git-scm.com/

More about NodeJS here: https://nodejs.org/en

More about Docker here: https://www.docker.com/

## How to run this project

1. Run ```npm run init``` to install all dependencies and clone oficina-de-intregracao's repository
2. Run ```docker compose up``` to configure the containers for front-end, database and back-end servers
3. On another terminal run ```npm run cypress:open``` to open cypress client to initiate the testing suits

Alternatively you can run ```npm run cypress:run``` to run cypress tests directly without opening the client

Back-end Docker container uses the built version of the app's back-end. It should come with the repository, but if you need to build it again run ```npm run app-build```

The front-end server exposes the app on http://localhost:3030, you can use this to access it on your local machine

If you want to apply the latest changes to the containers, rebuild then by running ```docker composer up --build```