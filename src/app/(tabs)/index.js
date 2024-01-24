import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Link, router } from 'expo-router'

export default function Page() {

  const onClick = () => {
    router.push({
      pathname: 'users/[id]',
      params: {
        id: 2
      }
    })
  }

  return (
    <View>
      <Text> Home page</Text>
      <Link href={'/users/1'}>Button</Link>
      <Pressable onPress={onClick}>
        <Text>
          Go to user 2
        </Text>
      </Pressable>
    </View>
  )


}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})
