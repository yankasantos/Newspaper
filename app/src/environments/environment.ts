
export const environment = {
  production: false,
  enableDebug: false,
  apiKey: 'SUKPsAmwRlWZ8jmIwDIcDuqgbSqK8vWy',
  _apiUrlScience: 'https://api.nytimes.com/svc/topstories/v2/science.json',

  get apiUrlScience() {
    return this._apiUrlScience;
  },
  set apiUrlScience(value) {
    this._apiUrlScience = value;
  },
  _apiUrlTechnology: 'https://api.nytimes.com/svc/topstories/v2/technology.json',
  get apiUrlTechnology() {
    return this._apiUrlTechnology;
  },
  set apiUrlTechnology(value) {
    this._apiUrlTechnology = value;
  },
};


