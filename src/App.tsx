import './App.css';
import AboutRetreat from './components/aboutRetreat/AboutRetreat';
import HeaderComponent from './components/header/header';
import HeaderBackground from './components/headerBackground/HeaderBackground';

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
                        <AboutRetreat trigger="retreat-wrapper" />
                    </div>
                    <div className="videoBlock">
                        <HeaderBackground title={'The Venue Video:'} trigger="video" />
                        <div className="video">
                            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                <iframe
                                    src="https://player.vimeo.com/video/1008935762?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    title="IMG_8741"
                                ></iframe>
                            </div>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
