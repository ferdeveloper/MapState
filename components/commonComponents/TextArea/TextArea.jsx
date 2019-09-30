import React from 'react';
import style from './textArea.sass';

const NUMBER_OF_ROWS = 5;
const MAX_NUMBER_OF_CHARACTERS = 240;

const TextArea = (props) => {
  return (
    <React.Fragment>
      <p>Descripción</p>
      <textarea
        className={style.textArea}
        rows={NUMBER_OF_ROWS}
        maxlength={MAX_NUMBER_OF_CHARACTERS}
      />
    </React.Fragment>
  );
};

export default TextArea;