import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

async function promptGPT(prompt) {
  // Instantiate OpenAI instance
  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  try {
    // Generate completion
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo-0125",
    });

    // Handle completion
    if (!completion) {
      console.error("Error: completion is undefined");
      return "";
    }

    // Return generated content
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error generating completion:", error);
    return "";
  }
}

export { promptGPT };
