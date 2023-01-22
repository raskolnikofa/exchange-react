import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { currencyActions } from '../../store/configureStore';
import { CurrenciesSearchInput } from './CurrenciesSearchInput';

export const CurrenciesSearch = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const changeSearchFilter = e => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        dispatch(currencyActions.setFilter(searchValue));
    }, [searchValue, dispatch]);

    return (
        <CurrenciesSearchInput
            searchValue={searchValue}
            onChange={changeSearchFilter}
        />
    );
};
