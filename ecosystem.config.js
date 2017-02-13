module.exports = {
  apps: [{
    name: 'actionalerts',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-52-36-191-245.us-west-2.compute.amazonaws.com',
      ref: 'origin/master',
      key: '~/.ssh/actionalerts.pem',
      repo: 'git@github.com:vleilamitchell/actionalerts.git',
      path: '/home/ec2-user/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

