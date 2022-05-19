import $ from 'jquery';

let chapterCount = createChapterCount(6);
let chapterTitles = ["CHAPTER 1 - THE VISIT", "CHAPTER 2 - A DISCUSSION WITH GOD",
    "CHAPTER 3 - MISFORTUNE", "CHAPTER 4 - THE TRIAL",
    "CHAPTER 5 - ESCAPE", "CHAPTER 6 - THE BUILDING"];

for (const chapter of chapterCount) {
    $.get(`../assets/chapters/${chapter}.md`, function (data) {
        data = data.replace(/(?:\r\n|\r|\n)/g, '<br>');

        let chapterDiv = document.createElement('div');
        let chapterTitle = document.createElement('div');
        let chapterText = document.createElement('div');

        chapterDiv.classList.add('chapter');
        chapterTitle.classList.add('chapterTitle');

        chapterDiv.id = chapter;

        chapterTitle.textContent = chapterTitles[chapterCount.indexOf(chapter)];
        chapterText.innerHTML = data;

        chapterDiv.appendChild(chapterTitle);
        chapterDiv.appendChild(chapterText)
        document.querySelector('#chapters').insertBefore(chapterDiv, document.querySelector('#footer'));
    });
}


function createChapterCount(amountOfChapters){
    let array = [];
    for(let i=0; i < amountOfChapters; i++){
        array.push(`chapter${i+1}`)
    }
    return array;
}