// Import Images and Video
import HeroImg from '../assets/imgs/hero-background-image.jpg';
import TvImg from '../assets/imgs/tv.png';
import VideoOne from '../assets/imgs/video-tv-0819.m4v';
import DeviceImg from '../assets/imgs/device-pile.png';
import VideoTwo from '../assets/imgs/video-devices.m4v';
import ChildrenImg from '../assets/imgs/children.png';
import MobileImg from '../assets/imgs/mobile-0819.jpg';
import BookShotImg from '../assets/imgs/boxshot.png';

// Story cards component
const StoryCards = () => {
    return (
        // Story Cards
        <div>
            <div className="story-header-wrapper">
                <div className="d-flex justify-content-between align-items-center story-header">
                    <span className="svg-nfLogo story-logo nfLogo">
                        <svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
                    </span>
                    <a href="/" className="authLinks redButton">Sign In</a>
                </div>
            </div>
            <div className="story-cards">
                <div className="story-card hero-card hero_fuji vlv">
                    <div className="story-card-background">
                        <div className="concord-img-wrapper" style={{height: '693.2px'}}>
                            <img className="concord-img vlv-creative" src={HeroImg} alt="hero background" />
                            <div className="concord-img-gradient"></div>
                        </div>
                    </div>
                    <div className="story-card-text">
                        <h1 className="story-card-title">Unlimited films, TV programmes and more.</h1>
                        <h2 className="story-card-subtitle">Watch anywhere. Cancel at any time.</h2>
                        <form className="cta-form email-form">
                            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="email-form-lockup">
                                <ul className="simpleForm structural ui-grid">
                                    <li className="nfFormSpace field-email">
                                        <div className="nfInput nfInputResponsive">
                                            <div className="nfInputPlacement">
                                                <label className="input_id" placeholder="email"></label>
                                                <input type="email" name="email" className="nfTextField" id="id_email_hero_fuji" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" placeholder="" />
                                                <label htmlFor="id_email_hero_fuji" className="placeLabel">Email address</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="story-cta-container cta-link-wrapper">
                                    <button className="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex="0" role="link" >
                                        <span className="cta-btn-txt">Get Started</span>
                                        <span className="chevron-right-arrow">
                                            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="story-card animation-card watchOnTv">
                    <div className="animation-card-container"> 
                        <div className="story-card-text">
                            <h1 className="story-card-title">Enjoy on your TV.</h1>
                            <h2 className="story-card-subtitle">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                        </div>
                        <div className="story-card-img-container">
                            <div className="story-card-animation-container">
                                <img alt="" className="story-card-img" src={TvImg} />
                                <div className="story-card-animation">
                                    <video className="story-card-video" autoPlay muted playsInline loop>
                                        <source src={VideoOne} type="video/mp4" />
                                    </video>
                                    <div className="story-card-animation-text"></div>
                                    <div className="story-card-animation-custom" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-card animation-card watchOnDevice opposite">
                    <div className="animation-card-container">
                        <div className="story-card-text">
                            <h1 className="story-card-title">Watch everywhere.</h1>
                            <h2 className="story-card-subtitle">Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h2>
                        </div>
                        <div className="story-card-img-container">
                            <div className="story-card-animation-container">
                                <img alt="" className="story-card-img" src={DeviceImg} />
                                <div className="story-card-animation">
                                    <video className="story-card-video" autoPlay muted playsInline loop>
                                        <source src={VideoTwo} type="video/mp4" />
                                    </video>
                                    <div className="story-card-animation-text"></div>
                                    <div className="story-card-animation-custom" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-card animation-card kidsValueProp">
                    <div className="animation-card-container">
                        <div className="story-card-text">
                            <h1 className="story-card-title">Create profiles for children.</h1>
                            <h2 className="story-card-subtitle">Send children on adventures with their favourite characters in a space made just for them – free with your membership.</h2>
                        </div>
                        <div className="story-card-img-container">
                            <div className="story-card-animation-container">
                                <img alt="" className="story-card-img" src={ChildrenImg} />
                                <div className="story-card-animation">
                                    <div className="story-card-animation-text"></div>
                                    <div className="story-card-animation-custom" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-card animation-card downloadAndWatch opposite">
                    <div className="animation-card-container">
                        <div className="story-card-text">
                            <h1 className="story-card-title">Download your programmes to watch offline.</h1>
                            <h2 className="story-card-subtitle">Available on all plans except Basic with adverts.</h2>
                        </div>
                        <div className="story-card-img-container">
                            <div className="story-card-animation-container">
                                <img alt="" className="story-card-img" src={MobileImg} />
                                <div className="story-card-animation">
                                    <div className="story-card-animation-image">
                                        <img alt="" src={BookShotImg} />
                                    </div>
                                    <div className="story-card-animation-text">
                                        <div className="text-0">Stranger Things</div>
                                        <div className="text-1">Downloading...</div>
                                    </div>
                                    <div className="story-card-animation-custom" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // End Story Cards
    );
};

export default StoryCards;

