import { Link } from 'react-router-dom';


export default function Contact() {
    return (
        <>
            <main>
                <h2>Contact me</h2>
                <p>Leave a message</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}