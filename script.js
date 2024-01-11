function generateUniqueFourDigitNumber() {
    // Create an array with digits from 1 to 9
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    // Shuffle the array (Fisher-Yates shuffle algorithm)
    for (let i = digits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [digits[i], digits[j]] = [digits[j], digits[i]];
    }
  
    // Take the first four elements to create a four-digit number
    const fourDigitNumber = digits.slice(0, 4).join('');
    return fourDigitNumber;
  }
 

  // Example usage:
  let uniqueNumber = generateUniqueFourDigitNumber();
  console.log(uniqueNumber); // Outputs a four-digit number without repeating digits between 1 and 9




  function playsoundmove() {
    var audio = document.querySelector('#moveAudio');
       audio.play();
 }
 function playsoundreset() {
    var audio = document.querySelector('#resetAudio');
       audio.play();}
function playsoundcheck() {
        var audio = document.querySelector('#checkAudio');
           audio.play();}
     function openLink() {
             // var url = 'index.html';
             // window.open(url);
             setTimeout(function openLink() {
                window.location.href = 'index.html';
              },4000);   
        }
         
    


  let d = uniqueNumber%10;
  let  uniqueNumber1 = Math.floor(uniqueNumber/10);
let c=uniqueNumber1%10;
let  uniqueNumber2 = Math.floor(uniqueNumber1/10);
let b=uniqueNumber2%10;
let uniqueNumber3=Math.floor(uniqueNumber2/10);
let a=uniqueNumber3%10;
console.log(a,b,c,d);


  function setValue1() {
    const button = document.querySelector('.incrementButton1');
    
    let value =button.innerText;


const checkone = document.querySelector('#check1');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }
  
}


  function setValue2() {
    const button = document.querySelector('.incrementButton2');
    let value =button.innerText;
    const checkone = document.querySelector('#check1');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }}
    
  
  function setValue3() {
    const button = document.querySelector('.incrementButton3');
    let value =button.innerText;
    const checkone = document.querySelector('#check1');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }}
  function setValue4() {
    const button = document.querySelector('.incrementButton4');
    let value =button.innerText;
    const checkone = document.querySelector('#check1');
    
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }


  function setValue5() {
    const button = document.querySelector('.incrementButton5');
    let value =button.innerText;
    const checkone = document.querySelector('#check2');
    
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }













  function setValue6() {
    const button = document.querySelector('.incrementButton6');
    let value =button.innerText;
const checkone = document.querySelector('#check2');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue7() {
    const button = document.querySelector('.incrementButton7');
    let value =button.innerText;
const checkone = document.querySelector('#check2');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue8() {
    const button = document.querySelector('.incrementButton8');
    let value =button.innerText;
const checkone = document.querySelector('#check2');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue9() {
    const button = document.querySelector('.incrementButton9');
    let value =button.innerText;
const checkone = document.querySelector('#check3');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue10() {
    const button = document.querySelector('.incrementButton10');
    let value =button.innerText;
const checkone = document.querySelector('#check3');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue11() {
    const button = document.querySelector('.incrementButton11');
    let value =button.innerText;
const checkone = document.querySelector('#check3');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue12() {
    const button = document.querySelector('.incrementButton12');
    let value =button.innerText;
const checkone = document.querySelector('#check3');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue13() {
    const button = document.querySelector('.incrementButton13');
    let value =button.innerText;
const checkone = document.querySelector('#check4');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue14() {
    const button = document.querySelector('.incrementButton14');
    let value =button.innerText;
const checkone = document.querySelector('#check4');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue15() {
    const button = document.querySelector('.incrementButton15');
    let value =button.innerText;
const checkone = document.querySelector('#check4');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue16() {
    const button = document.querySelector('.incrementButton16');
    let value =button.innerText;
const checkone = document.querySelector('#check4');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue17() {
    const button = document.querySelector('.incrementButton17');
    let value =button.innerText;
const checkone = document.querySelector('#check5');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue18() {
    const button = document.querySelector('.incrementButton18');
    let value =button.innerText;
const checkone = document.querySelector('#check5');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue19() {
    const button = document.querySelector('.incrementButton19');
    let value =button.innerText;
const checkone = document.querySelector('#check5');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue20() {
    const button = document.querySelector('.incrementButton20');
    let value =button.innerText;
const checkone = document.querySelector('#check5');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue21() {
    const button = document.querySelector('.incrementButton21');
    let value =button.innerText;
const checkone = document.querySelector('#check6');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue22() {
    const button = document.querySelector('.incrementButton22');
    let value =button.innerText;
const checkone = document.querySelector('#check6');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue23() {
    const button = document.querySelector('.incrementButton23');
    let value =button.innerText;
const checkone = document.querySelector('#check6');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue24() {
    const button = document.querySelector('.incrementButton24');
    let value =button.innerText;
const checkone = document.querySelector('#check6');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue25() {
    const button = document.querySelector('.incrementButton25');
    let value =button.innerText;
const checkone = document.querySelector('#check7');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue26() {
    const button = document.querySelector('.incrementButton26');
    let value =button.innerText;
const checkone = document.querySelector('#check7');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue27() {
    const button = document.querySelector('.incrementButton27');
    let value =button.innerText;
const checkone = document.querySelector('#check7');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue28() {
    const button = document.querySelector('.incrementButton28');
    let value =button.innerText;
const checkone = document.querySelector('#check7');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue29() {
    const button = document.querySelector('.incrementButton29');
    let value =button.innerText;
const checkone = document.querySelector('#check8');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue30() {
    const button = document.querySelector('.incrementButton30');
    let value =button.innerText;
const checkone = document.querySelector('#check8');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue31() {
    const button = document.querySelector('.incrementButton31');
    let value =button.innerText;
const checkone = document.querySelector('#check8');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }
  function setValue32() {
    const button = document.querySelector('.incrementButton32');
    let value =button.innerText;
const checkone = document.querySelector('#check8');
    let check =checkone.innerText;
    if(check==="check"){
if (value==="") {
    value ="1";

    button.innerText = value;
}
else{
    let value = parseInt(button.innerText);
    // Increment the value and reset to 1 if it reaches 9
    value = (value % 9) + 1;

    button.innerText = value;}

    
  }

    
  }

function check1() {
    const button1 = document.querySelector('.incrementButton1');
    const button2 = document.querySelector('.incrementButton2');
    const button3 = document.querySelector('.incrementButton3');
    const button4 = document.querySelector('.incrementButton4');
    const checkone = document.querySelector('#check1');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();
         openLink();
        checkone.innerText="checked";
 let btnstyle1=document.querySelector('#btnstyle1');
  let btnstyle2=document.querySelector('#btnstyle2');
  let btnstyle3=document.querySelector('#btnstyle3');
  let btnstyle4=document.querySelector('#btnstyle4');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
  
        
    }
    else{
        playsoundreset();
alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle1');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle1');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle2');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle2');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle3');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle3');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle4');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle4');
    btnstyle4.style.backgroundColor = 'yellow';  
}


    }

    
}

function check2() {
    const button1 = document.querySelector('.incrementButton5');
    const button2 = document.querySelector('.incrementButton6');
    const button3 = document.querySelector('.incrementButton7');
    const button4 = document.querySelector('.incrementButton8');
    const checkone = document.querySelector('#check2');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle5');
  let btnstyle2=document.querySelector('#btnstyle6');
  let btnstyle3=document.querySelector('#btnstyle7');
  let btnstyle4=document.querySelector('#btnstyle8');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();
alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle5');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle5');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle6');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle6');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle7');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle7');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle8');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle8');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}
function check3() {
    const button1 = document.querySelector('.incrementButton9');
    const button2 = document.querySelector('.incrementButton10');
    const button3 = document.querySelector('.incrementButton11');
    const button4 = document.querySelector('.incrementButton12');
    const checkone = document.querySelector('#check3');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle9');
  let btnstyle2=document.querySelector('#btnstyle10');
  let btnstyle3=document.querySelector('#btnstyle11');
  let btnstyle4=document.querySelector('#btnstyle12');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();
alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle9');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle9');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle10');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle10');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle11');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle11');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle12');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle12');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}
function check4() {
    const button1 = document.querySelector('.incrementButton13');
    const button2 = document.querySelector('.incrementButton14');
    const button3 = document.querySelector('.incrementButton15');
    const button4 = document.querySelector('.incrementButton16');
    const checkone = document.querySelector('#check4');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle13');
  let btnstyle2=document.querySelector('#btnstyle14');
  let btnstyle3=document.querySelector('#btnstyle15');
  let btnstyle4=document.querySelector('#btnstyle16');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();

alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle13');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle13');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle14');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle14');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle15');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle15');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle16');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle16');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}

function check5() {
    const button1 = document.querySelector('.incrementButton17');
    const button2 = document.querySelector('.incrementButton18');
    const button3 = document.querySelector('.incrementButton19');
    const button4 = document.querySelector('.incrementButton20');
    const checkone = document.querySelector('#check5');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle17');
  let btnstyle2=document.querySelector('#btnstyle18');
  let btnstyle3=document.querySelector('#btnstyle19');
  let btnstyle4=document.querySelector('#btnstyle20');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{

alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle17');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle17');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle18');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle18');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle19');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle19');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle20');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle20');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}

function check6() {
    const button1 = document.querySelector('.incrementButton21');
    const button2 = document.querySelector('.incrementButton22');
    const button3 = document.querySelector('.incrementButton23');
    const button4 = document.querySelector('.incrementButton24');
    const checkone = document.querySelector('#check6');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle21');
  let btnstyle2=document.querySelector('#btnstyle22');
  let btnstyle3=document.querySelector('#btnstyle23');
  let btnstyle4=document.querySelector('#btnstyle24');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();

alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle21');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle21');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle22');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle22');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle23');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle23');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle24');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle24');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}

