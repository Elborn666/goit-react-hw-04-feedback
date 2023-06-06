import { useState } from 'react';
import Statistics from './Statistics/Statistacs';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Message from './Message/Message';
import css from './App.module.css'


function App() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleButtonClick = ( options ) => {
    switch(options){
      case 'good':
        setGoog(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

        default:
          return;
    }
    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };


  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(totalFeedback);
  let feedbackContent;


  if (totalFeedback === 0) {
    feedbackContent = <Message message="There is no feedback" />;
  } else {
    feedbackContent = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    );
  }

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      <Section title="Statistics">{feedbackContent}</Section>
    </div>
  );

}

export default App;