const ConnectModel = require('../src/data/ConnectModel');
const connectModel = new ConnectModel();

 
describe("Below test methods are to connect to supabase db", () => {

    it('should connect to groq AI model', async () => {
        const promptInvoke = `generate a post for publishing on social media on travelling in humorous way in medium length`;
        var response = await connectModel.invoke(promptInvoke);
        console.log(`response: ${response}`);
    });
})




