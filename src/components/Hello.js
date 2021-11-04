
import { useState } from 'react';
import MyCard from './MyCard';

const Hello=(props)=>{
    let[buttonVariant, setButtonVariant] = useState("outlined")

    function MyClick(){
        if(buttonVariant === "contained"){
            setButtonVariant("outlined")   
        }
        else{setButtonVariant("contained")}
        
    }
    function MyAction(){
        alert("kainakin")
    }

    return <div>
        
        <MyCard heading="My beautiful card"/>
    </div>
}
export default Hello;