module.exports = {
  "*.ts": "tslint -p . -t stylish",
  "*.js": "prettier --write",
  "*.md": () => "npm run prepack"
};
