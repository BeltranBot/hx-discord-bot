const commando = require('discord.js-commando')
const axios = require('axios')

class CuteCommand extends commando.Command {

  constructor(client) {
    super(client, {
      name: 'cute',
      group: 'images',
      memberName: 'cute',
      description: 'Fetch a random image',
      examples: ['cute']
    })
  }

  async run(message, args) {
    axios.get('https://www.reddit.com/r/aww/random.json')
      .then((response) => {
        message.channel.send(message.author.username + ', for you: ' + response.data[0].data.children[0].data.url)
      })
      .catch((error) => console.log(error))
  }
}

module.exports = CuteCommand
