// import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import ProfilePic from '../assets/ProfilePic.png'
export default function Home (){

    return(
        <>
        <div id='Home' className="main-div">
            <div className='topimg'>
              <div className='topimg-content'>
                <p >hello </p>
                <p className='p3' style={{color:'gold',  fontWeight:'bold',fontFamily:'san'}}> i'm tiomthy jacob</p>
                <p className='p2' >frontend developer</p>
              </div>
                
            </div>
            <div id='About' className='mainProfile'> 
                <div className='mainprofilediv'>
                    <img src={ProfilePic } alt="" />
                </div>
                

                <div className='mainProfile-content mainprofilediv'>
                    <h1>about me</h1>
                    <p> 
                     I'm a passionate and innovative frontend web developer dedicated to crafting seamless and engaging user digital experiences. With a strong foundation in web technologies and a keen eye for design, I specialize in translating complex concepts into intuitive and user-friendly interfaces.
                    </p>
                    
                </div>
                
            </div> 
                     { /* slill */ }
           
            <div id='Skill' className="container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="HTML" />
                        <div style={{backgroundColor:'rgba(255, 0, 0, 0.3)', color:'rgba(255, 91, 91, 0.856)',border:'5px solid rgba(255, 91, 91, 0.856)'}} className="percentage">
                            <span>98%</span>
                        </div>
                        <h3>HTML</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
                      
                    </div>

                    <div  className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo.svg/768px-CSS3_logo.svg.png" alt="CSS" />
                    <div style={{backgroundColor:'rgba(11, 27, 255, 0.3)',color:'rgba(11, 27, 255, 0.685)',border:'5px solid rgba(11, 27, 255, 0.685)' }} className="percentage">
                        <span>98%</span>
                    </div>
                    <h3>CSS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
                    
                    </div>
                    <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
                    <div style={{backgroundColor:'rgba(255, 231, 11, 0.3)', color:'rgba(255, 231, 11, 0.938)',border:'5px solid rgba(255, 231, 11, 0.938)'}}  className="percentage">
                        <span>98%</span>
                    </div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
                    
                    </div>
                    <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="Node.js" />
                    <div style={{backgroundColor:'rgba(11, 255, 11, 0.3)',color:'rgba(11, 255, 11, 0.938)',border:'5px solid rgba(11, 255, 11, 0.938)' }} className="percentage">
                        <span>98%</span>
                    </div>
                    <h3>Node.js</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
                    
                    </div>
                    <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React_logo.svg/1200px-React_logo.svg.png" alt="React" />
                    <div style={{backgroundColor:'rgba(11, 157, 255, 0.3)',color:'rgba(11, 157, 255, 0.952)',border:'5px solid rgba(11, 157, 255, 0.952)' }} className="percentage">
                        <span>98%</span>
                    </div>
                    <h3>React</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
                   
                    </div>
                </div>
            </div>

            <div id='Contant' className='contant'>
                <h3>Get in touch</h3>
                <div className='contant-grid'>
                    <div className='contant-list'>
                        <h5>E-mail</h5>
                        <p>timothyjacob@gmail.com</p>

                    </div>
                    <div className='contant-list'>
                        <h5> Phone Number </h5>
                        <p>09076186865</p>

                    </div>
                    <div className='contant-list'>
                        <h5>Social Media</h5>
                        

                    </div>
                </div>

            </div>

        </div>
        
        
        </>
    )
}