module.exports = {
  apps : [{
    script: 'src/app.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }]
};
