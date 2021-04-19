import { useEffect, useState } from "react";
import TableRow from "./TableRow";

import "./Row.css";

const Table = (props) => {

    const [initialEmployees, setInitialEmployees] = useState(props.employees);
    const [employees, setEmployees] = useState(props.employees);

    useEffect(() => {
        setEmployees(props.employees);
        setInitialEmployees(props.employees);
    }, [props.employees]);

    const triggerSort = (event) => {
        var sortBy = event.target.value;
        
        switch (sortBy) {
            case "First Name":
                setEmployees([
                    ...employees.sort((a, b) => {
                        if (a.name.first < b.name.first) {
                            return -1;
                        }
                        if (a.name.first > b.name.first) {
                            return 1;
                        }
                        return 0;
                    })
                ]);
                break;
            case "Last Name":
                setEmployees([
                    ...employees.sort((a, b) => {
                        if (a.name.last < b.name.last) {
                            return -1;
                        }
                        if (a.name.last > b.name.last) {
                            return 1;
                        }
                        return 0;
                    })
                ]);
                break;
            case "City":
                setEmployees([
                    ...employees.sort((a, b) => {
                        if (a.location.city < b.location.city) {
                            return -1;
                        }
                        if (a.location.city > b.location.city) {
                            return 1;
                        }
                        return 0;
                    })
                ]);
                break;
            case "Age":
                setEmployees([
                    ...employees.sort((a, b) => {
                        if (a.dob.age < b.dob.age) {
                            return -1;
                        }
                        if (a.dob.age > b.dob.age) {
                            return 1;
                        }
                        return 0;
                    })
                ]);
                break;
            default:
                break;
        }
    }

    const searchNames = (event) => {
        setEmployees(initialEmployees.filter((i) => {
            return i.name.last.toLowerCase().includes(event.target.value.toLowerCase())
        }));
    };

    return(
        <div className="table">

            <div className="sort-form">
                <input type="text" placeholder="Search by surname..." onKeyUp={searchNames}></input>
                <label htmlFor="sortBy" style={{ marginLeft: "2rem" }}> Sort by: </label>
                <select name="sortBy" id="sort" onChange={triggerSort}>
                    <option value="First Name">First Name</option>
                    <option value="Last Name">Last Name</option>
                    <option value="City">City</option>
                    <option value="Age">Age</option>
                </select>
            </div>

            <div className="row">
                <h3 className="col">First Name</h3>
                <h3 className="col">Last Name</h3>
                <h3 className="col">Age</h3>
                <h3 className="col">City</h3>
            </div>

            {
                employees.map((employee, i) => {
                    return (<TableRow key={i} employee={employee}/>);
                })
            }
        </div>
    );

}

export default Table;