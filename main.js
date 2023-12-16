const generateMemeBtn = document.querySelector(
    ".meme-generator .gernerate-meme-btn"
);
const memeImage = document.querySelector(".memegenerator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
        .then((Response) => Response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author)
        })
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme()