
import React from 'react'
import { useState } from 'react'

const CPdivers = () => {

    const [formFields, setFormFields] = useState([
        { etudiant: '', nom: '' },
      ])
    
      const handleFormChange = (event, index) => {
        let data = [formFields];
        data[index][event.target.etudiant] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
      }
    
      const addFields = () => {
        let object = {
          etudiant: '',
          nom: ''
        }
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
      const [isDisabled, setDisabled] = useState(false);
   
    return ( 

        <div className="-mt-3 md:m-10 h-8/9 mt-18  p-0 sm:pt-20 md:p-10 bg-white rounded ">
            <h3  className='text-l font-extrabold dark:text-white'>Proces verbal du Comité pédagogique</h3>
            <div className='my-10'>
            <span>
            <a href="/general" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">general</a>
            <a href="/enseignants" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">enseignants</a>
            <a href="/Infos" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">etudiants</a>
            <a href="/" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">observations</a>
            <a href="/divers" class="text-white bg-myred  font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">divers</a>

            </span>
            </div>
             <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='divers'
                placeholder='observation'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-8/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='divers'
                placeholder='ex:l"emploi du temps est charge'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)} class=" ml-10 focus:outline-none bg-opacity-70 text-red-400 bg-white hover:bg-red-800 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ">retirer</button>
            </div>
          )
        })}
      </form>
      <div className='mt-24 flex diplay-center'>
      <button onClick={addFields} class="ml-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ajouter</button>
      <button onClick={submit} class="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">enregistrer</button>
      <button onClick={submit} class="focus:outline-none text-white bg-myblue hover:bg-blue  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">cloturer</button>
      </div>
      </div>
     
      
     );
}
 
export default CPdivers;