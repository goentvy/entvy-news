// export function callApi() {
//     const clientId = import.meta.env.VITE_CLIENT_ID;
//     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
//     const query = encodeURIComponent("박보영");
//     const resultUrl = `https://openapi.naver.com/v1/search/news.json?query=${query}`;

//     const options = {
//         'method': 'get',
//         'headers': {
//             'X-Naver-Client-Id': clientId,
//             'X-Naver-Client-Secret': clientSecret
//         }
//     };

//     const response = UrlFetchApp.fetch(resultUrl, options).getContentText();
//     const json = JSON.parse(response);
//     console.log(json);

//     return json
// }