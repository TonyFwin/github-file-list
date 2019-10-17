import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ file }) => {
  const { type } = file;
  let icon = 'fa-file-text-o';
  if (type === 'folder') icon = 'fa-folder';
  
  return (
    <div className='file-icon'>
      <i className={`fa ${icon}`} />
    </div>
  )
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileIcon;