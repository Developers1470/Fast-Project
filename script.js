document.getElementById("runButton").addEventListener("click", function () {
  const code = document.getElementById("codeInput").value;
  const outputElement = document.getElementById("output");
  const highlightedCodeElement = document.getElementById("highlightedCode");

  try {
    // কোড রান করা
    const result = eval(code);
    outputElement.textContent = result; // আউটপুট দেখানো
  } catch (error) {
    outputElement.textContent = "ত্রুটি: " + error.message; // ত্রুটি থাকলে দেখানো
  }

  // কোড হাইলাইট করা
  highlightedCodeElement.textContent = code;
  Prism.highlightElement(highlightedCodeElement);
});
