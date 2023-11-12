# KibaCities

Hey there! Welcome to KibaCities – your go-to place for city data in 🌍✨

## Features

- **Get Cities by Country Code:** Easily retrieve a list of cities in a specific country using its country code.
- **Search by City Name:** Quickly find city data by searching for its name.
- **Departments in Senegal:** Access a list of departments in Senegal.

## Usage

### Getting Cities by Country Code

```javascript
const senegalCities = KibaCities.getCitiesByCountryCode('SN');
console.log(senegalCities);
```

### Searching by City Name

```javascript
const cityData = KibaCities.getCityByName('Dakar');
console.log(cityData);
```

### Getting City Coordinates

```javascript
const coordinates = KibaCities.getCityCoordinates('Paris');
console.log(coordinates);
```

## City Lists

### Senegal Cities

You can access the full list of cities in Senegal using:

```javascript
const senegalCityList = KibaCities.sn.getLists();
console.log(senegalCityList);
```

### Departments in Senegal

```javascript
const senegalDepartments = KibaCities.sn.getListOfDepartments();
console.log(senegalDepartments);
```

### Mali Cities

```javascript
const maliCityList = KibaCities.ml.getLists();
console.log(maliCityList);
```

Feel free to explore and make the most out of KibaCities! If you have any questions or need assistance, don't hesitate to reach out. Happy coding! 😊

## Contributions 🤝

Contributions are welcome! Feel free to submit issues or open pull requests for enhancements or bug fixes.

source data: [Geonames](https://download.geonames.org/export/dump)
