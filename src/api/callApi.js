import react from 'react';
import axios from 'axios';
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID givV67qLkneaDG6l5lyhCiVpnEJAV_t-r37FgAIajug'
  }

}
);