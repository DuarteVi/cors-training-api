/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/data1",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST,PUT,OPTIONS,DELETE" },
                ]
            },
            {
                source: "/api/data2",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Custom-Header"},
                ]
            },
            {
                source: "/api/data3",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://cors-training-website.vercel.app" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            },
            {
                source: "/api/data4",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "PUT" },
                ]
            },
            {
                source: "/api/data5",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://other-website.com" },
                ]
            },
            {
                source: "/api/data6",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "http://cors-training-website.vercel.app" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            },
            {
                source: "/api/data7",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://cors-training-website.vercel.app:7404" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            },
            {
                source: "/api/data8",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://vercel.app" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            },
            {
                source: "/api/data9",
                headers: [
                    { key: "Access-Control-Allow-Origin", value:"https://cors-training-website.vercel.app:443" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            }
        ]
    }
};

// const nextConfig = {
//     async headers() {
//         return [
//             {
//                 source: "/api/data1",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "*" },
//                     { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST,PUT,OPTIONS,DELETE" },
//                 ]
//             },
//             {
//                 source: "/api/data2",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "*" },
//                     { key: "Access-Control-Allow-Methods", value: "" },
//                     { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Custom-Header"}
//                 ]
//             },
//             {
//                 source: "/api/data3",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
//                     { key: "Access-Control-Allow-Methods", value: "DELETE" },
//                 ]
//             },
//             {
//                 source: "/api/data4",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "*" },
//                     { key: "Access-Control-Allow-Methods", value: "PUT" },
//                 ]
//             },
//             {
//                 source: "/api/data5",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "https://other-website.com" },
//                 ]
//             },
//             {
//                 source: "/api/data6",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "https://localhost:3000" },
//                     { key: "Access-Control-Allow-Methods", value: "DELETE" },
//                 ]
//             },
//             {
//                 source: "/api/data7",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "http://localhost:7404" },
//                     { key: "Access-Control-Allow-Methods", value: "DELETE" },
//                 ]
//             },
//             {
//                 source: "/api/data8",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, // useless in local
//                     { key: "Access-Control-Allow-Methods", value: "DELETE" },
//                 ]
//             },
//             {
//                 source: "/api/data9",
//                 headers: [
//                     { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
//                     { key: "Access-Control-Allow-Methods", value: "DELETE" },
//                 ]
//             }
//         ]
//     }
// };


export default nextConfig;