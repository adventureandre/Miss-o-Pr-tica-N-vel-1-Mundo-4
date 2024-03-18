import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { Cadastro } from "@screens/Cadastro";
import { Perfil } from "@screens/Perfil";
import { Suppliers } from "@screens/Suppliers";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRouter(){
    return(
        <Navigator screenOptions={{ headerShown:false}}>

             <Screen
            name="suppliers"
            component={Suppliers}
            />

            <Screen
            name="cadastro"
            component={Cadastro}
            />
            
             <Screen
            name="perfil"
            component={Perfil}
            />
            
        </Navigator>
    )
}