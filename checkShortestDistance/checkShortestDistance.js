const sortJsonDataByDistance = require("./../sortByDistance/sortByDistance.js");

module.exports = function checkShortestJsonData(latitude, longitude) {
  const geoData = sortJsonDataByDistance(latitude, longitude);

  const checkIpAddress = geoData[0].ipv4;

  const data = require("./../domain/data.json");

  for (let i = 0; i < data.length; i++) {
    //console.log('My Ip adress for comparison',getIpAddress(data[i].meta));

    let ipAddress = getIpAddress(data[i].meta)
    if (checkIpAddress === ipAddress[0]) {
      console.log("The shortest distance is : ", ipAddress.input)
      console.log("The shortest distance is : ",data[i])
      
      return data[i];
    }
  }

  return null;
};

function getIpAddress(metaData) {
  let regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  let ipAddress = metaData.match(regex);
  return ipAddress;
}
