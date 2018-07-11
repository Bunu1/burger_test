module.exports = function(sequelize, DataTypes){
	const Command = sequelize.define("Command",{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		done: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		underscored: true,
		timestamps: false,
		freezeTableName: true
	});
	return Command;
}
