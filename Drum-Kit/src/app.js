//we can select the element based on the attribute like css
//using the querySelector WOW!!

window.addEventListener('keydown',(e)=>{

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(audio){
audio.currentTime = 0;
audio.play()

}
let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(key){

    key.classList.add('active')
}

//one way to remove the class after some time 
// setTimeout(() => {
//     key.classList.remove('active')
// }, 200);

})

function transitionEnd(e){
    console.log(e.propertyName)
    // if(e.propertyName !=='transform') return ;
   //here the function has the this so it's working properly
  this.classList.remove('active');
}
const keys = document.querySelectorAll('.key');
// keys.forEach((singleKey)=>{
//     singleKey.addEventListener('transitionend',(e)=>{
//         console.log(e.propertyName)
//         if(e.propertyName !=='transform') return ;
//         //arrow function dosen't have their own this so that's why here it is not working
//         e.target.classList.remove('active');
//     })

keys.forEach((singleKey)=>{
    singleKey.addEventListener('transitionend',transitionEnd)
})