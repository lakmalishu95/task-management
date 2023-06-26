import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import { getTasks } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteTask } from "../service/api";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`

const Thead = styled(TableHead)`
    background: black;
    & > th { color:white; font-size: 20px}
`
const Trow = styled(TableRow)`
    & > th { 
        color:#fff; font-size: 20px
    }
`


const AllTasks = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasksDetails();
    }, [])

    const getTasksDetails = async () => {
        let response = await getTasks();
        console.log(response);
        setTasks(response.data);
    }

    const deleteTaskData = async (id) => {
        await deleteTask(id);
        getTasksDetails();
    }


    return (
        <StyledTable>
            <Thead>
                <Trow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>TaskName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </Trow> 
            </Thead>
            <TableBody>
                {
                    tasks.map(task => (
                        <TableRow>
                            <TableCell>{task.id}</TableCell>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.taskname}</TableCell>
                            <TableCell>{task.email}</TableCell>
                            <TableCell>{task.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" style={{margin:20}} component={Link} to={`/edit/${task.id}`} >Edit</Button>
                                <Button variant="contained" color="primary"  onClick={() => deleteTaskData(task.id)} >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllTasks;