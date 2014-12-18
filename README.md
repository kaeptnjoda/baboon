# Baboon
Bounty program site for Ethereum

## Instructions:

[Meteor](https://www.meteor.com)
```
curl https://install.meteor.com | /bin/sh

#from the project root:
meteor
```

## Project structure

Any code inside the `server/` directory is only loaded on the server while any code inside the `client/` directory will only be loaded on the client. Anything outside of these dirs will be loaded on both sides.

Also, Meteor has a very bizarre file loading order: anything you put inside a `lib` folder will be loaded before anything else in the directory, while a file called `main.js` will be loaded last. This is useful to keep in mind when making any global declarations.