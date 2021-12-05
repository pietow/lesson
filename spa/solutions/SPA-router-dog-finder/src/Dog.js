import { NavLink } from 'react-router-dom';

export default function Dog(props) {
    let dogFacts = null;
    if (props.currentDog === props.name) {
      dogFacts = (
        <div>
          <h1>{`Name: ${props.name}`}</h1>
          <h2>{`Age: ${props.age}`}</h2>
          <ul>{props.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
        </div>
      );
    }
    return (
        <div>
            <NavLink
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : ""
                    };
                }} 
                to={`/${props.name}`}>
                <h1>{props.name}</h1>
            </NavLink>
            <img src={props.image} alt="dog" />
            {dogFacts}
      </div>
    )
}