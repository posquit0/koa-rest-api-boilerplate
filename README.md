<div align="center">
  <a href="https://github.com/posquit0/koa-rest-api-boilerplate" title="Koa REST API Boilerplate">
    <img alt="Koa REST API Boilerplate" src="https://camo.githubusercontent.com/674563115c4e0d4e5d99440b916952ad795c498e/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f363339363931332f6b6f612f6c6f676f2e706e67" width="240px" />
  </a>
  <br />
  <h1>Koa REST API Boilerplate</h1>
</div>

<p align="center">
  Boilerplate for Node.js Koa RESTful API application with Docker, Swagger, Jest, Coveralls, and Circle CI
</p>

<div align="center">
  <a href="https://circleci.com/gh/posquit0/koa-rest-api-boilerplate">
    <img alt="CircleCI" src="https://circleci.com/gh/posquit0/koa-rest-api-boilerplate.svg?style=shield" />
  </a>
  <a href="https://coveralls.io/github/posquit0/koa-rest-api-boilerplate">
    <img src="https://coveralls.io/repos/github/posquit0/koa-rest-api-boilerplate/badge.svg" alt='Coverage Status' />
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


## Contributing

This project follows the [**Contributor Covenant**](http://contributor-covenant.org/version/1/4/) Code of Conduct.

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/posquit0/koa-rest-api-boilerplate/issues) to report any bugs or ask feature requests.


## Contact

If you have any questions, feel free to join me at [`#posquit0` on Freenode](irc://irc.freenode.net/posquit0) and ask away. Click [here](https://kiwiirc.com/client/irc.freenode.net/posquit0) to connect.


## License

[MIT](https://github.com/posquit0/koa-rest-api-boilerplate/blob/master/LICENSE) © [Byungjin Park](http://www.posquit0.com)
