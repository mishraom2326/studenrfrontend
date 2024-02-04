import axios from 'axios'

const USER_SERVICE_FETCH_URL="http://localhost:8080/getStudent";

class StudentService{

    getStudents(){
        axios.get(USER_SERVICE_FETCH_URL);
    }
}

export default new StudentService();