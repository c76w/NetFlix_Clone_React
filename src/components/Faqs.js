// Frequently asked questions component
const Faqs = (props) => {

    // Declare the questions and answers variable from the props
    const questionsAndAnswers = props.questionsAndAnswers;

    return (
        // Frequently Asked Questions
        <div className="story-cards">
            <div className="story-card faq-card">
                <div className="story-card-text">
                    <h1 className="story-card-title">Frequently Asked Questions</h1>
                    <ul className="faq-list accordion" id="faqsList">

                    {/* Map through the questionsAndAnswers object to display each one */}
                    {questionsAndAnswers.map((qandas, i) => {

                        let question = qandas.question; // Get the questions
                        let answer = qandas.answer; // Get the answers

                        return (
                            <li key={`qandas-${i}`} className="faq-list-item">
                                <button id="headingOne" type="button" className="faq-question" data-bs-toggle="collapse" data-bs-target={`#faqs-${i}`} aria-expanded="false" aria-controls="faqsOne">{question}<svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg></button>
                                <div className="faq-answer accordion-collapse collapse" id={`faqs-${i}`} aria-labelledby={`title-${i}`} data-bs-parent="#faqsList">
                                    <span>{answer}</span>
                                </div>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        </div>
        // End Frequently Asked Questions
    );
};

export default Faqs;