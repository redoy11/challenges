import fetch from 'isomorphic-fetch';

/** type of requests */

/** get method type */
export const GET = 'get';
export type GET = typeof GET;

/** most method type */
export const POST = 'post';
export type POST = typeof POST;

/**
 * makes a get request to the passed endpoint
 * @param {string} endpoint - the endpoint to which the get request is made
 * @returns {Promise<unknown>} - the response object
 */
const getRequest = async (endpoint: string): Promise<unknown> => {
  const response = await fetch(endpoint);
  return response;
};

/**
 * makes a post request to the passed endpoint
 * @param {string} endpoint - the endpoint to which the post request is made
 * @param {unknown} body - the object or array that will be sent in the body of post method
 * @returns {Promise<unknown>} - the response object
 */
const postRequest = async (
  endpoint: string,
  body: unknown
): Promise<unknown> => {
  const response = await fetch(endpoint, {
    method: POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response;
};

/**
 * makes a server request given the method, and endpoint
 * @param {GET | POST} method - the get or post method
 * @param {string} endpoint - the requested endpoint
 * @param {unknown} body - the body to be passed (optional)
 * @returns {Promise<unknown>} - the response data or null or error depending on request scenerio
 */
export const requestService = async (
  method: GET | POST,
  endpoint: string,
  body?: unknown
): Promise<unknown> => {
  let response;

  if (method === GET) {
    response = await getRequest(endpoint);
  } else if (method === POST) {
    response = await postRequest(endpoint, body);
  }

  if (response) {
    /** check response is valid or not */
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return await response.json();
  } else {
    return null;
  }
};
