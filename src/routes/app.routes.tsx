import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { PizzaTranslation } from "@screens/PizzaTranslation";


const { Navigator, Screen } = createNativeStackNavigator();


export function AppRouter() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >

            <Screen
                name="pizza"
                component={PizzaTranslation}
            />
        </Navigator>
    )
}