import React from 'react';
import PropTypes from 'prop-types';
import './titlecopy.css';

export const TitleCopy = ({ title = 'h1', text = 'Rodrigor', mods = 'text-6xl', styles = {}, ...props }) => {
    const Title = title;
  
    return (
      <Title
        className={`text ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
    );
};
  
TitleCopy.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    mods: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
};