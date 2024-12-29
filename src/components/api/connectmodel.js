
const Groq = require("groq-sdk");
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const groq = new Groq({ dangerouslyAllowBrowser: true, apiKey: "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" });

class ConnectModel {
    constructor() { }
    async invoke(prompt) {
        console.log(`prompt---> ${prompt}`);
        const chatCompletion = await this.getGroqChatCompletion(prompt);
        // Print the completion returned by the LLM.
        console.log(chatCompletion.choices[0]?.message?.content || "");
        return chatCompletion;
    }
    async getGroqChatCompletion(prompt) {
        return groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "mixtral-8x7b-32768"
        });
    }
}
module.exports = ConnectModel;
