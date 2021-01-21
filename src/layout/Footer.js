import React from "react"
import {Container} from "reactstrap"


const Footer = () => {

    var style = {
        // backgroundColor: "#F8F8F8",
        // borderTop: "1px solid #E7E7E7",
        // textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "55px",
        width: "100%",
    };

    return(
        <Container fluid tag="footer" className=" text-center bg-info text-white text-uppercase fixed-buttom p-3" style={style}>
            Tech Temple Github Profile search App with Firebase
        </Container>
    )
}

export default Footer;