import React from "react"
import StudentService from './StudentService'
import axios from 'axios'

const USER_SERVICE_FETCH_URL="http://localhost:8080/getStudent";

class StudentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }


    render(){

    return(<div>

        <h1 className="text-center">student record</h1>
<table className="table table-striped"> 
<thead> 
    <tr> 
        <td>Student Id</td>
        <td>Student Name</td>
        <td>Roll No</td>
    </tr>
</thead>

<tbody>
    {
        this.state.users.map(
            user=>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.rollNo}</td></tr>
              
                )
              
    }
</tbody>

</table>
    </div>

    )

    }

    componentDidMount(){  
        axios.get(USER_SERVICE_FETCH_URL).then(response=>this.setState({users: response.data}))
          }
}
export default StudentComponent;


