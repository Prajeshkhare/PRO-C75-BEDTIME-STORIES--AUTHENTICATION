import *as React from 'react'
import {Image}from 'react-native'
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import {createBottomTabNavigator}from 'react-navigation-tabs'
import ReadStoryScreen from './screen/ReadStoryScreen'
import WriteStoryScreen from './screen/WriteStoryScreen'
import LoginScreen from './screen/LoginScreen'
export default class App extends React.Component {
  render(){
      return(
        <AppContainer/>
      )
  }
}

const TabNavigator = createBottomTabNavigator({
  
  WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen},
},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName;
      if(routeName==="ReadStory"){
          return(
            <Image
            style={{width:40,height:40}}
            source={require('./read.png')}/>
        
         )   
      }

      else if(routeName==="WriteStory"){
        return(
            <Image
              style={{width:40,height:40}}
              source={require('./write.png')}/>
        )
      }
  }

})
})
const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  TabNavigator:{screen: TabNavigator}
  })
const AppContainer = createAppContainer(switchNavigator)