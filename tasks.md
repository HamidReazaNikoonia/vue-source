# Tasks

use default for API

```javascript
axios.defaults.baseURL = 'http://api.domain.com'

export const get = (
  { commit },
  { url = '', params = {}, type = '', canCommit = true }
) => {
  axios
    .get(url, {
      params,
    })
    .then((resp) => {
      if (canCommit) {
        commit(type, resp.data)
      }
      return resp.data
    })
}
```
