/**
 * My To Do List App
 *
 * 
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { func } from 'prop-types';

export default function App(){
    return (
        <SafeAreaView>
            <ToDoList/>
            <ToDoForm/>
            
        </SafeAreaView>

    );
};



