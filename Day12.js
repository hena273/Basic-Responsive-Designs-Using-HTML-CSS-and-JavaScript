function maskEmail(email) {
   const slicedEmail=email.slice(1,-11);
   const replaceAsterik=email.replace(slicedEmail,"*".repeat(slicedEmail.length));
   return replaceAsterik;
}
let email="michaeleshetu210@gmail.com"
console.log(maskEmail(email));
