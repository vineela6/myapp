import React, { Component } from 'react';
class Promotions extends Component {
    state = {
        employees: [
            {
                name: "vini",
                isPromoted: true
            },
            {
                name: "mani",
                isPromoted: false
            },
            {
                name: "manu",
                isPromoted: true
            }
        ],
        payLoad: {
            name: " ",
            isPromoted: true
        }
    }
    updateData(e, index) {
        //console.log(e.target.checked);
        const { employees } = this.state;
        employees[index].isPromoted = e.target.checked;
        this.setState({ employees: [...employees] })
    }
    handleInput(e) {
        const { value, id } = e.target;
        this.setState({ payLoad: { ...this.state.payLoad, [id]: value } })
    }
    addEmployee() {
        const { employees, payLoad } = this.state;
        this.setState({ employees: [...employees, payLoad] })
    }

    delEmployee(e) {
        const { employees, payLoad } = this.state;
        this.setState({ employees: employees.splice(employees.indexOf(payLoad), 1) })
    }

    render() {
        const { employees } = this.state;
        return (
            <>
                <pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>
                <div className="container">
                    <div className="jumboteron text-center"><h1>Promotions details</h1></div>
                    <ul>
                        {employees.map(({ name, isPromoted }, index) =>
                            <li className="list-group-item">
                                <div class="row">
                                    <div class="col-3">{name}</div>
                                    <div class="col-3"><input type="checkbox" onChange={(e) => this.updateData(e, index)} defaultChecked={isPromoted} />{!!isPromoted ? 'promoted' : 'not promoted'}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <label for="ide">Emp Name</label>
                <input type="text" onChange={(e) => this.handleInput(e)} className="form-control" id="name" placeholder="Enter name" /><br />
                <button type="button" onClick={() => this.addEmployee()} className="btn btn-danger">add</button><br /><br />
                <button type="button" onClick={(e) => this.delEmployee(e)} className="btn btn-danger">del</button>

            </>
        )
    }
}
export default Promotions;