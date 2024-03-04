// FlexibilityExercise.js
import React from 'react';

const FlexibilityExercise = ({ exercise, setMenuScreen }) => {
  const flexibilityExercises = [
    'Neck',
    'Shoulder',
    'Calf',
  ];

  return (
    <div>
      <p>{`${exercise.name}`}</p>
      <ul>
        {flexibilityExercises.map((flexibilityExercise, index) => (
          <li key={index}>{flexibilityExercise}</li>
        ))}
      </ul>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  );
};

export default FlexibilityExercise;
