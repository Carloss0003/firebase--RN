import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerComponent } from "./drawer";
import Login from "../components/login";
import Cadastrar from "../components/cadastrar";

const Stack = createNativeStackNavigator()

export function StackComponent(){
    return(
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen
               name="login"
               component={Login}
            />
            <Stack.Screen
               name="cadastro"
               component={Cadastrar}
            />
            <Stack.Screen
               name="home"
               component={DrawerComponent}
            />
        </Stack.Navigator>
    )
}