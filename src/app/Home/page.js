"use client";
import React, { useState } from "react";
import {
  FaBell,
  FaBookmark,
  FaBrush,
  FaCompass,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { MdSettings, MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useClickOutside } from "@mantine/hooks";
import userData from "@/app/UserData";
import Post from "@/app/components/Post";

const links = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Explore",
    icon: <FaCompass />,
  },
  {
    name: "Notifications",
    icon: <FaBell />,
  },
  {
    name: "Messages",
    icon: <FaEnvelope />,
  },
  {
    name: "Bookmarks",
    icon: <FaBookmark />,
  },
  {
    name: "Theme",
    icon: <FaBrush />,
  },
  {
    name: "Settings",
    icon: <MdSettings />,
  },
];

const Page = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside(() => setIsFocused(false));
  return (
    <>
      <div className="mainContainer">
        <div className="leftSection">
          <div className="userProfileWidget">
            <div className="profileImage">
              <img src={"/assets/image/avatar_default.jpg"} alt="" />
            </div>
            <div className="userDetails">
              <div className="name">John Doe</div>
              <div className="username">@johndoe</div>
            </div>
          </div>

          <div className="inSidebar">
            {links.map((link, index) => {
              return (
                <div className="link" key={index}>
                  <div className="icon">{link.icon}</div>
                  <h3>{link.name}</h3>
                </div>
              );
            })}
          </div>

          <label htmlFor="createNewPost" className="inBtn sidebarCreateBtn">
            Create Post
          </label>
        </div>

        <div className="mainSection">
          <div className="storiesWrapper">
            <div className="storiesWidget">
              {userData.map((user, index) => {
                return (
                  <div className="story" key={index}>
                    <div className="overlay"></div>
                    <img src={`${user.storyImage}`} alt="" />
                    <img
                      src={`${user.profilePic}`}
                      alt=""
                      className="profileImage"
                    />
                    <div className="name">{user.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            ref={ref}
            className={`createPostWidget ${isFocused ? "active" : ""}`}
          >
            <div className="createInput">
              <img src="/assets/image/avatar_default.jpg" alt="" />
              <input
                type="text"
                placeholder="What's on your mind, Jhon Doe?"
                id="createNewPost"
                onFocus={() => setIsFocused(true)}
              />
              <button className="inBtn">Post</button>
            </div>
            <div className="otherOptions">
              <div className="option">
                <BsFillCameraVideoFill />
                <span>Go Live</span>
              </div>
              <div className="option">
                <MdInsertPhoto />
                <span>Photo/Video</span>
              </div>
              <div className="option">
                <MdEmojiEmotions />
                <span>Feeling/Activity</span>
              </div>
            </div>
          </div>
          {userData.map((user, index) => {
            return <Post key={index} userData={user} />
          })}
        </div>

        <div className="rightSection">
          <div className="requestWidget">
            <h3>Requests</h3>
            <div className="requestProfile">
              <div className="details">
                <div className="profileImage">
                  <img src={"/assets/image/avatar_default.jpg"} alt="" />
                </div>
                <div className="userDetails">
                  <div className="name">Sophie Alexander</div>
                  <div className="username">@johndoe</div>
                </div>
              </div>
              <div className="actions">
                <button className="actionBtn">Accept</button>
                <button className="actionBtn">Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
