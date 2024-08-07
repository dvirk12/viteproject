import React from 'react';
import { useParams } from 'react-router-dom';
import automatedTestingImage from '../../assets/automated_testing.jpg'; // Import image
import bestpracticesImage from '../../assets/bestpractices.jpg';
import toolImage from '../../assets/toolsImage.png';
import checkmark from '../../assets/checkmark.jpg';
import survey from '../../assets/survey.png';

const blogPosts = [
  {
    id: 1,
    date: '17 July 2024',
    title: 'Introduction to Automated Testing',
    description: `
      <h2>Automated Testing Overview</h2>
      <p>Automated Testing refers to the use of specialized software tools to execute pre-scripted tests on a software application automatically. This contrasts with manual testing, where tests are performed by human testers. Automated tests can cover a wide range of testing types, including unit tests, integration tests, functional tests, and end-to-end tests.</p>

      <h2>Benefits of Automated Testing</h2>
      <ul>
        <li><strong>Efficiency:</strong> Automated tests can be run quickly and repeatedly, reducing the time required for testing compared to manual methods. This allows for more frequent testing and faster feedback.</li>
        <li><strong>Consistency:</strong> Automation ensures that tests are executed in the same manner every time, reducing human error and inconsistencies in test execution.</li>
        <li><strong>Increased Coverage:</strong> Automated tests can cover a larger number of test cases and scenarios, including edge cases, which might be impractical to test manually.</li>
        <li><strong>Cost-Effective:</strong> Although the initial setup cost for automated testing might be high, it can lead to cost savings over time by reducing the need for extensive manual testing and catching issues earlier in the development cycle.</li>
        <li><strong>Reusability:</strong> Once created, automated test scripts can be reused across different versions of the application, making it easier to test new features and perform regression testing.</li>
        <li><strong>Support for Continuous Integration:</strong> Automated tests integrate well with continuous integration (CI) and continuous delivery (CD) pipelines, enabling automated testing as part of the build and deployment process.</li>
      </ul>

      <h2>Common Tools Used in the Industry</h2>
      <ul>
        <li><strong>Selenium:</strong> A widely used tool for automating web browsers. Selenium supports various programming languages and browsers and is ideal for functional and regression testing of web applications.</li>
        <li><strong>JUnit:</strong> A popular testing framework for Java applications. JUnit is used for writing and running repeatable unit tests and supports integration with various build tools and CI servers.</li>
        <li><strong>TestNG:</strong> Another testing framework for Java, TestNG is inspired by JUnit but offers more powerful features like data-driven testing and parallel test execution.</li>
        <li><strong>Cypress:</strong> An end-to-end testing framework specifically designed for modern web applications. Cypress provides a fast and reliable way to test front-end code with a focus on developer experience.</li>
        <li><strong>Jest:</strong> A testing framework for JavaScript, particularly well-suited for testing React applications. Jest is known for its simplicity, fast performance, and built-in mocking capabilities.</li>
        <li><strong>Appium:</strong> An open-source tool for automating mobile applications. Appium supports both iOS and Android platforms and allows for testing of native, hybrid, and mobile web applications.</li>
        <li><strong>Postman:</strong> Primarily known for API testing, Postman provides tools to automate API tests and manage different aspects of the API lifecycle.</li>
        <li><strong>Karma:</strong> A test runner for JavaScript, often used in conjunction with frameworks like Jasmine and Mocha to execute tests in real browsers and on different platforms.</li>
      </ul>

      <p>These tools, among others, play a crucial role in ensuring software quality and enabling efficient testing practices in the development lifecycle.</p>
    `,
    image: automatedTestingImage // Use imported image
  },
  {
    id: 2,
    date: '10 July 2024',
    title: 'Best Practices for Writing Test Cases',
    description: `
      <h2>Best Practices for Writing Test Cases</h2>

      <ol>
        <li><strong>Understand Requirements:</strong>
          <ul>
            <li><strong>Clear Requirements:</strong> Ensure you have a thorough understanding of the requirements and specifications before writing test cases.</li>
            <li><strong>Acceptance Criteria:</strong> Base your test cases on the defined acceptance criteria.</li>
          </ul>
        </li>
        <li><strong>Test Case Design:</strong>
          <ul>
            <li><strong>Positive and Negative Testing:</strong> Include test cases for both valid and invalid inputs.</li>
            <li><strong>Boundary Testing:</strong> Test the boundaries of input values to ensure the system handles edge cases.</li>
            <li><strong>Equivalence Partitioning:</strong> Group inputs into equivalence classes to reduce the number of test cases while covering different scenarios.</li>
            <li><strong>State Transition Testing:</strong> Test different states and transitions between them if your application is stateful.</li>
          </ul>
        </li>
        <li><strong>Maintainability:</strong>
          <ul>
            <li><strong>Modular Test Cases:</strong> Write modular test cases that can be reused and are easy to maintain.</li>
            <li><strong>Clear Naming:</strong> Use descriptive names for test cases to make their purpose and function clear.</li>
            <li><strong>Comments:</strong> Add comments where necessary to explain the rationale behind complex test cases.</li>
          </ul>
        </li>
        <li><strong>Automation:</strong>
          <ul>
            <li><strong>Automate Where Appropriate:</strong> Automate repetitive and regression test cases to save time and reduce human error.</li>
            <li><strong>Use Frameworks:</strong> Utilize test automation frameworks that support best practices for test automation (e.g., Selenium, JUnit, TestNG).</li>
          </ul>
        </li>
        <li><strong>Data Management:</strong>
          <ul>
            <li><strong>Test Data:</strong> Use representative test data to cover various scenarios, including edge cases.</li>
            <li><strong>Data Cleanup:</strong> Ensure test data is properly cleaned up after tests to avoid conflicts with subsequent tests.</li>
          </ul>
        </li>
        <li><strong>Execution and Reporting:</strong>
          <ul>
            <li><strong>Run Tests Regularly:</strong> Execute tests regularly, ideally as part of a continuous integration/continuous deployment (CI/CD) pipeline.</li>
            <li><strong>Track Results:</strong> Keep track of test results and review failures to identify potential issues in the code or test cases.</li>
          </ul>
        </li>
        <li><strong>Review and Refactor:</strong>
          <ul>
            <li><strong>Peer Review:</strong> Have test cases reviewed by peers to ensure they cover all necessary scenarios and follow best practices.</li>
            <li><strong>Refactor:</strong> Regularly refactor test cases to improve clarity, efficiency, and coverage.</li>
          </ul>
        </li>
        <li><strong>Performance and Scalability:</strong>
          <ul>
            <li><strong>Performance Testing:</strong> Include tests to assess the performance and scalability of your application under different loads.</li>
            <li><strong>Stress Testing:</strong> Test how the system behaves under extreme conditions.</li>
          </ul>
        </li>
        <li><strong>Security Testing:</strong>
          <ul>
            <li><strong>Security Scenarios:</strong> Include test cases that address security concerns, such as input validation and protection against common vulnerabilities.</li>
          </ul>
        </li>
        <li><strong>Documentation:</strong>
          <ul>
            <li><strong>Test Case Documentation:</strong> Document each test case with detailed information on its purpose, setup, execution steps, and expected results.</li>
          </ul>
        </li>
      </ol>

      <p>By following these best practices, you can create test cases that are not only thorough but also manageable and effective in ensuring software quality.</p>

      <p>Image source: <a href="https://www.headspin.io/blog/what-is-test-automation-a-comprehensive-guide-on-automated-testing" target="_blank" rel="noopener noreferrer">Headspin Blog on Automated Testing</a></p>
    `,
    image: bestpracticesImage
  },
  {
    id: 3,
    date: '15 July 2024',
    title: 'Top Automated Testing Tools in 2023',
    description: `
    <h2>Top Automated Testing Tools in 2023</h2>
    <p>Here are some of the most popular and widely used automated testing tools in 2023:</p>
    <ul>
      <li><strong>Selenium:</strong> A versatile tool for browser automation that supports multiple programming languages and browsers.</li>
      <li><strong>JUnit:</strong> A framework for Java applications that provides annotations and assertions to help write tests.</li>
      <li><strong>TestNG:</strong> A powerful testing framework inspired by JUnit with additional features such as data-driven testing, parallel test execution, and flexible test configuration.</li>
      <li><strong>Cypress:</strong> A modern end-to-end testing framework designed for web applications, known for its fast performance and ease of use.</li>
      <li><strong>Jest:</strong> A popular testing framework for JavaScript, particularly for React applications, offering fast performance, snapshot testing, and built-in mocking capabilities.</li>
      <li><strong>Appium:</strong> An open-source tool for automating mobile applications across both iOS and Android platforms, supporting native, hybrid, and mobile web applications.</li>
      <li><strong>Postman:</strong> Widely used for API testing, Postman enables users to create, test, and manage API requests and responses.</li>
      <li><strong>Karma:</strong> A test runner for JavaScript that works with frameworks like Jasmine and Mocha to run tests in real browsers and on different platforms.</li>
    </ul>

    <p>These tools provide diverse capabilities for automating different aspects of testing, ensuring that applications are tested thoroughly and efficiently.</p>

    <p>Image source: <a href="https://yourimageurl.com/top_testing_tools.png" target="_blank" rel="noopener noreferrer">Top Automated Testing Tools in 2023</a></p>
    `,
    image: toolImage
  },
  {
    id: 4,
    date: '01 August 2024',
    title: 'Documentation for Automated Testing',
    description: `
      <h2>Documentation for Automated Testing</h2>
      <p>Proper documentation is crucial for the successful implementation and maintenance of automated testing. It ensures that test cases are well-understood and reproducible by different team members, and it helps in maintaining consistency and quality in the testing process.</p>
      
      <h2>Key Aspects of Automated Testing Documentation</h2>
      <ul>
        <li><strong>Test Plan:</strong> A detailed document outlining the scope, objectives, resources, and schedule of the testing effort. It includes the types of tests to be performed, testing tools and frameworks to be used, and the test environment setup.</li>
        <li><strong>Test Case Specifications:</strong> Detailed descriptions of individual test cases, including test inputs, execution steps, expected outcomes, and actual results. This helps in understanding the purpose and functionality of each test case.</li>
        <li><strong>Test Scripts:</strong> Code or scripts used to automate test cases. Documentation should include comments and explanations to make the scripts understandable and maintainable.</li>
        <li><strong>Test Data Management:</strong> Documentation on the creation, management, and usage of test data, including data sources, data formats, and any data cleanup procedures.</li>
        <li><strong>Test Execution:</strong> Details on how to execute automated tests, including commands, environment setup, and any dependencies or prerequisites.</li>
        <li><strong>Test Results and Reporting:</strong> Guidelines for generating and interpreting test results, including formats for test reports and how to document and track defects or issues found during testing.</li>
        <li><strong>Version Control:</strong> Information on how test cases, scripts, and related documentation are versioned and managed to ensure consistency and traceability over time.</li>
      </ul>

      <h2>Examples of Test Documentation</h2>
      <ul>
        <li><strong>Test Plan Example:</strong> A document outlining the objectives of the automated testing project, the types of tests to be performed, the tools to be used (e.g., Selenium for web automation), and the schedule for test execution.</li>
        <li><strong>Test Case Specification Example:</strong> A detailed description of a test case for a login functionality, including steps to enter username and password, expected behavior (successful login), and validation criteria.</li>
        <li><strong>Test Script Example:</strong> A Selenium script written in Java to automate the login process on a website, including setup, execution steps, and assertions for verifying successful login.</li>
        <li><strong>Test Data Example:</strong> A dataset used for testing different user roles and permissions, including test users with varying levels of access and associated data for validation.</li>
        <li><strong>Test Results Report Example:</strong> A report summarizing the results of test execution, including pass/fail status, any defects identified, and recommendations for improvements.</li>
      </ul>

      <p>Effective documentation is key to ensuring that automated tests are well-organized, maintainable, and effective in identifying issues early in the development process.</p>

      <p>Image source: <a href="https://example.com/documentation_image.png" target="_blank" rel="noopener noreferrer">Documentation for Automated Testing</a></p>
    `,
    image: checkmark
  },
  {
    id: 5,
    date: '05 August 2024',
    title: 'User Feedback and Surveys in Automated Testing',
    description: `
    <h2>Importance of User Feedback in Automated Testing</h2>
    <p>Incorporating user feedback into automated testing processes is crucial for enhancing the quality and relevance of tests. It ensures that the tests address real-world scenarios and align with user expectations, leading to more effective and user-centric testing strategies.</p>
  
    <h2>Survey Form</h2>
    <p>Your feedback is invaluable to us! Please take a moment to fill out the form below:</p>
    <form style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
      <div style="margin-bottom: 15px;">
        <label htmlFor="email" style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
        <input type="email" id="email" name="email" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>
      <div style="margin-bottom: 15px;">
        <label htmlFor="feedback" style="display: block; margin-bottom: 5px; font-weight: bold;">Feedback:</label>
        <textarea id="feedback" name="feedback" required rows="4" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      </div>
      <div style="margin-bottom: 15px;">
        <label htmlFor="improvement" style="display: block; margin-bottom: 5px; font-weight: bold;">Suggestions for Improvement:</label>
        <textarea id="improvement" name="improvement" required rows="4" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      </div>
      <button type="submit" style="background-color: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
        Submit
      </button>
    </form>
    `,
    image: survey // Use imported image
  }
  
];



function BlogInfo() {
  const { id } = useParams();
  const blogPost = blogPosts.find(post => post.id === parseInt(id, 10));

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative w-full" style={{ paddingBottom: '52.3%' }}> {/* Maintain aspect ratio */}
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
        <h2 className="text-gray-600 mb-4">{blogPost.date}</h2>
        <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: blogPost.description }} />
      </div>
    </div>
  );
}

export default BlogInfo;
