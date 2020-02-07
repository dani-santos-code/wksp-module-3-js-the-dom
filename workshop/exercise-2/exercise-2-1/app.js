// Preset values
const FROGS = 3;

const ol = document.querySelector("#main ol");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 0; i < FROGS; i++) {
  // 2. Create liS
  const li = ol.appendChild(document.createElement("li"));
  // 3. Create span and add it to the li
  li.appendChild(document.createElement("span")).innerText = i;
  // 4. Assign an id to each lane
  document.getElementsByTagName("span")[i].setAttribute("id", `laneNumber${i}`);
}
