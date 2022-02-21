import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("./assets/movie-img/white-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.movieBloc}>
            <View>
              <Text style={styles.title}>Interstellar</Text>
              <Text style={styles.keyinfos}>
                2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
              </Text>
            </View>
            <View style={styles.afficheAndDescriptionContainer}>
              <View style={styles.afficheContainer}>
                <Image
                  source={require("./assets/movie-img/film.jpg")}
                  style={styles.affiche}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableHighlight
                  style={styles.btn}
                  underlayColor="yellow"
                  onPress={() => {
                    console.log("pressed !");
                  }}
                >
                  <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={{ height: 400, backgroundColor: "salmon" }}></View>
          <View style={{ height: 400, backgroundColor: "white" }}></View>
          <View style={{ height: 400, backgroundColor: "deeppink" }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  header: {
    height: 50,
    backgroundColor: "grey",
    marginBottom: 5,
  },
  logo: { height: 40, width: 200, marginTop: 5, marginRight: 20 },
  movieBloc: {
    height: 400,
    backgroundColor: "dimgrey",
    marginBottom: 10,
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: { fontSize: 40, color: "white", marginTop: 20, marginBottom: 10 },
  keyinfos: { fontSize: 12, color: "white" },
  afficheAndDescriptionContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  afficheContainer: { flex: 1 },
  affiche: { width: 150, height: 200 },
  descriptionContainer: { flex: 1 },
  description: { fontSize: 12, color: "white" },
  btn: {
    backgroundColor: "blue",
    marginTop: 120,
    width: "45%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    marginLeft: 160,
  },
  btnText: { color: "white", fontSize: 10 },
});
