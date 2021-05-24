

# Getting started

This is an application developed in order to pass the code challenge, <a href="./docs/assignment.md">**Tamboon React**</a>. The application is based on TypeScript, React and Redux that allows users to donate to a list of projects/causes. Currently, the following tasks are completed:

- Migrate project from JavaScript to TypeScript
- Complete the application according to the design.
- Complete the features that are not in the design, i.e.
  - Display all donation amount.
  - Display a message when paid.
- Complete the donation feature.
- Refactor the code to be more readable and enhance reusability.
- Support different screen sizes (responsive).
- Write helpers or components unit tests with [jest](https://facebook.github.io/jest/) and [enzyme](https://github.com/enzymejs/enzyme).

To-Do:

- Add more test cases.
- Better responsiveness support.
- Setup different environment variables files (mapping to the config files) related to different instances like development, staging, production


## Development

Follow the instructions below to setup a development instance

1. Clone the repository

```bash
git clone https://github.com/omise/challenges.git
```

2. Move to the challenge-react folder

```bash
cd challenge-react/
```

3. Install dependencies using yarn

```
yarn
```

4. Run the json mock server

```bash
yarn server
```

5. Run the client side

```bash
yarn client
```

## Testing

The testing is done using jest and enzyme.

- To run the testing
```bash
yarn test
```

- To generate the coverage report
```bash
yarn coverage
```

The coverage command generates HTML code coverage report in `coverage/` directory. Open `lcov-report/index.html` to view it.

## Linting

To run the linting, use the following command

```
yarn lint
```


