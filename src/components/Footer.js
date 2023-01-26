// Footer component
const Footer = () => {
    return (
        // Footer
        <div className="story-cards">
            <div className="story-card card-contents footer-card story-card-no-border" style={{position: 'relative'}}>
                <div className="site-footer-wrapper centered dark">
                    <div className="site-footer">
                        <p className="footer-top">Questions? Call <a className="footer-top-a" href="tel:0808 196 5391">0808 196 5391</a></p>
                        <ul className="footer-links structural">
                            <li className="footer-link-item" placeholder="footer_responsive_link_faq_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_faq"><span>FAQ</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_help_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_help"><span>Help Centre</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_account_item"><a className="footer-link" href="/youraccount" placeholder="footer_responsive_link_account"><span>Account</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_media_center_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_media_center"><span>Media Centre</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_relations_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_relations"><span>Investor Relations</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_jobs_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_jobs"><span>Jobs</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_gift_redeem_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_gift_redeem"><span>Redeem gift cards</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_gift_buy_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_gift_buy"><span>Buy gift cards</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_waysToWatch"><span>Ways to Watch</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_terms"><span>Terms of Use</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_privacy_separate_link"><span>Privacy</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_cookies_separate_link"><span>Cookie Preferences</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_corporate_information"><span>Corporate Information</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_contact_us_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_contact_us"><span>Contact Us</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_speed_test_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_speed_test"><span>Speed Test</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_legal_guarantee_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_legal_guarantee"><span>Legal Guarantee</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_legal_notices_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_legal_notices"><span>Legal Notices</span></a></li>
                            <li className="footer-link-item originals-link" placeholder="footer_responsive_link_only_on_netflix_item"><a className="footer-link" href="/" placeholder="footer_responsive_link_only_on_netflix"><span>Only on Netflix</span></a></li>
                        </ul>
                        <p className="footer-country">Netflix United Kingdom</p>
                        <hr></hr>
                        <div id="webLink" className="p-4 text-center">
                            <a href="https://www.netflix.com/gb/" target={'_blank'} rel="noopener noreferrer" >Link to original website: https://www.netflix.com/gb/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // End Footer
    );
};

export default Footer;