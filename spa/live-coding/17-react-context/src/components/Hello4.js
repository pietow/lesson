import Hello5 from './Hello5';

function Hello4(props) {
    return (
        <div className="container">
            <h5>Hello, useContext!</h5>
            {/* <Hello5 name={props.name} /> */}
            <Hello5 />
        </div>
    )
}

export default Hello4;