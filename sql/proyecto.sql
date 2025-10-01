CREATE DATABASE IF NOT EXISTS turiarte;
USE turiarte;

-- Tabla para mensajes de contacto
CREATE TABLE contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para productos de emprendimiento
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);
