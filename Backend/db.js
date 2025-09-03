import sql from "mssql";

const config = {
  user: "admin",
  password: "konta1234",
  server: "localhost", // o "localhost\\SQLEXPRESS" si usás instancia con nombre
  database: "Konta",
  port: 1434,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conexión exitosa a SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error al conectar con SQL Server:", error);
    throw error;
  }
}


