module.exports = function (sequelize, DataTypes) {
    const Promotion = sequelize.define('Promotion', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prerequisite: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        available: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        paranoid: false,
        underscored: true,
        freezeTableName: true,
        timestamps: false
    });
  Promotion.associate = _associate;
    return Promotion;
};

function _associate(models) {
  models.Promotion.hasMany(models.Product, {foreignKey: 'id_promotion', sourceKey: 'id'});
  models.Promotion.hasMany(models.Menu, {foreignKey: 'id_promotion', sourceKey: 'id'});
}