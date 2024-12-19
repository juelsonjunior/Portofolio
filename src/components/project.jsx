import CardProject from './cardProject';
import { useEffect, useState } from 'react';
function Project() {
    const [projects, setProjects] = useState([]);

    const showProjects = () => {
        const projects = [
            {
                id: 1,
                img: '../../blog-pessoal.png',
                name: 'Blog Pessoal',
                description: "Desenvolvi um Blog pessoal usando recursos como jwt para autenticação Mongo db para banco de dados prima ORM para manipular o banco de dados e muitas outras ferramentas",
            },
            {
                id: 2,
                img: '../../gerador.png',
                name: 'Gerador de senhas',
                description: "Criei inicialmente um função simples para gerar um secret para o jwt mais achei qunado me dei conta esta fora do project que precisava usar o secret e estava fazendo esse gerador de senhas personalizadas",
            },
            {
                id: 3,
                img: '../../todo-list-react.png',
                name: 'Todo-list React',
                description: "Todo-list criado para treinar os conhecimento em React qunado estava começando",
            },
            {
                id: 4,
                img: '../../todo-list.png',
                name: 'Todo-list JS puro',
                description: "Todo-list do zero só usando javaScript sem nenhuma lib ",
            },
        ];

        setProjects(projects);
    };

    useEffect(() => {
        showProjects();
    }, []);
    return (
        <>
            <div className="">
                <h3 className="text-4xl uppercase text-center font-bold">
                    Projectos
                </h3>
                <p className="text-center my-5">
                    Alguns projectos que desenvolvi para treinar as tecnologios
                    que venho estudando ao longo dos mêses.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {projects &&
                    projects.map((project) => (
                        <div key={project.id}>
                            <CardProject nameProject={project.name} img={project.img} description={project.description}/>
                        </div>
                    ))}
            </div>
        </>
    );
}
export default Project;
