import { useEffect, useState } from "react";

function Citas(){
    const [quote, setQuote] = useState(null);
    
    useEffect(function getQuotes(){
        fetch('https://www.theofficescript.com/random')
        .then(resp => resp.json())
        .then(data => setQuote(data));
    },[]);
    
    return(
        <div>
            {quote?.line}
        </div>
    )
}

export default Citas;