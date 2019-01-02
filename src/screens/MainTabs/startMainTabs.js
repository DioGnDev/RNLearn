import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

    Promise.all([
       Icon.getImageSource("ios-share", 30),
       Icon.getImageSource("md-map", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                  children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'awesome-places.SharedPlaceScreen',
                            }
                         }],
                        options: {
                            bottomTab: {
                                text: 'SharedPlace',
                                testID: 'FIRST_TAB_BAR_BUTTON',
                                icon: sources[0]
                            },
                            topBar: {
                                title: {
                                    text: 'Share Place'
                                }
                            }
                      }
                    }
                  },
                  {
                    stack: {
                        children: [{
                            component: {
                                name: 'awesome-places.FindPlaceScreen', 
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'FindPlace',
                                testID: 'SECOND_TAB_BAR_BUTTON',
                                icon: sources[1]
                            },
                            topBar: {
                                title: {
                                    text: 'Find Place'
                                }
                            }
                          }
                    }
                    
                  }]
                }
              }
        });  
    });

    
}

export default startTabs;
