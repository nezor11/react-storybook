import React from 'react';
import PropTypes from 'prop-types';
import './jobdesc.css';

export const SubtitleCopy = ({ subtitle = 'h2', text = 'Papaar papaar', mods = '', styles = {}, ...props }) => {
    const Subtitle = subtitle;
  
    return (
      <Subtitle
        className={`text ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
    );
};
  
SubtitleCopy.propTypes = {
    subtitle: PropTypes.string,
    text: PropTypes.string,
    mods: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
};