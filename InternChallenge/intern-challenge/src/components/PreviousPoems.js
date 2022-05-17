import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const PreviousPoems = () => {
  //const [previousPoems, setPreviousPoems] = useState(''); //I think useSelector will trigger a rerender if it changes too so I might not even need local state

  const poems = useSelector((state) => {
    return state.poems || '';
  });

  //setPreviousPoems(poems);
  return (
    <>
      {poems.length ? (
          <div className='poems'>
            {poems.map((poem) => (
              <div className='poem' key={poem.id}>
              {poem}
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
