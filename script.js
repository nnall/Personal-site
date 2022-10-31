'use strict'

//Scroll Animate API
// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import { render } from 'sass';

/* ---------------- Variables ------------------ */

// const body = document.querySelector('body');
// const coffeeContainer = document.querySelector('.coffeeContainer');
// const linkList = document.querySelector(".links");
// const headerLinkbox = document.querySelectorAll('.linkBox'); 
// const rings = document.querySelectorAll('.rings');
// const headerLinks = document.querySelectorAll('.link');  //the <a> 
// const icons = document.querySelectorAll('.icon');
// const nav = document.querySelector("nav");
// const main = document.querySelector('.main');
// const aboutMeContainer = document.querySelector('.aboutMeContainer')



const linkTexts = document.querySelectorAll('.linkText');
// const linkTextSpan = document.querySelectorAll()


// console.log(linkTexts); //Node list of all links



//funciton where you feed it a link and it applies the class to each letter 



const graceFall = function(word){

    


}




linkTexts.forEach((node)=>{


    //function

graceFall(node);



})

















// const faders = document.querySelectorAll('.fade-in');
// // console.log(faders)


// const coffeeImg = document.querySelector(".coffeeCupImg");
// // console.log(coffeeImg)





// const links = document.querySelectorAll(".link");


// ///// Link Click : scroll to section

// const scrollToSection = function(e){

//     e.preventDefault();

//     //e is ring <img>
//     //getting section from ring's parent <a>
//   const section = function(e){
//     const section = e.target.parentElement.getAttribute('href').slice(1);
//     // console.log(section)
//     const sectionObject = document.getElementById(section);
//     // console.log(sectionObject)
//     sectionObject.scrollIntoView({behavior:"smooth"})
//     }
  
//   section(e);
// }

// linkList.addEventListener('click', scrollToSection);


///////////////////////////////////

const coffeeCupImg = document.querySelector('.coffeeCupImg');
const centeringDiv = document.querySelector('.centeringDiv');

const circleCentDiv = document.querySelector('.circleCenteringDiv');




linkTexts.forEach(word =>{               //for each parent cotnaining span of the letter spans...
    const letters = [...word.children];    // make an array of its letter <span> children



    
})




//Bring each letter of each link down into view
const rainLetters = function(){  
    

    linkTexts.forEach(word =>{               //for each parent word/link <span> containing of individual letter spans...
        const letters = [word.children];    // make an array of its letter <span> children (an html collection)

        console.log(letters) //letters are span elements 

        letters.forEach(letter =>{            //loop through the html collection of link letters
            letter.classList.add('fall');    // apply .fall - - -  .fall class is an animation attempting to transform the <span> letter translateY(300px);
            
        })              
    })
//for each link, return the .children (nodelist)
//then loop though that node

};


// setTimeout(rainLetters, 3000);




new fullpage('#fullpage', {
    licenseKey: 'J6KR8-1RSAI-JX7F6-LIJ8I-ZJAVL',

    autoScrolling:false,
    scrollingSpeed:400,
    navigation:true,
    scrollOverflow:false,
    scrollSnap: false,
    // verticalCentered: true,
    fadingEffect:true,

    /* ------- Cup animation after page load -------*/ 
    //Using GSAP animation inside fullPage 'afterRender' tool

    afterRender:function(){
        // const section = destination.item;
        // const tl = new TimelineMax({});

        // Bring coffee cup img up into view
        TweenMax.to(centeringDiv, 3.7, {y: 100, ease: Elastic.easeInOut.config(1, 0.3), delay: .2});

        // rainLetters();
    
  
            
    }
    // "elastic.out(1, 0.3)"
})

/*
/*--------------- H2 ANIMATION ---------------*/

var animate = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottieAnim.json',
    
    
})



// rainLetters();


// function 


 







    
    
        
    


