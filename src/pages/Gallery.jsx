const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <h3>Events and Activities</h3>
      <ul>
        <li>
          <img src="/images/Annual-sports2.jpg" alt="Annual Sports Day" />
          <p>Annual Sports Day - A day full of sportsmanship and excitement.</p>
        </li>
        <li>
          <img src="/images/Science_Exhibition2.jpg" alt="Science Exhibition" />
          <p>
            Science Exhibition - Students showcasing their innovative projects.
          </p>
        </li>
        <li>
          <img src="/images/Cultural2.jpg" alt="Cultural Fest" />
          <p>
            Cultural Fest - Celebrating various cultures through performances.
          </p>
        </li>
        <li>
          <video src="/videos/Cultural.mp4" controls></video>
          <p>
            Cultural Dance - A glimpse of our vibrant cultural performances.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
