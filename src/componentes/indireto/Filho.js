import React from "react";
import { Button, Text } from "react-native";
import Estilo from "../Estilo";

export default props => {

    function gerarnumero(min,max){
        const fator = max -min + 1
        return parseInt(Math.random() * fator) + min
    }
    
    return(
        <>
        <Button
         title="executar!!!!!"
         onPress={function (){
            const n = gerarnumero(props.min, props.max)
            props.funcao(n)
         }}
         />
        </>
    )
}