import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { DotMenu } from './DotMenu';


const TrackList = () => {
    state = {trackData: [{trackInfo: 'Track 1'}, 
    {trackInfo: 'Track 2'}, 
    {trackInfo: 'Track 3'}, 
    {trackInfo: 'Track 4'}, 
    {trackInfo: 'Track 5'}, 
    {trackInfo: 'Track 6'}]};

    return (
<FlatList
          data={this.state.trackData}
          renderItem={({item}) => 
            <Text style={styles.trackItem}>{item.trackInfo}</Text>
        }
        />
    );
  };
  
  const styles = StyleSheet.create({
      trackItem: {
          'fontFamily':'Avenir',
          'color':'white',
          'fontSize': 17,
          'paddingBottom': 30,
      }
  });
  
  export { TrackList };
