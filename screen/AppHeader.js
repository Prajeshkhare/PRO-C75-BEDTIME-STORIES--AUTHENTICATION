import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
    render(){
        return(
            <View style= {styles.textContainer}>
                <Text style={styles.text}>Story Hub 1 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange'
  },

  text:{
    
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default AppHeader;
