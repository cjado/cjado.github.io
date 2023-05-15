import React from 'react';

function Resume() {
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#FCEDDA', marginBottom: '8vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mt-5 mb-4 text-center">Resume</h2>
          <h3 className="mb-3 ">Personal Summary</h3>
          <p>
            Entrepreneurial, goal-driven, proactive, high aptitude for quick learning, relationship-oriented, with desire to lead.  Experience in online and in-person sales, marketing, and warehouse operations.  Tech savvy.
          </p>
          <h3 className="mb-3">Education</h3>
          <p>
            <li>Texas Tech University, Rawls School of Business - Bachelor's Degree in Business Management, Expected Graduation 2023; GPA 3.0</li>
            <li>UT Austin - Full Stack Developer Certification, in progress, Expected Graduation may 2023
                <p class="indent">JavaScript, CSS, HTML, JQuery, React.JS
</p>
                <p class="indent">API design - AJAX, FETCH, HTTPS
</p>
                <p class="indent">Databases - MySQL, MongoDB
</p>
                <p class="indent">Server Side Deployment - Node.JS, Express.JS
</p>
            </li>
            <li>Kingwood High School - Graduated in June 2019, STEM Track</li>
          </p>
          <h3 className="mb-3">Work Experience</h3>
          <p>
            <li>August 2021 - September 2022 Owner of 300 LLC, Lubbock, Texas
            <p class="indent">Highlight/Accomplishment/Learning - Learned to manage and co-own a small mining company, learned to manage funds, and learned valuable communication, leadership, and management skills. Furthermore, gained experience in sales while selling equipment. </p>
            <p class="indent">Key Work Performed - Inventory management, financial management, financial analysis, equipment management, and sales. </p>
</li>
            <li>Summer 2021 Summer Associate for the Home Depot, Lubbock, Texas
            <p class="indent">Highlight/Accomplishment/Learning - Co-piloted and refined COVID-driven revised cashout processes, including floor signage to ease changes for customers.</p>
            <p class="indent">Key Work Performed - Inventory Management and Replenishment, Front-face customer service, Cashiering, and Training of new Associates</p>
</li>
            <li>August 2017 to August 2019 Lead Kennel Tech for The Original Kennel, Kingwood, Texas
                <p class="indent">Highlight/Accomplishment/Learning - Created a comprehensive sale package for boarded dogs, which included grooming and portrait services.  Led other Technicians in their roles.</p>
                <p class="indent">Key Work Performed - Pet care, Facilities Management and Up-Keep, Front-face customer service, Training of other Technicians</p>
</li>
            <li>Summer 2017, 2018, 2019, 2020 Warehouse Associate for Undersummers.com, Kingwood, Texas
            <p class="indent">Highlight/Accomplishment/Learning - Discovered and implemented a more efficient manner of packaging product out to customer, resulting in overall quicker completion time for packaging.</p>
            <p class="indent">Key Works Performed - Pack and ship orders, along with keeping the building clean, and other miscellaneous tasks. </p>
</li>
          </p>
          <h3 className="mb-3">Other Activities</h3>
          <p>
          <li>Played for the high school basketball team at Kingwood for 2 years
</li>
          <li>Video Editing/Directing for FOB Rasor (non-profit Veterans help group)
</li>
         <li>Desktop Build / Assembly
</li>
          </p>   
        </div>
      </div>
    </div>
  );
}

export default Resume;
