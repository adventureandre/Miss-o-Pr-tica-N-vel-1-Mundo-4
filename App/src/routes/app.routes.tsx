import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Suppliers } from "@screens/Suppliers";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRouter(){
    return(
        <Navigator screenOptions={{ headerShown:false}}>
            <Screen
            name="suppliers"
            component={Suppliers}
            />
        </Navigator>
    )
}