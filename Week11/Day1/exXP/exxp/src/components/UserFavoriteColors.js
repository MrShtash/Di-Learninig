import React from 'react';

const UserFavoriteColors = (props) => {
  const { favAnimals } = props;
  return (
    <div>
      <h2>Favorite Animals:</h2>
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavoriteColors;