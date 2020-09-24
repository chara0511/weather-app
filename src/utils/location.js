export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator || !navigator.geolocation) {
      reject(
        new Error(
          "Error when trying to get your Geolocation, maybe  is not supported by your browser. "
        )
      );
    }

    const success = (position) => {
      //console.log(position.coords.latitude, position.coords.longitude);

      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const error = (err) => reject(new Error(`${err.message}`));

    navigator.geolocation.getCurrentPosition(success, error);
  });
