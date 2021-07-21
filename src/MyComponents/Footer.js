import React from 'react'


export const Footer = () => { 
    let myStyle = {
    height:"6vh",
    width: "absolute",
    left: "0px",
    bottom: "0px",
    }
    return (
        <footer className="bg-dark text-light py-3" style={myStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
