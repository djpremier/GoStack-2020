import './App.css'

import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import api from './services/api'

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data || []);
        });
    }, []);

    const handleAddProject = async () => {
        const response = await api.post('/projects', {
            title: `New project at ${Date.now()}`,
            owner: 'Djpremier',
        });
        
        const newProject = response.data;

        setProjects(projectsOld => [
            ...projectsOld,
            newProject,
        ]);
    };

    return (
        <>
            <Header title="Home" />

            <ul>
                {projects.map(({id, title, owner}) => (
                    <li key={id}>{title} {"|->"} {owner}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddProject}>Add project</button>
        </>
    )
};

export default App;