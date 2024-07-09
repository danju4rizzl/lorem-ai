# Lorem AI 🤖

A lightweight package that provides a Generative AI approach to lorem ipsum. The package will generate natural language placeholder word/sentence `string` for any JavaScript runtime.

### 📢 Heads up!!!

**For now, the lib only uses the Google Gemini API key.**
You can get your API key here 👉🏽 [Google Docs](https://ai.google.dev/gemini-api/docs/api-key).

### ⬇️ Installation

Works with any JavaScript Package Manager, with a `node_modules` folder.

```bash

# Bun 🔥
bunx jsr add @deejaydev/lorem-ai

# Deno 🚤
deno add @deejaydev/lorem-ai

# pnpm, npm, yarn 👴
pnpm dlx jsr add @deejaydev/lorem-ai
```

### ⚙️ Usage:

After adding the package in your project, you can import and use it in ES modules.

```ts
import { loremAI } from '@deejaydev/lorem-ai'
...

const genWords = await loremAI('YOUR_GEMINI_API_KEY', 5)
console.log(genWords) //The cat chased the mouse.

...
```

### 🦖 Code example:

Here's a full example you can use in a [Bun](https://bun.sh/) project.

```ts
import { loremAI } from '@deejaydev/lorem-ai'

const API_KEY = Bun.env.GEMINI_API_KEY

async function run() {
  try {
    const sentence = await loremAI(API_KEY, 50)
    console.log(sentence) // random sentence with 50 words
  } catch (error) {
    console.error('Error generating sentence:', error)
  }
}

run()
```
