import Header from './components/Header'; // Import the Header Component
import StoryCards from './components/StoryCards'; // Import the Story Cards Component
import Faqs from './components/Faqs'; // Import the Frequently Asked Questions Component
import GetStarted from './components/GetStarted'; // Import the Get Started Component
import Footer from './components/Footer'; // Import the Footer Component
import './App.css';



function App() {

// Declare frequently asked questions object
const questionsAndAnswers = [
  {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There\'s always something new to discover, and new TV programmes and films are added every week!'
  },
  {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £4.99 to £15.99 a month. No extra costs, no contracts.'
  },
  {
      question: 'What’s different on Basic with adverts?',
      answer: 'Basic with adverts is a great way to enjoy films and TV programmes at a lower price. You can stream your favourites on any device with limited advert breaks. This plan does not allow downloads and a limited number of films and TV programmes are not available due to licensing restrictions. Some location and device restrictions also apply.'
  },
  {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
  },
  {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.'
  },
  {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.'
  },
  {
      question: 'Is Netflix good for children?',
      answer: 'The Netflix Children\'s experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space. Children\'s profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.'
  }
];


  return (
    <div className="App">
      <Header />
      <StoryCards />
      <Faqs questionsAndAnswers={questionsAndAnswers} />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
