import vehicleModel from "../models/vehicle.model";
import { FullVehicle } from "../interfaces/full_vehicle.interface";
import { FormattedVehicle } from "../interfaces/formatted_vehicle.interface";
import userModel from "../models/user.model";
import consumptionsModel from "../models/consumptions.model";
import speedsModel from "../models/speeds.model";
import measurementsModel from "../models/measurements.model";
import weightModel from "../models/weight.model";
import carClassesModel from "../models/car_classes.model";
import transmissionsModel from "../models/transmissions.model";
import { Vehicle } from "../interfaces/vehicle.interface";
import { Model } from "sequelize";
import consumptionUnitModel from "../models/consumption_units.model";
import speedUnitsModel from "../models/speed_units.model";
import measurementsUnitModel from "../models/measurements_units.model";
import weightUnitsModel from "../models/weight_units.model";
import userOwnerModel from "../models/user_owner.model";

class VehicleService {
  async get_all() {
    const response = await vehicleModel.findAll();
    return response;
  }

  async get_all_formatted() {
    const vehicles = await vehicleModel.findAll();

    const vehiclesJ: Vehicle[] = vehicles.map(vehicle => vehicle.toJSON() as Vehicle);

    const vehiclesF = await Promise.all(vehiclesJ.map(async vehicle => {
      const consumption = await consumptionsModel.findByPk(vehicle.consumptions_id);
      const consumptionJ = consumption?.toJSON();
      const consumption_unit_id = consumption?.get('consumption_units_id') as number;
      const consumption_unit = await consumptionUnitModel.findByPk(consumption_unit_id);
      const consumption_unitJ = consumption_unit?.toJSON();

      const speed = await speedsModel.findByPk(vehicle.speeds_id);
      const speedJ = speed?.toJSON();
      const speed_units_id = speed?.get('speed_units_id') as number;
      const speed_unit = await speedUnitsModel.findByPk(speed_units_id);
      const speed_unitJ = speed_unit?.toJSON();

      const measurement = await measurementsModel.findByPk(vehicle.measurements_id);
      const measurementJ = measurement?.toJSON();
      const measurement_units_id = measurement?.get('measurement_units_id') as number;
      const measurement_unit = await measurementsUnitModel.findByPk(measurement_units_id);
      const measurement_unitJ = measurement_unit?.toJSON();

      const weight = await weightModel.findByPk(vehicle.weight_id);
      const weightJ = weight?.toJSON();
      const weight_units_id = weight?.get('weight_units_id') as number;
      const weight_unit = await weightUnitsModel.findByPk(weight_units_id);
      const weight_unitJ = weight_unit?.toJSON();

      const car_class = await carClassesModel.findByPk(vehicle.car_classes_id);
      const car_classJ = car_class?.toJSON();
      const car_classes_id = car_class?.get('car_classes_id') as number;

      const transmission = await transmissionsModel.findByPk(vehicle.transmissions_id);
      const transmissionJ = transmission?.toJSON();

      const owner = await userOwnerModel.findByPk(vehicle.user_owner_id);
      const user_id = owner?.get('users_id') as number;
      
      return {
        id: vehicle.id,
        brand: vehicle.brand,
        model: vehicle.model,
        consumption: `${consumptionJ?._value} ${consumption_unitJ?.symbol}`,
        speed: `${speedJ?._value} ${speed_unitJ?.symbol}`,
        measurements: `${measurementJ.length}${measurement_unitJ.symbol} x ${measurementJ.width}${measurement_unitJ.symbol} x ${measurementJ.height}${measurement_unitJ.symbol}`,
        weight: `${weightJ.weight}${weight_unitJ.symbol_EN}`,
        car_class: `${car_classJ?._name_EN}`,
        transmissions: `${transmissionJ._name_EN}`,
        user_id: user_id,
        url_image: vehicle.url_image
      };
    }));

    return vehiclesF;
  }

