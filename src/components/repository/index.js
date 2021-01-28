import React from 'react';
import api from '../../services/api';

export default function Repository({title,id,removeRepository}){
    async function handleRemoveRepository() {
        api.delete(`repositories/${id}`);
        removeRepository();
      }
      
          return(
              <>
                {title}

                <button onClick={() => handleRemoveRepository()}>
                 Remover
                </button>
              </>
          )

}

