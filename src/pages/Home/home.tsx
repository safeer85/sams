/*import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {user ? (
        <div>
          <h2>Hello, {user.email}!</h2>
          <h3>Role: {user.role}</h3>

          {user.role === 'teacher' && (
            <div>
              <button
                onClick={() => {
                  console.log('View Students Attendance Details');
                  // Navigate to or implement view attendance details logic
                }}
              >
                View Students Attendance Details
              </button>
              <button
                onClick={() => {
                  console.log('Take Attendance');
                  // Navigate to or implement take attendance logic
                }}
              >
                Take Attendance
              </button>
            </div>
          )}

          {user.role === 'student' && (
            <div>
              <button
                onClick={() => {
                  console.log('View Your Attendance Details');
                  // Navigate to or implement student attendance view logic
                }}
              >
                View Your Attendance Details
              </button>
            </div>
          )}

          {user.role === 'parent' && (
            <div>
              <button
                onClick={() => {
                  console.log('View Child’s Attendance Details');
                  // Navigate to or implement parent view logic
                }}
              >
                View Child’s Attendance Details
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>No user data available. Please log in again.</p>
      )}
    </div>
  );
};

export default HomePage;*/


import React, { useState } from 'react';
import TakeAttendance from '../../Components/TakeAttendance.tsx'; // Import the Take Attendance component
import ViewAttendance from '../../Components/ViewAttendance.tsx';
import GenerateReport from '../../Components/GenerateReport.tsx';
import { useLocation } from 'react-router-dom'; // Import the View Attendance component

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleButtonClick = (component: string) => {
    setActiveComponent(activeComponent === component ? null : component);
  };

  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <h2>Hello, {user.email}!</h2>
      <h3>Role: {user.role}</h3>

      {user.role === 'teacher' && (
        <div>
          <button onClick={() => handleButtonClick('viewAttendance')}>
            View Students Attendance Details
          </button>
          <button onClick={() => handleButtonClick('takeAttendance')}>
            Take Attendance
          </button>
          <button onClick={() => handleButtonClick('generateReport')}>
            Generate Report
          </button>

          {activeComponent === 'viewAttendance' && (
            <div>
              <h4>View Students Attendance Details</h4>
              <ViewAttendance />
            </div>
          )}

          {activeComponent === 'takeAttendance' && (
            <div>
              <h4>Take Attendance</h4>
              <TakeAttendance />
            </div>
          )}
          {activeComponent === 'generateReport' && (
            <div>
              <h4>Generate Report</h4>
              <GenerateReport />
            </div>
          )}
        </div>
      )}

      {user.role === 'student' && (
        <div>
          <button onClick={() => handleButtonClick('viewAttendance')}>
            View Your Attendance Details
          </button>

          {activeComponent === 'viewAttendance' && (
            <div>
              <h4>Your Attendance Details</h4>
              <ViewAttendance />
            </div>
          )}
        </div>
      )}

      {user.role === 'parent' && (
        <div>
          <button onClick={() => handleButtonClick('viewAttendance')}>
            View Child’s Attendance Details
          </button>

          {activeComponent === 'viewAttendance' && (
            <div>
              <h4>Child’s Attendance Details</h4>
              <ViewAttendance />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

