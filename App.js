/**
 * My To-Do List App
 *
 * 
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


export default function App(){
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks}/>
            <ToDoForm addTask={addTask}/>
            
        </SafeAreaView>

    );
};



