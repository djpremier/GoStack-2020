import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom'

interface RepositoryParams {
    repository: string;
}

const Repository: FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return <h1>Repository: {params.repository}</h1>
}

export default Repository;