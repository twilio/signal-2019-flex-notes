# Notes Plugin

This is a demo plugin built for the Masterclass in Flex Frontend Development workshop, presented at SIGNAL 2019.

This plugin is paired with a backend server app: https://github.com/twilio/signal-2019-notes-server.

## Project Structure

This project is based on a sample plugin developed using the [Flex Plugin Builder](https://github.com/twilio/flex-plugin-builder). Each commit represents a milestone during the presentation, and they demonstrate an iterative build of a working Notes component that interacts with a backend database.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

Once you are happy with your plugin, you have to bundle it, in order to deploy it to Twilio Flex.

Run the following command to start the bundling:

```bash
npm run build
```

Afterwards, you'll find in your project a `build/` folder that contains a file with the name of your plugin project. For example, `plugin-example.js`. Take this file and upload it into the Assets part of your Twilio Runtime.

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.

## Configuration Service

Example cURL to update the Flex Configuration Service attributes:

```bash
curl https://flex-api.twilio.com/v1/Configuration -X POST -u ACxxx:auth_token \
    -H 'Content-Type: application/json' \
    -d '{
        "account_sid": "ACxxx",
        "attributes": {
            "notes_server_url": "https://hidden-anchorage-65311.herokuapp.com/notes",
            "notes_stylesheet_url": "https://rose-gaur-9610.twil.io/assets/styles.css"
        }
    }'
```

## References

- [Getting Started with Plugins](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin)
- [Adding Components](https://www.twilio.com/docs/flex/components-add-replace-modify)
- [Loading External JS/CSS Files](https://github.com/twilio/flex-plugin-builder/tree/master/packages/flex-plugin#loading-external-jscss-files)
- [Notifications](https://www.twilio.com/docs/flex/notifications-framework)
- [Flex Manager](https://www.twilio.com/docs/flex/flex-manager)
- [Overriding Themes](https://www.twilio.com/docs/flex/overriding-themes-branding-and-styling)
- [Calling Functions from a Plugin](https://www.twilio.com/docs/flex/call-functions-from-plugins)
- [Flex Token Validator](https://www.npmjs.com/package/twilio-flex-token-validator)
- [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)