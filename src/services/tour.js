import { API_URLS } from "constants/config";
import apiRequest from "./apiRequest";

export const getTourInfoAPI = () => {
  return apiRequest.get(API_URLS.tour);
};

export const getTourPlaceInfoAPI = (id) => {
  return apiRequest.get(`${API_URLS.tour}/${id}`);
};

export const getTourAudioInfoAPI = (id) => {
  return apiRequest.get(`${API_URLS.tour}/${id}/speak`);
};
