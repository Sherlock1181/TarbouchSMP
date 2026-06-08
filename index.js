require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express'); // 1. زيد هادي
const app = express(); // 2. زيد هادي

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
});

// 3. هاد الكود هو اللي كيخلي Render يبقى شاعل
app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

client.once('ready', () => {
    console.log('Bot is online!');
});

client.login(process.env.TOKEN);
