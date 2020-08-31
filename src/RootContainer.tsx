import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
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
    // height: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: '100%',
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
