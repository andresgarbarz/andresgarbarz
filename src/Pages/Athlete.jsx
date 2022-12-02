import React, {useEffect} from "react";
import AthletePage from "../Content/Athlete/AthletePage";


function Athlete() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <AthletePage/>
        </>
    );
}

export default Athlete;