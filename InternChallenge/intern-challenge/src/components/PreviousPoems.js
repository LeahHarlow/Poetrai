import React from 'react';
import { useSelector } from 'react-redux';

const PreviousPoems = () => {

  const poemObject = useSelector((state) => {
    return state.poemObject || '';
  });

  return (
    <>
      {poemObject.length ? (
          <div className='poemObject'>
            {Object.keys(poemObject).map((poemKey) => (
              <div className='poem' key={poemKey}>
              Prompt: {poemObject[poemKey].prompt}
              Poem:
              {poemObject[poemKey].poem}
              </div>
            ))}
          </div>
      ) : (
        <p>Generate your first poem!</p>
      )}
    </>
  );
};

export default PreviousPoems;
