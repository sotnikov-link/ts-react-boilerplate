import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootComponent from './RootComponent';


const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <RootComponent />
  </AppContainer>,
  rootEl
);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./RootComponent', () => {
    const NextRootComponent = require<IRequireImport>(
      './RootComponent'
    ).default;
    ReactDOM.render(
      <AppContainer>
        <NextRootComponent />
      </AppContainer>
      ,
      rootEl
    );
  });
}
