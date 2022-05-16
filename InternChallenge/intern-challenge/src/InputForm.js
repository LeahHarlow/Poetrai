import React, { useState } from 'react';

const InputForm = () => {
  const [projectTitle, setProjectTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleTitleChange = (event) => {
    const projectTitle = event.target.value;
    setProjectTitle(projectTitle);
  };
  return (
    <form onSubmit={handleSubmit} id='rotoflo-modal'>
      <input
        name='title'
        placeholder='TITLE'
        value={projectTitle}
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default InputForm;
