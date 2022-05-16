import React, { useState } from 'react';

//this is also where I want to make the api call when they hit submit

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //also make call to api here but write it as a separate func I think
  };

  const handleInputChange = (event) => {
    const poetryPrompt = event.target.value;
    setPoetryPrompt(poetryPrompt);
    console.log(poetryPrompt)
  };
  return (
    <>
    <form onSubmit={handleSubmit} id='poetry-prompt-container'>
      <input id='poetry-prompt'
        placeholder='Write a poem about...'
        value={poetryPrompt}
        onChange={handleInputChange}
      />
    </form>
    <button>
      Generate Poem
    </button>
    </>
  );
};

export default InputForm;
