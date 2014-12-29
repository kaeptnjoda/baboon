# Baboon
Bounty program site for Ethereum

## Quick start:

[Meteor](https://www.meteor.com)
```
curl https://install.meteor.com | /bin/sh

#from the project root:
meteor
```

Open `http://localhost:3000` in your browser. Enjoy.

## Project structure

Any code inside the `server/` directory is only loaded on the server while any code inside the `client/` directory will only be loaded on the client. Anything outside of these dirs will be loaded on both sides.

Also, Meteor has a very bizarre file loading order: anything you put inside a `lib` folder will be loaded before anything else in the directory, while a file called `main.js` will be loaded last. This is useful to keep in mind when making any global declarations.

## Configuration

### Environment variables

Env var settings are not part of the repo and not going to be (for security reasons). You'll need to add the config file manually. To do that create a `config/settings.json` file with your environment variables in JSON format e.g.
```js
{
  "githubClientId": "abc123",
  "githubSecret": "xyz098"
}
```
then run meteor with
```
meteor --settings config/settings.json
```

### Github login

The website supports Github signup but you'll need to register an application on Github first if you want to try it out locally. Go to `https://github.com/settings/applications` and click "Register new application". Fill in the fields with pretty much anything except for the callback one: this needs to be your localhost address, e.g. `http://localhost:3000`