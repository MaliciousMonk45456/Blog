import React,{useContext,useEffect} from "react";
import {View,Text,FlatList,StyleSheet,Button,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext"; 
import {Feather} from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost,getBlogPosts}=useContext(Context);

    useEffect(()=>{
        getBlogPosts();
        const listener=navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });

        return ()=>{
            listener.remove();
        }
    },[]);

    return (
        <View>
            <FlatList data={state}
            keyExtractor={(blogPost)=>blogPost.title}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}>
                <View style={styles.row}>
                <Text style={styles.title}>{item.title}-{item.id}</Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
            }}
             />
        </View>
    );
} 

IndexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <Feather style={styles.headerIcon} name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        borderTopWidth:1,
        paddingHorizontal:10,
        borderColor:"gray"
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    },
    headerIcon:{
        marginRight:10
    }
});

export default IndexScreen;
