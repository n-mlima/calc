function alteraTema(){
    document.body.classList.toggle("tema_escuro")
    document.body.classList.toggle("tema_claro")

    document.getElementById("input_user").classList.toggle("tema_claro")
    document.getElementById("input_user").classList.toggle("tema_escuro")

    document.getElementById("copy").classList.toggle("tema_claro")
    document.getElementById("copy").classList.toggle("tema_escuro")

    document.getElementById("input_re").classList.toggle("tema_claro")
    document.getElementById("input_re").classList.toggle("tema_escuro")

}


function calculate(){
    input_re.value="ERROR"
    const resul=eval(input_user.value)
    console.log(resul)
    if(typeof resul=== "undefined"){
        input_re.value=""
    }else{
        console.log(resul+'aff')
        input_re.value=resul
    }
    
    
}

document.getElementById("icon").addEventListener("click", alteraTema)

const input_user = document.getElementById("input_user")
const input_re=document.getElementById("input_re")



const pressKeys=["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".btt_keys").forEach(function(bttKeys){
    bttKeys.addEventListener("click", function(){
        const value=bttKeys.dataset.value
        input_user.value += value
    })
})

document.getElementById("clear").addEventListener("click",function(){
    input_user.value=""
    input_user.focus()
})

input_user.addEventListener("keydown", function( ev ){
    ev.preventDefault()
    if(pressKeys.includes(ev.key)){
        input_user.value += ev.key
        return
    }
    
    if(ev.key==="Backspace"){
        input_user.value=input_user.value.slice(0,-1)
    }

    if (ev.key==="Enter"){
        calculate()
    }
})


document.getElementById("btt_equal").addEventListener("click",calculate)

document.getElementById("copy").addEventListener("click",function(ev){
    console.log("clicado!")
    const button = ev.currentTarget
    if(button.innerText === "Copy"){
        button.innerText="Copied"
        button.classList.add("copied")
        navigator.clipboard.writeText(input_re.value)
    }else{
        button.innerText="Copy"
        button.classList.remove("copied")
    }

})