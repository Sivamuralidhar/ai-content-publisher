const ConnectModel = require('../src/data/ConnectModel')
const connectModel = new ConnectModel();


it('should connect to db', async () => {
    const promptInvoke = `generate a post for publishing on social media on travelling in humorous way in medium length`;
    var response = await connectModel.invoke(promptInvoke);
    console.log(`response: ${response}`);
});
