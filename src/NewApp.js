import React from 'react';
import logo from './logo.svg';
import FeedbackForm from './FeedbackForm';
import TreeForm from './TreeForm';
import ExampleApp from './ExampleApp';
import Question from './Question';

const NewApp = () => {
  return (
    <div>
      {/* <FeedbackForm initFeedback="This is good" anap="sfsf"/> */}
      <TreeForm initTreeCount="1"/>
      <TreeForm initTreeCount="2"/>
      <TreeForm initTreeCount="3"/>
      <Question questionValue="What is my name"/>
      {/* <ExampleApp /> */}
    </div>
  );
}

export default NewApp;
