module.exports = {
  type: "service_account",
  project_id: "gerateverwaltung",
  private_key_id: "c61aedc877cada3b24df96b3d997324ad080d663",
  private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,  // Umgebungsvariable
  client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL, // Umgebungsvariable
  client_id: "117471772958844019779",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.REACT_APP_GOOGLE_CLIENT_EMAIL}`,
  universe_domain: "googleapis.com"
};
