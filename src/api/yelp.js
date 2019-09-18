import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IbySt3K0HNU_SNuMg_Lu9Fm_k2bNlXLDMEEByHgjk5YMexYIUgd-MHotZXEDuIa8DFzkBvPtMCAJsc5VCKaECZEDCI8e3lb75VmF45YAioZSOEz3T_Uq8hzXCepuXXYx'
    }
});