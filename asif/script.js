   function summarizeText() {
      const inputText = document.getElementById("inputText").value;
      const output = document.getElementById("summaryOutput");
      if (!inputText.trim()) {
        output.innerText = "Please enter some text to summarize.";
        return;
      }
      let sentences = inputText.match(/[^.!?\r\n]+[.!?\r\n]+/g);
      if (!sentences || sentences.length <= 2) {
        output.innerText = "Text too short to summarize.";
      } else {
        output.innerText = sentences.slice(0, 2).join(" ");
      }
    }