// Prompt the user for a list of flavors separated by commas.
const userInputString = prompt(
  "Please enter some ice cream flavors separated by commas.",
  "Vanilla, Chocolate, Strawberry, Vanilla"
);

// Split the string of into an array of flavors.
const stringArray = userInputString.split(",");

const flavors = (stringArray) => {
  let flavorObj = {};

  for (let i = 0; i < stringArray.length; i++) {
    let flavor = stringArray[i].trim();
    if (!(flavor in flavorObj)) {
      // New flavor initialized
      flavorObj[flavor] = 1;
    } else {
      flavorObj[flavor]++;
    }
  }
  return flavorObj;
};
console.log(flavors(stringArray));
