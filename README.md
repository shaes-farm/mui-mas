# mui-mas

A Material UI-based component library for SHAES Farm's applications.

[![build status](https://github.com/shaes-farm/mui-mas/actions/workflows/build-n-test.yml/badge.svg)](https://github.com/shaes-farm/mui-mas/actions/workflows/build-n-test.yml)
[![coverage status](https://coveralls.io/repos/github/shaes-farm/mui-mas/badge.svg?branch=main)](https://coveralls.io/github/shaes-farm/mui-mas?branch=main)
[![vulnerabilities](https://snyk.io/test/github/shaes-farm/mui-mas/badge.svg)](https://snyk.io/test/github/shaes-farm/mui-mas)

[![https://nodei.co/npm/@shaes-farm/mui-mas.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@shaes-farm/mui-mas.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@shaes-farm/mui-mas)

## Getting Started

This package is intended for use by SHAES Farm's applications to ease the integration of our platform requirements. We currently use the following technology stack in our application suite (*we are not affiliated with any of these projects*):

- [React](https://react.dev/)
- [Material UI](https://mui.com/material-ui/)
- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)

```sh
pnpm create next-app myapp \
  --app \
  --eslint \
  --src-dir \
  --typescript \
  --use-pnpm
  ...
cd myapp
pnpm add @shaes-farm/mui-mas
```

## Motivation

In Spanish "mui mas" means "much more", and that's what we provide with this component library; much more than the basic set of Material UI components.

We've developed an opinionated set of React components based on [MUI templates](https://mui.com/material-ui/getting-started/templates/) that allow us to quickly construct functionality needed by our React applications, with built-in support for MUI, Next, and Supabase. With <code>mui-mas</code> we can scaffold an app in minutes, instead of hours, quickly getting functional applications up and customized to our workflows.

## Early Release

We are releasing <code>mui mas</code> as an open-source component library because others may find it useful to quickly build high-quality applications. However, these components are customized for our design system and our back-end systems, and they may not be generally applicable for your needs. We've decided to release the library in this state as an Alpha release to gather feedback and to see if others find a library such as this useful.

## Help Us Improve

You can help us make this library better by [creating a pull request](https://github.com/shaes-farm/mui-mas/pulls) with suggestions. We gladly accept bug fixes, improvements, or just show us how you would make the library better able to support a wider choice of use cases. Any ideas, suggestions, and critical reviews are all welcomed as we continue to improve this package for our own needs, [open an issue to send us your feedback](https://github.com/shaes-farm/mui-mas/issues).

## Development Environment Setup

We use the [Node Version Manager](https://github.com/nvm-sh/nvm) to manage our Javascript development environments. See the [documentation](https://github.com/nvm-sh/nvm#installing-and-updating) for more information on installing `nvm` and getting set up.

After installing `nvm`, and cloning the `mui-mas` repository, the component library and the example application are built. To run the example in a development environment, perform the following commands:

```sh
cd mui-mas
nvm use
npm i
npm run verify
npm link
cd example
npm i
npm link @shaes-farm/mui-mas
npm run dev
```

To automatically see the results of developing changes to `mui-mas` components in the example application, open another terminal window, and run:

```sh
cd mui-mas
nvm use
npm run dev
```

This will start the Typescript compiler in watch mode, automatically building changes as they occur.
