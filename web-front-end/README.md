# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

<<<<<<< HEAD
For managing accounts it will need to connect to the account service to query and update accounts, and to the people service for resolving users to associate with accounts.

## API Gateway / Service Proxy

in the `proxy` directory, you can run a proxy to aggregate all of the services. This may simplify the gui development and represent an API Gateway.

To run the proxy 
```bash
cd proxy
npm install 
npm run start
```

This is a development proxy, and you can change [proxy/routes.js](routes.js) to add new routes and it will re-load upon save.

The only thing which the GUI needs to connect to which cannot be proxied is the trade-feed which makes use of websockets.

When using this proxy, the gui only needs to make HTTP requests to this proxy, and to connect to the trade feed.

This proxy honors all `*_SERVICE_PORT` variables which can be set in the environment when running other services. For details on default ports, please see the main README for this project.

Note: When using SwaggerUI / API Docs - things may redirect and may not work. This is a limitation of this approach, without a more sophisticated proxy.  The URLs you need to send requests to, however, all work.

Here are sample URLs when using the proxy, that the GUI will need to hit:

```
/trade/trade -> Submit a HTTP  POST request to the trading service

/people/People/GetMatchingPeople?SearchText=user01 -> Searches people service

/refdata/stocks -> Gets static list of reference data securities for drop-down

/positions/trades/22214 -> Loads all trade  data for account 22214 (for trade blotter hydration)
/positions/positions/22214 -> Loads all position  data for account 22214 (for position blotter hydration)

/accounts/account/ -> Lists all accounts in the system (needed for the account dropdown)
```
=======
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 6d5407d (initial ui code)
