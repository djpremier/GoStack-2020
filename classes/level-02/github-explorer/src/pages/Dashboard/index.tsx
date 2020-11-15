import React, { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles'

const Dashboard: FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório" />

                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="https://github.com/djpremier/GoStack-2020">
                    <img src="https://avatars2.githubusercontent.com/u/17091381?s=460&u=71171e4476b77ceaf1be9b732a0b9b8d82760a7d&v=4" alt="Djpremier" />
                    <div>
                        <strong>Djpremier/GoStack-2020</strong>
                        <p>All projects and files built during the Bootcamp GoStack 2020</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="https://github.com/djpremier/GoStack-2020">
                    <img src="https://avatars2.githubusercontent.com/u/17091381?s=460&u=71171e4476b77ceaf1be9b732a0b9b8d82760a7d&v=4" alt="Djpremier" />
                    <div>
                        <strong>Djpremier/GoStack-2020</strong>
                        <p>All projects and files built during the Bootcamp GoStack 2020</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="https://github.com/djpremier/GoStack-2020">
                    <img src="https://avatars2.githubusercontent.com/u/17091381?s=460&u=71171e4476b77ceaf1be9b732a0b9b8d82760a7d&v=4" alt="Djpremier" />
                    <div>
                        <strong>Djpremier/GoStack-2020</strong>
                        <p>All projects and files built during the Bootcamp GoStack 2020</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;