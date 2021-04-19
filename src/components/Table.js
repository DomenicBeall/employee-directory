const Table = (props) => {

    const employees = props.employees;

    return(
        <ul className="table">
            {
                employees.map((employee, i) => {
                    console.log(employee);
                    return (<li>{employee.name.first}</li>);
                })
            }
        </ul>
    );

}

export default Table;