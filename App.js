import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TrackList } from "./components/TrackList";

export default class App extends React.Component {
  state = {
    genData: [
      {
        title: "Playlist Title",
        user: "@User",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        albumImg:
          "https://images-na.ssl-images-amazon.com/images/I/A1QsthUoerL._SY355_.jpg",
        tag: ["Tag1", "Tag2", "Tag3"],
        location: "Location",
        mood: "Mood"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.genData.map((item, index) => (
          <View
            /* key = {item.id} */
            /* onPress = {() => this.alertItemName(item)} */
          >
            <Text style = {[styles.playlistItem,styles.playlistTitle]}>{item.title}</Text>
            <Text style = {[styles.playlistItem,styles.playlistLocation]}>{item.location}</Text>
            <Text style = {[styles.playlistItem,styles.playlistTag]}>{item.tag}</Text>
            <Text style = {[styles.playlistItem,styles.playlistDesc]}>{item.description}</Text>
            <Text style = {[styles.playlistItem,styles.playlistUser]}>{item.user}</Text>
            {/* <Text style = {[styles.playlistItem,styles.playlistAlbum]}>Album Image</Text>
            <Text style = {[styles.playlistItem,styles.playlistMood]}>{item.mood}</Text> */}
          </View>
        ))}

        <TrackList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc0066",
    alignItems: "flex-start",
    padding: 40,
    paddingTop: 80,
  },
  playlistItem: {
    fontFamily: "Avenir",
    color: 'white',
  },
  playlistTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  playlistLocation: {
    fontSize: 25,
    fontWeight: '100',
    
  },
  playlistTag: {
    marginTop: 20,
    marginBottom: 20,
  },
  playlistDesc: {
  },
  playlistUser: {
    fontWeight: '100',
    marginTop: 5,
    marginBottom: 50,
  }
});
