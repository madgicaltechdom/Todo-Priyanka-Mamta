

import React from "react";
import '../ToDo.css'
import { userData } from "./userData";
class TodoList extends React.Component {props
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            category: "",
            records: [],
            showAlert: false,
            alertMsg: "",
            alertType: "success",
            id: "",
            // Email_id:userData.user.email
        };
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,

        });
    };
    
    componentWillMount() {
        this.fetchAllRecords();
    }


    // add a record
    addRecord = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ todo: this.state.name, location: this.state.location, Email_id:this.state.email });
        console.log(body)
        fetch("http://localhost:8000/api/create",{
            method: "POST",
            headers: myHeaders,
            body: body,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    // todo: "",
                    location: "",
                    // Email_id:"",
                    showAlert: true,
                    alertMsg: result.response,
                    alertType: "success",
                });
            });
    };

    // fetch All Records
    fetchAllRecords = () => {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("http://localhost:8000/api/view", {
            method: "GET",
            headers: headers,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("result", result);
                this.setState({
                    records: result.response,
                });
            })
            .catch((error) => console.log("error", error));
    };

    // view single data to edit
    editRecord = (id) => {
        fetch("http://localhost:8000/api/view/" + id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    id: id,
                    update: true,
                    name: result.response[0].name,
                    location: result.response[0].location,
                });
            })
            .catch((error) => console.log("error", error));
    };

    // update record
    updateRecord = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({ id: this.state.id, name: this.state.name, location: this.state.location });
        fetch("http://localhost:8000/api/update", {
            method: "PUT",
            headers: myHeaders,
            body: body,
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    showAlert: true,
                    alertMsg: result.response,
                    alertType: "success",
                    update: false,
                    id: "",
                    name: "",
                });
                this.fetchAllRecords();
            })
            .catch((error) => console.log("error", error));
    };

    // delete a record
    deleteRecord = (id) => {
        fetch("http://localhost:8000/api/delete/" + id, {
            method: "DELETE",
            
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    showAlert: true,
                    alertMsg: result.response,
                    alertType: "danger",
                });
                this.fetchAllRecords();
            })
            .catch((error) => console.log("error", error));
    };
    render(props) {
        return (
            <div className="">

            <div className="mainContainer">
                <input type="text" name="name" placeholder="Enter ToDo" onChange={this.handleChange} value={this.state.name}></input>

                {this.state.update === true ? < button className="add_btn" onClick={this.updateRecord}>update</button> : <button className="add_btn" onClick={this.addRecord}>save</button>}

                {this.state.showAlert === true ? (
                    <div
                        variant={this.state.alertType}
                        onClose={() => {
                            this.setState({
                                showAlert: false,
                            });
                        }}
                        dismissible
                    >
                    </div>
                ) : null}
                {this.state.records.map((record) => {
                    return (
                        <li className="list-item">

                            <div className="list" style={{textDecorationLine: 'line-through'}} >{record.todo}</div>
                            <div>

                                <button className="button-edit"onClick={() => this.editRecord(record.id)}>
                                    <i className="fa fa-edit"></i>
                                </button>

                                <button className="button-delete task-button"  onClick={() => this.deleteRecord(record.id)}>
                                     <i className="fa fa-trash"></i>
                                 </button>
                    
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>
        );
    }
}

export default TodoList;
