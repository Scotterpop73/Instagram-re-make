import { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
const FooterComponent: FC = () => {
    return (
        <View style={styles.FooterContainer}>
            <Text style={{color: 'white'}}>Home</Text>
            <Text style={{color: 'white'}}>Search</Text>
            <Text style={{color: 'white'}}>Reels</Text>
            <Text style={{color: 'white'}}>Shop</Text>
            <Text style={{color: 'white'}}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FooterContainer: {
        backgroundColor: 'black',
        paddingBottom: 60, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
})

export default FooterComponent