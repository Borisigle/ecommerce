import axios from "axios";
import { Product } from "./types";

export default {
  list: async () => {
    return axios
    .get(
      `https://docs.google.com/spreadsheets/d/e/2PACX-1vRtEFfdqQ4UnlnXu3d7SgVBXttAtztRvPpGz3wurAGF8n774HjEa9w3R7R2Cv7L1F8NpEvSgJv1MSNb/pub?output=csv`,
        {
            responseType : 'blob',
        },
    )
    .then((response) => {
        return response.data;
    });
  },
};
