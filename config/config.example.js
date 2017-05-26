class Config {

  constructor() {
    this.owner = '<your-discord-user-id>'
    this.commandPrefix = '<prefix-you-want-your-bot-to-use>'
    this.token = '<your-bot-token>'
  }

  getOwner() {
    return this.owner;
  }

  getCommandPrefix() {
    return this.commandPrefix
  }

  getToken() {
    return this.token
  }

}

module.exports = Config
