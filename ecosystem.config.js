module.exports = {
  apps: [{
    name: 'Fdedeh-prod',
    script: 'pnpm',
    args: 'start',
    cwd: '/var/www/prod-env/fdedeh/fdedeh',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}
