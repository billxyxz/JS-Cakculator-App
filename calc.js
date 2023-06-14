const curr = document.querySelector(".curr-operand");
const prev = document.querySelector(".prev-operand");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "AC":
                curr.innerText = ""
                break;
            case "DEL":
                if(curr.innerText){
                    curr.innerText = curr.innerText.slice(0, -1)
                }
                break;
            case "=":
                if(curr.innerText.includes("÷")){
                    const value = curr.innerText.replace("÷", "/")
                    curr.innerText = eval(value);
                }else if(curr.innerText.includes("×")){
                    const value = curr.innerText.replace("×", "*")
                    curr.innerText = eval(value);
                }else if(curr.innerText.includes("%")){
                    const value = curr.innerText.replace("%", "") + "/100"
                    curr.innerText = eval(value)
                }
                curr.innerText = eval(curr.innerText);
                break;
                default:
                    curr.innerText += e.target.innerText
        }
    })
})