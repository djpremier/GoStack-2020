const express = require('express');
const {v4: uuid, validate: isUuid} = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

const logRequests = (request, response, next) => {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.time(logLabel);

    next();

    console.timeEnd(logLabel);
}

const validateProjectId = (request, response, next) => {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({
            error: 'Invalid Project ID'
        });
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
    const { title } = request.query;

    const results = title
        ? projects.filter(pro => pro.title.includes(title))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = {
        id: uuid(),
        title,
        owner,
    };

    projects.push(project);

    return response.json(project);
});

app.get('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (!projectIndex < 0) {
        return response.status(404).json({
            message: 'Project not found'
        });
    }

    return response.json(projects[projectIndex]);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (!projectIndex < 0) {
        return response.status(404).json({
            message: 'Project not found'
        });
    }

    const project = {
        ...projects[projectIndex],
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (!projectIndex < 0) {
        return response.status(404).json({
            message: 'Project not found'
        });
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Back-End started!')
});