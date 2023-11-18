let request = new XMLHttpRequest();
request.open("GET", "sentence.txt", true);
request.send()
let p = document.querySelector('p')
let btn = document.querySelector('button')
let h = document.querySelector('h1')

request.onload = function(){
    let word = this.responseText;
    word = word.split("\n")
    console.log(word)
    btn.addEventListener('click', ()=>{
        let rdm = Math.floor(Math.random() * word.length)
        p.textContent = '"' + word[rdm] + '"'
        h.textContent = "SENTENCE #" + rdm;
    })
}