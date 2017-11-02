This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
```
    "enzyme": "^3.1.0",
    "enzyme-adapter-react-16": "^1.0.2",
    "enzyme-to-json": "^3.1.4",

    "react-test-renderer": "^16.0.0"
```

```
{
  ...
    "jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
}
```

```
yarn start
yarn build
yarn test
yarn test:coverage
yarn eject
```

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "test:coverage": "react-scripts test --env=jsdom --coverage",
    "eject": "react-scripts eject"
  },
```