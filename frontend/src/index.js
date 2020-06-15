import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: black;
  z-index: 999;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = ({}) => {
  return <LoadingWrapper>
    <h2>Loading...</h2>
  </LoadingWrapper>
}

const App = Loadable({
  loader: () => import('./App.js'),
  loading: Loading
});

ReactDOM.render(<App />, document.getElementById('root'));
