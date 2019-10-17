import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from './FileIcon';

const FileName = ({ file }) => {
  const { name } = file;
  return (
    <>
      <div className="file-row">
        <FileIcon file={file}/> 
        <div className="file-name">{name}</div>
      </div>
      
    </>
    )
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileName;