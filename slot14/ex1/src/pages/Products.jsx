import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const productList = [
    { id: 101, name: 'Sản phẩm A' },
    { id: 102, name: 'Sản phẩm B' },
    { id: 103, name: 'Sản phẩm C' },
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {productList.map((p) => (
          <li key={p.id}>
            <Link to={`/san-pham/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
