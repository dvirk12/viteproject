import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode } = context;

    const [comments, setComments] = useState({});
    const [allComments, setAllComments] = useState({});

    // Sort blogPosts by date in descending order
    const blogPosts = [
        {
            id: 1,
            date: '20 June, 2024',
            title: 'frank123_z00',
            user: 'frank123',
            description: `In Python, I have code that handles exceptions and prints error codes and messages.

try:
    somecode() #raises NameError
except Exception as e:
    print('Error! Code: {c}, Message: {m}'.format(c=e.code, m=str(e)))

However, e.code is not the proper way to get the error name (NameError), and I cannot find the answer to this. How am I supposed to get the error code?`,
            image: 'https://via.placeholder.com/400'
        },
        {
            id: 2,
            date: '10 May 2024',
            title: 'john123: Deployment Issue with PieCloudDB',
            user: 'john123',
            description: `I recently tried to deploy PieCloudDB Database Community Edition 2.14 on a single-node cluster using Ubuntu Server 20.04, but an error related to network configuration occurred during the installation process.

Is there any extra changes needed on the configuration files?`,
            image: 'https://via.placeholder.com/400'
        },
        {
            id: 3,
            date: '15 July 2024',
            title: 'TimmyTiny_09031923: Top Automated Testing Tools in 2023',
            user: 'TimmyTiny',
            description: 'Explore the top automated testing tools of 2023 and find out which ones are best suited for your projects.',
            image: 'https://via.placeholder.com/400'
        },
        {
            id: 4,
            date: '21 July 2024',
            title: 'testuser_dvirk: Good Networking Troubleshooting Resources',
            user: 'testuser_dvirk',
            description: `Hi all,

Looking to brush up a little more on some proper networking troubleshooting resources - while I believe my current process is sound, I'm interested to see if there are any more standardized processes when troubleshooting. I do understand that this could be incredibly broad depending on layer, protocol etc., but I'm genuinely interested to see if anyone uses anything more 'official'.

Thanks in advance!`,
            image: 'https://via.placeholder.com/400'
        },
        {
            id: 5,
            date: '22 July 2024',
            title: 'gameDevFanatic: What Software Do You Use to Create Your Games?',
            user: 'gameDevFanatic',
            description: `Hello everyone,

I recently came across a fantastic thread here that outlined the essential steps developers should take before releasing a game. This got me thinking about other valuable information that could benefit new developers interested in game development.

In addition to the pre-release checklist, I’d like to start a discussion on the software tools used in game development. Specifically, I want to compile a list of the software tools I personally use for developing my games, such as *Monkeys & Dragons* and *Galactic Crew*. 

**Here's what I’m looking for:**

- **Software Tools**: What tools and software do you use for game development?
- **Projects**: What projects are you currently working on?

Please share the software tools you use and the projects you’re working on. I will update the list regularly to create a comprehensive reference for other developers. The goal is not to identify the "best" software available but to showcase the tools that are actively used by our community.

Your input will help create a valuable resource for developers at all stages, providing insights into various tools and approaches used in game development.

Looking forward to hearing from you and building this community resource together!

Best regards,  
gamedev`,
            image: 'https://via.placeholder.com/400'
        }
    ].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date

    const handleCommentChange = (e, postId) => {
        setComments({
            ...comments,
            [postId]: e.target.value
        });
    };

    const handleCommentSubmit = (e, postId) => {
        e.preventDefault();
        if (comments[postId]) {
            setAllComments({
                ...allComments,
                [postId]: [...(allComments[postId] || []), { username: 'currentuser', content: comments[postId] }]
            });
            setComments({
                ...comments,
                [postId]: ''
            });
        }
    };

    return (
        <Layout>
            <section className={`body-font ${mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
                <div className="container px-5 py-12 mx-auto max-w-7xl">
                    {/* Top Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold mb-4">
                            Community Posts
                        </h1>
                    </div>
                    {/* Main Content */}
                    <div className="overflow-x-auto">
                        <div className="flex flex-col space-y-4">
                            {blogPosts.map(post => (
                                <div className="w-full max-w-xl mx-auto" key={post.id}>
                                    <div
                                        className={`flex p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${mode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                                    >
                                        {/* User Avatar */}
                                        <div className="w-16 h-16 mr-4 rounded-full bg-gray-300 overflow-hidden">
                                            <img className="w-full h-full object-cover" src={`https://ui-avatars.com/api/?name=${post.user}`} alt={post.user} />
                                        </div>

                                        {/* Post Content */}
                                        <div className="flex-1">
                                            {/* Post Metadata */}
                                            <div className="flex items-center mb-2">
                                                <h2 className={`text-sm font-medium ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {post.user}
                                                </h2>
                                                <span className={`mx-2 text-xs ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>•</span>
                                                <span className={`text-xs ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {post.date}
                                                </span>
                                            </div>

                                            {/* Post Title */}
                                            <h1 className={`text-xl font-semibold mb-3 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                                {post.title}
                                            </h1>

                                            {/* Post Description */}
                                            <p className={`leading-relaxed mb-3 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                                                {post.description}
                                            </p>

                                            {/* Comments Section */}
                                            <div className="mt-4">
                                                <h3 className={`text-sm font-semibold ${mode === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Comments:</h3>
                                                {/* Display comments */}
                                                <ul className="mb-4">
                                                    {(allComments[post.id] || []).map((comment, index) => (
                                                        <li key={index} className={`mb-2 p-2 border-b ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
                                                            <span className={`font-semibold ${mode === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{comment.username}:</span> {comment.content}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                                                    <textarea
                                                        className={`w-full p-2 mb-2 border rounded-lg ${mode === 'dark' ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                                        rows="3"
                                                        placeholder="Add a comment..."
                                                        value={comments[post.id] || ''}
                                                        onChange={(e) => handleCommentChange(e, post.id)}
                                                    />
                                                    <button
                                                        type="submit"
                                                        className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${mode === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-800'}`}
                                                    >
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AllBlogs;