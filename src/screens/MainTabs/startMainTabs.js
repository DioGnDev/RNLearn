import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

    Promise.all([
       Icon.getImageSource("ios-share", 30),
       Icon.getImageSource("md-map", 30),
       Icon.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    left: {
                        component: {
                            name: 'awesome-places.SideDrawerScreen',  
                        }
                    },
                    center: {
                        bottomTabs: {
                            options: {
                                topBar:{
                                    visible: true,
                                }
                            },
                            children: [{
                              stack: {
                                  children: [{
                                      component: {
                                          name: 'awesome-places.SharedPlaceScreen',
                                          options:{
                                              topBar:{
                                                leftButtons: [
                                                    {
                                                      id: 'sidemenu',
                                                      icon: sources[2]
                                                    }
                                                  ],
                                                visible: true,
                                                title: {
                                                    text: 'Share Place'
                                                }                                            
                                              },                                             
                                          }
                                      }
                                   }],
                                  options: {
                                      bottomTab: {
                                          text: 'SharedPlace',
                                          testID: 'FIRST_TAB_BAR_BUTTON',
                                          icon: sources[0]
                                      },
                                      topBar: {
                                          visible: true,
                                          title: {
                                              text: 'Share Place'
                                          },
                                          leftButtons: [
                                            {
                                              id: 'buttonOne',
                                              icon: sources[2]
                                            }
                                          ],
                                      }
                                }
                              }
                            },
                            {
                              stack: {
                                  children: [{
                                      component: {
                                          name: 'awesome-places.FindPlaceScreen', 
                                          options: {
                                              topBar: {
                                                  visible: true,
                                                  title: {
                                                      text: 'Find Place'
                                                  }
                                              }
                                          }
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
                      },
                    }
                }
            });  
        });
}

export default startTabs;
