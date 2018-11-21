export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Send-IT API',
    description: 'is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.',
  },
  schemes: ['https'],
  host: 'https://senditt.herokuapp.com/',
  basePath: '/api/v1/',
  tags: [
    {
      name: 'Auth',
      description: 'Authenticate a user',
    },
    {
      name: 'Parcels',
      description: 'Creating Parcels',
    },
  ],
  paths: {
    '/auth/login': {
      post: {
        tags: ['Auth User'],
        summary: 'Login the API to get authentication token',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'email',
            in: 'formData',
            description: 'The email for login',
            required: true,
            type: 'string',
          },
          {
            name: 'password',
            in: 'formData',
            description: 'The password for login in clear text',
            required: true,
            type: 'string',
          },
        ],
        description: 'Returns an authentication token on success.',
        responses: {
          200: {
            description:
             'Authentication Successful, return user details and token',
          },
          400: {
            description: 'Wrong Password and Email Combination',
          },
        },
      },
    },
    '/auth/signup': {
      post: {
        tags: ['Auth User'],
        summary: 'Create an account for a new user on the API',
        description: 'Returns success 201 on success.',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'firstname',
            in: 'formData',
            description:
                            'The firstname of the user account to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'othername',
            in: 'formData',
            description:
                            'The othername of the user account to be created',
            required: true,
            type: 'string',
          }, {
            name: 'username',
            in: 'formData',
            description:
                            'The username of the user account to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'lastname',
            in: 'formData',
            description:
                            'The lastname for the user account to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'password',
            in: 'formData',
            description:
                            'The password for the user account to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'email',
            in: 'formData',
            description:
                            'The email for the user account to be created',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          201: {
            description: 'New User created successfully',
            schema: {
              $ref: '#/definitions/User',
            },
          },
          400: {
            description: 'User Already Exists',
          },
          500: {
            description: 'Error Saving User',
          },
        },
      },
    },
    '/auth/parcel/:id/status': {
      post: {
        tags: ['Auth Admin'],
        summary: 'Update Parcel Status',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
          {
            name: 'status',
            in: 'formData',
            description: 'The status to be changed to',
            required: true,
            type: 'string',
          },
        ],
        description: 'Update Parcel Status by Admin',
        responses: {
          200: {
            description: 'Parcel Status Updated Successfully',
          },
          400: {
            description: 'Error Updating Parcel Status',
          },
        },
      },
    },
    '/auth/parcel/:id/location': {
      post: {
        tags: ['Auth Admin'],
        summary: 'Update Parcel Location',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
          {
            name: 'location',
            in: 'formData',
            description: 'The location to be changed to',
            required: true,
            type: 'string',
          },
        ],
        description: 'Update Parcel Location By Admin',
        responses: {
          200: {
            description:
                    'Parcel Location Updated Successfully',
          },
          400: {
            description: 'Error Updating Parcel Location',
          },
        },
      },
    },
    '/auth/admin/parcel': {
      get: {
        tags: ['Auth Admin'],
        summary: 'Get all parcels created on the platform',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
        ],
        description: 'Get all Parcels created on platform By Admin',
        responses: {
          200: {
            description:
             'Successfully fetched all parcels',
          },
          400: {
            description: 'Empty Parcel Array',
          },
        },
      },
    },
    '/auth/admin/parcel/:id': {
      get: {
        tags: ['Auth Admin'],
        summary: 'Get parcel by id ',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
        ],
        description: 'Get parcel by id created on platform By Admin',
        responses: {
          200: {
            description:
             'Successfully fetched parcel',
          },
          404: {
            description: 'Parcel with id does not Exist',
          },
        },
      },
    },
    '/auth/parcel': {
      post: {
        tags: ['Parcels'],
        summary: 'Create parcel for logged in user on the API',
        description: 'Returns success 201 on success.',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'parcel',
            in: 'formData',
            description:
                'The name of the parcel to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'weight',
            in: 'formData',
            description:
              'The weight of the parcel to be created',
            required: true,
            type: 'string',
          }, {
            name: 'weightMetric',
            in: 'formData',
            description:
                'The weightMetric of the parcel to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'status',
            in: 'formData',
            description:
                'The status of the parcel to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'location',
            in: 'formData',
            description:
                'The location of the parcel to be created',
            required: true,
            type: 'string',
          },
          {
            name: 'destination',
            in: 'formData',
            description:
                'The destination of the parcel to be created',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          201: {
            description: 'New Parcel created successfully',
            schema: {
              $ref: '#/definitions/Parcels',
            },
          },
          400: {
            description: 'Error Saving User',
          },
        },
      },
    },
    // eslint-disable-next-line no-dupe-keys
    '/auth/parcel - get': {
      get: {
        tags: ['Parcels'],
        summary: 'Get all parcels created by user on the platform',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
        ],
        description: 'Get all Parcels created on by user platform',
        responses: {
          200: {
            description:
               'Successfully fetched all parcels',
          },
          400: {
            description: 'Empty Parcels Array',
          },
        },
      },
    },
    '/auth/parcel/:id': {
      get: {
        tags: ['Parcels'],
        summary: 'Get parcel by parcelid for a user',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
        ],
        description: 'Get parcel by parcelid for a user',
        responses: {
          200: {
            description:
                 'Successfully fetched parcel',
          },
          400: {
            description: 'Error Fetching User',
          },
        },
      },
    },
    '/auth/parcel/:id/cancel': {
      get: {
        tags: ['Parcels'],
        summary: 'Cancel Parcel Order',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
        ],
        description: 'Change parcel status to cancel by user',
        responses: {
          200: {
            description:
                   'Parcel Status Updated Successfully',
          },
          400: {
            description: 'Error Updating Parcel Status',
          },
        },
      },
    },
    '/auth/parcel/:id/destination': {
      put: {
        tags: ['Parcels'],
        summary: 'Change parcel destination',
        consumes: ['application/x-www-form-urlencoded'],
        parameters: [
          {
            name: 'x-access-token',
            in: 'header',
            description: 'Authorization token',
            required: true,
            type: 'string',
          },
          {
            name: 'destination',
            in: 'formData',
            description:
                'The destination of the parcel to be changed',
            required: true,
            type: 'string',
          },
        ],
        description: 'Change parcel destination',
        responses: {
          200: {
            description:
                'Parcel Destination Updated Successfully',
          },
          400: {
            description: 'Error Updating Parcel Destination',
          },
        },
      },
    },
  },
};

// definitions: {
//     Auth: {
//       type: 'object',
//       properties: {
//         name: {
//           type: 'string',
//         },
//         email: {
//           type: 'string',
//         },
//         password: {
//           type: 'string',
//         },
//         fullname: {
//           type: 'string',
//         },
//       },
//     },
//   },
