import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,  
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://www.al.al.leg.br/imagens/Twitterlogo.png/image"
        alt="logo"
        className="logo"
      />

      <nav className="main-navegation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash /> <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Messages</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <span>Tweet</span>
      </button>
    </aside>
  );
}
