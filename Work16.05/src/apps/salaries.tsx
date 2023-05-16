import React from "react";

interface SalariesProps {
    salaries: [
        {
            salary: string,
            from_date: string
        }
    ]
}

class SalaryRow extends React.Component {
    render() {
        return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
    }
}

class Salaries extends React.Component<SalariesProps> {
    render() {
        const {salaries} = this.props;

        const salaries_rows = salaries.map((salary, index) => {
            return <SalaryRow/> //передавать salary index аналог onclick
          });

        return <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Salary</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {salaries_rows}
            </tbody>
        </table>
    }
}

export default Salaries