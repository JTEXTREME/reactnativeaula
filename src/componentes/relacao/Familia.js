import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";
import Membro from "./Membro";

export default props => {
    return (
       <>
       <Text>[começo] membros familia: </Text>
          {props.children}
        <Text>---------------[Fim] Final da lista -------------</Text>
        <Text></Text>
        <Text></Text>
        </>
    )
}