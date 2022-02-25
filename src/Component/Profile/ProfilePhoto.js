import React from 'react' ;
import profImg from './img/ProImg.jpg';
import './css/Profile.css';

const ProfilePhoto = () => {
  return (
    <div>
        <br />
        <img className='proimg' width={'220px'} src={profImg} alt="img in Source" />
    </div>
  )
}

export default ProfilePhoto
