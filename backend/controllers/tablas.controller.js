const mysql = require("mysql2/promise");
const pool = require("../database");

const tablasController = {
  createFormularioTable: async (req, res) => {
    try {
      const sql = `
        CREATE TABLE IF NOT EXISTS Formulario (
          id INT AUTO_INCREMENT PRIMARY KEY,
          numero_atencion VARCHAR(255),
          cne INT,
          comuna INT,
          manzana INT,
          predio INT,
          fojas INT,
          fecha_inscripcion DATE,
          numero_inscripcion VARCHAR(255),
          tipo VARCHAR(255),
          RUNRUT VARCHAR(255),
          derecho VARCHAR(255),
          status VARCHAR(255),
          herencia VARCHAR(255)
        )
      `;
      const connection = await pool.getConnection();
      await connection.query(sql);
      connection.release();
      res.json({ msg: "Tabla 'Formulario' creada correctamente" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },

  createEnajenanteTable: async (req, res) => {
    try {
      const sql = `
        CREATE TABLE IF NOT EXISTS Enajenante (
          id INT AUTO_INCREMENT PRIMARY KEY,
          runrut VARCHAR(255),
          porc_derecho FLOAT,
          formulario_id INT,
          FOREIGN KEY (formulario_id) REFERENCES Formulario(id)
        )
      `;
      const connection = await pool.getConnection();
      await connection.query(sql);
      connection.release();
      res.json({ msg: "Tabla 'Enajenante' creada correctamente" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },

  createAdquirenteTable: async (req, res) => {
    try {
      const sql = `
        CREATE TABLE IF NOT EXISTS Adquirente (
          id INT AUTO_INCREMENT PRIMARY KEY,
          runrut_adq VARCHAR(255),
          porc_derecho_adq FLOAT,
          formulario_id INT,
          FOREIGN KEY (formulario_id) REFERENCES Formulario(id)
        )
      `;
      const connection = await pool.getConnection();
      await connection.query(sql);
      connection.release();
      res.json({ msg: "Tabla 'Adquirente' creada correctamente" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  createMultipropietarioTable: async (req, res) => {
    try {
      const sql = `
        CREATE TABLE IF NOT EXISTS Multipropietario (
          id INT AUTO_INCREMENT PRIMARY KEY,
          comuna VARCHAR(255),
          manzana INT,
          predio INT,
          run VARCHAR(255),
          derecho INT,
          fojas INT,
          fecha_inscripcion DATE,
          ano_inscripccion INT,
          numero_inscripcion VARCHAR(255),
          ano_vigencia_i INT,
          ano_vigencia_f INT,
          status VARCHAR(255)
        )
      `;
      const connection = await pool.getConnection();
      await connection.query(sql);
      connection.release();
      res.json({ msg: "Tabla 'Multipropietario' creada correctamente" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deltablas1: async (req, res) => {
    try {
      const sql = `
      DELETE FROM Formulario;
      `;
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(sql); // Ejecuta la consulta SQL
      connection.release(); // Cierra la conexión después de usarla
      res.json({ msg: results }); // Envía el resultado de la consulta como respuesta JSON
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deltablas2: async (req, res) => {
    try {
      const sql = `
      DELETE FROM Enajenante;
      `;
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(sql); // Ejecuta la consulta SQL
      connection.release(); // Cierra la conexión después de usarla
      res.json({ msg: results }); // Envía el resultado de la consulta como respuesta JSON
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deltablas3: async (req, res) => {
    try {
      const sql = `
      DELETE FROM Adquirente;
      `;
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(sql); // Ejecuta la consulta SQL
      connection.release(); // Cierra la conexión después de usarla
      res.json({ msg: results }); // Envía el resultado de la consulta como respuesta JSON
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deltablas4: async (req, res) => {
    try {
      const sql = `
      DELETE FROM Multipropietario;
      `;
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(sql); // Ejecuta la consulta SQL
      connection.release(); // Cierra la conexión después de usarla
      res.json({ msg: results }); // Envía el resultado de la consulta como respuesta JSON
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
};

module.exports = tablasController;
