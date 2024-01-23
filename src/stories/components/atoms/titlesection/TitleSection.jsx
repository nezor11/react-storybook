import React from 'react';
import PropTypes from 'prop-types';
import './titlesection.css';

export const TitleSection = ({ header = 'h3', text = 'Me cago en tus muelas', mods = 'text-3xl', styles = {}, ...props }) => {
    const Header = header;
  
    return (
      <Header
        className={`text section ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
    );
};

TitleSection.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    mods: PropTypes.string,
    styles: PropTypes.objectOf(PropTypes.string),
};