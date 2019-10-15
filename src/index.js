import React from 'react';
import ReactDOM from 'react-dom';
import Filelist from './Components/FileList';

const App = () => {
  return (
    <FileList/>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))