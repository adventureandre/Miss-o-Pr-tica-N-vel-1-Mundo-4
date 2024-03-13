import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DisplayAnImage from "@screens/DisplayAnImage";


import Home from "@screens/Home";
import { ListaDinamica } from "@screens/ListaDinamica";
import ListaSection from "@screens/ListaSection";
import ListaSimples from "@screens/ListaSimples";
import { PizzaTranslation } from "@screens/Pizza";


const { Navigator, Screen } = createNativeStackNavigator();


export function AppRouter() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="pizza"
                component={PizzaTranslation}
            />
            <Screen
                name="listaDinamica"
                component={ListaDinamica}
            />
             <Screen
                name="listaSimples"
                component={ListaSimples}
            />
            <Screen
            name="listaSection"
            component={ListaSection}
            />
            <Screen
            name="imageItem"
            component={DisplayAnImage}
            />
        </Navigator>
    )
}