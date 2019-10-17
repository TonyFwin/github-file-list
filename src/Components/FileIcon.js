import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ file }) => {
  const {type} = file;
  return <div>{type}</div>
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileIcon;