# TypeScript ncc serverless Template (direct0)

Quickly bootstrap a [serverless](https://serverless.com) project using TypeScript (built with [ncc]()).

This creates a serverless project intended for _direct_ lambda invocation. For a project fronted by API Gateway, see https://github.com/kyledetella/typescript-ncc-serverless-template.

Features:

- TypeScript (compiled using [ncc](https://github.com/zeit/ncc))
- [Jest](https://jestjs.io/) configured out-of-the-box

<details>
<summary><strong>Table of Contents</strong></summary>

- [TypeScript ncc serverless Template (direct0)](#typescript-ncc-serverless-template-direct0)
  - [Usage](#usage)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Testing locally](#testing-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)

</details>

## Usage

```sh
npx serverless create --template-url https://github.com/kyledetella/typescript-ncc-serverless-template-direct --path <your_app> && cd <your_app>
```

Inside of your new app directory, run:

```sh
nvm use && npm i
```

## Development

### Install dependencies

```bash
nvm use && npm i
```

### Testing locally

```sh
npm start
```

This will rebuild your project as you make changes. You can invoke your function(s) locally by:

```sh
serverless invoke local -f main
```

> Run `serverless invoke local --help` for more options

## Testing

```sh
npm t
```

To run in watch mode:

```sh
npm run test:watch
```

## Deployment

```bash
npm run deploy
```
