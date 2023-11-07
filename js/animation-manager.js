const animatorButton = document.getElementById("animator");

animatorButton.onclick = (event) => {
    animatorButton.parentNode.classList.add("right-to-left");
    animatorButton.disabled=true;
   animatorButton2.disabled=false;
}

const animatorButton2 = document.getElementById("animator2");

animatorButton2.onclick = (event) => {
    animatorButton.parentNode.classList.remove("right-to-left");
    animatorButton.disabled=false;
    animatorButton2.disabled=true;
}

// ==============INTERSECTION OBSERVER===============

const options ={
    rootMargin: "0px",
    threshold: 0.1
}

// the observer is linked to the whole viewport and will trigger this function anytime the observer comes into view

const callback = (entries, observer) => {
    // 
    // this is equivalent as:
    // for(let i = 0; i < entries.length; i++){
    // const entry = entries[i];
    // }
    
  for(const entry of entries){
  if(entry.isIntersecting) {
    entry.target.classList.add("bottom-zig-zag");
  } else {
    entry.target.classList.remove("bottom-zig-zag");
  }
  }
}


const observer = new IntersectionObserver(callback, options);

const targetList = document.getElementsByClassName("observable")

for(const target of targetList) {
    observer.observe(target);
}