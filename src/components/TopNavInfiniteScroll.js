import "../styles/Home.module.css";

import React from "react";
import styles from "./index.module.css";
import { useEffect } from "react";

export default function TopNavInfiniteScroll() {
  useEffect(() => {
    const list = document.querySelector("#list");
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div
      id="carousel-container"
      data-animated
      className={`dark:bg-light dark:color-dark ${styles.carouselContainer}`}
    >
      <ul id="list" className={`dark:text-dark ${styles.list}`}>
        <li>
          <i className={`fa-solid fa-bullhorn`}></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR WORK!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR WORK!{" "}
        </li>
      </ul>
    </div>
  );
}
