module.exports = function(sequelize, DataTypes){
	const ProductCommand = sequelize.define("ProductCommand",{
		id:{
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		id_product: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_command: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_menu: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		underscored: true,
		timestamps: false,
		freezeTableName: true
	});
	ProductCommand.associate = _associate;
	return ProductCommand;
}

function _associate(models){
	models.Product.belongsToMany(models.Command, { through: models.ProductCommand, foreignKey: 'id_product', targetKey: 'id'})
	models.Menu.belongsToMany(models.Command, { through: models.ProductCommand, foreignKey: 'id_menu', targetKey: 'id'})
	models.Command.belongsToMany(models.Product, { through: models.ProductCommand, foreignKey: 'id_command', targetKey: 'id'})
	models.Command.belongsToMany(models.Menu, { through: models.ProductCommand, foreignKey: 'id_command', targetKey: 'id'})
}