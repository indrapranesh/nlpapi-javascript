const nlapi = require('nlapi-javascript');

// nlapi.getToken('indrapranesh2111gmail.com','helloworlD@1')
// .then((res)=> {
//     console.log(res);
// },
// (err) => {
//     console.log(err);
// }
// )

// nlapi.fullAnalysis({
//     "document": {
//         "text": "Michael Jordan was one of the best basketball players of all time. Scoring was Jordan's stand-out skill, but he still holds a defensive NBA record, with eight steals in a half."
//     }
// },'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNDc4NWIwMGEtNzc3Zi00NDQxLWFlZWUtODYwMjYyZmZkNzQ2IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI0Nzg1YjAwYS03NzdmLTQ0NDEtYWVlZS04NjAyNjJmZmQ3NDYiLCJjdXN0b206Y29tcGFueSI6IiAiLCJhdWQiOiI1a2g5YzBtb2NuajkyM3FkY2pzazM3OHN2aCIsImV2ZW50X2lkIjoiNzVlYWRjMTMtZjZkYy00MWQxLWJlNjktMzNhYzMyMWQ3MDAyIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTM4MjY4MzUsIm5hbWUiOiJJbmRyYSBQcmFuZXNoIiwiZXhwIjoxNjEzOTEzMjM1LCJpYXQiOjE2MTM4MjY4MzUsImZhbWlseV9uYW1lIjoiUGFsYW5pc2FteSIsImVtYWlsIjoiaW5kcmFwcmFuZXNoMjExMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.NYJMPWbm1tn_S8p6J9JlAQulRSVbAvUogIrwS682tf2_pST6BD6-iFyGPCJB0E5RUpcUAFXNzm8XpNH93XRJvIw0ygI-YfBdM1IgGF9e0z9iy-xsGYkT6uZBK4TiPEj2OV203taVgMOrMpCpDoCl-OSlS0XUqnICs56wgeUFCFQ8HLip7CUO4Sh9zYlxkpeskELNfujIObRkNa-Fk8ULyE_j3LvPgoc-3wCJCMEof4A8UVCX79B__4j7Y_Kuhyr5ANhxuBMTx1_XqElkhafyixSSv8fErwHUzEQoXfnJ8b8gal-PQrOdHgQN4AEWmps2pM_wCBiYZNaYSIqKtXfR5A', 'en')
// .then((res)=> {
//     console.log(res);
// },
// (err) => {
//     console.log(err);
// }
// )

// nlapi.partialAnalysis(
//     {
//         "document": {
//             "text": "Michael Jordan was one of the best basketball players of all time. Scoring was Jordan's stand-out skill, but he still holds a defensive NBA record, with eight steals in a half."
//         }
//     },'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNDc4NWIwMGEtNzc3Zi00NDQxLWFlZWUtODYwMjYyZmZkNzQ2IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI0Nzg1YjAwYS03NzdmLTQ0NDEtYWVlZS04NjAyNjJmZmQ3NDYiLCJjdXN0b206Y29tcGFueSI6IiAiLCJhdWQiOiI1a2g5YzBtb2NuajkyM3FkY2pzazM3OHN2aCIsImV2ZW50X2lkIjoiNzVlYWRjMTMtZjZkYy00MWQxLWJlNjktMzNhYzMyMWQ3MDAyIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTM4MjY4MzUsIm5hbWUiOiJJbmRyYSBQcmFuZXNoIiwiZXhwIjoxNjEzOTEzMjM1LCJpYXQiOjE2MTM4MjY4MzUsImZhbWlseV9uYW1lIjoiUGFsYW5pc2FteSIsImVtYWlsIjoiaW5kcmFwcmFuZXNoMjExMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.NYJMPWbm1tn_S8p6J9JlAQulRSVbAvUogIrwS682tf2_pST6BD6-iFyGPCJB0E5RUpcUAFXNzm8XpNH93XRJvIw0ygI-YfBdM1IgGF9e0z9iy-xsGYkT6uZBK4TiPEj2OV203taVgMOrMpCpDoCl-OSlS0XUqnICs56wgeUFCFQ8HLip7CUO4Sh9zYlxkpeskELNfujIObRkNa-Fk8ULyE_j3LvPgoc-3wCJCMEof4A8UVCX79B__4j7Y_Kuhyr5ANhxuBMTx1_XqElkhafyixSSv8fErwHUzEQoXfnJ8b8gal-PQrOdHgQN4AEWmps2pM_wCBiYZNaYSIqKtXfR5A', 'en', 'disambiguation')
//     .then((res)=> {
//         console.log(res);
//         console.log(res.data.knowledge[0]);
//     },
//     (err) => {
//         console.log(err);
//     }
// )

// nlapi.getContexts('eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNDc4NWIwMGEtNzc3Zi00NDQxLWFlZWUtODYwMjYyZmZkNzQ2IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI0Nzg1YjAwYS03NzdmLTQ0NDEtYWVlZS04NjAyNjJmZmQ3NDYiLCJjdXN0b206Y29tcGFueSI6IiAiLCJhdWQiOiI1a2g5YzBtb2NuajkyM3FkY2pzazM3OHN2aCIsImV2ZW50X2lkIjoiNzVlYWRjMTMtZjZkYy00MWQxLWJlNjktMzNhYzMyMWQ3MDAyIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTM4MjY4MzUsIm5hbWUiOiJJbmRyYSBQcmFuZXNoIiwiZXhwIjoxNjEzOTEzMjM1LCJpYXQiOjE2MTM4MjY4MzUsImZhbWlseV9uYW1lIjoiUGFsYW5pc2FteSIsImVtYWlsIjoiaW5kcmFwcmFuZXNoMjExMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.NYJMPWbm1tn_S8p6J9JlAQulRSVbAvUogIrwS682tf2_pST6BD6-iFyGPCJB0E5RUpcUAFXNzm8XpNH93XRJvIw0ygI-YfBdM1IgGF9e0z9iy-xsGYkT6uZBK4TiPEj2OV203taVgMOrMpCpDoCl-OSlS0XUqnICs56wgeUFCFQ8HLip7CUO4Sh9zYlxkpeskELNfujIObRkNa-Fk8ULyE_j3LvPgoc-3wCJCMEof4A8UVCX79B__4j7Y_Kuhyr5ANhxuBMTx1_XqElkhafyixSSv8fErwHUzEQoXfnJ8b8gal-PQrOdHgQN4AEWmps2pM_wCBiYZNaYSIqKtXfR5A')
// .then((res)=> {
//     console.log(res.contexts[0].languages);
// },
// (err) => {
//     console.log(err);
// }
// )
