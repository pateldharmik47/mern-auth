import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
    const { currentUser } = useSelector(state => state.user);
    return (
        <div>
            <div className="bg-slate-200">
                <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                    <Link to="/">
                        <h1 className="font-bold">
                            Auth App
                        </h1>
                    </Link>
                    <ul className="flex gap-4">
                        <Link to="/">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to="about">
                            <li>
                                About
                            </li>
                        </Link>
                        <Link to="profile">
                            {console.log("Current User", currentUser)}

                            {currentUser ? (
                                <li>
                                    <img src={currentUser.profilePicture} alt="Profile" className="w-7 h-7 roundsed-full object-cover" />
                                </li>
                            ) : (
                                <li>
                                    Sign In
                                </li>
                            )}
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default Header;
