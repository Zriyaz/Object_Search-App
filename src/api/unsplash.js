import axios from "axios"

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
      Authorization: 'Client-ID BlFCBbRLmojrrZ-5Q5buSwS-DgvGM7HlINupaBSk_TM'
    }
})

