/*
 * Swagger Petstore - OpenAPI 3.0
 * This server is an API service that facilitates the management of users, including operations such as user registration, login, profile retrieval, and logout. Additionally, it supports the handling of various data entities such as About Us information, Mentors, Mentees, QR codes, and request forms. The API provides endpoints for retrieving, creating, and updating these different data entities. The server is documented using Swagger, which allows for clear and standardized documentation of the available API endpoints and data schemas.
 *
 * OpenAPI spec version: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.11
 */
export class User {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new User();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('userStatus'))
        obj.userStatus = ApiClient.convertToType(data['userStatus'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
User.prototype.id = undefined;

/**
 * @member {String} username
 */
User.prototype.username = undefined;

/**
 * @member {String} firstName
 */
User.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
User.prototype.lastName = undefined;

/**
 * @member {String} email
 */
User.prototype.email = undefined;

/**
 * @member {String} password
 */
User.prototype.password = undefined;

/**
 * @member {String} phone
 */
User.prototype.phone = undefined;

/**
 * User Status
 * @member {Number} userStatus
 */
User.prototype.userStatus = undefined;

