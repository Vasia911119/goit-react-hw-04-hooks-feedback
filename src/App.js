import styles from './App.css';
import { useState } from 'react';

import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const positiveFeedback = Math.round((good / total) * 100);

  const btnOptions = ['good', 'neutral', 'bad'];

  const handleClick = e => {
    const name = e.target.textContent;

    if (name === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }

    // switch (name) {
    //   case 'good':
    //     setGood(prevGood => prevGood + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prevNeutral => prevNeutral + 1);
    //     break;
    //   case 'bad':
    //     setBad(prevBad => prevBad + 1);
    //     break;
    //   default:
    //     console.log('name');
    // }
  };

  const renderStatisticsSection = total ? (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positiveFeedback={positiveFeedback}
    />
  ) : (
    <Notification message="There is no feedback" />
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnOptions} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">{renderStatisticsSection}</Section>{' '}
    </>
  );
};

export default App;
