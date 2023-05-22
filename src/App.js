import React from "react"
import{Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Botao from "./componentes/Botao"
// import Primeiro from "./componentes/Primeiro"
// import Of,{Comp1,Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
import Aleatorio from "./componentes/Aleatorio"
// import Titulo from "./componentes/Titulo"
// import Contador from "./componentes/Contador"
// import Exercicio1 from "./componentes/Exercicio1"
// import Pai from "./componentes/direta/Pai"
// import Pai from "./componentes/indireto/Pai"
import ContadorV2 from "./componentes/contador/ContadorV2"
import HomeScreen from "./componentes/HomeScreen"
import DetailsScreen from "./componentes/DetailsScreen"
import ContadorScreen from "./componentes/ContadorScreen"
import MenuScreen from "./componentes/MenuScreen"
import AleatorioScreen from "./componentes/NumeroAleatorioScreen"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"




const Stack = createNativeStackNavigator()

    export default () => (

        <SafeAreaView style={styles.TelaIniciante}>

        <Familia>
            <Membro nome="Jorge" sobrenome="Pereira"/>
            <Membro nome="Edinaldo" sobrenome="Pereira"/>
            <Membro nome="Marcinho" sobrenome="Pereira"/>
            <Membro nome="Roberta" sobrenome="Pereira"/>
        </Familia>

        <Familia>
            <Membro nome="Lucas" sobrenome="Da Silva"/>
            <Membro nome="Fernando" sobrenome="Da Silva"/>
            <Membro nome="Jorge" sobrenome="Da Silva"/>
            <Membro nome="Marcia" sobrenome="Da Silva"/>
        </Familia>


        </SafeAreaView>

        
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Menu" component={MenuScreen}/>
        //         <Stack.Screen name="Contador" component={ContadorScreen}/>
        //         <Stack.Screen name="ContadorV2" component={ContadorV2}/>
        //         <Stack.Screen name="menuAleatorio" component={AleatorioScreen}/>
        //         <Stack.Screen name="Aleatorio" component={Aleatorio}/>
        //     </Stack.Navigator>
        // </NavigationContainer>  


        // <View style={styles.TelaIniciante}>
        //     <ContadorV2/>
        //     <Pai/>

        //     <Exercicio1/>
        //     <Contador inicial={100}/>
        //     <Botao/>
        //     <Titulo principal="Cadastro Produto"
        //             secundario="Tela de Cadrasto"/>

        //     <Primeiro />
        //     <Text>1 + 2</Text>
        //     <Text>O valor da soma de 1 + 2 = {1 + 2}</Text>
        //     <Comp1 />
        //     <Comp2 />
        //     <Of/>
        //     <MinMax min="3" max="20"/>
        //     <MinMax min="5" max="40"/>
        //     <MinMax min="7" max="55"/>
        //    <Aleatorio mino="2" maxo="10"/>
        //     <Aleatorio mino="5" maxo="40"/>
        //     <Aleatorio mino="7" maxo="55"/>
        // </View>
    )
    

    // export default App
 
    const styles = StyleSheet.create({
        TelaIniciante: {
           flexGrow: 1 ,
           justifyContent: "center",
           alignItems: "center",
           padding: 20
        }
    })

    //Lista de comentarios

        // function App(){
    //    const jsx = <Text>Jailton Silva dos Anjos Junior</Text>
    //    return jsx
    // }

    // const App = function () {
    //     return <Text>Component 2</Text>
    // }

    // export default function() {
    //     return <Text>Component 3</Text>
    // }

    // export default () => {
    //     return <Text>Component 4</Text>
    // }
