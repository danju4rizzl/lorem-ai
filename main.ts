import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} from '@google/generative-ai'

const MODEL_NAME = 'gemini-1.5-flash-latest'

/**
 * A package to generates random statements as placeholder text using Lorem AI.
 *
 */

/**
 * Generate specified number random words as a sentence for placeholder text .
 * @param geminiApiKey Your Google Gemini API key 🔑.
 * @param length The amount of words you want to generate 🔄.
 * @returns A `string` of random words in the specified length 📝.
 */

export async function loremAI(
  geminiApiKey: string,
  length: number
): Promise<string> {
  if (!geminiApiKey) {
    throw new Error('🗝️ Your Google Gemini API key is required')
  }

  const genAI = new GoogleGenerativeAI(geminiApiKey)
  const model = genAI.getGenerativeModel({ model: MODEL_NAME })

  const generationConfig = {
    temperature: 0.6,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 1192
  }

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    }
  ]

  const parts = [
    {
      text: 'You are a random sentence creator. Give me a sentence with "count : " words to create random statement.\nMake sure the sentence is realistic and never repeat my words.'
    },
    { text: 'count : Give me a sentence with 3 words' },
    { text: 'sentence : {"sentence": "Welcome Back Home"}' },
    { text: `count : Give me a sentence with ${length} words` },
    { text: 'sentence :' }
  ]

  const result = await model.generateContent({
    contents: [{ role: 'user', parts }],
    generationConfig,
    safetySettings
  })

  const response = result.response

  if (response.usageMetadata?.totalTokenCount) {
    const aiText = JSON.parse(response.text())
    return aiText.sentence
  } else {
    throw new Error('Failed to generate sentence 🔴')
  }
}

// const genWords = await loremAI(`${Bun.env.GEMINI_API_KEY}`, 5)
// console.log(genWords) //The cat chased the mouse.
