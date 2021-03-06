# NodeJS with Express Template Project

## Features

- ESLint using AirBnB style guide sintax;
- Organization of imports;
- Cors enabled;
- Control of Enviroments Variables with dotenv library using the root file `.dotenv`;
- Sucrase for allow use ES6 import/exports in project;
- Nodemon for automatically restart the server when changes was maded in project.
- ExceptionHandler with express-async-errors and youch for treat exceptions in async calls and better return of errors for developer.
- Add a class Cache.js for cache control.

## Running the Project

### Normal execution:

```sh
# With Yarn
yarn dev

# With Npm
npm run dev
```

### Build for production:

```sh
# With Yarn
yarn build

# With Npm
npm run build
```

### For use VSCode with debug:

```sh
# With Yarn
yarn dev:debug

# With Npm
npm run dev:debug
```
