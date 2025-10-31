// src/components/MovieTable.jsx
import React from 'react';
import { Table, Button, Image, Modal, Alert, Spinner, Badge } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import { useAuth } from "../contexts/AuthContext";

const MovieTable = () => {
  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch(); 
  const { logout, user } = useAuth(); // 🔹 Thêm dòng này

  const { movies, loading, movieToDelete, showDeleteModal } = state;

  // Mapping genreId to genre name
  const genreMap = {
    1: 'Sci-Fi',
    2: 'Comedy', 
    3: 'Drama',
    4: 'Horror',
    5: 'Romance',
    6: 'Action',
    7: 'Thriller'
  };

  // Hàm để lấy màu badge theo danh mục
  const getCategoryBadgeVariant = (genreName) => {
    const categoryColors = {
      'Sci-Fi': 'primary',
      'Comedy': 'warning',
      'Drama': 'info', 
      'Horror': 'dark',
      'Romance': 'danger',
      'Action': 'success',
      'Thriller': 'secondary'
    };
    return categoryColors[genreName] || 'secondary';
  };

  const handleEditClick = (movie) => {
      // Mở Modal Sửa và gán dữ liệu vào state
      dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
  };
  
  const handleDeleteClick = (movie) => {
      // Mở Modal Xác nhận Xóa và gán phim vào movieToDelete
      dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
  };

  return (
    <>
      {/* 🔹 Thanh tiêu đề + Xin chào + Logout */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h4>🎬 Danh sách phim</h4>
        <div>
          <span className="me-3 text-secondary">
            Xin chào, <strong>{user?.username}</strong>
          </span>
          <Button variant="outline-danger" size="sm" onClick={logout}>
            Đăng xuất
          </Button>
        </div>
      </div>

      {loading && movies.length === 0 ? (
          <div className="text-center my-4">
              <Spinner animation="border" role="status" variant="primary" className="me-2" />
              <Alert variant="info" className="mt-3">Đang tải dữ liệu phim...</Alert>
          </div>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Tên Phim</th>
              <th>Danh mục</th>
              <th>Thời lượng (phút)</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const genreName = genreMap[movie.genreId] || 'Unknown';
              return (
                <tr key={movie.id}>
                  <td>
                    <Image
                      src={movie.avatar}
                      alt={movie.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      rounded
                    />
                  </td>
                  <td>#{movie.id}</td>
                  <td>
                    <strong>{movie.title}</strong>
                    <br />
                    <small className="text-muted">({movie.year})</small>
                  </td>
                  <td>
                    <Badge bg={getCategoryBadgeVariant(genreName)}>{genreName}</Badge>
                  </td>
                  <td>{movie.duration} phút</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEditClick(movie)}
                      className="me-2"
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteClick(movie)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      {/* MODAL XÁC NHẬN XÓA */}
      <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim{" "}
          <strong>{movieToDelete?.title}</strong> (ID: {movieToDelete?.id}) không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
            Hủy bỏ
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)}>
            Xác nhận Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;
