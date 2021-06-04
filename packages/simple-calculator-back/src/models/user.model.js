import bcrypt from 'bcrypt';
const saltRounds = 10;

export default function createUsersModel(sequelize, datatypes){
    const User = sequelize.define('user', {
        username: {
            type: datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: datatypes.STRING,
            allowNull: false,
            //is: /^[0-9a-f]{64}$/i
        }
    });
    User.beforeCreate('createHashPasswordHook', async (user, option) => {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    })
    return User;
}