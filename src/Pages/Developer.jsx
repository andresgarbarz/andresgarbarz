import React, {useEffect} from "react";
import DeveloperHome from '../Content/Developer/DeveloperHome';

function Landing() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <DeveloperHome/>
        </>
    )
}

export default Landing