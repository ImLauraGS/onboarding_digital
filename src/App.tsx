import './App.css'
import data from './data/tutorial.json'
import Card from './components/Card/Card'
import { useState } from 'react'
import { TutorialData } from './types';

function App() {
  const [step, setStep] = useState(0);

  const currentCardData: TutorialData = data[step];

  function nextStep() {
    if (step < data.length - 1) {
      setStep(step + 1);
    }
  }
  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <Card 
        title={currentCardData.title}
        description={currentCardData.description}
        bgColor={currentCardData.bgColor}
        image={currentCardData.image}
        onClick={nextStep}
        onClickPrev={prevStep}
        step = {step}
        totalSteps = {data.length}
        />
    </>
  )
}

export default App
