const Discord = require("discord.js");
const PREFIX = ">";

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Fuck off!"
];

var bot = new Discord.Client();
//bot.user.setGame("!help");

bot.on("guildMemberAdd", function(){
  member.guild.channels.find("name","general").sendMessage(member.toString()+" Welcome to the Server!");
});

bot.on("ready", function() {
  console.log('Logged in as $s\n',bot.username);
});

bot.on("message", function(message) {

  if(message.author.equals(bot.user)) return;

  if(!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {

    case "ping":
      message.channel.sendMessage("Pong!");
      break;

    case "8ball":
      if(args[1]){
        message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      }
      else{
        message.channel.sendMessage("Talk Louder you piece of Shite!");
      }
      break;

    case "hug":
      embed=new Discord.RichEmbed()
      .setDescription("Awwww hugsies ^-^")
      .setImage("https://m.popkey.co/b3cd6c/v4Y09.gif");
      message.channel.sendEmbed(embed);
      break;

    case "noticeme":
      message.channel.sendMessage(message.author.toString()+" You've been noticed! :smirk:");
      break;

    default:
      message.channel.sendMessage("What the fudge are you talking about? o.O");

  }

});

bot.login(process.env.BOT_TOKEN);
