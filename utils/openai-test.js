const OpenAI = require("openai");
require('dotenv').config();

async function main() {
  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "give me a 7 minute yoga exercise, with each minute being a new exercise. list each exercise the name of the exercise. format it in a way that is easily parsible." }],
    model: "gpt-3.5-turbo-0125",
  });

  if (!completion) {
    console.error("Error: completion is undefined");
    return "";
  }

  console.log(completion);
  console.log(completion.choices[0].message);
  return completion.choices[0].message.content;
}

export default main;
