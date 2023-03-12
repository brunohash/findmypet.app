// contexto de rotas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';

export function StackRoutes() 
{
    return (
        <Navigator>
            <Screen 
            name="ScreenA" 
            options={{
                title: 'Tela A',
                headerShown: false,
            }}
            component={ScreenA}
            />
            
            <Screen 
            name="ScreenB" 
            options={{
                title: 'Tela B',
                headerTitleAlign: 'center',
            }}
            component={ScreenB} />
        </Navigator>
    );
}