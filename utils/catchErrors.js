export default function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // The request was made but the server responded with status code other than 200x
    errorMsg = error.response.data;
    console.error('Error response', errorMsg);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Error request', errorMsg)
  } else {
    // Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error('Error message', errorMsg);
  }
  displayError(errorMsg)
}