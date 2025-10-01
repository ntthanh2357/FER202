import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#f57c00" }} className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Thay ảnh logo */}
          <img src="Logo_Trường_Đại_học_FPT.svg" alt="Logo" style={{ height: "50px" }} />
          
          <nav>
            <a href="#" className="text-white me-3">Trang chủ</a>
            <a href="#" className="text-white me-3">Ngành học</a>
            <a href="#" className="text-white me-3">Tuyển sinh</a>
            <a href="#" className="text-white">Sinh viên</a>
            <input type="text" placeholder="Search..." className="form-control d-inline-block ms-3" style={{ width: "150px" }} />
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="text-center">
        {/* Thay ảnh banner */}
        <img src="Screenshot 2025-10-01 085012.png" alt="Banner" className="img-fluid w-100" />
      </section>

      {/* Students Detail */}
      <main className="container my-5">
        <h3 className="text-center fw-bold mb-4">Students Detail</h3>
        <div className="row g-4">
          
          {/* Student 1 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img src="Screenshot 2025-10-01 090034.png" className="card-img-top" alt="Student 1" />
              <div className="card-body text-center">
                <p className="fw-bold mb-1">Nguyễn Văn A</p>
                <small className="d-block">DE160182</small>
                <small className="d-block">Đà Nẵng</small>
                <div className="mt-2">
                  <input type="radio" name="st1" /> Absent{" "}
                  <input type="radio" name="st1" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Student 2 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img src="Screenshot 2025-10-01 090034.png" className="card-img-top" alt="Student 2" />
              <div className="card-body text-center">
                <p className="fw-bold mb-1">Trần Văn B</p>
                <small className="d-block">DE160377</small>
                <small className="d-block">Quảng Nam</small>
                <div className="mt-2">
                  <input type="radio" name="st2" /> Absent{" "}
                  <input type="radio" name="st2" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Student 3 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img src="Screenshot 2025-10-01 090034.png" className="card-img-top" alt="Student 3" />
              <div className="card-body text-center">
                <p className="fw-bold mb-1">Đỗ Văn C</p>
                <small className="d-block">DE160547</small>
                <small className="d-block">Quảng Nam</small>
                <div className="mt-2">
                  <input type="radio" name="st3" /> Absent{" "}
                  <input type="radio" name="st3" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Student 4 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img src="Screenshot 2025-10-01 090034.png" className="card-img-top" alt="Student 4" />
              <div className="card-body text-center">
                <p className="fw-bold mb-1">Lê Văn D</p>
                <small className="d-block">DE170049</small>
                <small className="d-block">Đà Nẵng</small>
                <div className="mt-2">
                  <input type="radio" name="st4" /> Absent{" "}
                  <input type="radio" name="st4" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f57c00" }} className="text-white py-4">
        <div className="container text-center">
          <p className="mb-1 fw-bold">Our Address</p>
          <small>
            Khu đô thị FPT Đà Nẵng <br />
            +84 236 3715111 <br />
            +852 9765 4321 <br />
            daihocfpt@fe.edu.vn
          </small>
          <div className="mt-3">
            <i className="bi bi-google me-2"></i>
            <i className="bi bi-facebook me-2"></i>
            <i className="bi bi-linkedin me-2"></i>
            <i className="bi bi-twitter me-2"></i>
            <i className="bi bi-youtube me-2"></i>
            <i className="bi bi-envelope"></i>
          </div>
          <p className="mt-3 mb-0">© Copyright 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
