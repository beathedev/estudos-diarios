/* Exemplo de utilização do useState */
import React, {useState} from 'react'

export default function App() {
        const [repositories, setRepositories] = useState([
            {id: 1, name: "repo-1"},
            {id: 2, name: "repo-2"},
            {id: 3, name: "repo-3"},
            {id: 4, name: "repo-4"}
        ]);

        const [bananas, setBananas] = useState([
            {id: 1, name: "banana-1"},
            {id: 2, name: "banana-2"},
           
        ]);


        function addRepository() {
            setRepositories([
                ...repositories,
                {id: Math.random(), name:"Novo Repo"}
            ]);
        }

        function addBanana() {
            setBananas([
                ...bananas,
                {id: Math.random(), name: "Nova Banana"}
            ])
        }

        return (
              <div>
                  <h1>Olá mundo!</h1>
                  {repositories.map(repo => (
                      <li key={repo.id}>{repo.name}</li>
                  ))}
                  {bananas.map(banana => (
                      <li key={banana.id}>{banana.name}</li>
                  ))}
                  <button onClick={addRepository}>Adicionar Novo Repo</button>
                  <button onClick={addBanana}>Adicionar Banana</button>

              </div>
        );
    
    
};

