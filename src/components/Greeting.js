import { useState } from 'react';

import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleChangeText = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Learn React!</h1>
      <h2>Hello World</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
};

export default Greeting;
