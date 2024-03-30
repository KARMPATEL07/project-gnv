// import React from 'react';
import '../../styles/person.css';

// const Person = ({ name, position, imageUrl }) => {
//     return (
//         <div className="person-container">
//             {/* <div className="oval-animation1"></div>
//             <div className="oval-animation2"></div> */}
//             <img src={imageUrl} alt={name} className="person-image" />
//             <div className="person-details-container">

//                 <div className="person-details">
//                     <div className="p-name">
//                         <h2>{name}</h2>
//                     </div>
//                     <div className="p-position">
//                         <p>{position}</p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Person;
import React from 'react';
// import './ProfileCard.css'; // Styles for the profile card

const ProfileCard = ({ name, position, imageUrl }) => {
    return (
        <div className="profile-wrapper">
            <div className="profile-card">
                <div className="profile-ring"></div>
                <div className="profile-img">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="profile-details">
                    <h2>{name}</h2>
                    <p>{position}</p>
                    <div className="overlay"></div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProfileCard;
