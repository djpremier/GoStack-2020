import React, { FC } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                Voltar
            </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/17091381?v=4" alt="Avatar" />
                    <div>
                        <strong>Djpremier/GoStack-2020</strong>
                        <p>Description</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link key="Djpremier/GoStack-2020" to="zsdas">
                    <div>
                        <strong>Djpremier/GoStack-2020</strong>
                        <p>Desc</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

export default Repository;