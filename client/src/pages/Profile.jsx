import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { currentUser } = useSelector(state => state.user);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileRef = useRef(null);
    // Image validation configuration
    const IMAGE_UPLOAD_LIMITS = {
        maxSizeInMB: 5,        // Maximum file size (5MB)
        allowedTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp'
        ],
    };

    // useEffect(() => {
    //     // console.log("selectedImage", selectedImage);
    //     let bannerImage = document.getElementById('bannerImg');
    //     let imgData = getBase64Image(bannerImage);
    //     localStorage.setItem("imgData", imgData);

    // }, [selectedImage])

    // useEffect(() => {
    //     var dataImage = localStorage.getItem('imgData');
    //     bannerImg = document.getElementById('tableBanner');
    //     bannerImg.src = "data:image/png;base64," + dataImage;

    // }, [])

    // function getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);

    //     var dataURL = canvas.toDataURL("image/png");

    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }
    // Validate image before upload
    const validateImage = (file) => {
        // 1. Check file size
        if (file.size > IMAGE_UPLOAD_LIMITS.maxSizeInMB * 1024 * 1024) {
            alert(`File size should be less than ${IMAGE_UPLOAD_LIMITS.maxSizeInMB}MB`);
            return false;
        }

        // 2. Check file type
        if (!IMAGE_UPLOAD_LIMITS.allowedTypes.includes(file.type)) {
            alert('Invalid file type. Only images are allowed.');
            return false;
        }
        return true;
    };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        try {
            // Validate image
            const isValidImage = await validateImage(file);

            if (!isValidImage) {
                // Clear file input if validation fails
                if (fileRef.current) {
                    fileRef.current.value = '';
                }
                return;
            }

            // Create preview URL
            const previewUrl = URL.createObjectURL(file);

            // Store image details
            // setSelectedImage({
            //     file: file,
            //     previewUrl: previewUrl,
            //     name: file.name,
            //     size: file.size,
            //     type: file.type
            // });
            setSelectedImage(file);

        } catch (error) {
            console.error('Image validation error', error);
            alert('Error processing image');
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7"> Profile </h1>
            <form className="flex flex-col gap-4">

                <input type="file" ref={fileRef} className="hidden" accept="image/jpeg,image/png,image/gif,image/webp"
                    onChange={(e) => handleFileChange(e)} />

                <img src={currentUser.profilePicture} alt="profile"
                    className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"
                    onClick={() => fileRef.current.click()} />

                <input defaultValue={currentUser.username} type="text" id="username" placeholder="Username"
                    className="bg-slate-100 rounded-lg p-3" />

                <input defaultValue={currentUser.email} type="email" id="email" placeholder="Email"
                    className="bg-slate-100 rounded-lg p-3" />

                <input type="text" id="password" placeholder="Password"
                    className="bg-slate-100 rounded-lg p-3" />

                <button className="bg-slate-700 text-white rounded-lg uppercase p-3
                hover:opacity-95 disabled:opacity-50">Update</button>
            </form>

            <div className="flex justify-between mt-5">
                <span className="text-red-700 cursor-pointer">Delete Account</span>
                <span className="text-red-700 cursor-pointer">Sign Out</span>
            </div>

        </div>
    )
}

export default Profile
