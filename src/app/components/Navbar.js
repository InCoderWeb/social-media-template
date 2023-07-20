"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdSearch, MdClose, MdSettings } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { RiQuestionFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [ProfileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".userProfile")) {
        setProfileMenu(false);
      }
    });
  }, []);

  return (
    <>
      <div className="inNavbar">
        <Link href={"/"} className="inLogo">
          InSocial
        </Link>
        <div className={`inSearch ${isFocused ? "inSearchFocused" : ""}`}>
          <div className="inSearchWrapper">
            <div className="inSearchIcon">
              <MdSearch className="inIcon" />
            </div>
            <input
              type="text"
              onClick={() => setIsFocused(true)}
              placeholder="Search"
              onBlur={() => setIsFocused(false)}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div
              className={`inSearchCloseBtn ${
                searchValue.length >= 1 ? "inSearchCloseBtnActive" : ""
              }`}
            >
              <MdClose className="inIcon" onClick={() => setSearchValue("")} />
            </div>
          </div>
        </div>
        <div className="inNavRightOptions">
          <div className="mobileSearchBtn">
            <MdSearch />
          </div>
          <label className="inBtn" htmlFor="createNewPost">Create</label>
          <div className="userProfile">
            <div
              className="userImage"
              onClick={() => setProfileMenu(!ProfileMenu)}
            >
              <img
                src={"/assets/image/avatar_default.jpg"}
                alt="User Profile Pic"
              />
            </div>
            <motion.div
              className="userProfileDropdown"
              initial={{ y: 40, opacity: 0, pointerEvents: "none" }}
              animate={{
                y: !ProfileMenu ? -30 : [0, 30, 10],
                opacity: ProfileMenu ? 1 : 0,
                pointerEvents: ProfileMenu ? "auto" : "none",
                zIndex: 999999
              }}
              transition={{ duration: 0.48 }}
            >
              <div className="profileWrapper">
                <img
                  src={"/assets/image/avatar_default.jpg"}
                  alt="User Profile Pic"
                />
                <div className="profileData">
                  <div className="name">John Doe</div>
                  <span className="seeProfile">See Profile</span>
                </div>
              </div>
              <div className="linksWrapper">
                <div className="link">
                  <div className="leftSide">
                    <span className="icon">
                      <MdSettings />
                    </span>
                    <span className="name">Settings & Privacy</span>
                  </div>
                  <span className="actionIcon">
                    <FaAngleRight />
                  </span>
                </div>
                <div className="link">
                  <div className="leftSide">
                    <span className="icon">
                      <RiQuestionFill />
                    </span>
                    <span className="name">Help & Support</span>
                  </div>
                  <span className="actionIcon">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
