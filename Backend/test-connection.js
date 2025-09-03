import sql from "mssql";

const config = {
  user: "admin",
  password: "konta1234",
  server: "localhost\\SQLEXPRESS", // ajustá según tu instancia
  database: "Konta",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function testConnection() {
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conexión exitosa a SQL Server");
    await pool.close();
  } catch (error) {
    console.error("❌ Error al conectar con SQL Server:", error);
  }
}

testConnection();
