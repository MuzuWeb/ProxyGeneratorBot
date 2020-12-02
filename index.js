const request = require('request');
const Agent = require('socks5-http-client/lib/Agent');
var token = "NzgzNzQyMDQyNjk4MDIyOTI0.X8fKqA.Th3LV3-q144z-ZvWZsl5uX0v-Ns"

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('ProxyGen : ON');
});





client.on('message', message => {
	if(message.content.includes("$proxy")) {
    request.get({
      uri: 'https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=200',
  }, function (err, resp, body) {
    message.channel.send(body)
    });
  }
});



client.login(token);