import axios from 'axios';
export function getPicturesByQuery(parameters) {
  const { API_KEY, image_type, orientation, safesearch, page, limit, q } =
    parameters;
  const BASE_URL = 'https://pixabay.com/api/';

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q,
        page,
        per_page: limit,
        image_type,
        orientation,
        safesearch,
      },
    })
    .then(({ data }) => ({
      data: data.hits,
      total: data.total,
    }));
}
