module.exports = {
  apps: [{
    name: 'maz-server',
    script: './server/entry.mjs',
    watch: true,
    env: {
      PORT: 4322,
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}; 