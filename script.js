function toggleMood(){
let happyEmoji = document.getElementsByClassName("emoji")[0];
let sadEmoji = document.getElementsByClassName("emoji")[1];
sadEmoji.classList.toggle('visible');
happyEmoji.classList.toggle('visible');
document.body.classList.toggle('black-bg');
}
document.addEventListener('click',toggleMood);





































