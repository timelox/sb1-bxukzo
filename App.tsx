import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import InboxComponent from './InboxComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InboxComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;