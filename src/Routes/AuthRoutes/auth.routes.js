// contexto de rotas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { SignIn } from '../../Screens/Auth/SignIn';
import { SignUp } from '../../Screens/Auth/SignUp';

export function AuthStackRoutes() 
{
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