export default function createHistoriesModel (sequelize, datatypes) {
  const history = sequelize.define('Histories', {
    operand1: {
      type: datatypes.STRING,
      allowNull: false,
    },
    operand2: {
      type: datatypes.STRING,
      allowNull: false,
    },
    operator: {
      type: datatypes.STRING(1),
      allowNull: false
    },
    result: {
      type: datatypes.STRING,
      allowNull: false,
    },
  });
  return history;
}
