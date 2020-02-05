document
  .querySelector("body")
  .setAttribute(
    "style",
    "background: rgba(246, 187, 33, 0.8) url('./images/yellow-umbrella.jpg') no-repeat; background-size: 100%; font-family: 'Playfair Display', serif;"
  );

const mainDiv = document.querySelector("#main");

mainDiv.setAttribute(
  "style",
  "background: #fafafa;border-radius: 4px; box-shadow: 8px 10px 25px 0 rgba(128, 128, 128, 0.44); min-width: 320px; max-width: 600px; margin: 36px; padding: 4px 32px 32px;"
);

const h1 = document.createElement("h1");

mainDiv.appendChild(h1);

h1.classList.add("title");

h1.setAttribute(
  "style",
  "font-family: Open Sans, sans-serif; text-align: center;"
);

h1.innerText = "The best How I Met Your Mother episode (according to fans)";

const paragraph = document.createElement("p");

mainDiv.appendChild(paragraph);

paragraph.classList.add("paragraph");

paragraph.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";

const h2 = document.createElement("h2");

mainDiv.appendChild(h2);

h2.classList.add("subtitle");

h2.setAttribute("style", "font-size: 17px; line-height: 1.5em;");

h2.innerText = "The Slap Bet (Season 2, Episode 9)";

const paragraph2 = document.createElement("p");

mainDiv.appendChild(paragraph2);

paragraph2.classList.add("paragraph");

paragraph2.innerText = "IMDB Rating: 9.5";

const img = document.createElement("img");

mainDiv.appendChild(img);

img.classList.add("image");

img.setAttribute("src", "./images/robin-sparkles.jpg");

img.setAttribute("alt", "Robin Sparkles");

img.setAttribute(
  "style",
  "border: #fafafa; border-radius: 4px; box-shadow: 4px 4px 14px rgba(128, 128, 128, 0.4); width: 100%;"
);

const paragraph3 = document.createElement("p");

mainDiv.appendChild(paragraph3);

paragraph3.classList.add("paragraph");

paragraph3.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";

const paragraph4 = document.createElement("p");

mainDiv.appendChild(paragraph4);

paragraph4.classList.add("paragraph");

paragraph4.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

const anchor = document.createElement("a");

mainDiv.appendChild(anchor);

anchor.classList.add("link");

anchor.setAttribute(
  "style",
  "color: #174e7c; display: block; font-weight: 700; margin-top: auto; text-align: right; text-decoration: none;"
);

anchor.innerText = "Source";

anchor.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);

document
  .getElementsByClassName("paragraph")
  .setAttribute("style", "font-size: 17px; line-height: 1.5em;");
