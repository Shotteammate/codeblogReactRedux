import React from 'react';
import './Profile.css';

const Profile = () => {
  // Get the modal
  let modal = document.getElementById("myModal");

  // When the user clicks on the button, open the modal
  const handleOpenModalBox = () => {
    if(modal){
      modal.style.display = "block";
    }else {
      modal = document.getElementById("myModal");
      modal.style.display = "block";
      //console.log("the style not onload: "+modal);
    }
  }

  // When the user clicks on <span> (x), close the modal
  const handleCloseModal = () => {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const handleProfileClick = (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/dickson-pun-030846193/");
  }

  return (
    <React.Fragment>
      <div className="container white profileStyle">
        {/* profile */}
        <div className="btnWrapper">
          <img className="profile-photo"
            src="https://media.licdn.com/dms/image/C5103AQFRX5stKAxzHQ/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=gCpyUQ76yBtbkI5EXFjXNqtOGnqzdo68iepw9k5y0v0"
            onClick={handleProfileClick}
          />
        </div>
        <div className="myname t-16 t-black t-normal">Dickson PUN</div>
        <div className="t-12 t-black t-normal">Web Developer (React)</div>
        <div >
          <ul className="profile-info-ul">
            <li className="t-11 t-black t-normal inline-block">Hong Kong</li>
            <li className="t-11 t-bold" onClick={handleOpenModalBox}>Contact info</li>
          </ul>
        </div>
      </div>

      {/* ModalBox - profile (default: hidden)*/}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <h5>Dickson PUN</h5>
          <hr />
          <span className="t-15 t-black t-normal">Contact Info</span>

          <div className="contactList">
            <img className="LinkedInImg" />
            <ul>
              <li>Your Profile</li>
              <li><a onClick={handleProfileClick}>linkedin.com/in/dickson-pun-030846193</a></li>
            </ul>
          </div>
          <div className="contactList">
            <img className="EmailImg" />
            <ul>
              <li>Email</li>
              <li><span>shotteammate@gmail.com</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile;
