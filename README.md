# Edge 15 connector

A connector to use [edge diagnostics adapter](https://github.com/Microsoft/edge-diagnostics-adapter)
in sonar.

## Installation

First, you need to install [sonar](https://sonarwhal.com/):

`npm install -g @sonarwhal/sonar`

Then, install the new connector:

`npm install -g @sonarwhal/edge15-connector`

## Known issues

* To run this connector you need to open the command line as administrator.
* `onLoadingFailed` event is not dispatched.
* `Security` is not implemented.
* Edge has to open a url by default so, before navigate,
  you can get some events for that url. To avoid that,
  you should enable the property `useTabUrl` to `true`
  and then set the property `tabUrl` with an url to an empty
  html in the connector options. You can use the url
  `http://empty.sonarwhal.com/`.

## Usage

Configure the connector name in your `.sonarrc` configuration file:

```json
{
    "connector": {
        "name": "edge15-connector"
    }
}
```

Configure the adapter to use an empty html opening a new
browser or tab:

```json
{
    "connector": {
        "name": "edge15-connector",
        "options": {
            "useTabUrl": true,
            "tabUrl": "https://empty.sonarwhal.com/"
        }
    }
}
```
