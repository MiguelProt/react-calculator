import React from 'react'
import Button from './Button'

import PropTypes from 'prop-types'

const renderButton = onClickNumber => {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    
    var arrayButtons = numbers.map( singleNumber => (
            //Al generar listas es necesario usar un identificador key para poder controlar los posibles cambios de la lista
            <Button 
                key={ singleNumber } 
                text={ singleNumber.toString() } 
                type="number" 
                clickHandler={ onClickNumber } 
            />
        )
    )

    return arrayButtons
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        { renderButton(onClickNumber) }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers