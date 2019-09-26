  
import React, { useState } from 'react';
import TextArea from '../commonComponents/TextArea/TextArea';
import infoStyle from './Info.sass';

const Info = (props) => {
  function handleClick() {
    return null;
  }

  if (props.showInfo) {
    return (
      <div className={infoStyle.info}>
        <p>Holi</p>
        <TextArea />
      </div>
    );
  }

  return null;
};

export default Info;