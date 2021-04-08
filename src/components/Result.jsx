import React from 'react'
import PropTypes from 'prop-types'

//recibimos el conjunto de propiedades en la función a los que llamaremos como querramos, y esté contendra nuestras propiedades

//Object destructuring al recibir las propiedades
const Result = ({ value }) => (
    <div className="result">
        {/* <div className="result-number">{ ( value == '' ) ? 0 : value }</div> */}
        <div className="result-number">{ value }</div>
    </div>
)

//Usamos la paquetería de npm prop-types para validar los datos 
Result.propTypes = {
    value: PropTypes.string.isRequired
}
//Damos un valor por defecto si no se le pasa
Result.defaultProps = {
    value: "0"
}

//se exporta el componente
export default Result