  async get_by_id(id: string) {
    const vehicleExists = await vehicleModel.findByPk(id);
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";
    return vehicleExists;
  }

  async get_by_id_formatted(id: string) {
    const vehicleExists = await vehicleModel.findByPk(id);
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";

    const consumption_id = vehicleExists.get('consumptions_id') as number;
    const consumption = await consumptionsModel.findByPk(consumption_id);
    const consumptionJ = consumption?.toJSON();
    const consumption_unit_id = consumption?.get('consumption_units_id') as number;
    const consumption_unit = await consumptionUnitModel.findByPk(consumption_unit_id);
    const consumption_unitJ = consumption_unit?.toJSON();

    const speed_id = vehicleExists.get('speeds_id') as number;
    const speed = await speedsModel.findByPk(speed_id);
    const speedJ = speed?.toJSON();
    const speed_units_id = speed?.get('speed_units_id') as number;
    const speed_unit = await speedUnitsModel.findByPk(speed_units_id);
    const speed_unitJ = speed_unit?.toJSON();

    const measurement_id = vehicleExists.get('measurements_id') as number;
    const measurement = await measurementsModel.findByPk(measurement_id);
    const measurementJ = measurement?.toJSON();
    const measurement_units_id = measurement?.get('measurement_units_id') as number;
    const measurement_unit = await measurementsUnitModel.findByPk(measurement_units_id);
    const measurement_unitJ = measurement_unit?.toJSON();

    const weight_id = vehicleExists.get('weight_id') as number;
    const weight = await weightModel.findByPk(weight_id);
    const weightJ = weight?.toJSON();
    const weight_units_id = weight?.get('weight_units_id') as number;
    const weight_unit = await weightUnitsModel.findByPk(weight_units_id);
    const weight_unitJ = weight_unit?.toJSON();

    const car_class_id = vehicleExists.get('car_classes_id') as number;
    const car_class = await carClassesModel.findByPk(car_class_id);
    const car_classJ = car_class?.toJSON();
    const car_classes_id = car_class?.get('car_classes_id') as number;

    const transmission_id = vehicleExists.get('transmissions_id') as number;
    const transmission = await transmissionsModel.findByPk(transmission_id);
    const transmissionJ = transmission?.toJSON();

    const user_owner_id = vehicleExists.get('user_owner_id') as number;
    const owner = await userOwnerModel.findByPk(user_owner_id);
    const user_id = owner?.get('users_id') as number;
      
    return {
      id: vehicleExists.get('id'),
      brand: vehicleExists.get('brand'),
      model: vehicleExists.get('model'),
      consumption: `${consumptionJ?._value} ${consumption_unitJ?.symbol}`,
      speed: `${speedJ?._value} ${speed_unitJ?.symbol}`,
      measurements: `${measurementJ.length}${measurement_unitJ.symbol} x ${measurementJ.width}${measurement_unitJ.symbol} x ${measurementJ.height}${measurement_unitJ.symbol}`,
      weight: `${weightJ.weight}${weight_unitJ.symbol_EN}`,
      car_class: `${car_classJ?._name_EN}`,
      transmissions: `${transmissionJ._name_EN}`,
      user_id: user_id,
      url_image: vehicleExists.get('url_image')
    };
  }

  async get_by_owner_id(id: string) {
    const userExists = await userModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    const vehicleExists = await vehicleModel.findAll({ where: { user_owner_id: id } });
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";
    return vehicleExists;
  }

