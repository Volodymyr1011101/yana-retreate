import './App.css';
import AboutRetreat from './components/aboutRetreat/AboutRetreat';
import AwakenRetreat from './components/awakenRetreat/AwakenRetreat';
import HeaderComponent from './components/header/header';
import HeaderBackground from './components/headerBackground/HeaderBackground';
import Includes from './components/includes/Includes';
import VideoBlock from './components/videoBlock/VideoBlock';

function App() {
    return (
        <div className="App">
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
                    <div className="includes">
                        <Includes />
                    </div>
                    <div>
                        <AwakenRetreat />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
