import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

const getCrew = () => {
  const request = axios.get(`${baseUrl}/crew`);
  return request.then((response) => response.data);
};

const getDestinations = () => {
  const request = axios.get(`${baseUrl}/destinations`);
  return request.then((response) => response.data);
};

const getTechnologies = () => {
  const request = axios.get(`${baseUrl}/technologies`);
  return request.then((response) => response.data);
};

export const getData = async () => {
  const crew = await getCrew();
  const destinations = await getDestinations();
  const technologies = await getTechnologies();
  const data = {
    crew: crew.data.crew,
    destinations: destinations.data.destination,
    technologies: technologies.data.technology,
  };
  return data;
};
