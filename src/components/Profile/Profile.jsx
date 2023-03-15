import React from 'react'
import './Profile.css'
import Omen from '../../assets/Omen.png'
import Pfp from '../../assets/default_cat_pfp2.jpg'
import Developer from '../../assets/undraw_developer_activity.svg'
import ProfileDetails from '../../assets/undraw_profile_details.svg'
import Certificate from '../../assets/undraw_certificate.svg'
import { Abilities } from '../../Data/abilities'

const Profile = () => {
  return (
    <div>
      <div className='div-image'>
        <img src={Developer} alt="developer" />
      </div>
      <div className="container fst-banner">
        <h1>Hi! I'm Vicente Palma </h1>
        <h4>A Front-End web developer</h4>
      </div>
      <div className="main-div">
        <div id='profile' className="profile-div">
          <div className='profile-img-div'>
            <img src={ProfileDetails} alt="" />
          </div>
          <div className="profile-container">
            <div className='profile'>
              <img src={Pfp} alt="Me" />
              <div className='descript-div'>
                <h2>Hi!, I'm Vicente Palma</h2>
                <p>I'm a selftaught web developer based in Santa Cruz, Chile at the moment, within my proyects and abilities section you will know what i'm capable of about web aplications, i'm a friendly co-worker i can adapt myself easily to any situation and i do like challenges so i can prove my value. I also have a certificated intermedium level of English and goals of learn backend and gaming code </p>
              </div>
            </div>
          </div>
        </div>
        
        <div id='abilities' className='abilities'>
          <h2>Abilities, Languages and Tools</h2>
          <div className="abilities-div">
            {Abilities.map(({ name }) => (
              <div className='ability'>
                <h3>{name}</h3>
              </div>
            ))}
          </div>    
        </div>
        <div id='education' className='education-div'>            
          <div className='education'>
            <h2>Courses and Certificates</h2>
            <details>
              <summary> HTML, CSS, JS and NodeJS course, Udemy</summary>
              <a target={'_blank'} href="https://www.ude.my/UC-34fa3dad-e274-431a-bfa4-e1a3d95681ef/">Course Certificate</a>
            </details>
            <details>
              <summary> IELTS Certificated</summary>
              <a href="#">Test Certificate</a>
            </details>
            <details>
              <summary> Coming Soon... Fullstack developer, codecademy </summary>
              <a href="#">Course Certificate</a>
            </details>
            <details>
              <summary> Coming Soon... Python, jovenes programadores</summary>
              <a  href="#">Course Certificate</a>
            </details>
          </div>
          <div className='education-img-div'>
            <img src={Certificate} alt="" />
          </div>
        </div>
        <footer className='footer'>
          <p>Copyright © 2023 Vicente Palma. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Profile