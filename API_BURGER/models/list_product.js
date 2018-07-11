module.exports = function (sequelize, DataTypes) {
	const ListProduct = sequelize.define('List_Product', {
		id_product: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		id_menu: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		position: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		paranoid: false,
		underscored: true,
		freezeTableName: true,
		timestamps: false
	});
	ListProduct.associate = _associate;
	return ListProduct;
}

// INTERNAL
function _associate(models) {
	models.Product.belongsToMany(models.Menu, { through: models.List_Product, foreignKey: 'id_product', targetKey: 'id'});
	models.Menu.belongsToMany(models.Product, { through: models.List_Product, foreignKey: 'id_menu', targetKey: 'id'});
}
