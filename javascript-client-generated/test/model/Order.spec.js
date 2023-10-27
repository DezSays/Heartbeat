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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstoreOpenApi30);
  }
}(this, function(expect, SwaggerPetstoreOpenApi30) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Order', function() {
      beforeEach(function() {
        instance = new SwaggerPetstoreOpenApi30.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(SwaggerPetstoreOpenApi30.Order);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property petId (base name: "petId")', function() {
        // TODO: update the code to test the property petId
        expect(instance).to.have.property('petId');
        // expect(instance.petId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property shipDate (base name: "shipDate")', function() {
        // TODO: update the code to test the property shipDate
        expect(instance).to.have.property('shipDate');
        // expect(instance.shipDate).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property complete (base name: "complete")', function() {
        // TODO: update the code to test the property complete
        expect(instance).to.have.property('complete');
        // expect(instance.complete).to.be(expectedValueLiteral);
      });

    });
  });

}));
