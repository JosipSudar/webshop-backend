module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    iduser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIcrement:true
    },
    user_name: {
      type: Sequelize.STRING,
    },

    verified_email: {
      type: Sequelize.BOOLEAN,
    },

    email: {
      type: Sequelize.STRING,
    },
    role_id: {
      type: Sequelize.STRING,
    },
   username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Users;
};
