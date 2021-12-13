import Hello3 from './Hello3';

function Hello2(props) {
    return (
        <div className="container">
            <h3>Hello, useContext!</h3>
            {/* <Hello3 name={props.name} /> */}
            <Hello3 />
        </div>
    )
}

export default Hello2;