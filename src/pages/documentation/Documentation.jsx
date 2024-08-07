import React from 'react';

function Documentation() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Automated Testing Documentation</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction to Automated Testing</h2>
        <p>
          Automated testing involves using software tools and scripts to test applications automatically. This approach helps to ensure the software behaves as expected and can save time compared to manual testing. Automated tests can be run frequently, making it easier to catch issues early in the development cycle.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Types of Automated Testing</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Unit Testing:</strong> Tests individual components or functions to ensure they work in isolation. Example tools: Jest, Mocha.
          </li>
          <li>
            <strong>Integration Testing:</strong> Tests interactions between multiple components or modules. Example tools: Testing Library, Cypress.
          </li>
          <li>
            <strong>End-to-End Testing:</strong> Tests the entire application flow to ensure it works from start to finish. Example tools: Cypress, Selenium.
          </li>
          <li>
            <strong>Performance Testing:</strong> Tests how the application performs under various conditions. Example tools: Lighthouse, WebPageTest.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Example: Unit Testing with Jest</h2>
        <p>
          Jest is a popular testing framework for JavaScript applications. Here’s how you can write a simple unit test for a React component:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            {`import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent with a message', () => {
  render(<MyComponent />);
  const messageElement = screen.getByText(/Hello, World!/i);
  expect(messageElement).toBeInTheDocument();
});`}
          </code>
        </pre>
        <p>
          In this example, the test checks if the `MyComponent` component renders correctly and contains the text "Hello, World!".
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Example: End-to-End Testing with Cypress</h2>
        <p>
          Cypress is a powerful tool for end-to-end testing. Here’s a simple test that checks if a user can visit a page and see the correct content:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            {`describe('Home Page', () => {
  it('should display the welcome message', () => {
    cy.visit('/');
    cy.contains('Welcome to Our Application');
  });
});`}
          </code>
        </pre>
        <p>
          This test visits the home page and checks if the text "Welcome to Our Application" is present.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Documenting Test Cases</h2>
        <p>
          When documenting test cases, include the following details:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Test Case ID:</strong> A unique identifier for the test case.</li>
          <li><strong>Description:</strong> A brief description of what the test case is testing.</li>
          <li><strong>Preconditions:</strong> Any setup required before running the test.</li>
          <li><strong>Steps:</strong> Detailed steps to execute the test.</li>
          <li><strong>Expected Results:</strong> The expected outcome of the test.</li>
          <li><strong>Actual Results:</strong> The actual outcome of the test (to be filled after execution).</li>
          <li><strong>Status:</strong> Pass/Fail status of the test case.</li>
        </ul>
      </section>

    </div>
  );
}

export default Documentation;
