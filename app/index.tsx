import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const App = () => {
  // return <Redirect href="/tabs" />
  // return <Redirect href="/drawer" />
  return <Redirect href="/home" />
  // return <Redirect href="/(stack)/home" />

  // return (
  //   <View className="mt-10">
  //     <Text className="text-3xl text-secondary-100 font-work-medium">Hola mundo</Text>

  //     <Link href="/products">Productos</Link>
  //   </View>
  // )
}

export default App