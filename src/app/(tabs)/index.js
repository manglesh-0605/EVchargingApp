import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {


  return (
    <SafeAreaView>
      <Text> Home page</Text>
    </SafeAreaView>
  )


}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})
