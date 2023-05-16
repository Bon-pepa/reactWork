import React from "react";
import { IUser } from "./interfaces/user";

interface DetailProps {
    user: IUser
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <div className="row">
            <div className="col-4">
                <img src="https://loremflickr.com/320/240" 
                     alt="" 
                     className="img-fluid img-thumbnail" 
                     onClick={() => {
                         console.log(user);
                     }}
                />
            </div>

            <div className="col">
                <ul className="list-unstyled">
                <li>Номер: {user.emp_no}</li>
                <li>ФИО: {user.last_name} {user.first_name} </li>
                <li>Дата рождения: {user.birth_date}</li>
                <li>Гендер: {user.gender}</li>
                <li>Трудоустроен: {user.hire_date}</li>
                </ul>
            </div>
            
        </div>;
    }
}

export default Detail;