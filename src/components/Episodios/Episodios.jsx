import { useEffect, useState } from "react";
import { ReactComponent as Loading } from "../../assets/loader.svg";
import './Episodios.css';

function Episodios(){
    const [episode, setEpisode] = useState(null);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(function getEpisode(){
        if(shouldRefresh){
            setIsLoading(true);
            fetch('https://www.theofficescript.com/random')
            .then(resp => resp.json())
            .then(data => {
                setShouldRefresh(false);
                setEpisode(data);
                setIsLoading(false);
            });
        }else{
            return;
        }
    },[shouldRefresh]);
    
    function onRefresh() {
        setShouldRefresh(true);
    }

    if(isLoading){
        return(
            <div className="loading-wrapper">
                <Loading/>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div>
            <button onClick={()=> onRefresh()} className="refresh-button">Refresh!</button>
            <h1>Season: {episode?.season} - Episode - {episode?.episode}</h1>
            <h3>Character: {episode?.character}</h3>
            <p>{episode?.line}</p>
        </div>
    )
}

export default Episodios;