function check7() {
    const button1 = document.querySelector('.incrementButton25');
    const button2 = document.querySelector('.incrementButton26');
    const button3 = document.querySelector('.incrementButton27');
    const button4 = document.querySelector('.incrementButton28');
    const checkone = document.querySelector('#check7');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
        let btnstyle1=document.querySelector('#btnstyle25');
  let btnstyle2=document.querySelector('#btnstyle26');
  let btnstyle3=document.querySelector('#btnstyle27');
  let btnstyle4=document.querySelector('#btnstyle28');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();

alert("Try next row");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle25');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle25');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle26');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle26');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle27');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle27');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle28');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle28');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}

function check8() {
    const button1 = document.querySelector('.incrementButton29');
    const button2 = document.querySelector('.incrementButton30');
    const button3 = document.querySelector('.incrementButton31');
    const button4 = document.querySelector('.incrementButton32');
    const checkone = document.querySelector('#check8');
    let value1 = parseInt(button1.innerText);
    console.log(value1);
    let value2 = parseInt(button2.innerText);
    console.log(value2);
    let value3 = parseInt(button3.innerText);
    console.log(value3);
    let value4 = parseInt(button4.innerText);
    console.log(value4);
    console.log(uniqueNumber);
    let interedNumber=1000*value1+100*value2+10*value3+value4;
    console.log(interedNumber);
    if (uniqueNumber==interedNumber) {
        playsoundreset();
        gameWon();openLink();
        checkone.innerText="checked";
       
        let btnstyle1=document.querySelector('#btnstyle29');
  let btnstyle2=document.querySelector('#btnstyle30');
  let btnstyle3=document.querySelector('#btnstyle31');
  let btnstyle4=document.querySelector('#btnstyle32');
  btnstyle1.style.backgroundColor = 'blue';
  btnstyle2.style.backgroundColor = 'blue';
  btnstyle3.style.backgroundColor = 'blue';
  btnstyle4.style.backgroundColor = 'blue';
        
    }
    else{
        playsoundreset();
alert("Try next");
checkone.innerText="checked";
if (a==value1) {
    let btnstyle1=document.querySelector('#btnstyle29');
    btnstyle1.style.backgroundColor = 'blue';  
}
else if (a==value1||b==value1||c==value1||d==value1) {
    let btnstyle1=document.querySelector('#btnstyle29');
    btnstyle1.style.backgroundColor = 'yellow';  
}
if (b==value2) {
    let btnstyle2=document.querySelector('#btnstyle30');
    btnstyle2.style.backgroundColor = 'blue';  
}
else if (a==value2||b==value2||c==value2||d==value2) {
    let btnstyle2=document.querySelector('#btnstyle30');
    btnstyle2.style.backgroundColor = 'yellow';  
}
if (c==value3) {
    let btnstyle3=document.querySelector('#btnstyle31');
    btnstyle3.style.backgroundColor = 'blue';  
}
else if (a==value3||b==value3||c==value3||d==value3) {
    let btnstyle3=document.querySelector('#btnstyle311');
    btnstyle3.style.backgroundColor = 'yellow';  
}
if (d==value4) {
    let btnstyle4=document.querySelector('#btnstyle32');
    btnstyle4.style.backgroundColor = 'blue';  
}

else if (a==value4||b==value4||c==value4||d==value4) {
    let btnstyle4=document.querySelector('#btnstyle32');
    btnstyle4.style.backgroundColor = 'yellow';  
}

    }

    
}


function showWinPopup() {
    const winPopup = document.getElementById('win-popup');
    const resultuniuenumber = document.getElementById('result');
    resultuniuenumber.innerText=uniqueNumber;
    winPopup.style.display = 'flex';}
 function closePopup() {
        const winPopup = document.getElementById('win-popup');
        winPopup.style.display = 'none';
      }
function gameWon() {
        showWinPopup();
        setTimeout(function closePopup() {
        const winPopup = document.getElementById('win-popup');
        winPopup.style.display = 'none';
      },3000)
      }





 
  

  

 
  

  

 
  

  

 
  

  

 
  

  


 
  

  


 
  

  


 
  

  