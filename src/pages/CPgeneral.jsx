
import React from 'react'
import { useState } from 'react'

const CPgeneral = () => {

    const [formFields, setFormFields] = useState([
        { numero: '', num: '' }
        ,
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
            <a href="/general" class="text-white bg-myred  font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">general</a>
            <a href="/enseignants" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">enseignants</a>
            <a href="/Infos" class="text-black bg-white  hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">etudiants</a>
            <a href="/" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">observations</a>
            <a href="/divers" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">divers</a>

            </span>
            </div>
             <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='numero'
                placeholder='numero'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='num'
                placeholder='ex:001'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='annee'
                placeholder='annee'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='annee'
                placeholder='ex:2022/2023'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='semestre'
                placeholder='semestre'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='sem'
                placeholder='ex:2'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='president'
                placeholder='president'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nom'
                placeholder='nom'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='date'
                placeholder='date'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='date'
                placeholder='ex:23/1/2023'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='heuredeb'
                placeholder='heure de debut'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='heuredeb'
                placeholder='ex:11h00'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='heurefin'
                placeholder='heure de fin'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='heurefin'
                placeholder='ex:13h00'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nbrpres'
                placeholder='nombre de presences'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nbrpres'
                placeholder='ex:10'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
              <div>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nbrabs'
                placeholder='nombre d"abcence'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nbrabs'
                placeholder='ex:6'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              </div>
            </div>
            

          )
        })}
      </form>
      <div className='mt-8 flex diplay-center'>
      <button onClick={addFields} class="ml-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ajouter</button>
      <button onClick={submit} class="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">enregistrer</button>
      <button onClick={submit} class="focus:outline-none text-white bg-myblue hover:bg-blue  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">cloturer</button>
      </div>
      </div>
     
      
     );
}
 
export default CPgeneral;