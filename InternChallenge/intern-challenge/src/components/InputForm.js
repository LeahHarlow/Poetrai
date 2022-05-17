import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addPoem } from '../store/poems'

const InputForm = () => {
  const [poetryPrompt, setPoetryPrompt] = useState('');
  const [response, setResponse] = useState({});
  const [currentPoem, setCurrentPoem] = useState('');

  const dispatch = useDispatch();

  console.log('CURRENT POEM', currentPoem)

  useEffect(() => {
    if (currentPoem) {
      dispatch(addPoem(currentPoem));
    }
  }, [dispatch, currentPoem]);

  useEffect(() => {
    if (Object.keys(response).length) {
      setCurrentPoem(response.choices[0].text);
      console.log(currentPoem); // REMEMBER TO DELETE ME LATER PLEASE AND THANK YOU
    }
  }, [response, currentPoem]);

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
