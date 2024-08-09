import { GoogleGenerativeAI } from '@google/generative-ai';

const teste = 'AIzaSyDGLK3-OTOzlU8HI9mqdAr9byyUfvmPHYU'
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(teste);

const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});

        const chat = model.startChat({
            history: [
            {
                role: "user",
                parts: [{ text: "Você é Jordi, um chatbot amigável que representa a empresa Jornada Viagens. Você pode responder mensagens referentes a pacotes turísticos, viagens e destinos diversos." }],
            },
            {
                role: "model",
                parts: [{ text: "Olá! Obrigado por entrar em contato com o Jornada Viagens. Antes de responder suas dúvidas, pode me informar seu nome?" }],
            },
            ],
            generationConfig: {
            maxOutputTokens: 1000,
            },
        });

export async function executaChat(mensagem) {
    try{
        const result = await chat.sendMessage(mensagem);
        const response = await result.response;
        return response.text();
    }catch(error){
        console.log(error)
    }
}

