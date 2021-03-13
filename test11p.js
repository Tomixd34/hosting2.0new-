const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'segíts rajtam test11p bot') {
    msg.channel.send('én segítenék de nincs nálam a telefonom és íigy nem tudom felhívni a 112-őt');
  }
});

client.login('ODE5OTk3MDI5OTc1MTk1Njg4.YEuvvg.OQKFOzmHBOmORhusUDnYzCvwJF4');