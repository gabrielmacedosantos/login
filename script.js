function clicou() {
    const input = document.querySelector("#inputPass")
    let eye = document.querySelector(".eyeOn")
    
    if(input.getAttribute("type") === "text") {
        input.setAttribute("type", "password")
    } else {
        input.setAttribute("type", "text")
    }
    
}

//PEGAR ATRIBUTO
    //console.log(input.getAttribute("placeholder"))

   /*
   VERIFICAR SE TEM ATRIBUTO
    if(input.hasAttribute("placeholder")) {
        console.log("SIM")
    } else {
        console.log("Não")
    }
   */