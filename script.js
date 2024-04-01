const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl=document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitle = document.querySelector('.counter__title');


incrementCounter = () =>{
//get current value of counter
const currentValue =counterValueEl.textContent;

//convert value to number type
const currentValueAsNumber = +currentValue;
//increment by 1
let newValue=currentValueAsNumber+1;

//if it is qual to 5
if(newValue >5){
  //change the title
  counterTitle.textContent='max is 5';

  //stop it from counting
  newValue=5;

  //give visual indicator that limit has been reached
  counterEl.style.backgroundColor='red';

  //disable increase and decrease buttons
  increaseButtonEl.disabled = true;
  decreaseButtonEl.disabled=true;

 
}

//set counter new value

 counterValueEl.textContent=newValue;
}

decrementCounter = () =>{
         //get current value of counter
   const currentValue =counterValueEl.textContent;

   //convert value to number type
   const currentValueAsNumber = +currentValue;
   //decrement by 1
   let newValue=currentValueAsNumber-1;

   //check if new value is less than 0 
   if(newValue < 0){
   // if it is force it tp be 0
    newValue=0;

   }
   //set counter new value
   
    counterValueEl.textContent=newValue;
    counterTitle.textContent='FANCY COUNTER';
    //unfocus(blur) decrease button
    decreaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown',incrementCounter);

decreaseButtonEl.addEventListener('click' , decrementCounter);


resetButtonEl.addEventListener('click', () => {
//set counter value to 0
      counterValueEl.textContent=0;
      counterTitle.textContent='FANCY COUNTER';
      counterEl.style.backgroundColor='#bef227';
      increaseButtonEl.disabled=false;
      decreaseButtonEl.disabled=false;
      //unfocus(blur) reset button
      resetButtonEl.blur();

})

