import { useContext } from 'react';
import UserContext from './UserContext';


// function Hello5(props) {
function Hello5() {
    const user = useContext(UserContext);
    return (
        <div className="container">
            {/* <h6>Hello, {props.name}!</h6> */}
            <h6>Hello, {user}!</h6>
        </div>
    )
}

export default Hello5;