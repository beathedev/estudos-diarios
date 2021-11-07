/* Exemplo de utilização do useEffect, consumindo a API do github */
import React, { useEffect, useState } from "react";

export default function App() {

    const [repositories, setRepositories] = useState([]);

    useEffect( async () => {
        const response = await fetch("https://api.github.com/users/beathedev/repos");
        const data = await response.json();
        console.log(data)

        setRepositories(data);
    }, [repositories]);

    return (
        <>
        <h1>Olá mundo</h1>
        {repositories.map( repo => (
        <li key={repo.id}>{repo.name}</li>
        ))}
        </>
    )
}