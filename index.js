const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ] 
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.login('MTQ0MDU4MDA2NjY4NDk2MDc4OA.GpPcsR.zNefgizQ3x3UX6mn88EmKDChxNunRffjeidn9c');
