import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';3
import { NavigationContainer } from '@react-navigation/native'; //para contener navegadores

import WelcomeScreen from '../screens/WelcomeScreen';
import RegistroScreen from '../screens/RegistroScreen';
import GaleriaScreens from '../screens/GaleriaScreens';
import CalculoScreen from '../screens/CalculoScreen';
import BoletosScreen from '../screens/BoletosScreen';
import ListaLocalScreen from '../screens/ListaLocalScreen';
import ListaExternaScreen from '../screens/ListaExternaScreen';
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName='Boleto'>
            <Tab.Screen name="Welcome"component={WelcomeScreen}/>
            <Tab.Screen name="Registro" component={RegistroScreen}/>
            <Tab.Screen name="Galeria" component={GaleriaScreens}/>
            <Tab.Screen name ="Calculo" component={CalculoScreen}/>
            <Tab.Screen name="Boleto" component={BoletosScreen}/>
            <Tab.Screen name='Local'component={ListaLocalScreen}/>
            <Tab.Screen name='Externo'component={ListaExternaScreen}/>

        </Tab.Navigator>
    )
}

export default function Navegador(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}