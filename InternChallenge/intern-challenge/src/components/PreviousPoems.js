import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//pass poems in as props?
//map over returned object to fill out
const PreviousPoems = () => {
  const [poems, setPoems] = useState('');

  const poem = useSelector((state) => {
    return state.currentPoem || '';
  });


  return (
    <>

    </>
  );
};

export default PreviousPoems;
