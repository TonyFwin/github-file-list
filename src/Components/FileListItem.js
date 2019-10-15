import React from 'react';
import PropTypes from 'prop-types';

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
    <td className="file-name">{file.name}</td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileListItem;