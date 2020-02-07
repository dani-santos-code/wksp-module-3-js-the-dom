// Preset values
const FROGS = 3;

// Define an empty array called `racers`. We will push random frogs from the stable into this array.

let racers = [];

const ol = document.querySelector("#main ol");
//Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 0; i < FROGS; i++) {
  // Create liS
  const li = ol.appendChild(document.createElement("li"));
  // Create span and add it to the li
  li.appendChild(document.createElement("span")).innerText = i;
  // Assign an id to each lane
  document.getElementsByTagName("span")[i].setAttribute("id", `laneNumber${i}`);
}

// Write a `for` loop that keeps pushing frogs from `frogStable` into `racers`
// until we have the required number of frogs(as defined by`FROGS`).

frogStable.forEach(frog => {
  if (racers.length != 3) {
    racers.push(frog);
  }
});
// Output the racers array to the console to make
// sure you actually have frogs in there.
console.log(racers);
