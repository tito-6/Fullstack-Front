import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <Link className="navbar-brand" to="/">
              Full Stack AHMAD AL-KHALID Application
            </Link>
          </motion.div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <Link className="btn btn-outline-light" to="/adduser">
              Add User
            </Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
