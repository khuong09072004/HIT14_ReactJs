import React,{ useState } from 'react'

function Counter(){
    const [inputValue, setInputValue] = useState(" ");
    const increment = () => {
        setInputValue();
    };
return(
    <div>
       <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
        <p>Noi dung trong o input la: "{inputValue}"</p>
        <button onClick={(e)=>setInputValue(" ")}>dat lai</button>
    </div>
);
}
export default Counter;