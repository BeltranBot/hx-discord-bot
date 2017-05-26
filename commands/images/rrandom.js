const commando = require('discord.js-commando')
const axios = require('axios')

class RRandomCommand extends commando.Command {

  constructor(client) {
    super(client, {
      name: 'reddit_random',
      aliases: ['rr','rrandom'],
      group: 'images',
      memberName: 'reddit_random',
      description: 'Fetch a random image',
      examples: ['cute']
    })
    this.subreddits = {
      aww: ['cute', 'aww'],
      BlackPeopleTwitter: ['BlackPeopleTwitter', 'bpt', 'ecg'],
      LatinoPeopleTwitter: ['LatinoPeopleTwitte', 'lpt', 'alec'],
    }
  }

  async run(message, args) {
    var subreddit;
    args = (args.length == 0) ? [] : args.split(' ')
    if (args.length > 1) {
      message.channel.send(message.author.username + ", you sent too many arguments. I cannot process your request. [expected **1** argument]")
      return
    } else if(args.length == 1) {
      subreddit = this.lookSubreddit(args[0])
      if (!subreddit) {
        message.channel.send(message.author.username + ", I couldn't find the category [**" + args[0] + "**]")
        return
      }
    } else if (args.length == 0) {
      subreddit = this.pickRandomSubreddit()
    }
    axios.get('https://www.reddit.com/r/'+ subreddit + '/random.json')
      .then((response) => {
        message.channel.send(message.author.username + ', for you: ' + response.data[0].data.children[0].data.url)
      })
      .catch((error) => {
        message.channel.send(message.author.username + ', Oops.. it seems to be a problem fetching your image, please try again later.')
        console.log(error)
      })
  }

  lookSubreddit(query) {
    for (var subreddit in this.subreddits) {
      if(this.subreddits[subreddit].includes(query)) {
        return subreddit
      }
    }
    return false
  }

  pickRandomSubreddit() {
    var num = Math.floor(Math.random() * Object.keys(this.subreddits).length) + 1
    var i = 1
    for (var subreddit in this.subreddits) {
      if (i == num) {
        return subreddit
      }
      i++;
    }
  }
}

module.exports = RRandomCommand
