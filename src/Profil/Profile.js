import React from 'react'
import PropTypes from "prop-types"


const Profil = (props) => {
    const styles ={Border:"solid 1px grey",textAlign :"center"}
  return (
    <div styles ={styles}>
     <h1> {props.FullName}</h1>
     <h1>{props.Bio}</h1>
     <h1> { props.Profession}</h1>
     {props.children}
     <button onClick={() => props.handleName(props.FullName) }>
        click !!
    </button>
    </div>
         )
}

Profil.PropTypes = {
    FullName : PropTypes.string,
    handleName : PropTypes.func,
};

export default Profil