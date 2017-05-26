const commando = require('discord.js-commando')

class DeleteMessagesCommand extends commando.Command {

  constructor(client) {
    super(client, {
      name: 'delet',
      group: 'util',
      memberName: 'delet',
      description: 'deletes messages',
      examples: ['delet']
    })
  }

  async run(message, args) {
    var args = args.split(" ")
    console.log(args[0].replace(/\D/g,''))
    message.channel.fetchMessages({limit: 100})
      .then(messages => {
        message.channel.bulkDelete(messages)
        .catch(console.error)
      })
      .catch(console.error);
  }
}

module.exports = DeleteMessagesCommand
