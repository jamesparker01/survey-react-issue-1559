import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

class App extends Component {
  get questions() {
    return [
        {
            name: "questionname",
            type: "matrixdynamic",
            title: "questiontitle",
            minRowCount: 1,
            columns: [
                {
                    name: "Col1"
                }
            ],
            cellType: "text"
          }
      ];
  }

  render() {
    const survey = new Survey.Model({
        questions: this.questions
    });

    return (
      <div>
         <Survey.Survey
              model={survey} />
      </div>
    );
  }
}

export default App;
