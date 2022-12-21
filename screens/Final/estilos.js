import styled from 'styled-components/native';
import { StyleSheet } from "react-native";


export const ConsultText = styled.Text`
    font-size: 20px;
    font-weight: bold; 
    color: #FFFFFF;
       
`;

export const Consult = styled.TouchableOpacity`
    padding: 10px 50px;
    padding-bottom:12px;   
    border:2px solid white; 
    margin:10px auto;  
    border-radius: 16px;  
}
`;

export const Text = styled.Text`
    
    color: #FFF; 
    text-align:center;
    font-weight:bold;
    font-size:20px;
    

`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#5257FF',
        color: "#000"
    },
    logo: {
        width: 150,
        height: 150
    },
    input: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "#353bf0",
        margin: 10,
        padding: 5,
        borderRadius: 20


    },
    box: {
        maxHeight: "50%",
        minWidth: "80%"
    }

});
