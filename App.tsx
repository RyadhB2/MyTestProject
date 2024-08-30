import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from "./src/redux/store/store";
import MainScreen from './src/screens/MainScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Provider store={store}>
        <MainScreen />
      </Provider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
