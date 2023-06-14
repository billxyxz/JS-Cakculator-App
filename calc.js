const curr = document.querySelector(".curr-operand");
const prev = document.querySelector(".prev-operand");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "AC":
                curr.innerText = ""
                prev.innerText = ""
                break;
            case "DEL":
                if(curr.innerText){
                    curr.innerText = curr.innerText.slice(0, -1)
                }else if(prev.innerText){
                    prev.innerText = prev.innerText.slice(0, -1)
                }
                break;
            case "+":
                prev.innerText += curr.innerText + "+";
                curr.innerText = ""
                break;
            case "%":
                    prev.innerText += curr.innerText + "%";
                    curr.innerText = ""
                    break;
            case "÷":
                    prev.innerText += curr.innerText + "÷";
                    curr.innerText = ""
                    break;  
            case "×":
                    prev.innerText += curr.innerText + "×";
                    curr.innerText = ""
                    break;
            case "-":
                prev.innerText += curr.innerText + "-";
                curr.innerText = ""
                break;    
            case "=":
                if(prev.innerText.concat(curr.innerText).includes("÷")){
                    const value = prev.innerText.concat(curr.innerText).replace("÷", "/")
                    curr.innerText = eval(value);
                    prev.innerText = ""
                }else if(prev.innerText.concat(curr.innerText).includes("×")){
                    const value = prev.innerText.concat(curr.innerText).replace("×", "*")
                    curr.innerText = eval(value);
                    prev.innerText = ""
                }else if(prev.innerText.concat(curr.innerText).includes("%")){
                    const value = prev.innerText.concat(curr.innerText).replace("%", "") + "/100"
                    curr.innerText = eval(value);
                    prev.innerText = ""
                }
                curr.innerText = eval(prev.innerText.concat(curr.innerText));
                prev.innerText = ""
                break;
                default:
                    curr.innerText += e.target.innerText
        }
    })
})