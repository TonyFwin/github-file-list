import React from 'react';
import PropTypes from 'prop-types';

import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
    <td className="file-name-wrapper">
      <FileName file={file} />
      <CommitMessage commit={file.latestCommit} />
      <div className="age">
        <Time time={file.updated_at}/>
      </div>
    </td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

export default FileListItem;