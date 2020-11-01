import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloTypeScript(req: Request, res: Response) {
    const user = createUser({
        email: 'contact@djpremier.dev',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'ReactNative',
            {
                title: 'Python',
                experience: 100,
            }
        ]
    });

    return res.json({ message: 'Hello TypeScript'});
}