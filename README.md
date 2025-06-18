# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/openweathermap [![npm version](https://img.shields.io/npm/v/@purinton/openweathermap.svg)](https://www.npmjs.com/package/@purinton/openweathermap)[![license](https://img.shields.io/github/license/purinton/openweathermap.svg)](LICENSE)[![build status](https://github.com/purinton/openweathermap/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/openweathermap/actions)

> A simple, modern, Node.js client for the OpenWeatherMap API. Fetch current weather, 24-hour forecast, and sunrise/sunset times with a clean, promise-based API.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Fetch current weather for any coordinates
- Fetch 24-hour forecast (3-hour intervals)
- Fetch sunrise and sunset times (adjusted to local timezone)
- Fully typed (TypeScript definitions included)
- Supports dependency injection for fetch and API key (easy to test/mocks)

## Installation

```bash
npm install @purinton/openweathermap
```

## Usage

```js
import { getCurrent, get24hForecast, getSun } from '@purinton/openweathermap';

const lat = 40.7128;
const lon = -74.0060;
const apiKey = 'your_api_key_here';

(async () => {
  const current = await getCurrent(lat, lon, { apiKey, units: 'F' });
  console.log('Current:', current);

  const forecast = await get24hForecast(lat, lon, { apiKey, units: 'F' });
  console.log('24h Forecast:', forecast);

  const sun = await getSun(lat, lon, { apiKey, units: 'F' });
  console.log('Sunrise/Sunset:', sun);
})();
```

## API

### getCurrent(lat, lon, options?)

Fetches current weather for the given latitude and longitude.

- `lat` (number): Latitude
- `lon` (number): Longitude
- `options` (object):
  - `apiKey` (string, required): Your OpenWeatherMap API key
  - `units` (string, optional): 'F' for Fahrenheit, 'C' for Celsius (default 'C')
  - `fetchImpl` (function, optional): Custom fetch implementation (for testing/mocks)
- **Returns:** Promise resolving to the current weather object (see OpenWeatherMap docs)

### get24hForecast(lat, lon, options?)

Fetches the next 24 hours of forecast data (3-hour intervals, up to 8 items).

- Same parameters as `getCurrent`
- **Returns:** Promise resolving to an array of forecast objects

### getSun(lat, lon, options?)

Fetches sunrise and sunset times for the given coordinates, returning both UTC and local times.

- Same parameters as `getCurrent`
- **Returns:** Promise resolving to:

  ```js
  {
    sunriseUtc: number,    // Sunrise time (UTC, Unix timestamp)
    sunsetUtc: number,     // Sunset time (UTC, Unix timestamp)
    sunriseLocal: number,  // Sunrise time (local, Unix timestamp)
    sunsetLocal: number,   // Sunset time (local, Unix timestamp)
    offset: number       // Timezone offset in seconds (from UTC)
  }
  ```

## TypeScript

Type definitions are included and will be picked up automatically. Example:

```ts
import { getCurrent, get24hForecast, getSun } from '@purinton/openweathermap';

const weather = await getCurrent(40.7128, -74.0060, { apiKey: 'your_api_key_here' });
// weather: object (see OpenWeatherMap API docs)
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/openweathermap)
- [npm](https://www.npmjs.com/package/@purinton/openweathermap)
- [Discord](https://discord.gg/QSBxQnX7PF)
