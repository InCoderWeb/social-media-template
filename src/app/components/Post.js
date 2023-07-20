import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import {
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineBookmark,
} from "react-icons/hi2";
import { HiOutlineShare } from "react-icons/hi";

const Post = ({userData}) => {
  return (
    <>
      <div className="postWrapper">
        <div className="header">
          <div className="left">
            <img
              src={`${userData.profilePic}`}
              alt=""
              className="profileImg"
            />
            <div className="userDetails">
              <div className="name">{userData.name}</div>
              <div className="feeling">is feeling happy with @johndoe</div>
            </div>
          </div>
          <div className="right">
            <div className="option">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="mainPostContent">
          <img src={userData.postImg} alt="" className="postImage" />
        </div>
        <div className="postFooter">
          <div className="postActions">
            <div className="left">
              <div className="likeBtn">
                <HiOutlineHeart />
              </div>
              <div className="commentBtn">
                <HiOutlineChatBubbleOvalLeftEllipsis />
              </div>
              <div className="shareBtn">
                <HiOutlineShare />
              </div>
            </div>
            <div className="right">
              <div className="saveBtn">
                <HiOutlineBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
