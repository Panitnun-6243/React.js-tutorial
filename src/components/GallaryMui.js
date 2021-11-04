import { Box } from "@mui/system"
import '../style/Gallery.css';
import { useState } from "react";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import * as Gi from "react-icons/gi";
import CloseIcon from '@mui/icons-material/Close';

const GalleryMui=()=>{

    const Picture=(props)=>{
        return <Box className="body-item"><img src={props.picture} alt="pic" onClick={()=>OpenModal(props.picture)}/></Box>
    }
    
    const Modal=(props)=>{
      return  <Box className="modal" style={{display:props.display}}><img src={props.picture} alt="pic" />
                {/* <Button onClick={CloseModal}>close</Button> */}
                {/* <Gi.GiNinjaStar onClick={CloseModal}/> */}
                <CloseIcon onClick={CloseModal} className="closeIcon"/>
              </Box>
    }
    
        let [display, setDisplay] = useState("none")
    
        function CloseModal(){
            setDisplay("none")
        }
    
        function OpenModal(e){
            setDisplay("flex")
            ClickPic(e)
        }
        
        let [picture, setPicture] = useState("")
    
        function ClickPic(p) {
            setPicture(p)
        }
    
    return <Box>
        <Box className="gallery-app">

<Box className="gallery-app-container">
    
    <Box className="header-content">
        <Box className="header-nav">
            <Typography>navbar</Typography>
        </Box>
        
        <Box className="header-title">
            <Typography variant="h2">Your Pictures</Typography>
            <Typography variant="subtitle1">Share your best picture with us</Typography>
        </Box>
     </Box> 

    <Box className="body-content">
        
            <Picture picture="https://picsum.photos/200?random=1"/>
            <Picture picture="https://picsum.photos/200?random=2"/>
            <Picture picture="https://picsum.photos/200?random=3"/>
            <Picture picture="https://picsum.photos/200?random=4"/>
            <Picture picture="https://picsum.photos/200?random=5"/>
            <Picture picture="https://picsum.photos/200?random=6"/>
            <Picture picture="https://picsum.photos/200?random=7"/>
            <Picture picture="https://picsum.photos/200?random=8"/>
            <Picture picture="https://picsum.photos/200?random=9"/>
        </Box>
    </Box>
</Box>
<Modal picture={picture} display={display}/>
    </Box>
}
export default GalleryMui