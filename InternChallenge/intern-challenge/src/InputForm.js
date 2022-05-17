import React, { useState, useEffect } from 'react';

//this is also where I want to make the api call when they hit submit

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');
  const [response, setResponse] = useState('');

  //const [poem, setPoem] = useState('');

  // useEffect(() => {
  //   if (response.length) {
  //     setPoem(response.choices[0].text)
  //     console.log(poem)
  //   }
  // }, [response, poem]);

  const prompt = {
    "prompt": `${poetryPrompt}`,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const writePoem = (data) => {
    console.log('clicked')
    fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
      });
    };

  console.log(response.choices[0].text);

  const handleInputChange = (event) => {
    const poetryPrompt = event.target.value;
    setPoetryPrompt(poetryPrompt);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='poetry-prompt-container'>
        <input
          id='poetry-prompt'
          placeholder='Write a poem about...'
          value={poetryPrompt}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={() => writePoem(prompt)}>Generate Poem</button>
    </>
  );
};

export default InputForm;
