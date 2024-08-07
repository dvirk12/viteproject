import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import sharingLogo from '../../assets/sharingLogo.png'; // Import the image

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
            {/* Hero Section */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image */}
                            <div className="flex justify-center">
                                <img src={sharingLogo} alt="Sharing Logo" className="w-32 h-32" /> {/* Add width and height for better control */}
                            </div>

                            {/* Text */}
                            <h1 className='text-3xl text-white font-bold'>Automated Testing Community</h1>
                        </div>

                        {/* Paragraph */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs and tutorials contributed by ATC
                        </p>

                        {/* Removed Link to Documentation */}
                    </div>
                </main>
            </div>
        </section>
    );
}

export default HeroSection;
