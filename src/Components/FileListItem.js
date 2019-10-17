import React from 'react';
import PropTypes from 'prop-types';

import FileName from './FileName';

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
    <td className="file-name">
      <FileName file={file} />
    </td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileListItem;