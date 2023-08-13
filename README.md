# mui-mas

A Material UI-based component library for SHAES Farm's applications.

[![build status](https://github.com/shaes-farm/mui-mas/actions/workflows/build-n-test.yml/badge.svg)](https://github.com/shaes-farm/mui-mas/actions/workflows/build-n-test.yml)
[![coverage status](https://coveralls.io/repos/github/shaes-farm/mui-mas/badge.svg?branch=main)](https://coveralls.io/github/shaes-farm/mui-mas?branch=main)
[![vulnerabilities](https://snyk.io/test/github/shaes-farm/mui-mas/badge.svg)](https://snyk.io/test/github/shaes-farm/mui-mas)

[![https://nodei.co/npm/@shaes-farm/mui-mas.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@shaes-farm/mui-mas.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@shaes-farm/mui-mas)

## Getting Started

This package is intended for use by SHAES Farm's applications to ease the integration of our platform requirements. We currently use the following technology stack in our application suite (__we are not affiliated with any of these projects__):

- [React](https://react.dev/)
- [Material UI](https://mui.com/material-ui/)
- [Next.js 13+](https://nextjs.org/)
- [Supabase](https://supabase.com/)

```sh
$ pnpm create next-app myapp \
    --app \
    --eslint \
    --src-dir \
    --typescript \
    --use-pnpm
  ...
$ cd myapp
$ pnpm add @shaes-farm/mui-mas
```

## Motivation

In Spanish "mui mas" means "much more", and that's what we've built with this component library; much more than the basic set of Material UI components.

We've developed an opinionated set of React components based on MUI that allow us to construct functionality needed by our applications, integrated with MUI, Supabase, and Next. With <code>mui-mas</code> we can scaffold an app in minutes, instead of hours, and get functional applications more quickly, customized to our workflows.

## Early Release

We are releasing <code>mui mas</code> as an open-source component library because others may find it useful to quickly build high-quality applications. However, these components are customized for our design system and our back-end systems, and they may not be generally applicable for your needs. We've decided to release the library in this state as an Alpha release to gather feedback and to see if others find a library such as this useful.

## Help Us Improve

You can help us make this library better by [creating a pull request](https://github.com/shaes-farm/mui-mas/pulls) with suggestions. We gladly accept bug fixes, improvements, or just show us how you would make the library better able to support a wider choice of use cases. Any ideas, suggestions, and critical reviews are all welcomed as we continue to improve this package for our own needs, [open an issue to send us your feedback](https://github.com/shaes-farm/mui-mas/issues).
