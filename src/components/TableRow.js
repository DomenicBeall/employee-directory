import "./Row.css";

const TableRow = (props) => {

    var employee = props.employee;

    return (
      <div className="row">
        <div className="col">{employee.name.first}</div>
        <div className="col">{employee.name.last}</div>
        <div className="col">{employee.dob.age}</div>
        <div className="col">{employee.location.city}</div>
      </div>  
    );

};

export default TableRow;