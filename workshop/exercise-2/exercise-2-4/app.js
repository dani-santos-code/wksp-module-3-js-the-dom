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

    const frogId = document.querySelector(`#frog${i}`);
    frogId.style.left = frog.progress * 11 + "px";

    i = i + 1;
  });
};

const loopHops = setInterval(() => {
  for (let i = 0; i < racers.length; i++) {
    if (racers[i].progress !== 100) {
      racingFrogs(racers);
    } else {
      document.querySelector("h1").innerText = "We have a winner!!!!!!";
      document.querySelector("h1").setAttribute("style", "text-align: center");
      clearInterval(loopHops);
    }
  }
}, 1000);
