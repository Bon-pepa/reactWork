import React from "react";
import { IUser } from "./interfaces/user";
import Salaries from "./salaries";
import Detail from "./detail";

interface ProfileProps {
    user: IUser
}

class Profile extends React.Component<ProfileProps> {

    render() {
        const {user} = this.props;

        return <>
            <Detail user={user}/>
            {
                user.salaries ?
                <Salaries salaries={user.salaries}/>
                : ''
            }
            
        </>;
    }
}

export default Profile;