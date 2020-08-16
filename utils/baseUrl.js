const baseUrl = 
  process.env.NODE_ENV === "production"
    ? 'https://deployment-url.now.sh'
    : 'http://localhost:4000';

export default baseUrl;