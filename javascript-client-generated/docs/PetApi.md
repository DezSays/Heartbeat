# SwaggerPetstoreOpenApi30.PetApi

All URIs are relative to *https://cor-hackathon-2023.vercel.app/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](PetApi.md#addPet) | **POST** /pet | Add a new pet to the store
[**findPetsByStatus**](PetApi.md#findPetsByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**updatePet**](PetApi.md#updatePet) | **PUT** /pet | Update an existing pet

<a name="addPet"></a>
# **addPet**
> Pet addPet(body, id, name, category, photoUrls, tags, status)

Add a new pet to the store

Add a new pet to the store

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let body = new SwaggerPetstoreOpenApi30.Pet(); // Pet | Create a new pet in the store
let id = 789; // Number | 
let name = "name_example"; // String | 
let category = new SwaggerPetstoreOpenApi30.Category(); // Category | 
let photoUrls = ["photoUrls_example"]; // [String] | 
let tags = [new SwaggerPetstoreOpenApi30.Tag()]; // [Tag] | 
let status = "status_example"; // String | 

apiInstance.addPet(body, id, name, category, photoUrls, tags, status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Pet**](Pet.md)| Create a new pet in the store | 
 **id** | **Number**|  | 
 **name** | **String**|  | 
 **category** | [**Category**](.md)|  | 
 **photoUrls** | [**[String]**](String.md)|  | 
 **tags** | [**[Tag]**](Tag.md)|  | 
 **status** | **String**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="findPetsByStatus"></a>
# **findPetsByStatus**
> [Pet] findPetsByStatus(opts)

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let opts = { 
  'status': "available" // String | Status values that need to be considered for filter
};
apiInstance.findPetsByStatus(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Status values that need to be considered for filter | [optional] [default to available]

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updatePet"></a>
# **updatePet**
> Pet updatePet(body, id, name, category, photoUrls, tags, status)

Update an existing pet

Update an existing pet by Id

### Example
```javascript
import {SwaggerPetstoreOpenApi30} from 'swagger_petstore___open_api_30';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerPetstoreOpenApi30.PetApi();
let body = new SwaggerPetstoreOpenApi30.Pet(); // Pet | Update an existent pet in the store
let id = 789; // Number | 
let name = "name_example"; // String | 
let category = new SwaggerPetstoreOpenApi30.Category(); // Category | 
let photoUrls = ["photoUrls_example"]; // [String] | 
let tags = [new SwaggerPetstoreOpenApi30.Tag()]; // [Tag] | 
let status = "status_example"; // String | 

apiInstance.updatePet(body, id, name, category, photoUrls, tags, status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Pet**](Pet.md)| Update an existent pet in the store | 
 **id** | **Number**|  | 
 **name** | **String**|  | 
 **category** | [**Category**](.md)|  | 
 **photoUrls** | [**[String]**](String.md)|  | 
 **tags** | [**[Tag]**](Tag.md)|  | 
 **status** | **String**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

