import styles from './App.css';
import React, { Component } from 'react';

import Section from './components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnOptions = ['good', 'neutral', 'bad'];

  handleClick = e => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const positiveFeedback = Math.round((good / total) * 100);
    return positiveFeedback;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const renderStatisticsSection = total ? (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        positiveFeedback={positiveFeedback}
      />
    ) : (
      <Notification message="There is no feedback" />
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.btnOptions} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">{renderStatisticsSection}</Section>{' '}
      </>
    );
  }
}

export default App;
