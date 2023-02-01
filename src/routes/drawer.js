import { createDrawerNavigator } from '@react-navigation/drawer'

import Add from '../components/add'

const Drawer = createDrawerNavigator()

export function DrawerComponent(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
              name='Home'
              component={Add}
            />
        </Drawer.Navigator>
    )
}