## Lorem AI 🤖

A lightweight package that provides a Generative AI approach to lorem ipsum. The package will generate natural language placeholder text `string` for JavaScript.

#### 📢 Heads up!!!

**For now, the lib only uses the Google Gemini API key.**
You can get your API key here 👉🏽 [Google Docs](https://ai.google.dev/gemini-api/docs/api-key).

#### Installation: ⬇️

Works with any JavaScript Package Manager, with a node_modules folder.

```bash

# Bun 🔥
bunx jsr add @deejaydev/lorem-ai

# or

# Deno 🚤
deno add @deejaydev/lorem-ai

# Traditional 👴
pnpm dlx jsr add @deejaydev/lorem-ai
```

#### Usage: ⚙️

After adding the package in your project, you can import and use it in ES modules.

```ts
...
import { generateSentence } from '@deejaydev/lorem-ai'

// top level await
await generateSentence('ADD_YOUR_API_KEY_HERE', 7)
...
```

#### Code example: 🦖

Here's a full example you can use in a `TypeScript` project.

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
