import React, {useEffect} from "react";
import DevNavbar from '../components/DevNavbar';
import DeveloperHome from '../Content/Developer/DeveloperHome';
import DevAboutMe from '../Content/Developer/DevAboutMe';

function Landing() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <DevNavbar title={"Andrés Matías Garbarz"}/>
            <DeveloperHome/>
            <DevAboutMe/>
        </>
    )
}

export default Landing