export function inputFocus(inp){
   inp.current.style.top="2px";
   inp.current.style.border="2px solid orangered";
   inp.current.style.borderWidth="2px 2px 0 2px";
}

export function inputBlur(inp, val){
   if(val !== '') return;
   
   inp.current.style.top="50%";
   inp.current.style.border="0";
   inp.current.style.borderWidth="0 0 0 0";
   
}