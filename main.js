let soir = true

let message = document.querySelector("h1")
function change(){
    if(soir == true){
        //object // HTMLNODE
        message.innerHTML = "Bonjour !";
        message.style.color = "orange"
        document.body.style.background = "yellow"
        soir = false
    }else{
        message.innerHTML = "Bonsoir !"
        document.body.style.background = "white"
        message.style.color = "black"
        soir = true
    }
}



let classes = [ "FR", "EN","Math" , "Science","Physique","JS","Russian" ]


let listeHTML = document.querySelector("#classes")

console.log(listeHTML)

for (let i=0;i<classes.length;i++){
    listeHTML.innerHTML += '<li>' + classes[i] + '</li>'  
    //console.log(classes[i]);
}