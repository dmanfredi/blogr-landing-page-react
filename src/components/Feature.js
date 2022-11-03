import React from 'react';
import './feature.css';

const Feature = ({ title, content, theme }) => {
  let color = theme === 'dark' ? 'content-dark' : 'content-light';

  return (
    <div className={'feature-container ' + color}>
      <h3 className={'feature-header ' + color}>{title}</h3>
      <div className={'feature-content ' + color}>{content}</div>
    </div>
  );
};

export default Feature;
