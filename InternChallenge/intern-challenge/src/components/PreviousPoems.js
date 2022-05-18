import React from 'react';
import { useSelector } from 'react-redux';

const PreviousPoems = () => {

  const promptAndPoem = useSelector((state) => {
    return state.promptAndPoem || '';
  });

  return (
    <>
      {promptAndPoem.length ? (
          <div className='promptAndPoem'>
            {Object.keys(promptAndPoem).map((poemKey) => (
              <div className='poem' key={poemKey}>
              Prompt: {promptAndPoem[poemKey].prompt}
              Poem:
              {promptAndPoem[poemKey].poem}
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
