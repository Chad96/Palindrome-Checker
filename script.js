function checkPalindrome() {
  const inputText = document.getElementById("inputText").value;

  // Get the result element where we will display the result
  const result = document.getElementById("result");
  const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the cleaned text
  const reversedText = cleanedText.split("").reverse().join("");

  // Check if the cleaned text is equal to its reversed version
  if (cleanedText === reversedText) {
    // If it is, display that the input text is a palindrome
    result.textContent = `"${inputText}" is a palindrome.`;
    result.style.color = "green";
  } else {
    // If it is not, display that the input text is not a palindrome
    result.textContent = `"${inputText}" is not a palindrome.`;
    result.style.color = "red";
  }
}
