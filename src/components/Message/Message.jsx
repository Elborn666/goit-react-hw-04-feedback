import React from 'react';
import PropTypes from 'prop-types';
import css from '../Message/Message.module.css'

const Message = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,  
};

export default Message