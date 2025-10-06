const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: 131071,
});
client.once('ready', () => {
  console.clear();
  const line = '─'.repeat(50);
  console.log(line);
  console.log(`🌐 ${client.user.tag} is now online!`);
  console.log(line);
  console.log(`🤖 Bot Username  : ${client.user.username}`);
  console.log(`🆔 Bot ID        : ${client.user.id}`);
  console.log(`📅 Launched On   : ${new Date().toLocaleString()}`);
  console.log(line);
  console.log(`📊 Connected to  : ${client.guilds.cache.size} servers`);
  console.log(`👥 Total Users   : ${client.users.cache.size}`);
  console.log(`© 2025  Dark Developers - All Rights Reserved.`);
  console.log(`🔗 GitHub: https://github.com/flex82/`);
  console.log(`💬 Discord: https://discord.gg/YtfcfeDD5c`);
  console.log(line);
  console.log('✅ Bot is fully operational and ready to serve!');
  console.log(line);
  client.user.setActivity(`# ~ Dark Developers`, { type: 'WATCHING' })
client.user.setStatus("idle");


client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === '-نشر') {
    const filter = (response) => response.author.id === message.author.id;

    await message.author.send('مرحبًا! قم بتقديم معلومات الكود.\n\n1. الكود:');
    const codeCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const code = codeCollected.first().content;

    await message.author.send('2. اسم الكود:');
    const codeNameCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const codeName = codeNameCollected.first().content;

    await message.author.send('3. الوصف:');
    const descriptionCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const description = descriptionCollected.first().content;

    await message.author.send('4. إصدار الكود:');
    const versionCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const version = versionCollected.first().content;

    await message.author.send('5. صاحب الكود:');
    const ownerCollected = await message.author.dmChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const owner = ownerCollected.first().content;

    const embed = {
      title: ' <:th16:1180512199182131290>معلومات الكود',
      description: `\`\`\`${code}\`\`\`\n\n**اسم الكود:** ${codeName}\n**الوصف:** ${description}\n**إصدار الكود:** ${version}\n**صاحب الكود:** ${owner}`,
      color: 0xFFFFFF,
      footer: {
        text: 'تم التقديم بواسطة: ' + message.author.tag,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      },
    };

    const notificationsRoleMention = '<@&1180511808348491827>'; // استبدل بمنشن الرتبة
    const updateNotification = 'Update code: ' + notificationsRoleMention;

    const targetChannelId = '1180512003979223110'; // استبدل بمعرف الروم الذي تريد النشر فيه
    const targetChannel = message.guild.channels.cache.get(targetChannelId);

    if (targetChannel) {
      targetChannel.send(updateNotification);
      targetChannel.send({ embeds: [embed] });
      message.reply('تم تقديم الكود بنجاح!');
    } else {
      message.reply('لم أتمكن من العثور على الروم المحدد لنشر الكود.');
}
  }
});

client.login(process.env.token);
