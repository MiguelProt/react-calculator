//Importación
import React, { useState } from 'react'

import words from 'lodash.words'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'

import './App.css'

//Arrow function
const App = () => {
    //La manera sin importarlo
    //const useState = React.useState

    //importando la función ya importada del paquete de React
    //const arrayTextAndFunctionToModifyText = useState("") 
    //array Desctructuring
    const [ stack, setStack ] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    const current_value = items.length > 0 ? items[items.length -1] : "0"
    console.log('Renderización de la App', current_value)
    //Codigo de la función a ejecutar
    return (
        <main className="react-calculator">
            
            <Result value={ current_value }/>

            <Numbers onClickNumber={ number => { 
                console.log('Button clicked', number)
                if( number == 0 && stack == '')
                    number = ''
                setStack(`${stack}${number}`)
            } } />
            
            <MathOperations 
                onClickEqual={ ()=>{} } 
                onClickOperation={ operation => {
                    console.log('Operation: ', operation)
                    // ` Esta comilla sirve para concatenar variables y cadenas de texto
                    setStack(`${stack}${operation}`)
                } } 
                onClickEqual={ equal => {
                    console.log('Equal: ', equal)
                    setStack(eval(stack).toString())
                } } 
            />

            <Functions 
                onContentClear={ () => { 
                    console.log('se borra todo')
                    setStack( '' ) 
                } } 
                onDelete={ () => { 
                    if(stack.length > 0){
                        console.log('se borrará una letra') 
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                } } 
            />
            
        </main>
    );
};

//Exportación
export default App