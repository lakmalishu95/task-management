import { useState } from "react";
import { addTask } from "../service/api";
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
    taskname:'',
    email:'',
    phone:''
}

const AddTask = () => {


    const [task, setTask] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        console.log(task)
    }

    const addTaskDetails = async () => {
        await addTask(task);
        navigate('/all');
    }

    return (
        <FormGroup>
            <Tab>
                <Typography variant="h4" color="initial">Register</Typography>
                <Text onChange={(e) => onValueChange(e)} label="Name" inputProps={{ inputMode: 'text'}} name="name" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Task Name" inputProps={{ inputMode: 'text'}} name="taskrname" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Email" inputProps={{ inputMode: 'text'}} name="email" ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Phone" inputProps={{ inputMode: 'text'}} name="phone" ></Text>
                <Button onClick={() => addTaskDetails()} onChange={(e) => onValueChange(e)} variant="contained">Contained</Button>
                
            </Tab>
        </FormGroup>
    )
}

export default AddTask;