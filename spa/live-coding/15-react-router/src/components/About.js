import { Link } from 'react-router-dom';


export default function About() {
    return (
        <>
            <main>
                <h2>About Me</h2>
                <p>Nothing much</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}
