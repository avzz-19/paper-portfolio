const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-center">
      <h1 className="font-playfair text-6xl font-black text-paper-text mb-4">404</h1>
      <p className="font-gideon text-paper-text-muted mb-6">Page not found</p>
      <a href="/" className="font-playfair text-xs tracking-widest uppercase text-paper-accent underline">
        Return to Home
      </a>
    </div>
  </div>
);

export default NotFound;
