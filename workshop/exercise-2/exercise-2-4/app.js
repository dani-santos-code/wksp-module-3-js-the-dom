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
  li.appendChild(document.createElement("span")).innerText = i + 1;
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

/* Create a function called `racingFrog`. It will accept one parameter.
This parameter will be a frog object from the racers array. */

const populateFrogs = frogsList => {
  let i = 0;
  frogsList.forEach(frog => {
    frog.progress = 0;
    const lane = document.getElementById(`laneNumber${i}`);
    const image = lane.appendChild(document.createElement("img"));
    document.getElementsByTagName("img")[i].setAttribute("id", `frog${i}`);
    const p = lane.appendChild(document.createElement("p"));
    p.innerText = `${frog.name} #${frog.number} <===> ${frog.progress}`;
    image.classList.add("frog");
    image.setAttribute("src", "../assets/frog.png");
    image.setAttribute("alt", "frog");
    image.setAttribute("style", `background-color: ${frog.color}`);
    i = i + 1;
  });
};

populateFrogs(racers);

const racingFrogs = frogs => {
  let i = 0;
  frogs.forEach(frog => {
    let randomProgress = Math.floor(Math.random() * 100) + 1;
    if (frog.progress <= randomProgress) {
      frog.progress = randomProgress;
    }
    frogStyle =
      "@keyframes hops { 0% { transform: translate(0, 0); 25% { transform: translate(270px);} 50% { transform: translate(500px);} 75% {transform: translate(1150px);}";

    const frogId = document.querySelector(`#frog${i}`);
    frogId.animate(
      [
        // keyframes
        { transform: `translateX(${frog.progress * 100}%)` },
        { transform: "translateY(0px)" }
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1
      }
    );
    i = i + 1;
  });
};

setInterval(() => {
  racingFrogs(racers);
}, 3000);

console.log(racers);
// setInterval(() => {
//   racingFrogs(racers);
//   console.log(racers);
// }, 2000);

// clearInterval();
// console.log(racers);
// setInterval();
// clearInterval();
// 3. We need to calculate a random distance for each hop the frog will make. Use `Math.random()` for this. It might be good to consider percentages here...
// 4. Use `setInterval` to keep the frog hopping until the progress is greater than 100%. Remember to `clearInterval` once it reaches the end of the course.
// 5. Write a message to the console, once the frog has reached the end.
// 6. If you have ever seen a frog race, it isn't all that exciting. The frogs are generally not that motivated to reach the end... To that end, let's add a variable delay to the setInterval to simulate a frog waiting around between hops.
// 7. "Why aren't they moving?!!" Examine the CSS file and determine what property you can modify to get them moving on the screen.
// 8. Almost done! Now, call `racingFrog()` for each frog in the race.

//  @keyframes rotating {
// 0% {
//   transform: translate(0, 0) rotate(0);
//   opacity: 1;
// }
// 50% {
//   transform: translate(300px, 0) rotate(180deg);
//   opacity: 1;
// }

// 100% {
//   transform: translate(100px, 0) rotate(180deg) scale(0, 0);
//   opacity: 0;
// }
// }

// Math.floor(Math.random() * 100) + 1 + '%'
