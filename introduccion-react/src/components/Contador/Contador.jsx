import './Contador.css'
import { useState } from 'react';


function Contador (){
    const [contador,setContador] = useState(0); 

    const Incrementar = ()=>{
        setContador(contador +1);
    }
    const Decrementar =()=>{
        setContador(contador -1);
    }

    return(

        <>
        <button onClick={Incrementar} onKeyDown={Decrementar} > Contador {contador} </button>
        </>



    )

}

export default Contador;