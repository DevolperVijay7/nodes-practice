const typingText= document.querySelector('.typing text p')
const  input= document.querySelector('.wrapper .input-field')
const time= document.querySelector('.time span b')
const  mistekes= document.querySelector('.mistakes span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const button =document.querySelector('button')


function loadParagraph(){


      const paragraph =[abswqdewdewdewdwqdqwdqwdqwdqdqdqwdqwdqwdqwdqdqdqdqwdqwdqwdqwdqwdd];
}

const randomIndex = Math.floor(Math.random()*paragraph.length);
typingText.innerHTML='';
for(const char of paragraph[randomIndex]){
    console.log(char)


}

loadParagraph();
