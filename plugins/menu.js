exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'All COMMAND',
         rowId: `${isPrefix}menutype 1`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡 `
      }

]
      let text = '𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡.\n\n'
      text += '◦ *instagram* : http://instagram.com/mr_johan_shezir *(v2.2.0)*\n\n'
      text += 'Ela konto talib/tilmid, Sift Lya *#bac*'
      await client.sendList(m.chat, '', text, '', 'click!', [{
         rows
      }], m)
   },
   error: false
}
