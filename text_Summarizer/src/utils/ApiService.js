import OpenAI from "openai";

const client = new OpenAI({
  dangerouslyAllowBrowser: true,
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173/",
  },
});

export const getResponse = async ({message}) => {

  const fetchedResponse = await client.chat.completions.create({
    model: "deepseek/deepseek-chat",
    messages: [
      {
        role: "user",
        content: `Please summarixe this text in simple and concise way : ${message}`,
      },
    ],
  });

  return fetchedResponse.choices[0].message
};
