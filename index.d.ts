// Type declarations placeholder
export function myModule(): string;
export function getCurrent(lat: number, lon: number, options?: { apiKey?: string, units?: string, fetchImpl?: Function }): Promise<object|null>;
export function get24hForecast(lat: number, lon: number, options?: { apiKey?: string, units?: string, fetchImpl?: Function }): Promise<object[]|null>;
export function getSun(lat: number, lon: number, options?: { apiKey?: string, units?: string, fetchImpl?: Function }): Promise<{sunrise: number, sunset: number}|null>;
