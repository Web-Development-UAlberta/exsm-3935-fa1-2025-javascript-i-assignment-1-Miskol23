async function main() {
  let name = String(await input("What is your name?: "));
  let age = Number(await input("What is your age? [Please enter a whole number]: "));
  let clownQuestion = String(await input("Do you like clowns? [Please enter true or false]: ")).toLowerCase();
  let likesClowns = (clownQuestion === "true");

  output("Hello " + name + " I see you are " + age + " years old and on the age of clowns, you answered: " + likesClowns +".");
}
