import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="bg pt-5 text-center">
      <h1>This is Home Component</h1>
      <Link to="/contact">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </Link>
    </div>
  );
};
