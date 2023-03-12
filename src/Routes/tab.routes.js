// contexto de rotas
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';

export function TabRoutes() 
{
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                paddingVertical: 20,
                height: 70,
            }
        }}>
            <Screen 
            name="ScreenA"
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                    name="home"
                    size={size}
                    color={color}
                    />
                )
            }}
            component={ScreenA}
            />
            
            <Screen 
            name="ScreenB" 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                    name="add"
                    size={size}
                    color={color}
                    />
                )  
            }}
            component={ScreenB} />
        </Navigator>
    );
}