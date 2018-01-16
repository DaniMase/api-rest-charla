let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    try{
        let config = require('./config.json');

        let envConfig = config[env];

        Object.keys(envConfig).forEach((key) => {
            process.env[key] = envConfig[key];
        });
    }catch(e){
        console.log('Not configuration file find, using env variables');
    }

}