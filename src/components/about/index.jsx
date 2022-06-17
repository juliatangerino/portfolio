import './style.css';
import bookcase from "../../assets/bookcase.png"

function About() {

    const items = [
        'UX/UI Design',
        'Vue',
        'React',
        'React native',
        'Linux',
        'Tailwind',
        'Docker',
        'Git',
        'PHP',
        'Javascript',
        'MySQL',
        'Netlify',
    ]

    const item = []

    items.forEach((data) => {
        item.push(
            <div className='badge'>
                <p>{data}</p>
            </div>
        )
    })

    return (
        <div className='container-about'>
            <div className='content-about'>
                <div className='bookcase-img'> 
                    <img src={bookcase} alt="Bookcase" />
                </div>
                <div className=''>
                    <div>
                        <div className='title'>
                            <div className='title-decoration'></div>
                            <h3>About me</h3>
                        </div>
                        <p className='text-about'>
                            I like to explore new technologies and
                            develop solutions. I am currently studying
                            Cross-platform software development. I'm on
                            my way to learning more about front-end
                            technologies. In my free time, I make new
                            projects, create arts and templates. Feel
                            free to contact me for consultancy and pro
                            bono volunteering, or just for an interesting
                            discussion. You can email me at
                            julianatangerino2017@gmail.com!
                            I will try to answer as soon as
                            I can. 🦄✨</p>
                    </div>
                    <div className='badges'>
                        <div className='badge-row'>
                            {item}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;