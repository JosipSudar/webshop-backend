//   host: '185.166.188.206',
//   user: 'u302430061_raptor',
//   password: 'Raptor_immense1',
//   database: 'u302430061_raptor',
module.exports = {
  HOST: "185.166.188.206",
  USER: "u302430061_Immense",
  PASSWORD: "Password_immense1",
  DB: "u302430061_shop",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
