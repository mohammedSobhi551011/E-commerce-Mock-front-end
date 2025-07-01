function toCamelCase(str) {
  const text = str.split("-");
  let newText = text[0];
  for (let i = 1; i < text.length; i++) {
    const word = text[i];
    const upperLetter = word[0].toUpperCase();
    const newWord = 
    newText += word;
  }
  console.log(newText);
}
toCamelCase("the-stealth-warrior");
