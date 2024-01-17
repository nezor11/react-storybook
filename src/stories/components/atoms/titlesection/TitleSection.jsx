import React from 'react';
import PropTypes from 'prop-types';
import './titlesection.css';

export const TitleSection = ({ tag = 'h2', text = '', mods = '', styles = {}, ...props }) => {
    const Tag = tag;
  
    return (
      <Tag
        className={`text section ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
    );
};

TitleSection.propTypes = {
    tag: PropTypes.string,
    text: PropTypes.string,
    mods: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
};