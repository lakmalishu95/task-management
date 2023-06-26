import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import { getUsers } from "../service/api";
import { useEffect, useState } from "react";

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


const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }


    return (
        <StyledTable>
            <Thead>
                <Trow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UseName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phine</TableCell>
                    <TableCell>Action</TableCell>
                </Trow> 
            </Thead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" style={{margin:20}} >Delete</Button>
                                <Button variant="contained" color="primary">Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;