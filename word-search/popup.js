const searcedWord = document.querySelector(".searched-word");

const readClipboard = () => {
  setTimeout(async () => {
    try {
      const text = await navigator.clipboard.readText();
      searcedWord.innerText = text;
    } catch (error) {
      alert("Failed to read clipboard contents");
    }
  }, 10);
};

readClipboard();
// Function to show the meaning of the word
const showMeaning = async () => {
  const word = "book";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  const data = await response.json();
  const meaning = data[0].meanings[0].definitions[0].definition;
  const example = data[0].meanings[0].definitions[0].example;
  //   const audio = data[0].phonetics[0].audio;
  //   const audioElement = document.createElement("audio");
  //   audioElement.src = audio;
  //   audioElement.play();
  document.querySelector(".meaning").innerHTML = meaning;
  document.querySelector(".example").innerHTML = example;
  console.log(data);
};

showMeaning();
