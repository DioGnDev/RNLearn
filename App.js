// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, View} from 'react-native';
// import PlaceInput from './src/components/PlaceInput';
// import PlaceList from './src/components/PlaceList';
// import placeImage from './src/assets/forest.jpg';
// import PlaceDetail from './src/components/PlaceDetail';
// import {connect} from 'react-redux';
// import {addPlace, deletePlace, selectPlace, deselectPlace} from "./src/store/actions/index";

// class App extends Component {

//   placeAddedHandler = (placeName) => {
//       this.props.onAddPlace(placeName)
//   };

//   modalCloseHandler = () => {
//       this.props.onDeselectPlace()
//   }

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace
//   }
  
//   placeSelectedHandler = (key) => {
//     this.props.onSelectPlace(key)
//   };

//   render(){
//     return (
//       <View style={styles.container}>
//         <PlaceDetail selectedPlace={this.props.selectedPlace}
//                      onItemDeleted={this.placeDeletedHandler}
//                      onModalClosed={this.modalCloseHandler}/>
//         <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
//         <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
//       </View>
//     )
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   }
// })

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharedPlaceScreen from './src/screens/SharedPlace/SharedPlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';


const store = configureStore();

Navigation.registerComponentWithRedux("awesome-places.AuthScreen", () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux("awesome-places.SharedPlaceScreen", () => SharedPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux("awesome-places.FindPlaceScreen", () => FindPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, Provider, store);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawerScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'awesome-places.AuthScreen'
          }
        }]
      }
    }
  });
});