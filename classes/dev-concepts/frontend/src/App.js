import './App.css'

import React, { useState } from 'react';

import BackgroundImage from './assets/background.jpg'
import Header from './components/Header';

const App = () => {
    const [projects, setProjects] = useState([
        'Development of app',
        'Front-end web'
    ]);

    const handleAddProject = () => {
        setProjects(projectsOld => [
            ...projectsOld,
            `New project ${Date.now()}`
        ]);
    };

    return (
        <>
            <Header title="Home" />

            <img width={300} src={BackgroundImage} />

            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddProject}>Add project</button>
        </>
    )
};

export default App;