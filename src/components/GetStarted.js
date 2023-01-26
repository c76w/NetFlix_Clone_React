// Get Started component
const GetStarted = () => {
    return (
        // Get Started
        <div className="story-cards">
            <div className="story-card faq-card">
                <div className="story-card-text">
                    <form className="cta-form email-form">
                        <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="email-form-lockup">
                            <ul className="simpleForm structural ui-grid">
                                <li className="nfFormSpace field-email">
                                    <div className="nfInput nfInputResponsive">
                                        <div className="nfInputPlacement">
                                            <label className="input_id" placeholder="email">
                                                <input type="email" name="email" className="nfTextField" id="id_email_faq" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" placeholder="" />
                                                <label htmlFor="id_email_faq" className="placeLabel">Email address</label>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="story-cta-container cta-link-wrapper">
                                <button className="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex="0" role="link">
                                    <span className="cta-btn-txt">Get Started</span>
                                    <span className="chevron-right-arrow"><svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path></svg></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // End Get Started
    );
};

export default GetStarted;