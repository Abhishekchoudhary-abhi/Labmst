function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;