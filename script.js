function firstChar(text) {
  // your code here
  // Remove leading spaces
  const trimmedText = text.trimStart();
  
  // If the string is empty or only had spaces, return an empty string
  if (trimmedText.length === 0) {
    return '';
  }
  
  // Return the very first character of the remaining text
  return trimmedText[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));