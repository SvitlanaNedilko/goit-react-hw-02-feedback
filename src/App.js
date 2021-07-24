import React from 'react'
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'
import Section from './components/Section/Section'

import './App.scss'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrement = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }))
  }

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item)

  countPositiveFeedbackPercentage = () =>
    parseInt((this.state.good / this.countTotalFeedback()) * 100)

  render() {
    const isVisible =
      !!this.state.good || !!this.state.neutral || !!this.state.bad
    return (
      <div className="AppRoot">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Upload stats">
          {isVisible ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    )
  }
}

export default App
