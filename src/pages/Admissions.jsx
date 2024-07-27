const Admissions = () => {
  return (
    <section id="admissions">
      <h2>Admissions</h2>
      <div className="content">
        <div className="process">
          <h3>Process</h3>
          <p>
            <span className="glow-text">
              Admission forms are available for download.
            </span>{" "}
            Submit the completed form along with required documents at the
            school office.
          </p>
        </div>
        <div className="criteria">
          <h3>Criteria</h3>
          <p>
            <span className="glow-text">
              Admission is based on merit and availability of seats.
            </span>{" "}
            Entrance tests may be conducted for certain grades.
          </p>
        </div>
        <div className="dates">
          <h3>Important Dates</h3>
          <ul>
            <li>
              Admission Form Availability:{" "}
              <span className="date-highlight">March 1st</span>
            </li>
            <li>
              Last Date for Submission:{" "}
              <span className="date-highlight">March 31st</span>
            </li>
            <li>
              Entrance Test: <span className="date-highlight">April 15th</span>
            </li>
            <li>
              Announcement of Results:{" "}
              <span className="date-highlight">April 30th</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
