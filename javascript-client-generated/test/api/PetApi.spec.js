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

  beforeEach(function() {
    instance = new SwaggerPetstoreOpenApi30.PetApi();
  });

  describe('(package)', function() {
    describe('PetApi', function() {
      describe('addPet', function() {
        it('should call addPet successfully', function(done) {
          // TODO: uncomment, update parameter values for addPet call and complete the assertions
          /*

          instance.addPet(body, id, name, category, photoUrls, tags, status, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstoreOpenApi30.Pet);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('findPetsByStatus', function() {
        it('should call findPetsByStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for findPetsByStatus call and complete the assertions
          /*
          var opts = {};

          instance.findPetsByStatus(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SwaggerPetstoreOpenApi30.Pet);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePet', function() {
        it('should call updatePet successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePet call and complete the assertions
          /*

          instance.updatePet(body, id, name, category, photoUrls, tags, status, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstoreOpenApi30.Pet);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
