const { Client , Intents , MessageSelectMenu , MessageButton , MessageActionRow , MessageEmbed , MessageSelectMenuBuilder ,  MessageAttachment  } = require("discord.js")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.MESSAGE_CONTENT,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS,
    ]
})




client.on('ready', () => {
        client.user.setActivity(`DCODE STUDIO `, {type:"PLAYING"})
        console.log('bot Is online By dcode studio', client.user.username)
        client.user.setStatus("online");
});


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
