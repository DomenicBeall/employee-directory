import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = (props) => {

    const initialEmployees = props.employees;

    const [employees, setEmployees] = useState(props.employees);

    useEffect(() => {
        setEmployees(props.employees);
    }, [props.employees]);

    const searchNames = (event) => {
        setEmployees(initialEmployees.filter((i) => {
            return i.name.last.toLowerCase().includes(event.target.value.toLowerCase())
        }));
    };

    return(
        <div className="table">

            <div className="sort-form">
                <input type="text" placeholder="Search by surname..." onKeyUp={searchNames}></input>
                <label for="sortBy"> Sort by: </label>
                <select name="sortBy" id="sort">
                    <option value="First Name">First Name</option>
                    <option value="Last Name">Last Name</option>
                    <option value="City">City</option>
                    <option value="Date of Birth">Date of Birth</option>
                </select>
            </div>

            {
                employees.map((employee, i) => {
                    return (<TableRow employee={employee}/>);
                })
            }
        </div>
    );

}

export default Table;