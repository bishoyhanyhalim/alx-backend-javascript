export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from API");
        }, 1000);
    });
}
