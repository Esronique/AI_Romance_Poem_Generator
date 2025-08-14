function generatePoem(event){
    event.preventDefault();

    alert("Generating Poem")

  

    new Typewriter("#poem-body", {
    strings: "Have you ever met someone you think about",
    autoStart: true,
    delay: 2,
    cursor: "",
  });



}

let poemSearchElement = document.querySelector("#poem-generator-form");
poemSearchElement.addEventListener("submit",generatePoem)