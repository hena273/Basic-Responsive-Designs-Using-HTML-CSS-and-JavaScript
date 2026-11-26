function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const firstChar = email[0];
  const lastCharBeforeAt = email[atIndex - 1];
  const domain = email.slice(atIndex);
  const middleLength = Math.max(0, atIndex - 2);
  const stars = "*".repeat(middleLength);

  return firstChar + stars + lastCharBeforeAt + domain;
}

let email = "user@example.com";
console.log(maskEmail(email));