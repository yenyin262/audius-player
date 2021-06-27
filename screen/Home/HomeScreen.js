import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

let colors = ["#B5179E", "#7209B7", "#7209B7"];

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View
//       style={{
//         marginTop: 100,
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           flexDirection: "row",
//           flex: 1,
//           flexWrap: "wrap",
//           alignItems: "flex-start",
//           // flexWrap: "wrap",
//           // flexWrap: "wrap",
//         }}
//       >
//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate("TracksListScreen")}
//         >
//           <Text
//             style={{
//               color: "green",
//               fontSize: 20,
//               fontWeight: "800",

//               textAlign: "center",
//             }}
//           >
//             New Music Everyday
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate("UserProfileScreen")}
//         >
//           <Text
//             style={{
//               color: "green",
//               fontSize: 20,
//               fontWeight: "800",
//             }}
//           >
//             My Profile
//           </Text>
//         </TouchableOpacity>
//         {/* <Text style={{ color: "black" }}> hello</Text> */}
//       </View>
//       <View style={{ flexDirection: "row" }}>
//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate("ForYouScreen")}
//         >
//           <Text
//             style={{
//               color: "green",
//               fontSize: 20,
//               fontWeight: "800",

//               textAlign: "center",
//             }}
//           >
//             Start Exploring
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.card}
//           onPress={() =>
//             navigation.navigate("ForYouScreen", {
//               name: "TrendingPlaylistScreen",
//             })
//           }
//         >
//           <Text
//             style={{
//               color: "green",
//               fontSize: 20,
//               fontWeight: "800",
//               textAlign: "center",
//             }}
//           >
//             Go to trending playlists Screen
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "pink",
//     margin: 10,
//     borderRadius: 10,
//     width: "50%",
//     height: 350,
//     justifyContent: "center",
//     // flex: 1,
//   },
// });
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ marginHorizontal: 30, width: 150, height: 40 }}
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TracksListScreen")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              New Music Everyday
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserProfileScreen")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              My Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExploreScreen")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Start Exploring
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ExploreScreen", {
                name: "TrendingPlaylistScreen",
              })
            }
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Start Exploring
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    marginTop: 25,
  },
  item: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#7209B7",
    height: 350,
    justifyContent: "center",
    flex: 1,
  },
});
