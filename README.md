# [json-austen](https://louvang.github.io/json-austen/)

A JSON generator that finds paragraphs that aren't too long or too short from the many works of Jane Austen. I created this primarily for an ipsum generator. Usual ipsum generators are mostly gibberish or have very long paragraphs that aren't practical as filler text. This script uses English literature to give us practical filler text.

The works of Jane Austen were taken from [Project Gutenberg](https://www.gutenberg.org/). I parsed the texts and made them into a JSON file. Each JSON file for the text is in the following format:

```
{
  "title": "Title of Work",
  "text": "Entire text of work with escaped characters including line breaks./n"
}
```

Then I created a script that will search through these JSON files to add paragraphs into a new object varaible.

When the 'Generate Button' is clicked, the stringified JSON appears in the textarea. A user can copy the contents of the textarea and paste it as a JSON file using their text editor.

[View my modest JSON generator](https://louvang.github.io/json-austen/)
