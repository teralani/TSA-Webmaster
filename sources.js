const div = document.querySelector(".everything");
(async () => {

await(async () => {
    const response = await fetch("sources.txt");
    const data = await response.text();
    
    const lines = data.split("\n");
   for (let line of lines){
    div.innerHTML+="<p class='source'>" + line + "</p>"
   }
})();

    const divs = document.querySelectorAll('.source'); 
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function fadeIn(entries) {
        for(let entry of entries){
            entry.classList.add("inView");
          await sleep(10);  
        }
      }
    fadeIn(divs)
})();
  

  