/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de redirecciones explícitas
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ];
  },
};

export default nextConfig; 