let inp='';
let display=document.querySelector(".display");

const input=(val)=>{
    console.log("val", val)
inp += val
display.innerHTML = inp
}

const calculate=()=>{
    let res = eval(inp)
    if (`${res}`.length > 12) {
        res = res.toFixed(10)
    }
   display.innerHTML= res;
}
const openbrac=()=>{
    inp += "("
display.innerHTML = inp
}

const closebrac=()=>{
    inp += ")"
display.innerHTML = inp
}
const del=()=>{
    inp=inp.slice(0,-1);
   display.innerHTML = inp
}

const clearDisplay = () => {
    inp = ""
    display.innerHTML = inp
}