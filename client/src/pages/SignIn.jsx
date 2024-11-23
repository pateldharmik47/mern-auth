import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            if (data.success === false) {
                dispatch(signInFailure());
                return;
            }
            navigate("/");
        } catch (error) {
            dispatch(signInFailure(error));
        }

    }

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">
                Sign In
            </h1>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
                <input type="email"
                    placeholder="Email"
                    id="email"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={(e) => handleChange(e)}
                />
                <input type="password"
                    placeholder="Password"
                    id="password"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={(e) => handleChange(e)}
                />
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                    disabled={loading}> {loading ? "Loading..." : "Sign In"} </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Do not have an account?</p>
                <Link to="/sign-up">
                    <span className="text-blue-500 cursor-pointer">Sign up</span>
                </Link>
            </div>
            <p className="text-red-500 mt-5">
                {error ? error.message || "Something went wrong!" : ""}
            </p>
        </div>
    )
}

export default SignIn
