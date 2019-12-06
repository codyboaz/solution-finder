import React from 'react';
import { Line } from 'rc-progress'


export default function ProgressBar({ progress, answers }) {
  const styles = {
    answers: {
      maxWidth: answers ? `${(answers.length / 4) * 100}%` : null
    }
  }
  return (
    <div className='progress-bar'>
      <Line percent={progress} strokeWidth='.35' strokeColor='#EB3300' trailWidth='0.25' trailColor='#000' />
      {
        answers && (
          <ul className="answers" style={styles.answers}>
            {answers.map((answer) => (
              <li key={answer}>
                {answer}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}