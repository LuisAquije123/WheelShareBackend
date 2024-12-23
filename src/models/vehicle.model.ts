import { DataTypes, Model } from 'sequelize';
import db from "../db/connection";
import consumptionsModel from './consumptions.model';
import speedsModel from './speeds.model';
import measurementsModel from './measurements.model';
import weightModel from './weight.model';
import carClassesModel from './car_classes.model';
import transmissionsModel from './transmissions.model';
import userModel from './user.model';

const vehicleModel = db.define('vehicles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  consumptions_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "consumptions",
      key: 'id'
    }
  },
  speeds_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "speeds",
      key: 'id'
    }
  },
  measurements_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "measurements",
      key: 'id'
    }
  },
  weight_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "weight",
      key: 'id'
    }
  },
  car_classes_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "car_classes",
      key: 'id'
    }
  },
  transmissions_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "transmissions",
      key: 'id'
    }
  },
  user_owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user_owner",
      key: 'id'
    }
  },
  url_image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, 
{
  timestamps: true,
});


export default vehicleModel;