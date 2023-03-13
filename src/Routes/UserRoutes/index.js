import { NavigationContainer} from '@react-navigation/native';

import { StackRoutes } from './user.routes';
import { TabRoutes } from './tab.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
}
