import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/paper-dashboard.min.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Eco from './routes'
class App extends  React.Component{
    render(){
        return(
            <>
            <Eco />
            </>
        )
    }
}
export default App