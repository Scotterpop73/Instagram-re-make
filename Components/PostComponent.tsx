import { FC } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import StoriesComponent from "./StoriesComponents"

const PostComponent: FC = () => {
    return (
        <ScrollView style={{flex: 1}}>
            <StoriesComponent />
            <Text>Post</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})
export default PostComponent