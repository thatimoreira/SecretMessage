function encryptText() {
  /* RULES:
  1. The tag should be a valid HTML
  2. Text should not contain any special characters or letters with accents
  8. Text should not contain lower case letters
  */
  let text = document.querySelector("textarea").value;
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "A" ||
      text[i] == "E" ||
      text[i] == "I" ||
      text[i] == "O" ||
      text[i] == "U"
    )
      text[i] = text[i].toLowerCase();
    if (text[i] == "a") encryptedText += "ai";
    else if (text[i] == "e") encryptedText += "enter";
    else if (text[i] == "i") encryptedText += "imes";
    else if (text[i] == "o") encryptedText += "ober";
    else if (text[i] == "u") encryptedText += "ufat";
    else encryptedText += text[i];
  }
  const userOutput = document.querySelector("#user-output");
  userOutput.textContent += encryptedText;
}

function decryptText() {}

function clearTextArea() {}

function copyText() {}
