import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import myContext from '../../context/data/myContext';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;
  const navigate = useNavigate(); // Initialize navigate

  const blogPosts = [
    {
      id: 1,
      date: '17 July 2024',
      title: 'Introduction to Automated Testing',
      description: 'Learn the basics of automated testing, including its benefits and common tools used in the industry.',
    },
    {
      id: 2,
      date: '10 July 2024',
      title: 'Best Practices for Writing Test Cases',
      description: 'Discover best practices for writing effective and efficient test cases to ensure robust software quality.',
    },
    {
      id: 3,
      date: '15 July 2024',
      title: 'Top Automated Testing Tools in 2023',
      description: 'Explore the top automated testing tools of 2023 and find out which ones are best suited for your projects.',
    },
    {
      id: 4,
      date: '15 July 2024',
      title: 'Documentation',
      description: 'Learn How To Document Automated Testing',
    },
    {
      id: 5,
      date: '',
      title: 'Survey for Feedback',
      description: 'We value your feedback. Please take a moment to complete our survey.',
    }
  ];

  // Navigation function for card click
  const handleCardClick = (id) => {
    navigate(`/bloginfo/${id}`);
  };

  // Navigation function for survey button click
  const handleSurveyClick = () => {
    navigate('/survey');
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {blogPosts.map((post) => (
              <div 
                className={`p-4 ${post.id === 5 ? 'md:w-1/2 lg:w-1/3' : 'md:w-1/3'} transition-transform duration-300`} 
                key={post.id}
              >
                <div
                  style={{
                    background: post.id === 5
                      ? (mode === 'dark' ? 'rgb(100, 149, 237)' : 'rgb(100, 149, 237)') // Blue color
                      : (mode === 'dark' ? 'rgb(30, 41, 59)' : 'white'),
                    borderBottom: post.id === 5
                      ? (mode === 'dark' ? '4px solid rgb(70, 130, 180)' : '4px solid rgb(70, 130, 180)') // Darker blue for border
                      : (mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'),
                    transform: post.id === 5 ? 'scale(1.05)' : 'none' // Scale up the card
                  }}
                  className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'} rounded-xl overflow-hidden`}
                  onClick={() => handleCardClick(post.id)} // Add onClick handler
                >
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                      {post.date}
                    </h2>
                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-5 space-x-4">
            <Button
              style={{
                background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
              }}
            >
              See More
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
