import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addPoem } from '../store/poems'

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');
  const [response, setResponse] = useState({});
  const [currentPoem, setCurrentPoem] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPoem.length) {
      dispatch(addPoem({prompt: poetryPrompt, poem: currentPoem}));
    }
  }, [dispatch, currentPoem, poetryPrompt]);

  useEffect(() => {
    if (Object.keys(response).length) {
      setCurrentPoem(response.choices[0].text);
    }
  }, [response, currentPoem, poetryPrompt]);

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
    console.log('writing Poem');
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
        console.log('JSON', json); // REMEMBER TO DELETE ME LATER PLEASE AND THANK YOU
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
