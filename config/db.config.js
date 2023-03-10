//   host: '185.166.188.206',
//   user: 'u302430061_raptor',
//   password: 'Raptor_immense1',
//   database: 'u302430061_raptor',
module.exports = {
  HOST: '127.0.0.1',
  USER: 'root',
  PASSWORD: 'josip',
  DB: 'webshop',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
