import React, { useState, useEffect } from 'react';

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');
  const [response, setResponse] = useState({});

  const [poem, setPoem] = useState(''); //need to add poem to poems history array for PreviousPoems to use, make db?

  useEffect(() => {
    if (Object.keys(response).length) {
     setPoem(response.choices.text)
       console.log('poem', poem)
    }
  }, [response,poem]);

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
        authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
        console.log('JSON',json)
      });
      console.log('RESPONSE.CHOICES RIGHT HERE', response);
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
