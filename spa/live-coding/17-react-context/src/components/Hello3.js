import Hello4 from './Hello4';

function Hello3(props) {
    return (
        <div className="container">
            <h4>Hello, useContext!</h4>
            {/* <Hello4 name={props.name} /> */}
            <Hello4 />
        </div>
    )
}

export default Hello3;