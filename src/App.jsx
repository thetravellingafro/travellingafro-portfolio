import "./App.css";

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="logo">The Travelling Afro</div>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#brands">Brands</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <h1>Travel, culture & storytelling — visually.</h1>
          <p>
            I create immersive travel content that helps brands connect with
            global, culture-curious audiences.
          </p>
          <a href="#contact" className="cta">
            Work with me
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            I’m a travel creator focused on visual storytelling, cultural
            connection, and intentional exploration. My work blends destination
            highlights, lived experiences, and brand-aligned narratives designed
            for social, web, and campaign use.
          </p>
        </section>

        {/* WORK / VIDEOS */}
        <section id="work" className="section">
          <h2>Featured Work</h2>
          <div className="grid">
            <div className="card">
              <iframe
                src="https://www.youtube.com/embed/nGBsjaCoxM0"
                title="Travel Video 1"
                loading="lazy"
                allowFullScreen
              />
              <p>Destination storytelling — short-form video</p>
            </div>

            <div className="card">
              <iframe
                src="https://www.youtube.com/embed/SdpM1e56qkc"
                title="Travel Video 2"
                loading="lazy"
                allowFullScreen
              />
              <p>Hotel & experience feature</p>
            </div>

            <div className="card">
              <iframe
                src="https://www.youtube.com/embed/GHqk_JeeGyc"
                title="Travel Video 3"
                loading="lazy"
                allowFullScreen
              />
              <p>Cultural exploration & lifestyle</p>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section id="brands" className="section muted">
          <h2>Brand Fit</h2>
          <ul className="brands">
            <li>Hotels & Resorts</li>
            <li>Tourism Boards</li>
            <li>Travel & Lifestyle Brands</li>
            <li>Wellness & Experience-Driven Products</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Let’s Collaborate</h2>
          <p>For partnerships, media kits, or campaign inquiries:</p>
          <a className="email" href="mailto:thetravellingafro@gmail.com">
            thetravellingafro@gmail.com
          </a>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} The Travelling Afro
      </footer>
    </>
  );
}
