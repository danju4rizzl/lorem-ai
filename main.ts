import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} from '@google/generative-ai'

const MODEL_NAME = 'gemini-1.5-flash-latest'
// const API_KEY = process.env.GEMINI_API_KEY

/**
 *
 * @param geminiApiKey Your Google Gemini API key.
 * @param length The amount of words you want to generate.
 * @returns A promise that resolves to a string.
 */

export async function generateSentence(
  geminiApiKey: string,
  length: number
): Promise<string> {
  if (!geminiApiKey) {
    throw new Error('API key is required')
  }

  const genAI = new GoogleGenerativeAI(geminiApiKey)
  const model = genAI.getGenerativeModel({ model: MODEL_NAME })

  const generationConfig = {
    temperature: 0.3,
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
    { text: 'count : Give me a sentence with 6 words' },
    { text: 'sentence : {"sentence": "Did you know that people next "}' },
    { text: 'count : Give me a sentence with 16 words' },
    {
      text: 'sentence : {"sentence": "We are assistant can help you manage tasks, schedule appointments, and provide valuable information.\n"}'
    },
    { text: 'count : Give me a sentence with 25 words' },
    {
      text: 'sentence : {"sentence": "Introducing our innovative product designed to simplify your daily routine, providing efficiency, convenience, and style in one compact package for all your needs."}'
    },
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
    return response.text()
  } else {
    throw new Error('Failed to generate sentence')
  }
}

// async function run() {
//   try {
//     const sentence = await generateSentence(API_KEY as string, 10)
//     console.log(sentence)
//   } catch (error) {
//     console.error('Error generating sentence:', error)
//   }
// }

// run()
