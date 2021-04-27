/* 
Search for paragraphs that are <= 500 characters but >= 25 characters
  - If the paragraph starts with a quote, then it must not end with a quote.
If paragraph fits parameters, put it into an array as an object.
  [
    {
      title: "Pride & Prejudice",
      text: "Paragraph here"
    }
  ]

Display the .json file in the textarea of the HTML page to copy and paste as a json file

PARAGRAPH REGEX: /.*\n/g
*/

const austenFiles = [
  'js/textEmma.json',
  'js/textMansfieldPark.json',
  'js/textNorthangerAbbey.json',
  'js/textPersuasion.json',
  'js/textPrideAndPrejudice.json',
  'js/textSenseAndSensibility.json',
];

const finalJson = {
  paragraphs: [],
};

const findProperParagraphs = () => {
  austenFiles.forEach(async (file) => {
    let res = await fetch(file);
    let data = await res.json();

    const matches = data.text.match(/.*\.\n/g);
    matches.forEach((paragraph) => {
      if (paragraph.length >= 25 && paragraph.length <= 500) {
        if (paragraph[0] !== '“' && paragraph[0] !== ' ') {
          finalJson.paragraphs.push({ title: data.title, text: paragraph });
        }
      }
    });
  });
};

const jsonTextarea = document.getElementById('json-textarea');

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', (e) => {
  generateBtn.textContent = 'Loading...';
  findProperParagraphs();
  setTimeout(function () {
    generateBtn.textContent = 'Generate JSON';
    jsonTextarea.textContent = JSON.stringify(finalJson);
  }, 500);
});

// fetchPars(austenFiles[0]);
// fetchAsync(austenFiles[0]);
