import React,{useEffect,useState,useRef} from "react";
import Repository from './components/repository'
import "./styles.css";
import api from './services/api';
function App() {
  var i = useRef('0');
  const [repositories,setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then((response)=>{
      setRepositories(response.data);
    });
    
    
  },[]);
  async function handleAddRepository() {
    i.current= +i.current+1;
    const response = await api.post('repositories',{
        title:`teste ${Date.now()}`,
        url:'Desafio ReactJS',
        techs:["node","reactjs"],
        likes:0
    });
    
    setRepositories([...repositories,response.data]);
  }

  

  return (
 
      <div>
      <ul data-testid="repository-list">
        {
        repositories.map((repository,index)=>
          <li key={repository.id}  >
            <Repository title={repository.title} id={repository.id} removeRepository={()=>{
              const AUXDELETE = [...repositories];
              AUXDELETE.splice(index,1);
              setRepositories([...AUXDELETE]);
            }}/>  
           </li>

        )
        
        }
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
