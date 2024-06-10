import { FeaturedProject, Project } from "@/pages/projects";

import CozyTees from "../../../public/images/projects/cozy-landing.png";
import React from "react";
import portfolio from "../../../public/images/dev-portfolio.png";
import project1 from "../../../public/images/projects/taskSprinterV3-2.png";
import project2 from "../../../public/images/projects/itsAVibe.png";
import project3 from "../../../public/images/projects/cityStaysMelb.png";
import project4 from "../../../public/images/projects/webscraper.png";
import project5 from "../../../public/images/projects/workflows.png";
import project6 from "../../../public/images/projects/ecom-arb.png";
import project7 from "../../../public/images/projects/AlphahMock.png";

function PersonalProjects() {
  return (
    <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-0 sm:!grid-cols-none sm:grid-cols-auto sm:!flex-col sm:justify-between">
      <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <FeaturedProject
          title={"Workflows Client"}
          img={project5}
          summary={
            "Workflows client is a simple project management application designed with React on the front end and Rails on the back end. With the mission to boost your productivity by prioritizing quality over quantity. Transform your work routine and achieve your goals with standout features such as Gamifying your productity, Setting and achieving milsetones and the ability to track progress over time."
          }
          link={"https://workflow-client.netlify.app/"}
          github={"https://github.com/Johnnsonkp/workflow-client"}
          type={"Featured Project"}
        />
      </div>

      {/* <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <FeaturedProject
          title={"Ecommerce Web Scraper [**Still In Development]"}
          img={project4}
          summary={
            "A web scraping application, built using Ruby on Rails, leveraging the power of web scraping technology, the app extracts item listings from Gumtree marketplace. Users have the flexibility to apply custom price markups before publishing the listings onto Facebook Marketplace."
          }
          link={"https://fb-scraper-old-paper-2255.fly.dev/"}
          github={"https://github.com/Johnnsonkp/webscrape-dropshipper"}
          type={"Featured Project"}
        />
      </div> */}

      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"Ecommerce Web Scraper [Still In Development]"}
          img={project6}
          summary={
            "A web scraping application, built using Ruby on Rails, leveraging the power of web scraping technology, the app extracts item listings from Gumtree marketplace. Users have the flexibility to apply custom price markups before publishing the listings onto Facebook Marketplace."
          }
          link={"https://fb-scraper-old-paper-2255.fly.dev/"}
          github={"https://github.com/Johnnsonkp/webscrape-dropshipper"}
          type={"Featured Project"}
        />
      </div>

      {/* <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"Productivity System Prototype "}
          img={project1}
          summary={
            "A complete productivity App created with React on the frontend, nodeJS and express for the server and Notion as the database. Developed to allow you stay organized, efficient, and focused on your daily, weekly and monthly goals. Still in development phase, adding a fulll fledge rails backend soon."
          }
          link={"https://tasksprinterv3.netlify.app/"}
          github={"https://github.com/Johnnsonkp/TaskSprinterv3"}
          type={"Productivity System"}
        />
      </div> */}
      
      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"City Stays Melbourne "}
          img={project3}
          summary={
            "A direct booking website for a vacation rental business. Built using wordpress with personal customistions. Connected to a PMS, it enables direct bookings while synchronizing effortlessly with my OTA calendar (Airbnb, VRBO), preventing any potential double bookings and conflicts. "
          }
          link={"https://citystaysmelbourne.com.au/"}
          github={"/"}
          type={"Direct Booking Website"}
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
            "A dynamic and engaging portfolio website built with Next.js, styled with Tailwind CSS, and animated using Framer Motion. This project offers a modern and responsive platform to showcase my CV and projects, featuring smooth animations, sleek design, and an intuitive user experience. "
          }
          link={"https://www.chinonso.io/"}
          github={"https://github.com/Johnnsonkp/Nextjs-website"}
          type={"Portfolio Website"}
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
      <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
        <Project
          title={"Alphah Mockup"}
          img={project7}
          summary={
            "An E-commerce mock up website built with react using vanilla CSS. This project showcases a responsive and user-friendly interface, complete with essential e-commerce functionalities such as product listings, detailed product pages and a shopping cart." 
          }
          link={"https://alphahmockup.netlify.app/"}
          github={"https://github.com/Johnnsonkp/alphaH_mockup"}
          type={"E-commerce Website mockup"}
        />
      </div>
    </div>
  );
}

export default PersonalProjects;