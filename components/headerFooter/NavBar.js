import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="nav">
            <Link href="/" className="site-title">AM</Link>
            <ul>
                <li><Link href="/about-me">About Me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/blog-posts">Blog</Link></li>
                <li><Link href="/contact-details">Contact</Link></li>
            </ul>
        </nav>
    )
}