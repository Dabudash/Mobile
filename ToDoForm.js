import React from "react";
import { StyleSheet,  View, TextInput,  StatusBar, Button } from "react-native";

export default function ToDoForm({addTask}){
    const [taskText, setTaskText] = useState('')
    const handleAdd = () => {
        e.preventDefault();
        addTask(TaskText);
        setTaskText('');
    };
    
    return (
        <View style={StyleSheet.form}>
            <TextInput style= {StyleSheet.input} placeholder="ADD NEW TASK"  onChangeText={(text)=> setTaskText(text)} value={taskText}/>
            <Button title="ADD" onPress={() => addTask(taskText)}/>
            <StatusBar/>
        </View>

    );
}


    

});
