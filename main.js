let outputScreen=document.getElementById('output-screen');

function clr() {
  outputScreen.value=""
}

function del() {
  outputScreen.value=outputScreen.value.slice(0,-1)
}

function display(num) {
  outputScreen.value+=num
}

function calculate() {
  
  if(outputScreen.value!=0) {
    try {
      outputScreen.value = eval (outputScreen.value)
    } catch (err) {
      alert("Math Error")
    }
    
  }
}