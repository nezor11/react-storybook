import React from 'react';
import PropTypes from 'prop-types';
import './bodycopy.css';

export const BodyCopy = ({ tag = 'div', text = 'Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor', mods = '', styles = {}, ...props }) => {
    const Tag = tag;
  
    return (
      <Tag
        className={`text ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
    );
};
  
BodyCopy.propTypes = {
    tag: PropTypes.string,
    text: PropTypes.string,
    mods: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
};