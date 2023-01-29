import { useState } from 'react';
import { loginFields } from "../contexts/loginFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Logininput";
import logo from "../data/gestin_logo.png"

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <figure className="h-screen flex bg-secondblue">
            <div className='m-auto flex justify-center h-4/6 '>
             <div className="w-full max-w-md h-full m-auto h-90 bg-white rounded-l-lg border-r-1 border-myblue shadow-default py-10 px-10">
             <blockquote className="text-2xl font-medium ">
          <p className="text-lg font-bold">Connexion</p>
        </blockquote>
        
        <div className="text-primary my-6">
      
        <h1 className="text-xs font-medium text-gray-400 mt-4 mb-2">
        entrer vos identifiants pour accéder à votre compte
        </h1>
      </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className=" items-center -space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="connexion"/>

      </form>
      </div>
      <div className="w-full max-w-md h-full ml-0 my-auto bg-white flex  rounded-r-lg border border-primaryBorder shadow-default py-auto px-10">
           <div className='m-auto w-9/12'> <img className='' src={logo} alt="logo" /></div>
      </div></div>
      </figure>
    )
}