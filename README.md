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

Any code inside the `server/` directory is only loaded on the server while any code inside the `client/` directory will only be loaded on the client. Anything outside of these dirs will be loaded on both sides, but it's best to be explicit with such matters so any shared code should be kept in "shared/"