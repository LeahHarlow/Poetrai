import React, { useState, useEffect } from 'react';

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');
  const [response, setResponse] = useState({});
  const [poem, setPoem] = useState(''); 

  //ok two options here:
  //1: use redux to make a store that holds a universal state that poems can be read from
  //2: make a db that saves the poems to be pulled up again

  useEffect(() => {
    if (Object.keys(response).length) {
      setPoem(response.choices[0].text);
      console.log(poem)
    }
  }, [response, poem]);

  const prompt = {
    prompt: `${poetryPrompt}`,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const writePoem = (data) => {
    console.log('clicked');
    fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
        console.log('JSON', json);
      });
  };

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
