module.exports = {
  "*.ts": "eslint",
  "*.js": "prettier --write",
  "*.md": () => "npm run prepack",
};
