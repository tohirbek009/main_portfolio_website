import './main.css'
import emailjs, { send } from 'emailjs-com';
import profile from './images/profile.jpg'
import housing from './images/housing.png'
import birzoom from './images/birzoom.png'
import education from './images/education.png'
import bethany from './images/bethany.png'
import fake_shop from './images/fake_shop.png'
import quiz_platform from './images/quiz_platform.png'
import facebook from './images/facebook.png'
import chat_app from './images/chat-app.gif'
import tic_tac_toe from './images/tic-tac-toe.jpeg'
import bg_video from './images/bg_video2.mp4'
import logo_name from './images/logo_name.png'
import { 
    GitHub, Web, Menu, 
    Cancel, KeyboardArrowUp, 
    Brush, PhoneIphone, ShowChart, 
    Person, LocationOn, Email,
    Facebook, LinkedIn, Telegram, 
    Instagram
} from '@material-ui/icons';
import { SkillsParagraph, SkillsParSpan, ThreeDots, VisistSiteBtn } from './AppStyle';
import { useState } from 'react';
function App() {


    const [onReadMoreBtn, setOnReadMoreBtn] = useState(false)

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_udcgsqh', e.target, 'user_j4AYkZQzmzlNkUuTjB0Eg')
          .then((result) => {
              alert(result.text)
          }, (error) => {
              alert(error.text)
          });
          e.target.reset();
    }

    const onReadMore = () => {
        setOnReadMoreBtn(!onReadMoreBtn)
    }

  return (
    <div className="App">
      <div class="scroll-up-btn">
        <KeyboardArrowUp />
      </div>
      <nav class="navbar">
        <div class="max-width">
            <a href="#" class='logo'><img src={logo_name} alt=""/></a>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#services" class="menu-btn">Services</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#teams" class="menu-btn">Portfolios</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <Menu id="menu-btn" />
                <Cancel id='cancel-btn'/>
            </div>
        </div>
      </nav>
      
{/* <!--    home section start--> */}
<section class="home" id="home">
    <video autoPlay='true' loop muted='true' id="myVideo">
        <source src={bg_video} type="video/mp4"/>
    </video>
    <div class="max-width">
        <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Tohirbek Odilkuziyev</div>
            <div class="text-3">And I'm a <span class="typing"></span></div>
            <a href="https://t.me/TUIT_student20">Hire me</a>
        </div>
    </div>
</section>

{/* <!-- about section start --> */}
<section class="about" id="about">
    <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
            <div class="column left">
                <img src={profile} alt=""/>
            </div>
            <div class="column right">
                <div class="text">I'm a <span class="typing-2"></span></div>
                <p>Hi, my name is Tohirbek and I was born in 2003. I was able to be student in TUIT(Tashkent University Information Technology),
                    Computer Engineering faculty. Also, I have studied in PDP IT Academy for approximately 7 months in order to learn some 
                    techniques that is related to Frontend Development.In the future I am going to establish a company that can compete with the 
                    greatest company in the world like Google, Facebook, Amazon and others, that is why now i am working on myself a lot.
                </p>
                <a href="no-script.html" id='downloadBtn'>Download Resume</a>
            </div>
        </div>
    </div>
</section>

{/* <!-- services section start --> */}
<section class="services" id="services">
    <div class="max-width">
        <h2 class="title">My services</h2>
        <div class="serv-content">
            <div class="card">
                <div class="box">
                    <Brush className='i' />
                    <div class="text">Web Design</div>
                    <p>Clean, modern designs - optimized for
                    performance, search engines, and
                    converting users to customers.</p>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <ShowChart className='i' />
                    <div class="text">Analytics</div>
                    <p>Get insights into who is browsing your
                    site so that you can make smarter
                    business decisions.</p>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <PhoneIphone className='i' />
                    <div class="text">Mobile-Friendly</div>
                    <p>A responsive design makes your 
                    website accessible to all users, 
                    regardless of their device.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- skills section start --> */}
