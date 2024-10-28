import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let namen = ["Brandon", "Yassine", "Chloé", "John Cenna", "Denzel Washington"];

async function vraagNaam() {
  while (true) {
    const input = await rl.question("Druk op 'S' om te zien wie van jullie is uitgenodigd: ");
    if (input.toUpperCase() === 'S') {
      if (namen.length === 0) {
        console.log("Je hebt geen namen ingevoerd. Probeer het opnieuw.");
      } else {
        console.log("\nLijst van namen:");
        for (const naam of namen) {
          console.log(`${naam} is uitgenodigd om deel te nemen aan de leukste cursus van EhB: PE1.`);
        }
        break;
      }
    } else {
      namen.push(input);
    }
  }
  rl.close();
}

vraagNaam();

