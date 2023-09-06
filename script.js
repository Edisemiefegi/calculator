const display = document.querySelector(".output")
const button = document.querySelectorAll(".btn")

let isCalculate = false

// display the value
function screen(a){
   if(isCalculate == false){
    display.textContent += a
   }else {
    display.textContent = a
    isCalculate = false
   }
}

// handle button click
button.forEach(btn => {
    btn.addEventListener('click', () =>{

        let value = btn.dataset.value
        
        if(value == 'DEL'){
            Clear()
        }else if(value == 'AC'){
            clearAll()
        }else if (value == 'equal'){
            calculate()
        }else {
            screen(btn.dataset.value)
        }
      
    })
})


//delete 
function Clear(){
    let value = display.textContent.trim()
    let lastIndex = value.length - 1
    display.textContent = value.substring(0, lastIndex)
}

//delete all
function clearAll(){
    display.textContent = ''
}

//calculate the statement

function calculate(){
    let value = display.textContent.trim()
    display.textContent = eval(value)
    isCalculate = true
}

