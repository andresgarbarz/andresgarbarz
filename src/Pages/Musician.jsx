import React, {useEffect} from "react";
import MusicianHome from '../Content/Musician/MusicianHome'

function Musician() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <MusicianHome/>
        </>
    )
}

export default Musician