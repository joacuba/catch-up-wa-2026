export const errorInterceptor = {
    /**
     * Handle successful responses
     * @param {import('axios').AxiosResponse} response - The Axios response object
     * @returns {import('axios').AxiosResponse} The original response object
     */
    onResponse: (response) => {
        response
    },
    /**
     * Handle errors in responses
     * @param {import('axios').AxiosError} error - The Axios error object
     * @returns {Promise<never>} A rejected promise with the error message
     */
    onError: (error) => {
        let message;
        if (error.response) {
            console.error("Data:", error.response.data);
            console.error("Status:", error.response.status);
            console.error("Headers:", error.response.headers);
            message = error.response.data["message"] || `Error: ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            console.error("Request:", error.request);
            message = "An error occurred while making the request";
        } else {
            console.error("Error:", error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }
}