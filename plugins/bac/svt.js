
exports.run = {
   usage: ['svt'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: 'LEÇON 1',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @wox_bella`
         },

         {
         title: 'LEÇON 2',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @wox_bella`
         }

]
      let text = '💟 *SCIENCES DE LA VIE ET DE LA TERRE* ❤️😇\n\n'
      text += '◦ *💟DEVELOPER* : *MOHAMED BELLA*\n'
      text += '◦ *💟INSTAGRAM* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط هنا!', [{
         rows
      }], m)
   },
   error: false
}
