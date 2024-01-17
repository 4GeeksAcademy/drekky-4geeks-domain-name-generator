function generateDomainNames() {
  const pronouns = document
    .getElementById("pronounInput")
    .value.split(",")
    .map((item) => item.trim());
  const adjectives = document
    .getElementById("adjectiveInput")
    .value.split(",")
    .map((item) => item.trim());
  const nouns = document
    .getElementById("nounInput")
    .value.split(",")
    .map((item) => item.trim());
  const extensions = document
    .getElementById("extensionInput")
    .value.split(",")
    .map((item) => item.trim());

  const resultContainer = document.getElementById(
    "result"
  );
  resultContainer.innerHTML = "";

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          const domainName = `${pronoun}${adjective}${noun}${extension}`;
          const listItem = document.createElement(
            "li"
          );
          listItem.textContent = domainName;
          resultContainer.appendChild(listItem);
        }
      }
    }
  }
}
