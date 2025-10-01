import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";

function App() {
  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#f57c00" }} className="text-center p-3">
        <img src="/Screenshot 2025-10-01 083747.png" alt="Logo" style={{ maxHeight: "120px" }} />
        <nav className="mt-2">
          <a href="#" className="text-white me-3">
            Home
          </a>
          <a href="#about" className="text-white me-3">
            About
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container my-5 text-center">
        {/* About Section */}
        <section id="about" className="mb-5">
          <h3 className="fw-bold">About</h3>
          <p>This is the about section of the website.</p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h3 className="fw-bold">Contact</h3>
          <p>
            For any inquiries, please contact us at{" "}
            <a href="mailto:example@example.com">example@example.com</a>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f57c00" }} className="text-center py-3 text-white">
        <small>© 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;


