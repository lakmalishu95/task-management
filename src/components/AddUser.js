import { useState } from "react";
import { addUser } from "../service/api";


import styled from "@emotion/styled";
import { FormControl, FormGroup, TextField , Button, Typography} from "@mui/material";

const Tab = styled(FormControl) `
    width: 50%;
    margin: 5% auto 0 auto;

`
const Text = styled(TextField)`
    margin: 0 0 5px 0;
`

const initialValues = {
    name:'',
    usename:'',
    email:'',
    phone:''
}

const AddUser = () => {


    const [user, setUser] = useState(initialValues)

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
    }

    return (
        <FormGroup>
            <Tab>
                <Typography variant="h4" color="initial">Register</Typography>
                <Text onChange={(e) => onValueChange(e)} label="Name" inputProps={{ inputMode: 'text'}} name="name" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="User Name" inputProps={{ inputMode: 'text'}} name="usename" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Email" inputProps={{ inputMode: 'text'}} name="email" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Phone" inputProps={{ inputMode: 'text'}} name="phone" ></Text>
                <Button onClick={() => addUserDetails()} onChange={(e) => onValueChange(e)} variant="contained">Contained</Button>
                
            </Tab>
        </FormGroup>
    )
}

export default AddUser;