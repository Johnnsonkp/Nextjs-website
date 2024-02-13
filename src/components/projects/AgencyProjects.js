import { Project } from "@/pages/projects";
import React from "react";
import bazilianleaves from "../../../public/images/brazilianleaves.png";
import ekohAgency from "../../../public/AgencyProjects/ekoh-agency.png";
import helenansell from "../../../public/images/helenansell-2.png";
import pressplay from "../../../public/images/pressplay-2.png";
import sissy from "../../../public/images/sissy.png";
import theBookGrocer from "../../../public/AgencyProjects/theBookGrocer-agency.png";

function AgencyProjects() {
  return (
    <>
      <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-0 sm:!grid-cols-none sm:grid-cols-auto sm:!flex-col sm:justify-between">
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"Ekoh-store"}
            img={ekohAgency}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>
                    Looped throught products, to pick out and display best
                    seller products on home page
                  </li>
                  <li>
                    Lazy loading images on page, specifically on instagram
                    carousel. siginificantly reducing website load times
                  </li>
                  <li>Design tweaks to Hero section, adding slick slider</li>
                  <li>
                    Design tweaks to the footer, added social links + SEO
                    content to footer
                  </li>
                </ul>
              </>
            }
            link={"https://ekoh-store.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"The Book Grocer"}
            img={theBookGrocer}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>Designed the hero section of the home page.</li>
                  <li>Created trust bar section on homepage.</li>
                  <li>Created multiple collections on the homepage.</li>
                  <li>
                    Added and styled testimonial slider to the bottom of the
                    home page.
                  </li>
                </ul>
              </>
            }
            link={"https://bookgrocer.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"Sissy Mt Eliza"}
            img={sissy}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>
                    Full redesign of the homepage, including theme colour.
                  </li>
                  <li>Created trust bar section on homepage.</li>
                  <li>Created multiple collections on the homepage.</li>
                  <li>
                    Added and styled testimonial slider to the bottom of the
                    home page.
                  </li>
                  <li>Added newsletter signup section above the footer</li>
                </ul>
              </>
            }
            link={"https://sissymteliza.com.au/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"Helen Ansell"}
            img={helenansell}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>Worked on the collections page</li>
                  <li>
                    Added and styled testimonial slider to collections page.
                  </li>
                </ul>
              </>
            }
            link={"https://helenansell.com/"}
            github={"/"}
            type={"Wordpress"}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"Brazilian Leaves"}
            img={bazilianleaves}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>
                    Added and styled the "in the press" trustbar section on
                    homepage.
                  </li>
                  <li>
                    Added and styled the "Shop by brand" section above the
                    footer
                  </li>
                  <li>
                    Created and styled the custom page "press" to design
                    specifications.
                  </li>
                </ul>
              </>
            }
            link={"https://www.brazilianleaves.com.au/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
          <Project
            title={"Press Play"}
            img={pressplay}
            summary={
              <>
                <p>CRO changes include:</p>
                <ul className="list-disc ml-5">
                  <li>Added top bar annpucement section to homepage.</li>
                  <li>Minor tweaks to product page</li>
                  <li>Optimised product meta descriptions for SEO.</li>
                </ul>
              </>
            }
            link={"https://pressplaycosmetics.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
      </div>
    </>
  );
}

export default AgencyProjects;
