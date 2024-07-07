/**
 * This is a demo usage of how use might want to use the generateSentence.
 */

import { generateSentence } from '@deejaydev/lorem-ai'

const API_KEY = `${process.env.GEMINI_API_KEY}`

async function run() {
  try {
    const sentence = await generateSentence(API_KEY, 20)
    console.log(sentence)
  } catch (error) {
    console.error('Error generating sentence:', error)
  }
}

run()
