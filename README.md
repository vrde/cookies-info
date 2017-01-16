## Getting Started
Setting up the dev environment is super easy.


### Dependencies
This project requires Node 5+. Install [nvm](https://github.com/creationix/nvm)
if you haven't already.


### Set up your build system
The build system uses a simple `package.json` file to describe the tasks.

To get started run:
```
npm install
npm test
npm start
```

The second line (`npm test`) is optional, but testing is cool and you should do
it anyway. It's also a nice way to check if the installation succeeded.

`npm start` will build the application using `webpack` and watch for changes.


### Prepare your browser
If you wish to autoreload your extension every time a build succeeds, you need
first to install [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid).

To install the extension go to **settings**, select **extensions**, and enable
**Developer mode**. Click on **Load unpacked extension** and select the
`extension/build` directory contained in this repo.

Keep `npm start` running in the background to take advantage of the autoreload.

If you want to specify a different chrome user than the default one, set the env
variable `USER_DATA_DIR` to an existing directory.


# Thanks
[@sohkai](https://github.com/sohkai) for the amazing [js-reactor
boilerplate](https://github.com/bigchaindb/js-reactor).


