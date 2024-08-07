import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@material-tailwind/react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, fireDb } from '../../firebase/FirebaseConfig';
import { useNavigate } from 'react-router';
import toast from "react-hot-toast";

function CreateBlog() {
    const { mode } = useContext(myContext);
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
    });
    const [thumbnail, setThumbnail] = useState(null);

    const createMarkup = (html) => {
        return { __html: html };
    };

    const uploadImage = () => {
        if (!thumbnail) return;
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const blogPostRef = collection(fireDb, "blogPost");
                const communityPostRef = collection(fireDb, "communityPosts");

                const blogData = {
                    title: blogs.title,
                    category: blogs.category,
                    content: blogs.content,
                    thumbnail: url,
                    time: Timestamp.now(),
                    date: new Date().toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }),
                };

                try {
                    addDoc(blogPostRef, blogData);
                    addDoc(communityPostRef, blogData);
                    navigate('/dashboard');
                    toast.success('Post Added Successfully');
                } catch (error) {
                    toast.error('Failed to add post');
                    console.log(error);
                }
            });
        });
    };

    const addPost = () => {
        if (!blogs.title || !blogs.category || !blogs.content) {
            toast.error("All fields are required");
            return;
        }
        uploadImage();
    };

    return (
        <div className="py-10">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Back Button */}
                <Button
                    className={`mb-5 flex items-center ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'} bg-transparent border-0`}
                    onClick={() => navigate('/dashboard')}
                    style={{
                        color: mode === 'dark' ? 'text-gray-100' : 'text-gray-900',
                        fontWeight: 'bold'
                    }}
                >
                    &larr; Back
                </Button>
                
                {/* Thumbnail Input */}
                <div className="mb-3">
                    <input
                        type="file"
                        accept="image/*"
                        className="shadow-inner w-full rounded-md p-1.5 outline-none"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                </div>
                {/* Title Input */}
                <div className="mb-3">
                    <input
                        className={`shadow-inner w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Title"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        name="title"
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                        value={blogs.title}
                    />
                </div>
                {/* Category Input */}
                <div className="mb-3">
                    <input
                        className={`shadow-inner w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Category"
                        style={{
                            background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)',
                        }}
                        name="category"
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                        value={blogs.category}
                    />
                </div>
                {/* Editor */}
                <Editor
                    apiKey='qtoqag2bf4twq0bw0mfqlgpbq559c5kfdu8y0hb5qkkuvw2v'
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ ...blogs, content: newValue });
                    }}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                />
                {/* Submit Button */}
                <Button
                    className="w-full mt-5"
                    onClick={addPost}
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                    }}
                >
                    Submit
                </Button>
                {/* Preview Section */}
                <div className="">
                    <h1 className="text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                        <div
                            className={`text-lg ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                            dangerouslySetInnerHTML={createMarkup(blogs.content)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
