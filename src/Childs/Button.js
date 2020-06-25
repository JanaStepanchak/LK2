import React  from 'react'

    const Button = ({children}) => {

      //  console.log("Button", children);

    return(
            <button onClick={children}>
                Interviewed
            </button>
    )
}

export default Button;