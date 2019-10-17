import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from './FileIcon';

const FileName = ({ file }) => {
  const { name } = file;
  return (
    <div><FileIcon file={file}/> {name}</div>
    )
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileName;