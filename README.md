# Smallapi-js demo

[![](https://img.shields.io/npm/l/smallapi-js.svg)](https://github.com/tutanck/smallapi-js/blob/main/LICENSE)

> Smallapi-js usage examples

## What is Smallapi?

_[Smallapi](https://smallapi.io/)_ is a code plateform that helps developers craft, build and deploy APIs to the cloud in no time. Built on top of Javascript and MongoDB, Smallapi significantly reduces the amount of code you need to write and therefore increases code quality and time to market.

Try _[Smallapi](https://smallapi.io/)_ for free. You can _[Get started here](https://develop.smallapi.io/docs/page/quick-start)!_

## What is Smallapi-js?

[Smallapi-js](https://github.com/tutanck/smallapi-js) is a small wrapper wrote in javascript that allows [smallapi](https://smallapi.io/) users to uses their APIs cloud functions from the client side.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Usecases](#usecases)
- [Contributing](#contributing)
- [Learn more](#Learn-more)
- [License](#license)
- [Contributors ✨](#contributors-)

## Prerequisites

1. This project requires NodeJS (at least version 6) and NPM.
   [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
   To make sure you have them available on your machine,
   try running the following command.

```sh
node --version
# v21.5.0

npm --version
# 10.2.4
```

2. Create a `.env` file at the root of the project with the keys `API_URL` and `API_KEY` like the following:

```sh
API_URL='my-api-url'
API_KEY='my-secret-key'
```

You can create the `.env` file using the `env.example` file as a template.

3. Replace the values ​​'my-api-url' and 'my-secret-key' with the corresponding values ​​from a space you have created on smallapi.
   You can find the API_URL value in the `deployment` tab of your space:
   ![image](https://github.com/user-attachments/assets/1f1c9dac-d3ae-4909-8155-400a00c07465)
   The API_URL value corresponds to the url generated in the `Deploy link` section of your cloud space.

Regarding the API_KEY, you can find its value in the `environment` tab of your space, in the section `API Key Authorization`:
![image](https://github.com/user-attachments/assets/2e4beb68-528f-4a81-86d5-7b944f4051c1)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Install the project packages using `npm install`:

```sh
npm i
```

## Usage

Run the project using `npm start`:

```sh
# this will run the basic usecase by default
npm start
```

## Usecases

To run a specific usecase use `npm run usecase`:

```sh
# run the basic usecase
npm run basic
```

### 1. basic: Growing users

In this use case we create some users aged 0, then grow them to age 6 before removing them from the users database.

## Learn more

Learn more about the generated API [here](https://github.com/tutanck/smallapi-js?tab=readme-ov-file#api).

<!-- ##  : Populate

// Populate authors
TODO -->

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## License

[MIT License](https://tutanck.mit-license.org/2018) © Anagbla Joan (tutanck)

## Contributors ✨

Thanks goes to these wonderful people for their contribution:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://about.me/tutanck"><img src="https://avatars.githubusercontent.com/u/15267552?v=4" width="100px;" alt=""/><br /><sub><b>Anagbla Joan</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
