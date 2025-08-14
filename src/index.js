function displayPoem(reponse){
    console.log("Poem Generated");
   new Typewriter("#poem", {
    strings: reponse.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}


function generatePoem(event){
    event.preventDefault();

    alert("Generating Poem")

    let userInstructionInput = document.querySelector("#user-instruction");

    let apiKey = "3af5d1040392d37b9oa8ta7a106b03d4";
    let prompt = `Generate a poem about ${userInstructionInput.value}`;
    let context = "You are a romantic poem expert that writes unique poems. The poem should be maximum 10 lines without a heading using basic HTML. Sign the poem at the bottom in bold Italic '-SheCodes AI' ";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    


     let poemElement = document.querySelector("#poem");
     poemElement.classList.remove("hidden");
     poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${userInstructionInput.value}</div>`;


     console.log("Generating Poem");
    console.log(`Promt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);




}

let poemSearchElement = document.querySelector("#poem-generator-form");
poemSearchElement.addEventListener("submit",generatePoem)