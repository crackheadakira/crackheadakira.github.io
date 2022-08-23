import $ from "jquery";
import showdown from "showdown";
const converter = new showdown.Converter();

// CHAPTER CODE

let chapterLength = await (
  await fetch(
    "https://raw.githubusercontent.com/crackheadakira/novel/main/chapters/chapterCount.md"
  )
).text();

let chapterCount = createChapterCount(chapterLength);

for (let i = 0; i < chapterCount.length; i++) {
  await fetch(
    "https://raw.githubusercontent.com/crackheadakira/novel/main/chapters/" +
      chapterCount[i] +
      ".md"
  )
    .then((response) => response.text())
    .then((data) => {
      const title = data.slice(0, data.indexOf("\n"));
      data = data
        .replace(title, "")
        .replace("\n", "")
        .replace(/(?:\r\n|\r|\n)/g, "<br>");
      const chapterDiv = document.createElement("div");
      const chapterTitle = document.createElement("div");
      const chapterText = document.createElement("div");
      const chapterItem = document.createElement("a");
      chapterDiv.classList.add("chapter");
      chapterTitle.classList.add("chapterTitle");
      chapterDiv.id = chapterCount[i];
      chapterItem.href = `#${chapterCount[i]}`;
      chapterItem.textContent = `CHAPTER ${i + 1}`;
      chapterTitle.textContent = title;
      chapterText.innerHTML = converter.makeHtml(data);
      chapterDiv.appendChild(chapterTitle);
      chapterDiv.appendChild(chapterText);
      document.querySelector("#selectChapter").appendChild(chapterItem);
      return document.querySelector("#chapters").appendChild(chapterDiv);
    });
}

function createChapterCount(amountOfChapters) {
  let array = [];
  for (let i = 0; i < amountOfChapters; i++) {
    array.push(`chapter${i + 1}`);
  }
  return array;
}

// THEME SWITCHER CODE

let currentTheme = "dark";

$("#themeSwitcherIcon").on("click", () => {
  if (currentTheme === "dark") {
    $("body").css("background-color", "rgb(236, 236, 236)");
    $("body").css("color", "black");
    $("a").css("color", "black");
    $("#themeSwitcher").css("filter", "invert(0)");
    $("#themeSwitcherIcon").attr("src", "./assets/images/moon.svg");
    currentTheme = "light";
  } else {
    $("body").css("background-color", "rgb(19, 19, 19)");
    $("body").css("color", "white");
    $("a").css("color", "white");
    $("#themeSwitcher").css("filter", "invert(1)");
    $("#themeSwitcherIcon").attr("src", "./assets/images/sun.svg");
    currentTheme = "dark";
  }
});
