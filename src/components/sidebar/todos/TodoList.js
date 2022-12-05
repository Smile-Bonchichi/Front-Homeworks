import React, { useEffect, useState } from 'react';
import axios from '../../../axios/index.js';
import Todo from './todo/Todo.js';

export default function TodoList(props) {
    const [todos, setTodos] = useState([]);
    const getTodos = () => {
        axios.get('/todos').then((res) => {
            setTodos(res);
        });
    };
    
    useEffect(() => {
        getTodos();
    }, []);
    
    return (
        <>
            {
                todos.map(t => {
                    return <Todo key={ t.id } todo={ t }/>;
                })
            }
        </>
    );
}
