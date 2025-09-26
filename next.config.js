/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode static export
  output: 'export',

  // Opsional jika mau:
  // trailingSlash: true,              // URL diakhiri slash
  // skipTrailingSlashRedirect: true,  // Tidak redirect otomatis
  // distDir: 'dist',                  // Ganti nama folder output
};

module.exports = nextConfig;
