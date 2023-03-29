import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="nav">
            <Link href="/" className="site-title">AM</Link>
            <ul>
                <li><Link href="/aboutMe">About Me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/blogPosts">Blog</Link></li>
                <li><Link href="/contactDetails">Contact</Link></li>
            </ul>
        </nav>
    )
}