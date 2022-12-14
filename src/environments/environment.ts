// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://localhost:10010',
  //apiUrl: 'http://0d60-103-88-77-218.ngrok.io/api/v1',
  //apiUrl: 'http://localhost:10010/api/v1',
  apiUrl: 'http://192.168.18.149:20005/api/v1',
   //apiUrl: 'http://207.180.233.17:10003/api/v1',
  webhookUrl: 'http://localhost:10010/webhook'
}; 

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
