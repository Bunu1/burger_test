module.exports = function (sequelize, DataTypes) {
	const Menu = sequelize.define('Menu', {
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
      type: DataTypes.STRING,
      allowNull: false
    },
		description: {
      type: DataTypes.STRING,
      allowNull: false
    },
		highlight: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
		size: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
		available: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
		id_promotion: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
	}, {
		paranoid: false,
		underscored: true,
		freezeTableName: true,
		timestamps: false
	});
	Menu.associate = _associate;
	return Menu;
}

// INTERNAL
function _associate(models) {
	models.Menu.belongsTo(models.Promotion, { foreignKey: 'id_promotion', targetKey: 'id' });
}