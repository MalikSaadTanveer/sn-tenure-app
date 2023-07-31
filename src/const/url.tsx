const GOOGLE_MAPS_API_KEY = "AIzaSyBJMhnAzR2o_HJpwCA5LjnuYmNOVr2_q_A";

export const geocodeURL = (location : string) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=\${encodeURIComponent("${location}")}&key=${GOOGLE_MAPS_API_KEY}`;
}