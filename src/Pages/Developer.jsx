import React, {useEffect} from "react";
import DevNavbar from '../components/DevNavbar';
import DeveloperHome from '../Content/Developer/DeveloperHome';
import DevAboutMe from '../Content/Developer/DevAboutMe';
import DevSkills from "../Content/Developer/DevSkills";

function Landing() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <>
            <div className="devtop">
                <DevNavbar title={"Andrés Matías Garbarz"} />
                <DeveloperHome />
                <DevAboutMe />
                <DevSkills />
            </div>
        </>
    )
}

export default Landing