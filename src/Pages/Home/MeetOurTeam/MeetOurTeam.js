import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="w-4/5 mx-auto my-20">
      <h2 className="text-3xl font-semibold text-black mb-2">
        Our Proffesional Chauffeurs
      </h2>
      <h6 className="text-orange-400 mb-6">MEET OUR TEAM</h6>
      <hr />
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div></div>
        <div>
          <img
            src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-team-img-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
