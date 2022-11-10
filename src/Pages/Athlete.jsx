import React, {useEffect} from "react";
import AthleteHome from "../Content/AthleteHome";


function Athlete() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <AthleteHome/>
        </>
    );
}

export default Athlete;