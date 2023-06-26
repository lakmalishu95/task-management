import { useState } from "react";
import { editUser } from "../service/api";
import { useNavigate } from "react-router-dom";


import styled from "@emotion/styled";
import { FormControl, FormGroup, TextField , Button, Typography} from "@mui/material";

const Tab = styled(FormControl) `
    width: 50%;
    margin: 5% auto 0 auto;

`
const Text = styled(TextField)`
    margin: 0 0 5% 0;
`

const initialValues = {
    name:'',
    usename:'',
    email:'',
    phone:''
}

const EditUser = () => {


    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user);
        navigate('/all');
    }

    return (
        <FormGroup>
            <Tab>
                <Typography variant="h4" color="initial">Register</Typography>
                <Text onChange={(e) => onValueChange(e)} label="Name" inputProps={{ inputMode: 'text'}} name="name" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="User Name" inputProps={{ inputMode: 'text'}} name="usename" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Email" inputProps={{ inputMode: 'text'}} name="email" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Phone" inputProps={{ inputMode: 'text'}} name="phone" ></Text>
                <Button onClick={() => editUserDetails()} onChange={(e) => onValueChange(e)} variant="contained">Contained</Button>
                
            </Tab>
        </FormGroup>
    )
}

export default EditUser;