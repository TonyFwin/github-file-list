import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({ commit }) => {
  const {message} = commit;
  return (
    <div className="commit-message">{message}</div>
  )
}

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

export default CommitMessage;