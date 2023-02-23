
const elements = document.querySelectorAll(".column-calculator1 .line-calculator >*")
let operators = document.querySelectorAll(".column-calculator2 .line-calculator >*")
const screen = elements[0]
const cancel = elements[1]
const del = elements[2]
const result = operators[0]
const equal = operators[operators.length-1]
let operatorSelected = false 
operators = [].slice.call(operators).slice(1,operators.length-1)


const touches = ([].slice.call(elements)).slice(3)

export const Calculator ={
  initEvent:(touches)=>{
    cancel.onclick =()=>{
      Calculator.initCancel()
    }

    del.onclick = ()=>{
     Calculator.initDelete()
    }

    equal.onclick = ()=>{
      Calculator.initEquql()
    }

    if (touches.length){
      touches.forEach(touche => {
        touche.onclick = ()=>{
          const value = touche.innerText 
          screen.value += value
          operatorSelected =false
          }
      });
    }

    if (operators.length) {
      operators.forEach(operator => {
        operator.onclick = ()=>{
          if (!operatorSelected ) {
            const value = operator.innerText
            screen.value += value
            operatorSelected =true
          }
        }
      });
      
    }
  },

  initCancel:()=>{
    screen.value = ""
    result.value=""
  },

  initDelete :()=>{
    screen.value = screen.value.substring(0, screen.value.length -1)
    operatorSelected =false
    result.value=""
  },

  initEquql : ()=>{
    if(!operatorSelected){
      result.value = eval(screen.value)
    }
  }

}




  
