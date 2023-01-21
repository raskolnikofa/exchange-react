import axios from 'axios';
import { CURRENCIES_API } from './constants';

async function fetchCurrencies() {
    const { data } = await axios.get(CURRENCIES_API);
    return data;
}

export default fetchCurrencies;
