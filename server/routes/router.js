const express = require("express");
const Route = express.Router();
const services = require("../services/render");

// Root route using GET method
Route.get("/", services.homeRoutes);

// Add User route using GET method
Route.get("/add-user", services.add_user);

// Update User route using GET method
Route.get("/update-user", services.update_user);

module.exports = Route;
