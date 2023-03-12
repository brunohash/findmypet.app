import { NavigationContainer } from '@react-navigation/native';
import { AuthStackRoutes } from './auth.routes';

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <AuthStackRoutes />
        </NavigationContainer>
    );
}
