
import React from 'react'
import { useState } from 'react'
import { Navbar, Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Infos = () => {

    const [formFields, setFormFields] = useState([
        { etudiant: '', nom: '' },
      ])
      const {  activeMenu } = useStateContext();

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
      <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
               <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg  bg-neutral-100 min-h-screen md:ml-72 w-full  '
                  : 'bg-neutral-100 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
        <div className="-mt-3 md:m-10 h-8/9 mt-18  p-0 sm:pt-20 md:p-10 bg-white rounded ">
            <h3  className='text-l font-extrabold dark:text-white'>Proces verbal du Comité pédagogique</h3>
            <div className='my-10'>
            <span>
            <a href="/general" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">general</a>
            <a href="/enseignants" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">enseignants</a>
            <a href="/Infos" class="text-white bg-myred  font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">etudiants</a>
            <a href="/" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">observations</a>
            <a href="/divers" class="text-black bg-white hover:bg-myblue hover:text-white font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 ">divers</a>

            </span>
            </div>
             <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input className='w-2/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='etudiant'
                placeholder='etudiant'
                disabled={true}
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input className='w-6/12 h-10 rounded-xs text-sm border p-4 text-myblue cursor outline-none	'
                name='nom'
                placeholder='nom d"etudiant'
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
      </div>
      </div>
      </div>
     
      
     );
}
 
export default Infos;