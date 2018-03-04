//import discord.js libraries
const Discord = require("discord.js");
const cat = require("random-cat");
const request = require("request");
const playmsg = "Funny Freak";
const partnerid = 414150249209397257;
const partner = /<@414150249209397257>/;

//functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getStopCurse(){
  return stopcursereplies[getRandomInt(stopcursereplies.length)];
}

function getSTFUPartner(){
  return stfupartnerreplies[getRandomInt(stfupartnerreplies.length)];
}

function getGN(){
  return gnreplies[getRandomInt(gnreplies.length)];
}

function getGM(){
  return gmreplies[getRandomInt(gmreplies.length)];
}

function getStopSwear() {
  return stopswear[getRandomInt(stopswear.length)];
}

//Regular expressions
var gn1 = /good night/;
var gn2 = /goodnight/;
var gn3 = /\bgn\b/;
var everyone = /\@everyone/;
var wassup = /wass[u]+p/;
var wassupp = /wass[u]+/;
var gm1 = /good morning/;
var gm2 = /goodmorning/;
var gm3 = /\bgm\b/;
var fuck = /(stfu|fak|fook|frickin|friggin|fuck|fuk|fok)/;
var bus = /bus/;
var gitcat = /(\bpussy\b|\bcat\b|\bkitty\b|\bmeow\b|\bkitten\b)/;

//Reply Arrays
var stopswear = [
  "Can you Stop Swearing, Wooman? >.>",
  "Aggressive language detected!"
];
var stfupartnerreplies = [
  "Uh oh Wrong Move bud! *tsk tsk tsk*",
  "Stop cursing my woman, dude!",
  "Stand ho cursing mine own mistress, broth'r!"
];
var stopcursereplies = [
  ":scream: How rude!!!",
  ":open_mouth: Was that just said in public?",
  ":dizzy_face: I will act as if I didn't hear anything.",
  ":smiling_imp: Yep, The insult was like a bullet to the heart!"
];
var gnreplies = [
  "Studies suggest that people who go to sleep late are more likely to have higher intelligence than those who go to bed early :smile:",
  "Dear Bed! You are my one true love.. ",
  "Off to Club Bed featuring DJ Pillow and Mc Blanky :open_mouth:",
  "I have a date today.... with my bed. We're totally gonna sleep together :wink:",
  "Good night :smiley:     Oh! And If you dream of me, Remember I like it rough :wink:",
  "I don't fall asleep, I overthink myself into a short coma!"
];
var gmreplies = [
  "If your eyes hurt after you drink coffee, you have to take the spoon out of the cup :smile:",
  "Trust me, When I woke up today, I had no plans to be awesome... But shit happens :shrug:",
  "I hate the part of morning where I have to get outta bed and participate in real life...",
  "I was gonna take over the world this morning but I overslept. Postponed. Again!!! :grimacing:",
  "I could be a morning person if morning happens around noon..",
  "You know that moment when you wake up in the morning full of energy? hmm? Me neither xD",
  "My bed wasn't feeling well this morning, So I stayed home to take care of it!"
];

//Bot instance and Playing message
var bot = new Discord.Client();
bot.on("ready", function() {
  console.log('Logged in as '+bot.user.username);
  bot.user.setActivity(playmsg);
});

//When a message is received
bot.on("message", function(message) {
//does not reply to self
  if(message.author == bot.user) return;
//store the message in args after converting to lowercase
  var args = message.content.toLowerCase();

//if the message is from partner
if(message.author.id == partnerid)
{
  if(fuck.test(args))
  {
    if(getRandomInt(4) == 1)
  message.channel.send(getStopSwear());
  }
  else if(bus.test(args))
  {
    if(getRandomInt(3) != 1)
    message.channel.send("Don't listen to her. You have a nice day!");
  }

}
else {
//Mention
if(args == bot.user)
message.channel.send("Ah Poop! I can't believe you've done this!");

//good night
else if((gn1.test(args) ||  gn2.test(args)  || gn3.test(args)) && everyone.test(args) && getRandomInt(2) == 1)
{
  message.channel.send(getGN());
}

//good morning
else if((gm1.test(args) || gm2.test(args) || gm3.test(args)) && everyone.test(args))
{
  message.channel.send(getGM());
}

//stfu @ partner
else if(fuck.test(args)){
  if(partner.test(args))
  message.channel.send(getSTFUPartner());
  else
  message.channel.send(getStopCurse());
}

//grabdapuss
else if(gitcat.test(args))
{
  message.channel.send(new Discord.RichEmbed().setImage(cat.get()));
}

//wassuuuuuuuuuup
else if(wassup.test(args))
{
  var answer = "WASS";
if(args.length<10)
answer+="UUUUUUUUUU";
else {
  for(var i=0;i<args.length-5;i++)
  answer+="U";
}
answer += "P?";
message.channel.send(answer);
}

//ezpz lemon squeezy
else if(args == "ez pz" || args == "ezpz")
message.channel.send("Lemon Squeezy :wink:");

}
});

//login with token
bot.login(process.env.BOT_TOKEN);
