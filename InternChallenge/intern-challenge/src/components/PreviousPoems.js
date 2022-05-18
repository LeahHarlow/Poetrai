import React from 'react';
import { useSelector } from 'react-redux';

const PreviousPoems = () => {
  //read from the redux store
  const promptAndPoem = useSelector((state) => {
    return state.promptAndPoem || '';
  });

  return (
    <>
      {promptAndPoem.length ? (
        <div id='response-containter'>
          {Object.keys(promptAndPoem).map((poemKey) => (
            <div className='promptAndPoem' key={poemKey}>
              <h3>Prompt:</h3>
              <div className='prompt'> {promptAndPoem[poemKey].prompt} </div>
                <h3>Poem:</h3>
              <div className='poem'>
                {promptAndPoem[poemKey].poem}
              </div>
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
