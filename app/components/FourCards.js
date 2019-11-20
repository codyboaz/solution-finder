import React from 'react'

export default function FourCards({ data, handleAnswer, questionNumber }) {
  const { question, answers } = data
  return (
    <div>
      <div className='header'>
        <span className='question-number'>{`0${questionNumber}`}</span>
        <h1>{question}</h1>
      </div>

      <ul className='card-holder'>
        {answers &&
          answers.map(answer => (
            <li key={answer.answer}>
              {answer.imageUrl && (
                <img src={answer.imageUrl} alt='' />
              )}
              <p>{answer.description}</p>
              <button
                className='left-text'
                onClick={handleAnswer}
              >
                {answer.answer}
              </button>
            </li>
          )
          )}
      </ul>
    </div>
  )
}