  async get_by_owner_id_formatted(id: string) {
    const userExists = await userModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    const userOwnerId = await userOwnerModel.findOne({where: {users_id: id}});
    const owner_id = userOwnerId?.get('id') as number;
    console.log(owner_id);
    const vehicleExists = await vehicleModel.findAll({ where: { user_owner_id: owner_id } });
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";

    const vehiclesJ: Vehicle[] = vehicleExists.map(vehicle => vehicle.toJSON() as Vehicle);

    const vehiclesF = await Promise.all(vehiclesJ.map(async vehicle => {
      const consumption = await consumptionsModel.findByPk(vehicle.consumptions_id);
      const consumptionJ = consumption?.toJSON();
      const consumption_unit_id = consumption?.get('consumption_units_id') as number;
      const consumption_unit = await consumptionUnitModel.findByPk(consumption_unit_id);
      const consumption_unitJ = consumption_unit?.toJSON();

      const speed = await speedsModel.findByPk(vehicle.speeds_id);
      const speedJ = speed?.toJSON();
      const speed_units_id = speed?.get('speed_units_id') as number;
      const speed_unit = await speedUnitsModel.findByPk(speed_units_id);
      const speed_unitJ = speed_unit?.toJSON();

      const measurement = await measurementsModel.findByPk(vehicle.measurements_id);
      const measurementJ = measurement?.toJSON();
      const measurement_units_id = measurement?.get('measurement_units_id') as number;
      const measurement_unit = await measurementsUnitModel.findByPk(measurement_units_id);
      const measurement_unitJ = measurement_unit?.toJSON();

      const weight = await weightModel.findByPk(vehicle.weight_id);
      const weightJ = weight?.toJSON();
      const weight_units_id = weight?.get('weight_units_id') as number;
      const weight_unit = await weightUnitsModel.findByPk(weight_units_id);
      const weight_unitJ = weight_unit?.toJSON();

      const car_class = await carClassesModel.findByPk(vehicle.car_classes_id);
      const car_classJ = car_class?.toJSON();

      const transmission = await transmissionsModel.findByPk(vehicle.transmissions_id);
      const transmissionJ = transmission?.toJSON();

      const owner = await userOwnerModel.findByPk(vehicle.user_owner_id);
      const user_id = owner?.get('users_id') as number;
      
      return {
        id: vehicle.id,
        brand: vehicle.brand,
        model: vehicle.model,
        consumption: `${consumptionJ?._value} ${consumption_unitJ?.symbol}`,
        speed: `${speedJ?._value} ${speed_unitJ?.symbol}`,
        measurements: `${measurementJ.length}${measurement_unitJ.symbol} x ${measurementJ.width}${measurement_unitJ.symbol} x ${measurementJ.height}${measurement_unitJ.symbol}`,
        weight: `${weightJ.weight}${weight_unitJ.symbol_EN}`,
        car_class: `${car_classJ?._name_EN}`,
        transmissions: `${transmissionJ._name_EN}`,
        user_id: user_id,
        url_image: vehicle.url_image
      };
    }));

    return vehiclesF;
  }

  async create(vehicle: FullVehicle) {
    const consumption = await consumptionsModel.create({
      _value: vehicle.consumption_value,
      consumption_units_id: vehicle.consumption_units_id
    });

    const speed = await speedsModel.create({
      _value: vehicle.speed_value,
      speed_units_id: vehicle.speed_units_id
    });

    const measurement = await measurementsModel.create({
      length: vehicle.length,
      width: vehicle.width,
      height: vehicle.height,
      measurement_units_id: vehicle.measurement_units_id
    });

    const weight = await weightModel.create({
      weight: vehicle.weight,
      weight_units_id: vehicle.weight_units_id
    });

    const response = await vehicleModel.create({
      brand: vehicle.brand,
      model: vehicle.model,
      consumptions_id: consumption.get('id'),
      speeds_id: speed.get('id'),
      measurements_id: measurement.get('id'),
      weight_id: weight.get('id'),
      car_classes_id: vehicle.car_classes_id,
      transmissions_id: vehicle.transmissions_id,
      user_owner_id: vehicle.user_owner_id,
      url_image: vehicle.url_image,
      is_active: 1
    });
    return response;
  }

  async _delete(id: string) {
    const vehicleExists = await vehicleModel.findByPk(id);
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";
    vehicleExists.update({ is_active: 0 });
    return vehicleExists;
  }
}

export { VehicleService };