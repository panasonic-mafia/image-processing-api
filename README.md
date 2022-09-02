# image-processing-api

A learning project for udacity full-stack Javascript Course.


## Run the server

To run server in dev mode (using nodemon):
```
$ npm run dev
```

To run server in production mode:
```
$ npm run build
$ npm run start
```

## Endpoints
### /api/images
The endpoint for serving resized images from `assets/thumb` folder.

Example:

- URL: `http://localhost:3000/api/images/?filename=palmtunnel&width=200&height=500`

- Method: `GET`

- After hitting above URL endpoint the server will resize image `assets/palmtunnel.jpg`, then it will server resized image `assets/thumb/palmtunnel_thumb_200x500.jpg`

- Each hit of the endpoint will be logged in console

## Run unit tests
To run unit tests use:
```
$ npm run test
```
## Run linting & prettier
To run eslint on code use:
```
$ npm run lint
```
To run prettier use:
```
$ npm run prettify
```

