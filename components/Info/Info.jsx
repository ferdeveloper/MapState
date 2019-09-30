  
import React, { useState } from 'react';
import TextArea from '../commonComponents/TextArea/TextArea';
import Input from '../commonComponents/Input/Input';
import Button from '../commonComponents/Button/Button';
import infoStyle from './Info.sass';

const Info = (props) => {
  const { showInfo, isEditing } = props;

  function handleClick() {
    return null;
  }

  function getViewContent() {

  }

  function getEditableContent() {
    return (
      <form>
        <Input />
        <TextArea />
        <Button>
          Guardar
        </Button>
      </form>
      
    );
  }

  function getContent() {
    if (isEditing) {
      return getEditableContent();
    }

    return getViewContent();
  }

  if (showInfo) {
    return (
      <div className={infoStyle.info}>
        {getContent()}
      </div>
    );
  }

  return null;
};

Info.defaultProps = {
  isEditing: false,
  showInfo: false,
};

export default Info;