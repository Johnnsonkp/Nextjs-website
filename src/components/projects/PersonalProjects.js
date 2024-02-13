import { FeaturedProject, Project } from "@/pages/projects";

import CozyTees from "../../../public/images/projects/cozy-landing.png";
import React from "react";
import portfolio from "../../../public/images/dev-portfolio.png";
import project1 from "../../../public/images/projects/taskSprinterV3-2.png";
import project2 from "../../../public/images/projects/itsAVibe.png";
import project3 from "../../../public/images/projects/cityStaysMelb.png";

function PersonalProjects() {
  return (
    <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-0 sm:!grid-cols-none sm:grid-cols-auto sm:!flex-col sm:justify-between">
      <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <FeaturedProject
          title={"Productivity System **Prototype"}
          img={project1}
          summary={
            "A complete productivity App created with React on the frontend, nodeJS and express for the server and Notion as the database. Developed to allow you stay organized, efficient, and focused on your daily, weekly and monthly goals. Still in development phase, adding a fulll fledge rails backend soon."
          }
          link={"https://tasksprinterv3.netlify.app/"}
          github={"https://github.com/Johnnsonkp/TaskSprinterv3"}
          type={"Featured Project"}
        />
      </div>
      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"City Stays Melbourne "}
          img={project3}
          summary={
            "A direct booking website for my vacation rental business. Built using wordpress with my own personal customistions. Connected to my PMS, it enables direct bookings while synchronizing effortlessly with my OTA calendar (Airbnb, VRBO), preventing any potential double bookings and conflicts. "
          }
          link={"https://citystaysmelbourne.com.au/"}
          github={"/"}
          type={"Direct Booking Website"}
        />
      </div>
      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"CozyTees"}
          img={CozyTees}
          summary={
            "Cozy tees is a two-sided-marketplace application on rails that facilites the buying and selling of T-shirts and sporting jerseys. **Unfortunatly heroku the (hosting platform) stopped their free tier and took down the database. Currently working to get it back up."
          }
          link={"https://cozy-tees-app.herokuapp.com/"}
          github={"https://github.com/Johnnsonkp/cozy_tees"}
          type={"Two Way Marketplace App"}
        />
      </div>
      <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <FeaturedProject
          title={"Its A Vibe"}
          img={project2}
          summary={
            "Vibe is a mixture of a playlist wizard, a psychologist and that one friend that DJs at all your parties. You tell it how you feel and what you fancy and it makes you a perfect playlist to Vibe to!."
          }
          link={"https://its-a-vibe.netlify.app/"}
          github={"https://github.com/its-a-vibe/vibe"}
          type={"Hackerton Project"}
        />
      </div>
      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"Nextjs Portfolio Website"}
          img={portfolio}
          summary={
            "A dynamic Nextjs Portfolio website, built with tailwind CSS and Framer Motion."
          }
          link={"https://www.chinonso.io/"}
          github={"https://github.com/Johnnsonkp/Nextjs-website"}
          type={"Portfolio Website"}
        />
      </div>
    </div>
  );
}

export default PersonalProjects;
