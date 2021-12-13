import Hello2 from './Hello2';

function Hello1(props) {
    return (
        <div className="container">
            <h2>Hello, useContext!</h2>
            {/* <Hello2 name={props.name} /> */}
            <Hello2 />
        </div>
    )
}

export default Hello1;