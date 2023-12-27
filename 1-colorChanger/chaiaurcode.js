const buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        //alert(event.target.id)
        document.body.style.backgroundColor = event.target.id
    })

})


