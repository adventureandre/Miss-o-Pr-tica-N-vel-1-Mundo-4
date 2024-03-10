import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRouter } from "./app.routes";

export function Routes(){
return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
        <NavigationContainer>
            <AppRouter/>
        </NavigationContainer>
    </View>
)
}