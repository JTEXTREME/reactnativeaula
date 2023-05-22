import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";


function gerarNumeroAleatorio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  var numeroAleatorio = gerarNumeroAleatorio(1, 10);
  console.log(numeroAleatorio);
  
export default ({route, navigation})  => {
    return(
        <Text style={Estilo.txtGrande}>{gerarNumeroAleatorio(route.params?.min,route.params?.max)}</Text>
    )
}
  