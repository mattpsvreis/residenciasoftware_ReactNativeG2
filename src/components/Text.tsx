import React from "react";
import { Text } from "react-native-elements";

const DefaultText = (props: any) => {
    return(
        <Text style={[{fontFamily: 'Poppins'}, props.style]}>{props.children}</Text>
    )
};

export default DefaultText;