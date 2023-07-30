# Random Number Generator Function App

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D12-green)
![Webpack](https://img.shields.io/badge/Webpack-blue)
![Express.js](https://img.shields.io/badge/Express.js-orange)
[![Node.js Build with docker](https://github.com/your-username/random-number-function-app/actions/workflows/build-docker-image-run.yml/badge.svg)](https://github.com/your-username/random-number-function-app/actions/workflows/build-docker-image-run.yml)

This repository contains a Node.js function app that returns a random number on each invocation. The function app is compiled with Webpack and uses Express.js as the server framework. The infrastructure deployment files are written in Bicep. The entire project is built, tested, and deployed using GitHub Actions, defined in a single workflow.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you proceed, make sure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/random-number-function-app.git
cd random-number-function-app
```

2. Install the dependencies using npm:

```bash
npm install
```

3. Local debug
```bash
nodemon server.js
```

## Usage

To run the function app locally, use the following command:

```bash
node server.js
```

The app will start on `http://localhost:3000` by default.

To invoke the function and get a random number, make a GET request to the `/` endpoint. You will receive a response with a random number.

```bash
curl http://localhost:3000/
```

## Deployment

The deployment of this function app is automated using GitHub Actions. The workflow is triggered on each push to the `main` branch. It performs the following steps:

1. Installs Node.js and npm
2. Installs dependencies
3. Builds the function app using Webpack
4. Deploys the function app to the target environment using the Bicep infrastructure deployment files

Please ensure you have set up the appropriate secrets or environment variables for the deployment process to work correctly.

## Development

You can use any text editor or IDE of your choice to work on the function app. The main files and directories you need to focus on are:

- `index.js`: Contains the function logic.
- `webpack.config.js`: Webpack configuration for bundling the app.
- `infra/`: Contains the Bicep files for infrastructure deployment.

## Testing

Unit tests are an essential part of this project to ensure its reliability. The tests are written using a popular testing framework JEST and automatically run during the GitHub Actions workflow execution.

To run the tests locally, use the following command:

```bash
jest
```

## Contributing

Contributions to this repository are welcome! If you find any issues or have ideas for improvements, please open an issue or a pull request. For major changes, please discuss the proposed changes first by opening an issue.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out this project! If you have any questions or feedback, feel free to contact us.