<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">My skills</h2>
        <div class="skills-content">
            <div class="column left">
                <div class="text">My creative skills & experiences.</div>
                <SkillsParagraph>
                    As I mentioned above, I am a student in TUIT(Tashkent University Information Technology) so I have started 
                    programming for the first time by learning C++. Actually I am keen on solving problem that is related to Mathematics,
                    that is why <ThreeDots  isClicked = {onReadMoreBtn}>...</ThreeDots> <SkillsParSpan  isClicked = {onReadMoreBtn}>I think that I was able to learn how to solve some algorithmic problems in C++. After that I became interested 
                    in programming languages and about 5 months after I first learned the programming language, I decided that I will learn Frontend
                    Development and Python language for backend, so at that time I bought an online course from PDP IT Academy that is located in Tashkent.
                    And now, in 2021, I have completed totally Frontend Development Course.</SkillsParSpan>
                </SkillsParagraph>
                <p className='read-btn' onClick={onReadMore}>Read more</p>
            </div>
            <div class="column right">
                <div class="bars">
                    <div class="info">
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div class="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>CSS</span>
                        <span>95%</span>
                    </div>
                    <div class="line css"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>JavaScript</span>
                        <span>75%</span>
                    </div>
                    <div class="line js"></div>
                </div>
                <div class='bars'>
                    <div class="info">
                        <span>React</span>
                        <span>75%</span>
                    </div>
                    <div class="line js"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Python</span>
                        <span>20%</span>
                    </div>
                    <div class="line python"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>C++</span>
                        <span>10%</span>
                    </div>
                    <div class="line cpp"></div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- teams section start --> */}
<section class="teams" id="teams">
    <div class="max-width">
        <h2 class="title">Portfolios</h2>
        <div class="carousel owl-carousel">
            <div class="card">
                <div class="box">
                    <img src={housing} alt=""/>
                    <div class="text">Housing</div>
                    <p>
                        Search and ﬁnd your favourite houses and buy them on the website 
                    </p>
                    <VisistSiteBtn href='https://mystifying-poitras-d44f3f.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src={bethany} alt=""/>
                    <div class="text">Bethany</div>
                    <p>
                        Get some nice designed webpages made with bootstrap 
                    </p>
                    <VisistSiteBtn href='https://frosty-jepsen-90aede.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src={birzoom} alt=""/>
                    <div class="text">BirZoom</div>
                    <p>
                        You can find your the best course in there. 
                    </p>
                    <VisistSiteBtn href='https://mystifying-leavitt-a97d1b.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src={education} alt=""/>
                    <div class="text">Education</div>
                    <p>
                        Do you want quality education? Visit our site.
                    </p>
                    <VisistSiteBtn href='https://nifty-meninsky-904558.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src={fake_shop} alt=""/>
                    <div class="text">Fake Shop</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <VisistSiteBtn href='https://festive-jackson-5b5b72.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src={quiz_platform} alt=""/>
                    <div class="text">Quiz Platform</div>
                    <p>
                        Find the answers all questions in quiz platform that includes some fields 
                    </p>
                    <VisistSiteBtn href='https://quizplatform.netlify.app/' className='visit-site-btn'>Visit Site</VisistSiteBtn>
                </div>
            </div>
        </div>
        {/* Next portfolios sites start */}
        <section id="projects">
            <div class="projects container">
                <div class="projects-header">
                    <h1 class="section-title">Recent <span>Projects</span></h1>
                </div>
                <div class="all-projects">
                    <div class="project-item">
                        <div class="project-info">
                            <h1>Facebook <span>(website)</span></h1>
                            <div className='view-site'>
                                <a href="https://github.com/tohirbek009/facebook-clone">
                                    <GitHub className='fa-github' title="See Github Code" />
                                </a>
                                <a href="https://faceboook-clone.netlify.app/">
                                    <Web className='fa-link' title='See Github Code' />
                                </a>
                            </div>
                            <h2>Making clone site is love</h2>
                            <p>
                                Open this facebook-clone website and login with your email👨‍💻👨‍💻👨‍💻. 
                                In this clone site you can create new posts and write comment💬 for all posts.
                                Also, If you like one post or comment, you can click like👍 button and see all users 
                                who click like for this post and comment.
                            </p>
                        </div>
                        <a href="https://faceboook-clone.netlify.app/" class="project-img">
                            <img src={facebook} alt="not found"/>
                        </a>
                    </div>
                    <div class="project-item">
                        <div class="project-info">
                            <h1>Chat App <span>(application)</span></h1>
                            <div className='view-site'>
                                <a href="https://github.com/tohirbek009/chat-application">
                                    <GitHub className='fa-github' title="See Github Code" />
                                </a>
                                <a href="https://react-chat-applicationn.netlify.app/">
                                    <Web className='fa-link' title='See Github Code' />
                                </a>
                            </div>
                            <h2>Creating chat app is nice</h2>
                            <p>
                                Visit to this application and you can enter
                                as a tester user: <br/> <i>username👤: ForTesting,</i> 
                                <br/> <i>password🗝: test_chat_app</i><br/> 
                                In this app you can create new group and add some users, also
                                talk with your friend in all groups.
                            </p>
                        </div>
                        <a href="https://react-chat-applicationn.netlify.app/" class="project-img">
                            <img src={chat_app} alt="not found"/>
                        </a>
                    </div>
                    <div class="project-item">
                        <div class="project-info">
                            <h1>Tic Tac Toe <span>(game)</span></h1>
                            <div className='view-site'>
                                <a href="https://github.com/tohirbek009/tic-tac-toe">
                                    <GitHub className='fa-github' title="See Github Code" />
                                </a>
                                <a href="https://tic-tac-playing.netlify.app/">
                                    <Web className='fa-link' title='See Github Code' />
                                </a>
                            </div>
                            <h2>Play with your friend👥</h2>
                            <p>
                                This is a game in which two players seek in alternate turns to complete a row, 
                                a column, or a diagonal with either three O's or three X's drawn in the spaces of 
                                a grid of nine squares; noughts and crosses.<br/>Start to play this interesting game with your friend now!
                            </p>
                        </div>
                        <a href='https://tic-tac-playing.netlify.app/' class="project-img">
                            <img src={tic_tac_toe} alt="not found"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    {/* <!--End Project Section --> */}

    </div>
