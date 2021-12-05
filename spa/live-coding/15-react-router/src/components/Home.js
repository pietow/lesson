import { Link, Outlet } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
            </main>
            <nav>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </>
    );
}
