import { useEffect, useState } from "react";

function Personajes(){
    const [character, setCharacter] = useState(null);

    useEffect(function getQuotes(){
        fetch('https://www.theofficescript.com/random')
        .then(resp => resp.json())
        .then(data => setCharacter(data));
    },[]);
    

    return(
        <div>
            {character?.character}
        </div>
    )
}

export default Personajes;