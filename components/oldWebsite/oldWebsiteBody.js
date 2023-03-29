import style from '@/styles/oldwebsite.module.css'

export function OldWebsiteBody(props) { 

    return (
            <p className={style.body}>
                When I first began web development, I used HTML, CSS, and JavaScript to build a website. 
                It was a fun project that allowed me to explore the basics of web development, but I knew I had more to learn.
            <br/><br/>
                To take my skills to the next level, I decided to rebuild my site using React. 
                React is a powerful JavaScript library that can help you build complex user interfaces, and it&apos;s used by some of the largest websites in the world. 
                But before I did that, I wanted to showcase my old site on my new React website as a testament to how far I&apos;ve come.
            <br/><br/>
                To make this happen, I had to ensure that my old website was still accessible. 
                I kept the old files and hosted them on a separate domain. 
                On my new React website, I created a special section to display the old site, using an iframe element.
            <br/><br/>
                An iframe element is a way to embed another web page within your own page. 
                By simply adding an iframe element to my new site&apos;s HTML and pointing it to the URL of my old site, I was able to showcase the old site within my new site.
            <br/><br/>
                Of course, the old site wasn&apos;t as fancy as the new one, lacking all the bells and whistles of a modern website built with React. 
                However, it served as a great way to showcase where I started and how much I&apos;ve progressed.
            <br/><br/>
                Now, visitors to my new React website can see where I began and how my skills have improved over time. 
                It&apos;s a testament to the power of learning and growing as a web developer.
            <br/><br/>
                For those just starting out in web development, I encourage you to showcase your early projects. 
                Doing so is an excellent way to demonstrate how far you&apos;ve come and to inspire others to start their coding journey. 
                And if you&apos;re ready to take your skills to the next level, consider learning React, a potent tool for building fast, efficient, and flexible websites.
            </p>
    );
}
