// contexto de rotas
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';

export function DrawerRoutes() 
{
    return (
        <Navigator>
            <Screen 
            name="ScreenA" 
            component={ScreenA}
            />
            
            <Screen 
            name="ScreenB" 
            component={ScreenB} />
        </Navigator>
    );
}