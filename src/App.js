import './App.css';
import React, { useState, useCallback } from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import FlexibilityExercise from "./components/FlexibilityExercise";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const FLEXIBILITY_EXERCISE = "flexibility";

const exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Jumping" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
  { type: REPETITION_EXERCISE, name: "Planks" },
  { type: FLEXIBILITY_EXERCISE, name: "Stretching" }
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(null);

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, [setCurrentExercise, setCurrentScreen]);

  const setMenuScreen = useCallback(() => {
    setCurrentScreen(MENU_SCREEN);
    setCurrentExercise(null); // Reset the currentExercise when returning to the menu
  }, [setCurrentScreen, setCurrentExercise]);

  let screenComponent = null;

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map(({ name, type }) => (
            <li key={name}>
              <button onClick={() => buttonClick({ name, type })}>{name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise?.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      case FLEXIBILITY_EXERCISE:
        screenComponent = (
          <FlexibilityExercise
            exercise={currentExercise}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      default:
        // Handle unknown exercise type
        screenComponent = null;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;