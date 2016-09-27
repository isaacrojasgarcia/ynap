# YOO Net a Porter Test


This repo contains the solution I've built for the YNAP test.
I've used `ReactJS` and `Redux` (`react-redux`) to build the application. Also, I've used `ES6`

The application assumes that `webpack` and `webpack-dev-server` are installed globally. It also assumes the REST api is running at `http:localhost:8080` and allows requests from `localhost:8000`

## Make it work
I've used the port 8000 since the REST api is using the port 8080.
Basically to make it work we need to clone the repo, run `npm install` and finally run `webpack-dev-server`

```
➜ git clone git@github.com:trepafi/ynap.git
➜ ynap git:(master) npm install
➜ ynap git:(master) webpack-dev-server --port 8000
```

Due to CORS domain issues in the REST api, I had to fake the result of the `/products` call.
To fake the response was easier (in terms of time) than use another option. Once the CORS issue is solved it will work as it is now

## Structure

The application has built following the Flux paradigm, so I've split the code into

* actions
* components
* reducers

There is an `index.js` file which creates the `store` pass it to the `Provider` and calls the `App` component.

There are two main components, the `ItemsList` and the `AddItem` form. Also, the `ItemsList` component has some children components.

I've kept all the actions in a single file, since there are not too many.

However, I've split the `reducers` into two files, each one is in charge of one part of the store related with the two main components

## Expected behavior

The app should be able to:

* Connect to the REST api to get all the products
* If the connection fails it will return a fake list of products
* The `addItem` for has validators for the title (when is empty) and the price (when is empty and not a number)
* Clicking the headers of the table will sort the table in ascending mode  

## TODO

There is a big list of TODOs but in my opinion the next steps should be:

- [ ] Add actions to the items list (edit, remove)
- [ ] Add unit testing
