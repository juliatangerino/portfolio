import './style.css';
import glassForPencils from '../../assets/glass-for-pencils.png'
import cord from '../../assets/cord.svg'

function Main() {
    return (
        <div>
            <div className='container'>
                <div className='details'>
                    <div className='cord'>
                        <img src={cord} alt="cord" className='cord' />
                    </div>
                    <div className='button'>
                        <a href="#">contact me</a>
                    </div>
                </div>
                <div>
                    <div className='content-text-presentation'>
                        <div className='text'>
                            <h1>
                                Hi! Welcome, I'm Juliana
                            </h1>
                            <p>
                                UX/UI Design & web developer
                            </p>
                        </div>
                    </div>
                </div>
                <div className='glassForPencils'>
                    <img src={glassForPencils} alt="Glass for pencils" />
                </div>
            </div>
        </div>
    );
}

export default Main;