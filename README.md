# Web Interface Prototype

This repository contains the code and build for the web interface prototype for the
freelance work between Andy Pagès and Beinir Ellefsen.

[Demo](https://izara.andynroses.me/create-project)

## Usage

### Using pre-built dist

In the folder `prototypes` are the different built versions of the prototype. As the prototype
is a Single Page Application, just the content of these builds can be used to serve the application (simply through 
a reverse proxy like Nginx or with a simple Node.js server);

### Development mode

To run the web interface instantly on any machine in the development mode, simply run the following commands:

```bash
$ npm install
$ npm run dev
```

This requires the installation of the tools Node.js and npm.

### Production mode

To create a production build, simply run the following commands:

```bash
$ npm install
$ npm run build
```

The created build will be located in the folder `dist`.

## Technologies

This prototype has been built with the following main technologies:

- [Parcel](https://parceljs.org/),
- [React](https://reactjs.org/),
- [Ant Design](https://ant.design/docs/react/introduce).
