// Header component
const Header = () => {
    return (
        // Header
        <div>
            <div className="top-banner -container">
                <div className="badging-indicator">New!</div>
                <div className="top-banner -banner-offer-text">
                    <span>Plans now start at <span className="top-banner -price-label">£4.99</span>.</span>
                </div>
                <div className="top-button-cta btn-small --alternate-cta-treatment">
                    <a className="btn btn-outline btn-small btnHeader" href="/" target="_top">Learn More<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon icon-chevron-next"><path fillRule="evenodd" clipRule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path></svg></a>
                </div>
            </div>
        </div>
        // End Header
    );
};

export default Header;