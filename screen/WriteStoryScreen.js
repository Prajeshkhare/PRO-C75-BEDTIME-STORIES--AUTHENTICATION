import *as React from 'react'
import {Image,View,StyleSheet,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,ToastAndroid,Alert}from 'react-native'
import AppHeader from './AppHeader'
import db from '../Config.js'
export default class WriteStoryScreen extends React.Component {
   constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            
      
        })
        alert ("book has been submitted ")
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
            <AppHeader/>
            <TextInput
                style={styles.inputBox}
                placeholder="Title of the Story"
                 onChangeText={(text)=>{
                this.setState({
                  title: text
                })
              }}
            />
            <TextInput
                style={styles.inputBox1}
                placeholder="Author Of The Story"
                 onChangeText={(text)=>{
                this.setState({
                  author: text
                })
              }}
            />
            <TextInput
                style={styles.inputBox2}
                placeholder="Write Story"
                 multiline={true}
                  onChangeText={(text)=>{
                this.setState({
                 storyText: text
                })
              }}
            />

            <TouchableOpacity  onPress = {this.submitStory}
                style={styles.goButton}>

                <Text 
                    style={{fontSize:25,textAlign:'center',}}> Submit
                </Text>
            </TouchableOpacity>

        </View>
       </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
      inputBox:{
        width:300,
        height:50,
        marginLeft:0,
        borderWidth:2,
        borderRightWidth:2,
        fontSize:20,
        marginTop:40,
        paddingLeft:20, 
        alignSelf:'center',
        backgroundColor:'pink',
        
      },

      inputBox1:{
        width:300,
        height:50,
        marginLeft:0,
        borderWidth:2,
        borderRightWidth:2,
        fontSize:20,
        paddingLeft:20, 
        marginTop:40,
        alignSelf:'center',
        backgroundColor:'pink'
       },

         inputBox2:{
        width:300,
        height:200,
        marginLeft:0,
        borderWidth:2,
        borderRightWidth:2,
        fontSize:20,
        paddingLeft:20, 
        marginTop:40,
        alignSelf:'center',
        backgroundColor:'pink'
       },
  
      goButton:{
        marginLeft:0,
        backgroundColor:'yellow',
        marginTop:20,
        width:190,
        height:40,
        marginLeft:80
      }
      
})