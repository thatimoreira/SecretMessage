function encryptText()
{
  let text = document.querySelector("textarea").value;

  if (/[^a-z0-9]/.test(text))
  {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Não são aceitos: letras minúscula, acentos ou caracteres especiais";
    errorMessage.classList.add("error-message");
    const mainSection = document.querySelector(".encrypt-decrypt");
    mainSection.insertBefore(
      errorMessage,
      document.querySelector(".encrypt-decrypt__user-action"));
    return;
  }

  let encryptedText = "";

  for (let i = 0; i < text.length; i++)
  {
    if (text[i] == "a")
      encryptedText += "ai";
    else if (text[i] == "e")
      encryptedText += "enter";
    else if (text[i] == "i")
      encryptedText += "imes";
    else if (text[i] == "o")
      encryptedText += "ober";
    else if (text[i] == "u")
      encryptedText += "ufat";
    else
      encryptedText += text[i];
  }
  const userOutput = document.querySelector("#user-output");
  userOutput.textContent = encryptedText;
}

function decryptText()
{
  let text = document.querySelector("textarea").value;

  if (/[^a-z0-9]/.test(text)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Não são aceitos: letras minúscula, acentos ou caracteres especiais";
    errorMessage.classList.add("error-message");
    const mainSection = document.querySelector(".encrypt-decrypt");
    mainSection.insertBefore(
      errorMessage,
      document.querySelector(".encrypt-decrypt__user-action"));
    return;
  }

  let decryptedText = "";
  let i = 0;

  while (i < text.length)
  {
    if (text.substring(i, i + 2) === "ai")
    {
      decryptedText += "a";
      i += 2;
    }
    else if (text.substring(i, i + 5) === "enter")
    {
      decryptedText += "e";
      i += 5;
    }
    else if (text.substring(i, i + 4) === "imes")
    {
      decryptedText += "i";
      i += 4;
    }
    else if (text.substring(i, i + 4) === "ober")
    {
      decryptedText += "o";
      i += 4;
    }
    else if (text.substring(i, i + 4) === "ufat")
    {
      decryptedText += "u";
      i += 4;
    }
    else
    {
      decryptedText += text[i];
      i++;
    }
  }

  const userOutput = document.querySelector("#user-output");
  userOutput.textContent = decryptedText;
}

async function copyToClipboard()
{
  const userOutput = document.querySelector("#user-output").textContent;

  try
  {
    await navigator.clipboard.writeText(userOutput);
    console.log("Copiado"); /* Delete this */
  }
  catch (err)
  {
    console.log("Falha ao copiar mensagem"); /* Delete this */
  }
}
