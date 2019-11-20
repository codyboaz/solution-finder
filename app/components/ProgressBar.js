import React from 'react';
import { Line } from 'rc-progress'

export default function ProgressBar({ progress, answers }) {
  console.log("answers", answers)
  return (

    <div>
      <Line percent={progress} strokeWidth='1' strokeColor='#EB3300' trailWidth='0.25' trailColor='#000' />
      {answers && (
        <ul className="answers">
          {answers.map((answer) => (
            <li key={answer}>
              {answer}
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}