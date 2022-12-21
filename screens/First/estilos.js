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

export const Texto = styled.Text`
    
    color: #FFF; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:30px;
    width:85%;  

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
    }

});
