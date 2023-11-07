/**
 * Button used to animate the button triggered animation
 */
const animatorButton = document.getElementById("animator");


/**
 * When the event on click is triggered, the animatior button will activate the animation 
 * @param {Event} event 
 */
animatorButton.onclick = (event) => {
  /**
   * Animatorbutton.ParentNode is the div that we want to animate 
   * By adding the class "right to left" to this div, the animation is triggered 
   */
    animatorButton.parentNode.classList.add("active");
    // Once the animation is triggered we disable the animator button as the button will not work until the class is not present again
    animatorButton.disabled=true;
    // Once the animation is triggered, enable the reset button so that the right to left class can be removed 
   animatorButton2.disabled=false;
}

// Button used to reset the button triggered animation
const animatorButton2 = document.getElementById("animator2");

animatorButton2.onclick = (event) => {
    animatorButton.parentNode.classList.remove("active");
    animatorButton.disabled=false;
    animatorButton2.disabled=true;
}

// ==============INTERSECTION OBSERVER===============

/**when the onclick event is triggered, the reset button will reset the state of the animation so it can be triggered again
 * @param {Event}event
 */

// the option object is necessary for the intersection observer 
// rootMargin: 0px tells the observer that it should use the whole viewport (with no margin) to observe
// threshold: 0.1 tells the observer that an intersection should be triggered when the element is slighly inside the viewport 
// if the threshold was 0, the observer might dectet an intersection just before the element is in view 
const options ={
    rootMargin: "0px",
    threshold: 0.1
}

// the observer is linked to the whole viewport and will trigger this function anytime the observer comes into view


/**
 * The callback is triggered when the observer intersects with any of the observed elements.
 * the callback manages the adding and removing 
 * @param {*} entries 
 * @param {*} observer 
 */
const callback = (entries, observer) => {
    // 
    // this is equivalent as:
    // for(let i = 0; i < entries.length; i++){
    // const entry = entries[i];
    // }
    



/**
 * for =(const entry of entries){
 * }
 * for(let i=0; i< entries.length; i++){
 * const entry= entries[i];
 * }
 */

/**
 * 
 */
  for(const entry of entries){
  if(entry.isIntersecting) {
    entry.target.classList.add("active");
  } else {
    entry.target.classList.remove("active");
    entry.target.style.opacity=0
  }
  }
}

// the observer object is linked to thr viewport and contains the logic to trigger the callback everytime an intersection is detected 
/**
 * to create the observer we need to have a callback and options predefined
 * new IntersectionsObserver (callback,options) is a precoded Javascript function that we can freely use
 */

const observer = new IntersectionObserver(callback, options);

/**
 * target list is an array that contains all html elements with the class observable 
 * we can add this class to detect elements in which an aniamation shoulf be trggeed upon intersecting with the viewport
 */

const targetList = document.getElementsByClassName("observable")

// to link each of the targets inside the targetlist array we need to loop throuygh thrm and let the object observer knwo thpse should be observed 

for(const target of targetList) {
    observer.observe(target);
}

// const callback = (entries, observer) => {
//   // 
//   // this is equivalent as:
//   // for(let i = 0; i < entries.length; i++){
//   // const entry = entries[i];
//   // }
  
// for(const entry of entries){
// if(entry.isIntersecting) {
//   entry.target.classList.add("intersecting");
// } else {
//   entry.target.classList.remove("intersecting");
// }
// }
// }


// const observer = new IntersectionObserver(callback, options);

// const targetList = document.getElementsByClassName("observable")

// for(const target of targetList) {
//   observer.observe(target);
// }