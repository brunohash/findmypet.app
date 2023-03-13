import { NavigationContainer } from '@react-navigation/native';

// Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator } = createNativeStackNavigator();

// Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
const { Screen: ScreenTab, Navigator: NavigatorTab } = createBottomTabNavigator();

// Pages
import { SignIn } from '../Screens/Auth/SignIn';
import { SignUp } from '../Screens/Auth/SignUp';
import { ScreenA } from '../Screens/User/ScreenA';
import { ScreenB } from '../Screens/User/ScreenB';

function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="SignIn"
                options={{
                    title: 'Entrar',
                    headerShown: false,
                }}
                component={SignIn}
            />

            <Screen
                name="SignUp"
                options={{
                    title: 'Cadastrar-se',
                    headerTitleAlign: 'center',
                }}
                component={SignUp} />
        </Navigator>
    );
}

function TabRoutes() {
    return (
        <NavigatorTab
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
            <ScreenTab
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

            <ScreenTab
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
        </NavigatorTab>
    );
}

function MainNavigator() {
    return (
      <Navigator>
        <Screen name="Stack" component={StackRoutes} />
        <Screen name="Tabs" 
        options={{
            headerShown: false,
        }}
        component={TabRoutes} />
      </Navigator>
    );
  }
  
  export function Routes() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
