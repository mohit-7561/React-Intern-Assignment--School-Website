const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <h3>Events and Activities</h3>
      <ul>
        <li>
          <div className="image-container">
            <img src="/images/Annual-sports2.jpg" alt="Annual Sports Day" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </div>
          <p>Annual Sports Day - A day full of sportsmanship and excitement.</p>
        </li>
        <li>
          <div className="image-container">
            <img
              src="/images/Science_Exhibition2.jpg"
              alt="Science Exhibition"
            />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </div>
          <p>
            Science Exhibition - Students showcasing their innovative projects.
          </p>
        </li>
        <li>
          <div className="image-container">
            <img src="/images/Cultural2.jpg" alt="Cultural Fest" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </div>
          <p>
            Cultural Fest - Celebrating various cultures through performances.
          </p>
        </li>
        <li>
          <div className="image-container">
            <video src="/videos/Cultural.mp4" controls></video>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </div>
          <p>
            Cultural Dance - A glimpse of our vibrant cultural performances.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
