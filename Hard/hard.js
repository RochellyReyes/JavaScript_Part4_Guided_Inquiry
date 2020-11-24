/*#DOM Manipulation 
Goal: In JavaScript - Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background

Create a single function that takes an input className and updates the body's classList to ONLY include that className*/

"use strict"
// wait for page to finish loading
window.onload = () => {
    // add function to change background
    window.changeTheBackground = (className) => {
        // remove all current classes from the body
        const oldClasses = document.body.classList;
        document.body.classList.remove(...oldClasses);

        // add new class
        document.body.classList.add(className);
    };

    // grab our buttons and add event listeners
    const rbtn = document.getElementById("red");
    
    // add onclick eventlistener
    rbtn.onclick = () => {
        window.changeTheBackground('bg-red');
    };

    const wbtn = document.getElementById("white");
    wbtn.onclick = () => {
        window.changeTheBackground('bg-white');
    };

};






//  window.updateTheBackground = function() {

//     function backgroundRed() {
//         document.body.classList.remove("bg-white");

//         document.body.classList.add("bg-red");
//        // document.getElementById("body").classList.add("bg-red")
//     }
//     var rbtn = document.getElementById("red");
//     rbtn.addEventListener("click", backgroundRed);

//     function backgroundW() {
//         document.body.classList.remove("bg-red");
//         document.body.classList.add("bg-white");
//    }
//    var wbtn = document.getElementById("white");
//     wbtn.addEventListener("click", backgroundW);

// };










//got it but need to incorperate classes 
//  function changeColor(color){
    //     document.body.style.backgroundColor = color;
    // };
    
    // function red() {
    //     changeColor('red');
    // }
    
    // function white() {
    //     changeColor('white');
    // }
     



//close but this one is for the same button to do two different task

// var redbutton = document.querySelector("button");
// redbutton.addEventListener("click", function(){
//     const curColor = document.body.style.backgroundColor;
//     document.body.style.backgroundColor = curColor === 'red' ? 'purple' : 'red';
// });

  
//kind of worked, changes the color of the background of the button not of the whole page.

    //  function backgroundRed() {
    //      document.body.classList.remove("bg-white");

    //      document.body.classList.add("bg-red");
    //     // document.getElementById("body").classList.add("bg-red")
    //  }
    //  var rbtn = document.getElementById("red");
    //  rbtn.addEventListener("click", backgroundRed);

    //  function backgroundW() {
    //      document.body.classList.remove("bg-red");
    //      document.body.classList.add("bg-white");
    // }
    // var wbtn = document.getElementById("white");
    //  wbtn.addEventListener("click", backgroundW);






