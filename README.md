<div align="center">
  <a href="https://github.com/posquit0/koa-rest-api-boilerplate" title="Koa REST API Boilerplate">
    <img alt="Koa REST API Boilerplate" src="http://crocodillon.com/images/blog/2015/asynchronous-callbacks-in-koa--twitter.png" width="240px" />
  </a>
  <br />
  <h1>Koa REST API Boilerplate</h1>
</div>

<p align="center">
  Boilerplate for Node.js Koa RESTful API application with Docker, Swagger, Jest, CodeCov, and Circle CI
</p>

<div align="center">
  <a href="https://circleci.com/gh/posquit0/koa-rest-api-boilerplate">
    <img alt="CircleCI" src="https://circleci.com/gh/posquit0/koa-rest-api-boilerplate.svg?style=shield" />
  </a>
  <a href="https://codecov.io/gh/posquit0/koa-rest-api-boilerplate">
    <img alt="Coverage Status" src="https://codecov.io/gh/posquit0/koa-rest-api-boilerplate/branch/master/graph/badge.svg" />
  </a>
  <a href="https://david-dm.org/posquit0/koa-rest-api-boilerplate">
    <img alt="npm" src="https://img.shields.io/david/posquit0/koa-rest-api-boilerplate.svg?style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://github.com/ellerbrock/open-source-badge/">
    <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" />
  </a>
</div>

<br />

**Koa REST API Boilerplate** is a highly opinionated boilerplate template for building RESTful API application with Koa.

This boilerplate include the following features:

- Logging to STDOUT/STDERR stream using [Pino](http://getpino.io/)
- A super small and optimized [Docker](https://www.docker.com/) image based on [Node.js Alpine image](https://hub.docker.com/_/node/)
- [Swagger](https://swagger.io/) API documentation based on JSDoc
- Continuous integration and delivery using [CircleCI](https://circleci.com/)
- Unit Test and Integration Test along with Test Coverage using [Jest](https://facebook.github.io/jest/) testing framework

---


## Getting Started

```zsh
$ git clone https://github.com/posquit0/koa-rest-api-boilerplate your-project-name
$ cd your-project-name
$ rm -rf .git && git init
```

```zsh
$ yarn
$ yarn start
```


## Commands

### Run

```zsh
# Run normally
$ yarn start
# Run the application with nodemon for development
$ yarn dev
```

### Test

```zsh
# Test
$ yarn test                           # Run all test
$ yarn test:unit                      # Run only unit test
$ yarn test:integration               # Run only integration test
# Test (Watch Mode for development)
$ yarn test:watch                     # Run all test with watch mode
$ yarn test:watch:unit                # Run only unit test with watch mode
$ yarn test:watch:integration         # Run only integration test with watch mode
# Test Coverage
$ yarn test:coverage                  # Calculate the coverage of all test
$ yarn test:coverage:unit             # Calculate the coverage of unit test
$ yarn test:coverage:integration      # Calculate the coverage of integration test
# Test consistent coding style (Lint)
$ yarn lint                           # Lint all sourcecode
$ yarn lint:app                       # Lint app sourcecode
$ yarn lint:test                      # Lint test sourcecode
```

### Archive

```zsh
$ yarn pack
```


## Test

All test for this boilerplate uses following tools.

- [Jest](https://github.com/facebook/jest)
- [supertest](https://github.com/visionmedia/supertest) - Easy HTTP assertions for integration test


## Contributing

This project follows the [**Contributor Covenant**](http://contributor-covenant.org/version/1/4/) Code of Conduct.

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/posquit0/koa-rest-api-boilerplate/issues) to report any bugs or ask feature requests.


## Self Promotion

Like this project? Please give it a ★  on [GitHub](https://github.com/posquit0/awesome-engineer-onboarding)! It helps this project **a lot**.
And if you're feeling especially charitable, follow [posquit0](https://posquit0.com) on [GitHub](https://github.com/posquit0).


## See Also

- [koa-logging](https://github.com/kasa-network/koa-logging) - A middleware that logs request and response with Pino.
- [koa-request-id](https://github.com/kasa-network/koa-request-id) - A middleware that generates a unique Request ID for every incoming HTTP request.
- [koa-http-client](https://github.com/kasa-network/koa-http-client) - A middleware that attachs HTTP client to communicate with the context during inter-service communications.


## License

Provided under the terms of the [MIT License](https://github.com/posquit0/koa-rest-api-boilerplate/blob/master/LICENSE).

Copyright © 2017-2019, [Byungjin Park](http://www.posquit0.com).
