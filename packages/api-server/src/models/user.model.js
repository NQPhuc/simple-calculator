import bcrypt from 'bcrypt';
import * as config from '../config.js';

export default function createUsersModel (sequelize, datatypes) {
  const User = sequelize.define('Users', {
    username: {
      type: datatypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: datatypes.STRING,
      allowNull: false,
      // is: /^[0-9a-f]{64}$/i,
      set (value) { // this setter cover both INSERT and UPDATE operation
        const salt = bcrypt.genSaltSync(config.saltRounds);
        const hashedPassword = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hashedPassword);
      }
    }
  });
  // Setter only allow sync function, use this hooks in-case we need async.
  // For our exercise, setter is enough however
  // User.beforeCreate('createHashPasswordHook', async (user, option) => {
  //     const salt = await bcrypt.genSalt(config.saltRounds);
  //     const hashedPassword = await bcrypt.hash(user.password, salt);
  //     user.password = hashedPassword;
  // })
  return User;
}
