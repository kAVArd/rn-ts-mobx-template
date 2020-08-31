import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Stores } from './store/RootStore';
import { GlobalStore } from './store/Global';

interface Props {
  [Stores.globalStore]?: GlobalStore;
}

@inject(Stores.globalStore)
@observer
export default class RootContainer extends React.PureComponent<Props, {}> {
  render () {
      const store = this.props[Stores.globalStore];

      return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
            </View>
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Example'
              style={styles.input}
              value={store?.textInput}
              onChangeText={(text: string) => {
                store?.setTextInput(text);
              }}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    paddingLeft: 5,
  }
});
