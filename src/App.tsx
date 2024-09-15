import './App.css';
import Palm from './assets/images/palmTop.png';
import AboutRetreat from './components/aboutRetreat/AboutRetreat';
import AwakenRetreat from './components/awakenRetreat/AwakenRetreat';
import BookNow from './components/bookNow/BookNow';
import CoFacilitator from './components/coFacilitator/CoFacilitator';
import Footer from './components/footer/Footer';
import HeaderComponent from './components/header/header';
import HeaderBackground from './components/headerBackground/HeaderBackground';
import Includes from './components/includes/Includes';
import MoreAboutRetreat from './components/moreAboutRetreat/MoreAboutRetreat';
import { mockData } from './components/owners/mock_data';
import Owner from './components/owners/Owner';
import VideoBlock from './components/videoBlock/VideoBlock';
import WhatIncludes from './components/whatIncludes/WhatIncludes';
function App() {
    return (
        <div className="App">
            <div className="palmBgRightTop">
                <img src={Palm} alt="palm" />
            </div>
            <div className="palmBgLeftTop">
                <img src={Palm} alt="palm" />
            </div>
            <div className="page">
                <HeaderComponent
                    title="Awaken Your Abundance"
                    subtitle="Women's Retreat on the Big Island of Hawaii"
                    date="January 22-26, 2025"
                    location="Big Island of Hawaii"
                />
                <div className="mainWrapper">
                    <div className="retreat-wrapper">
                        <AboutRetreat trigger="page" />
                    </div>
                    <div className="videoBlock">
                        <HeaderBackground title={'The Venue Video:'} trigger="videoBlock" componentId={1} />
                        <VideoBlock />
                    </div>
                    <div className="ownersBlock">
                        <HeaderBackground title={'Facilitators'} trigger={'owners'} componentId={6} />
                        <div className="owners">
                            {mockData.map(owner => (
                                <Owner
                                    photo={owner.photo}
                                    name={owner.name}
                                    biography={owner.biography}
                                    social={owner.social}
                                    quote={owner.quote}
                                    key={owner.name}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="includes">
                        <Includes />
                    </div>
                    <div>
                        <AwakenRetreat />
                    </div>
                    <div>
                        <WhatIncludes />
                    </div>
                    <div>
                        <MoreAboutRetreat />
                    </div>
                    <div>
                        <CoFacilitator />
                    </div>
                    <div>
                        <BookNow />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
