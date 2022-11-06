import React from 'react'
import "../css/Musician/musician.css"
import piano from "../assets/musician/piano.jpg";
import band from "../assets/musician/band.png";

function MusicianHome() {
    return (
        <>
            <div className='wrapper-m'>
                <div className='header-m'>
                    <div className="bgcolor">
                        <div className="image">
                        </div>
                        <div className='m-title'>
                            <span className='titlename' id='name'>I AM</span>
                                <div className='mybr'></div>
                            <span className='titlename' id='name2'>ANDRÉS MATÍAS GARBARZ</span>
                        </div>
                    </div>
                </div>
                <div className='row' id='row1'>
                    <div className="box" id='box1'>
                        <svg viewBox="0 0 146 143" xmlns="http://www.w3.org/2000/svg">
                            <path d="M111.27 0L91.3574 0.941408L12.2183 62.8547L94.4717 46.6939C96.2963 45.2504 97.9006 43.8697 99.3162 42.5831L87.897 14.1211L92.773 12.1756L103.374 38.5978C120.708 19.7068 96.9569 16.2864 111.27 0V0ZM105.199 43.1165L101.046 46.8508L104.066 54.4134C101.204 54.2879 98.0265 54.2252 94.4717 54.1938L12.2183 70.386C12.2183 70.386 12.3253 71.0764 12.4826 72.1119C13.225 76.9759 10.0509 81.5888 5.22518 82.6557C2.41598 83.2833 0 83.8168 0 83.8168L1.24259 90.4694L106.363 100.04L146 83.1264L145.717 69.5074C120.204 66.7773 142.131 57.1435 109.855 54.7586L105.199 43.1165ZM19.2492 79.7687L105.639 86.7351L99.9454 91.7874L11.6489 83.6599L19.2492 79.7687V79.7687ZM18.8245 96.5885L23.1185 127.059L22.0269 129.004L22.1402 133.962L27.5289 134.465L32.9083 132.519V128.377L31.3983 127.153L34.261 97.9693L18.8245 96.5885V96.5885ZM50.7765 100.386V124.078L83.8703 126.902V103.304L78.6168 102.833V121.253L56.0299 119.371V100.856L50.7765 100.386ZM116.775 101.233L107.527 104.653L99.7252 104.026L104.633 135.218L103.406 136.818L103.657 142.467L109.037 143L114.039 140.678L114.133 136.536L112.906 135.312L116.775 101.233V101.233ZM51.1225 129.35L42.1884 132.331L43.1636 136.849L75.3452 140.019L81.9514 137.697L82.2974 131.954L51.1225 129.35V129.35Z" fill="black" />
                        </svg>
                        <span>Self-taught pianist</span>
                    </div>
                </div>
                <div className='row' id='row2'>
                    <div className='box' id='box2'>
                        <span>Founder & leader of a band</span>
                        <img src={band} alt="bandicon" className='band' />
                    </div>
                </div>
                <div className='row' id='row3'>
                    <div className='box' id='box3'>
                        <svg width="50" height="126" viewBox="0 0 147 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 63.9254C0 55.6412 6.71573 48.9254 15 48.9254H23.4574V126H0V63.9254Z" fill="black" />
                            <path d="M123.319 48.9254H131.777C140.061 48.9254 146.777 55.6412 146.777 63.9254V126H123.319V48.9254Z" fill="black" />
                            <path d="M26.8085 31.5C26.8085 31.5 70.3723 0 73.3883 0C76.4042 0 119.968 31.5 119.968 31.5V126H89.1383V87.7979H57.3032V126H26.8085V31.5Z" fill="black" />
                            <path d="M55.6279 33.8297C55.6279 32.1728 56.9711 30.8297 58.6279 30.8297H64.2449C65.9018 30.8297 67.2449 32.1728 67.2449 33.8297V39.6701C67.2449 41.327 65.9018 42.6701 64.2449 42.6701H58.6279C56.9711 42.6701 55.6279 41.327 55.6279 39.6701V33.8297ZM78.862 33.8297C78.862 32.1728 80.2051 30.8297 81.862 30.8297H87.479C89.1358 30.8297 90.479 32.1728 90.479 33.8297V39.6701C90.479 41.327 89.1358 42.6701 87.479 42.6701H81.862C80.2051 42.6701 78.862 41.327 78.862 39.6701V33.8297ZM55.6279 57.5105C55.6279 55.8537 56.9711 54.5105 58.6279 54.5105H64.2449C65.9018 54.5105 67.2449 55.8537 67.2449 57.5105V63.351C67.2449 65.0078 65.9018 66.351 64.2449 66.351H58.6279C56.9711 66.351 55.6279 65.0078 55.6279 63.351V57.5105ZM78.862 57.5105C78.862 55.8537 80.2051 54.5105 81.862 54.5105H87.479C89.1358 54.5105 90.479 55.8537 90.479 57.5105V63.351C90.479 65.0078 89.1358 66.351 87.479 66.351H81.862C80.2051 66.351 78.862 65.0078 78.862 63.351V57.5105Z" fill="white" />
                        </svg>
                        <span>Played in official school acts</span>
                    </div>
                </div>
                <div className='row' id='row4'>
                    <div className='box' id='box4'>
                        <span>Alternative & national rock, pop</span>
                        <svg width="40" height="141" viewBox="0 0 118 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M117.882 7.44789C117.669 6.19109 117.183 4.9938 116.459 3.93675C115.735 2.87969 114.788 1.98744 113.682 1.32014C112.577 0.652842 111.339 0.226015 110.051 0.0684319C108.764 -0.0891509 107.457 0.0261748 106.218 0.406633L42.6797 19.8993C40.8322 20.4657 39.2174 21.5971 38.071 23.1284C36.9247 24.6597 36.3069 26.5107 36.3077 28.4112V100.892C32.2182 97.8798 27.2129 96.3122 22.1027 96.4426C16.9926 96.573 12.077 98.3939 8.1523 101.61C4.22764 104.826 1.52387 109.25 0.479063 114.163C-0.565745 119.077 0.109613 124.193 2.39572 128.683C4.68182 133.172 8.44474 136.772 13.0748 138.9C17.7049 141.027 22.9308 141.557 27.906 140.404C32.8811 139.251 37.3139 136.482 40.4863 132.546C43.6586 128.61 45.3846 123.737 45.3846 118.718V37.4305L108.923 17.9288V83.0656C104.834 80.0539 99.8283 78.4862 94.7181 78.6166C89.6079 78.7471 84.6923 80.5679 80.7677 83.7842C76.843 87.0004 74.1392 91.4237 73.0944 96.3373C72.0496 101.251 72.725 106.367 75.0111 110.857C77.2972 115.346 81.0601 118.946 85.6902 121.074C90.3202 123.201 95.5462 123.731 100.521 122.578C105.496 121.425 109.929 118.656 113.102 114.72C116.274 110.784 118 105.911 118 100.892V8.90962C118 8.41049 117.955 7.92919 117.882 7.44789Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicianHome