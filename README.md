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
npx create-next-app@latest myapp \
  --app \
  --eslint \
  --src-dir \
  --typescript \
  --use-pnpm
  ...
cd myapp
npm install @shaes-farm/mui-mas
```

## Motivation

In Spanish "mui mas" means "much more", and that's what we provide with this component library; much more than the basic set of Material UI components.

We've developed a library of React components based on [MUI templates](https://mui.com/material-ui/getting-started/templates/) that allow us to construct applications with built-in support for MUI, Next, and Supabase. With <code>mui-mas</code> we can spike an app in minutes, instead of hours, quickly getting functional concepts up and customized to our design workflows.

## Early Release

We are releasing <code>mui mas</code> as an open-source component library because others may find it useful to quickly build high-quality applications. However, these components are customized for our design system and our back-end systems, and they may not be generally applicable for your needs. We've decided to release the library in this state as an Alpha release to gather feedback and to see if others find a library such as this useful.

## Help Us Improve

You can help us make this library better by [creating a pull request](https://github.com/shaes-farm/mui-mas/pulls) with suggestions. We gladly accept bug fixes, improvements, or just show us how you would make the library better able to support a wider choice of use cases. Any ideas, suggestions, and critical reviews are all welcomed as we continue to improve this package for our own needs, [open an issue to send us your feedback](https://github.com/shaes-farm/mui-mas/issues).

## Development Environment Setup

We use the [Node Version Manager](https://github.com/nvm-sh/nvm) to manage our Javascript development environments. See the [documentation](https://github.com/nvm-sh/nvm#installing-and-updating) for more information on installing `nvm` and getting set up.

### Storybook

To start the [Storybook](https://storybook.js.org/) workbench run the following commands:

```sh
cd mui-mas
nvm use
npm i
npm run storybook
```

Once running, visit [http://localhost:6006/](http://localhost:6006/) in your browser to open the storybook workbench.

### Building the Example Application

After installing `nvm`, and cloning the `mui-mas` repository, the component library and the example application are built. To run the example in a development environment, perform the following commands:

```sh
cd mui-mas
nvm use
npm i
npm run build
npm link
npm run db:start
npm run db:reset
cd example
npm i
npm link @shaes-farm/mui-mas
npm run dev
```

### Main Component Library 

To automatically see the results of development changes to `mui-mas` components in the example application, open another terminal window, and run:

```sh
cd mui-mas
nvm use
npm run dev
```

This will start the Typescript compiler in watch mode, automatically building any changes to the core components as they occur.

### Supabase

To use [Supabase](https://supabase.com/) in a local development environment, you must have Docker installed. If you need Docker, one possible route is the [Docker Engine Install](https://docs.docker.com/engine/install/), follow the documentation that is appropriate for your platform. Be sure to add your user to the docker group in order to be able to run without root privileges. To test your Docker setup, run the following:

```sh
docker run hello-world
```

You should see the output of the Hello World container. If there are errors, consult the [troubleshooting section](https://docs.docker.com/engine/install/troubleshoot/) of the documentation.

See the instructions for [Getting Started with the Supabase CLI](https://supabase.com/docs/guides/cli/getting-started), and consult the detailed instructions in the [official documentation](https://supabase.com/docs/guides/cli/local-development) for more information on what a local environment is.

Most of the setup has already been performed to use Supabase locally, and once docker is installed, the containers are started with:

```sh
npm run db:start
```

When the command completes, you should see a message similar to the following:

```sh
Seeding data supabase/seed.sql...
Started supabase local development setup.

         API URL: http://localhost:54321
     GraphQL URL: http://localhost:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: <secret>
service_role key: <secret>
```

To see this information again after starting, run the following:

```sh
npm run db:status
```

You should be able to access the local Postgres instance using `psql` or any other Postgres client, such as `pgadmin`. For example:

```sh
psql 'postgresql://postgres:postgres@localhost:54322/postgres'
```
