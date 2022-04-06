import { FC, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import StoriesComponent from "./StoriesComponents";
import disney from "../assets/disney.jpg";
import scott from "../assets/scott.jpeg";

const PostComponent: FC = () => {
  const [posts, setPosts] = useState([
    {
      ProfilePicture: disney,
      Username: "Mr. Disney",
      Image: scott,
      NumOfLikes: "6,545",
      Description: "Man stuck in a pool",
      Comments: [
        {
          UserWhoCommented: "Scotterpop_11",
          UsersComment: "What a Barracho",
        },
      ],
    },
    {
        ProfilePicture: scott,
        Username: "Scotterpop_11",
        Image: disney,
        NumOfLikes: "6,545",
        Description: "He reminds me of Gavin Belson",
        Comments: [
          {
            UserWhoCommented: "Mr. Disney",
            UsersComment: "L O L",
          },
        ],
      },
  ]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <StoriesComponent />
      {posts.map((post, idx) => {
        return (
          <>
            <View style={styles.ProfileNav}>
              <View style={{ paddingTop: 10 }}>
                <Image source={post.ProfilePicture} style={styles.ImageStyle} />
              </View>
              <View style={styles.ProfileUsername}>
                <Text style={styles.UsernameText}>{post.Username}</Text>
              </View>
              <View style={styles.DotsView}>
                <Text style={styles.DotsText}>...</Text>
              </View>
            </View>
            <View>
              <Image source={post.Image} style={styles.ImagePost} />
            </View>
            <View style={styles.LikeView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Text style={styles.White}>Like</Text>
                <Text style={styles.White}>Comment</Text>
                <Text style={styles.White}>Share</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  paddingRight: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>Save</Text>
              </View>
            </View>
            {/* Caption starts here */}
            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingRight: 5,
                  paddingLeft: 14,
                  paddingTop: 5,
                }}
              >
                {post.Username}
              </Text>
              <Text style={{ color: "white", paddingTop: 5 }}>
                {post.Description}
              </Text>
            </View>
            {post.Comments.map((comment, idx) => {
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "black",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "gainsboro",
                      paddingLeft: 14,
                      paddingTop: 5,
                      fontWeight: 'bold',
                    }}
                  >
                    {comment.UserWhoCommented}
                  </Text>
                  <Text
                    style={{
                      color: "gainsboro",
                      paddingLeft: 5,
                      paddingTop: 5,
                    }}
                  >
                    {comment.UsersComment}
                  </Text>
                </View>
              );
            })}

            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                flexDirection: "row",
              }}
            >
              <Image
                source={post.Image}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 10,
                  marginLeft: 14,
                }}
              />
              <Text
                style={{
                  color: "gainsboro",
                  paddingLeft: 14,
                  paddingTop: 5,
                  alignSelf: "center",
                }}
              >
                Add a comment...
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "gainsboro",
                  paddingLeft: 14,
                  paddingTop: 8,
                  alignSelf: "center",
                }}
              >
                12 hours ago
              </Text>
            </View>
          </>
        );
      })}

      {/* Profile Nav */}

      {/* Photo starts here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  ProfileNav: {
    backgroundColor: "black",
    flexDirection: "row",
    paddingBottom: 10,
  },
  ProfileUsername: {
    paddingLeft: 20,
    justifyContent: "center",
    paddingTop: 10,
  },
  White: {
    color: "white",
  },
  UsernameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  DotsView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
  DotsText: {
    color: "white",
    fontSize: 30,
  },
  ImagePost: {
    height: 400,
    width: "100%",
  },
  LikeView: {
    flexDirection: "row",
    backgroundColor: "black",
  },
});
export default PostComponent;
