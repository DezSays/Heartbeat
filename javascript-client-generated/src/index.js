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
import {ApiClient} from './ApiClient';
import {Address} from './model/Address';
import {ApiResponse} from './model/ApiResponse';
import {Category} from './model/Category';
import {Customer} from './model/Customer';
import {Order} from './model/Order';
import {Pet} from './model/Pet';
import {Tag} from './model/Tag';
import {User} from './model/User';
import {PetApi} from './api/PetApi';

/**
* This_server_is_an_API_service_that_facilitates_the_management_of_users_including_operations_such_as_user_registration_login_profile_retrieval_and_logout__Additionally_it_supports_the_handling_of_various_data_entities_such_as_About_Us_information_Mentors_Mentees_QR_codes_and_request_forms__The_API_provides_endpoints_for_retrieving_creating_and_updating_these_different_data_entities__The_server_is_documented_using_Swagger_which_allows_for_clear_and_standardized_documentation_of_the_available_API_endpoints_and_data_schemas_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SwaggerPetstoreOpenApi30 = require('index'); // See note below*.
* var xxxSvc = new SwaggerPetstoreOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SwaggerPetstoreOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SwaggerPetstoreOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SwaggerPetstoreOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.11
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The Pet model constructor.
     * @property {module:model/Pet}
     */
    Pet,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The PetApi service constructor.
    * @property {module:api/PetApi}
    */
    PetApi
};
