import { DataTypes, Sequelize, Model } from 'sequelize';

export class Friend extends Model {
  public id!: number;
  public userId!: string;
  public friendId!: string;
}

export function initFriend(sequelize: Sequelize): void {
  Friend.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friendId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'friend',
      timestamps: false,
      engine: 'InnoDB',
      charset: 'utf8',
      freezeTableName: true,
    }
  );
}