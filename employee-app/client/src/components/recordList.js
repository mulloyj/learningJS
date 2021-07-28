import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Record = (props) => {
  <tr>
    <td>{props.record.person_name}</td>
    <td>{props.record.person_position}</td>
    <td>{props.record.person_level}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
}

class RecordList extends Component {
    constructor(props) {
        super(props);

        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = { records: [] };
    }

    // This method will get data from the database
    componentDidMount() {
        axios
            .get("http://localhost:3000/record/")
            .then((response) => {
                this.setState({ records: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // This method will delete a record based on the method
    deleteRecord(id) {
        axios
            .delete("http://localhost:3000/record/" + id)
            .then((response) => {
                console.log(response.data);
            });

        this.setState({
            records: this.state.records.filter((el) => el._id !== id)
        });
    }

    // This method will map out the users on the table
    recordList() {
        return this.state.records.map((currentrecord) => {
            return (
                <Record
                    record={currentrecord}
                    deleteRecord={this.deleteRecord}
                    key={currentrecord._id}
                />
            );
        });
    }

    render() { 
        return (
            <div>
                <h3>Record List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Level</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>{this.recordList()}</tbody>
                </table>
            </div>
        );
    }
}
 
export default RecordList;