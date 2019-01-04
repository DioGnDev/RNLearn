import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput';
import { addPlace } from '../../store/actions/index';

import { Navigation } from 'react-native-navigation';

class SharedPlaceScreen extends Component {

    constructor(){
        super();
        global.sideMenuVisible = false
    }

    componentDidMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }
    
    componentWillUnmount() {
       // Not mandatory
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }

    navigationButtonPressed({buttonId}) {

        switch(buttonId){
            case 'sidemenu':
                sideMenuVisible = !sideMenuVisible
                Navigation.mergeOptions(this.props.componentId, {
                    sideMenu: {
                        left: {
                            visible: sideMenuVisible
                        }
                    }
                });
                break
            default:
                break
        }
    }

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace (placeName);
    }

    render(){
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharedPlaceScreen);