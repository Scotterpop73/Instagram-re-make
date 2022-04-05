import { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

const NavBarComponent: FC = () =>{
    return (
        <View style={styles.HeaderContainer}>
            <View style={{paddingRight: 100}}>
                <Text style={[styles.WhiteText, styles.HeaderText]}>Instagram</Text>
            </View>
            <View style={[{paddingRight: 15}, styles.CenterMain]}>
                <Text style={[styles.WhiteText, styles.HeaderText2]}>Notifications</Text>
                
            </View>
            <View style={styles.CenterMain}>
                <Text style={[styles.WhiteText, styles.HeaderText2]}>Profile</Text>
            </View>
        </View>
    ) 
}
const styles = StyleSheet.create({
    HeaderContainer: {
      marginTop: 50,
      backgroundColor: 'black',
      flexDirection: 'row',
    },
    WhiteText: {
        color: 'white',
    },
    HeaderText: {
        fontSize: 30,
    },
    HeaderText2:{
        fontSize: 20,
    },
    CenterMain: {
        justifyContent: 'center',
    }
});

export default NavBarComponent;