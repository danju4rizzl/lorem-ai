# Lorem AI 🤖

A lightweight package that provides a Generative AI approach to lorem ipsum. The package will generate natural language placeholder text.

##### 📢 Important Note

**For now, you ONLY use the Google Gemini API key. 👉🏽 Get it from this page of [Google Docs](https://ai.google.dev/gemini-api/docs/api-key).**

## Usage:

```bash
# Bun (use any of bunx, npx, yarn dlx, or pnpm dlx)
bunx jsr add @deejaydev/lorem-ai

# Deno
deno add @deejaydev/lorem-ai
```

After adding the package in your project, you can import and use it in ES modules:

```ts
...
import { generateSentence } from '@deejaydev/lorem-ai'


// top level await
await generateSentence('ADD_YOUR_API_KEY_HERE', 7)
...

```

Heres a Full example you in a `ts` project

```ts
import { generateSentence } from '@deejaydev/lorem-ai'

const API_KEY = process.env.GEMINI_API_KEY

async function run() {
  try {
    const sentence = await generateSentence(API_KEY as string, 50)
    console.log(sentence)
  } catch (error) {
    console.error('Error generating sentence:', error)
  }
}

run()
```
