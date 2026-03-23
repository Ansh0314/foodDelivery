import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css"
import { FlatList, Pressable, Text, View } from "react-native";
 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList 
      data={[]} 
      renderItem={({item, index}) => { 

        return (
          <View>
            <Pressable className="bg-amber-600">
                <Text>Hello</Text>
            </Pressable>
          </View>
        )
      }}/>
    </SafeAreaView>
  );
}