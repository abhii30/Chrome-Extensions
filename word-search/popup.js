const searchedWord = document.querySelector(".searched-word");
console.log(searchedWord);
const readClipboard = () => {
  setTimeout(async () => {
    try {
      const text = await navigator.clipboard.readText();
      searchedWord.innerText = text;
      console.log(text);
    } catch (error) {
      alert("Failed to read clipboard contents");
    }
  }, 100);
};

readClipboard();
// Function to show the meaning of the word
const showMeaning = async () => {
  const word = 'hello'; //not able to capture the word from the innerHTML
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      const meaning = data[0].meanings[0].definitions[0].definition;
      const example = data[0].meanings[0].definitions[0].example;
      //   const audio = data[0].phonetics[0].audio;
      //   const audioElement = document.createElement("audio");
      //   audioElement.src = audio;
      //   audioElement.play();
      document.querySelector(".meaning").innerHTML = meaning;
      document.querySelector(".example").innerHTML = example;
      console.log(data);
    } else {
      alert("Word not found");
    }
  } catch (error) {
    alert("Failed to fetch the meaning");
  }
};
// readClipboard();
showMeaning();