</section>

{/* <!--contact section start--> */}
<section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">Get in Touch</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur iure repellat
                    repudiandae soluta? Amet dolores odit reprehenderit temporibus voluptas!
                </p>
                <div class="icons">
                    <div class="row">
                        <Person className='i' />
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">Tohirbek Odilkuziyev</div>
                        </div>
                    </div>
                    <div class="row">
                        <LocationOn className='i' />
                        <div class="info">
                            <div class="head">Addres</div>
                            <div class="sub-title">Tashkent, Uzbekistan</div>
                        </div>
                    </div>
                    <div class="row">
                        <Email className='i' />
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">odilovtohirbek009@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">Massage me</div>
                <form action="#" onSubmit={sendEmail}>
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" name='name' required/>
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" name='email' required/>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" name='subject' required/>
                    </div>
                    <div class="field textare">
                        <textarea cols="30" rows="10" placeholder="Describe project.." name='message' required></textarea>
                    </div>
                    <div class="button">
                        <button type="submit">Send massage</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='social-links'>
            <a href='https://www.facebook.com/tohirbek.odilov.71' style={{color: 'inherit'}}><Facebook className='social-icon'/></a>
            <a href='https://www.linkedin.com/in/tohirbek-odilov-38058221b/' style={{color: 'inherit'}}><LinkedIn className='social-icon'/></a>
            <a href='https://www.instagram.com/tohirbekodilkuziyev/' style={{color: 'inherit'}}><Instagram className='social-icon'/></a>
            <a href='https://github.com/tohirbek009' style={{color: 'inherit'}}><GitHub className='social-icon'/></a>
            <a href='https://t.me/TUIT_student20' style={{color: 'inherit'}}><Telegram className='social-icon'/></a>
        </div>
    </div>
</section>
    </div>
  );
}

export default App;
