const quote = document.querySelector('p');
const author = document.querySelector('span');
const btn = document.querySelector('button');
const icons = document.querySelectorAll('i');

let generateQuotes = () => {
    btn.classList.add('loading');
    btn.innerText = "Loading...";
    fetch('https://api.quotable.io/random').then((response) => {
        return response.json();
    }).then((result) => {
        quote.innerText = `${result.content}`;
        author.innerText = `- ${result.author}`;
        btn.innerText = "New Quote";
        btn.classList.remove('loading');
    })
}

btn.addEventListener('click',generateQuotes);

icons.forEach((e) => {
    e.addEventListener('click',() => {
        if(e.classList == "ri-file-copy-line") {
           navigator.clipboard.writeText(quote.innerText);
        }
        else {
            let whatsApp = `https://wa.me/9892392978?text=${quote.innerText}`;
            window.open(whatsApp,"_blank");
        }
    })
});