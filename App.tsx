/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'mobx-react';


import { createRootStore } from './src/store/RootStore';
import RootContainer from './src/RootContainer';

const App: React.FC = () => {
  const rootStore = createRootStore();

  return (
    <Provider {...rootStore}>
      <RootContainer />
    </Provider>
  );
};

export default App;