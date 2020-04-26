import React from 'react';
import Header from '../components/Header';
import QuestionOneTwo from '../components/QuestionOneTwo';
import QuestionThree from '../components/QuestionThree';
import QuestionFour from '../components/QuestionFour';

const Question = ({ match }) => {
    // SET HEADER
    const number = match.params.number;
    const title = "Question " + number;
    
    // SET HEADER TEXT
    const getText = () => {
        switch(number){
            case '1': 
              return "Write a function that connects to https://restcountries.eu/ and gets a unique country from a specific name given using the Node back end and send it to the front end.";
            case '2': 
              return "Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end.";
            case '3': 
              return "Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries and a field to filter the country by name.";
            case '4': 
              return "Slot Machine Question";
            default: 
              return '';
          }
    }
    // SET TEMPLATE FOR QUESTION (QUESTIONS 1 AND 2 USE THE SAME TEMPLATE)
    const getQuestion = () => {
        switch(number){
            case '1': 
            case '2':
                return <QuestionOneTwo questionNumber={number}/>;
            case '3':
                return <QuestionThree/>;
            case '4':
                return <QuestionFour/>;
            default: 
            return '';
        }
      }
    
    return (
        <>
            <Header title={title} text={getText()}/>
            <div className="container">
                {getQuestion()}
            </div>
        </>
    )
}

export default Question;