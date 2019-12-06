import React from 'react';
import { getData } from '../utils/api';
import FourCards from './FourCards'
import FullScreen from './FullScreen'
import Solutions from './Solutions'
import ProgressBar from './ProgressBar'

const solutionData = {
  "answer": "wireless",
  "imageUrl": "/app/img/wireless/wireless.jpg",
  "question": "Choose your solution",
  "nodeDepth": 5,
  "products": [
    {
      "recommended": true,
      "name": "Voyager 6200 UC",
      "price": "$745.99 - $945.99",
      "imageUrl": "/app/img/products/voyager-6200/voyager-6200-uc.png",
      "descriptor": "Business-ready Bluetooth neckband headset with earbuds",
      "description": "Voyager 6200 UC is a Bluetooth® neckband headset with earbuds that has the versatility to go beyond the office. Transitioning to your next conversation is easy: Connect with colleagues working remotely, listen to music to focus distraction-free or drop an earbud to tune in to the conversation around you. You can count on Voyager 6200 UC for outstanding audio every time.",
      "dataSheetUrl": "/content/poly/.../data.pdf",
      "bvRating": 4,
      "pdpUrl": "/content/poly/.../pdp.html",
      "includes": [],
      "relatedProducts": [
        {
          "Upgrades": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Accessories": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Compatible Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Similar Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        }
      ]
    },
    {
      "recommended": false,
      "name": "Voyager 5200 UC",
      "price": "$745.99 - $945.99",
      "imageUrl": "/app/img/products/voyager-5200/voyager-5200-uc.png",
      "descriptor": "Mono Bluetooth® Headset System",
      "description": "Workers in and out of the office need a headset that moves with them. Voyager 5200 UC Series headset system sounds professional in any environment –with versatile connectivity options.",
      "dataSheetUrl": "/content/poly/.../data.pdf",
      "bvRating": 4,
      "pdpUrl": "/content/poly/.../pdp.html",
      "includes": [],
      "relatedProducts": [
        {
          "Upgrades": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Accessories": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Compatible Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Similar Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        }
      ]
    },
    {
      "recommended": false,
      "name": "Realpresence Group 500",
      "price": "$745.99 - $945.99",
      "imageUrl": "/app/img/products/realpresence-group-500/realpresence-group-500.png",
      "descriptor": "Video Conferencing Bundle",
      "description": "Enterprise-grade video conferencing, voice and collaboration experiences to accelerate decision making and foster innovation",
      "dataSheetUrl": "/content/poly/.../data.pdf",
      "bvRating": 4,
      "pdpUrl": "/content/poly/.../pdp.html",
      "includes": [
        {
          "name": "Realpresence group 500 codec",
          "pdpUrl": "/content/poly/.../pdp.html"
        },
        {
          "name": "Eagleeye IV camera",
          "pdpUrl": "/content/poly/.../pdp.html"
        },
        {
          "name": "Microphone array",
          "pdpUrl": "/content/poly/.../pdp.html"
        },
        {
          "name": "Cable Bundle",
          "pdpUrl": "/content/poly/.../pdp.html"
        },
        {
          "name": "Remote Control",
          "pdpUrl": "/content/poly/.../pdp.html"
        }
      ],
      "relatedProducts": [
        {
          "Upgrades": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Accessories": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Compatible Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        },
        {
          "Similar Products": [
            {
              "name": "Eagleeye Cube",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            },
            {
              "name": "Eagleeye 12X",
              "imageUrl": "/content/poly/.../img.png",
              "price": "$745.99 - $945.99",
              "pdpUrl": "/content/poly/.../pdp.html"
            }
          ]
        }
      ]
    }
  ]
}

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      solutions: false,
      progress: 0,
      questionNumber: 1,
      data: null,
      answers: []
    };

    this.handleAnswer = this.handleAnswer.bind(this)
  }
  componentDidMount() {
    getData()
      .then((data) => {
        setTimeout(() => {
          this.setState({
            data,
            loading: false
          });
        }, 1000)
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  handleAnswer(value) {
    let nextStep = null
    let solutions = null
    this.state.data.answers.forEach((answer) => {
      if (answer.products) {
        nextStep = answer
        solutions = true
      } else if (answer.answer === value.toLowerCase()) {
        nextStep = answer
      }
    })
    this.setState({
      data: nextStep,
      solutions,
      progress: (this.state.data.nodeDepth / 4) * 100,
      questionNumber: this.state.questionNumber + 1,
      answers: this.state.answers.concat(nextStep.answer)
    })
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    if (this.state.solutions) {
      return (
        <div className='container'>
          <ProgressBar
            progress={this.state.progress}
            answers={this.state.answers}
          />
          <Solutions
            data={this.state.data}
            questionNumber={this.state.questionNumber}
          />
        </div>
      )
    }
    if (this.state.data.layout === 'fourCards') {
      return (
        <div className='container'>
          <ProgressBar progress={this.state.progress} />
          <FourCards
            data={this.state.data}
            handleAnswer={this.handleAnswer}
            questionNumber={this.state.questionNumber}
          />
        </div>
      )
    }
    if (this.state.data.layout === 'fullScreen') {
      return (
        <div className='container'>
          <FullScreen
            data={this.state.data}
            handleAnswer={this.handleAnswer}
            questionNumber={this.state.questionNumber}
          >
            <ProgressBar progress={this.state.progress} answers={this.state.answers} />
          </FullScreen>
        </div>
      )
    }

  }
}

