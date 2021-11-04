import { Card, CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

const MyCard=(props)=>{
    function MyAction(){
        alert("kainakin")
    }
    

    return <div>
        <Card>
            <CardContent>
                <h1>{props.heading}</h1>
                <p>kub</p>
            </CardContent>
            <CardActions>
                <Button onClick={MyAction}>click me</Button>
            </CardActions>
        </Card>
    </div>
}
export default MyCard;