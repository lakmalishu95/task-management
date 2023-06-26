import { useEffect, useState } from "react";
import { getTask, editTask } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";


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

const EditTask = () => {


    const [task, setTask] = useState(initialValues);
    const navigate = useNavigate();
    const {id } = useParams();

    useEffect(() => {
        getTaskData();
    }, [])

    const getTaskData = async () => {
        let response = await getTask(id);
        setTask(response.data);
    }

    const onValueChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        console.log(task)
    }

    const addTaskDetails = async () => {
      await editTask(task, id);
      navigate('/all');
    }

    return (
        <FormGroup>
            <Tab>
                <Typography variant="h4" color="initial" style={{ textAlign:"center" }}>Register</Typography>
                <Text onChange={(e) => onValueChange(e)} label="Name" inputProps={{ inputMode: 'text'}} name="name" value={task.name} ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Task Name" inputProps={{ inputMode: 'text'}} name="taskname" value={task.taskname} ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Email" inputProps={{ inputMode: 'text'}} name="email" value={task.email}  ></Text>
                <Text onChange={(e) => onValueChange(e)} label="Phone" inputProps={{ inputMode: 'text'}} name="phone" value={task.phone}  ></Text>
                <Button onClick={() => addTaskDetails()} onChange={(e) => onValueChange(e)} variant="contained">Contained</Button>
                
            </Tab>
        </FormGroup>
    )
}

export default EditTask;