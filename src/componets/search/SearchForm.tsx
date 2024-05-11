import classes from './searchForm.module.css';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetRecipesBySearchQuery } from '../../api/recipesApi';
import { useDebounce } from '../../hooks/hooks';
import { Preloader } from '../common/Preloader';
import { Suggest } from './Suggest';

export type Recipe = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const [isSuggestHidden, setIsSuggestHidden] = useState(true);
  const handleInputFocus = () => setIsSuggestHidden(false);


  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  const navigate = useNavigate();

  const suggestionsRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const debouncedSearch = useDebounce(searchValue);

  // спрячу саджесты при клике вне формы:
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Element) &&
        e.target !== inputRef.current
      ) {
        setIsSuggestHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  ////

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && name !== searchValue.trim()) {
      navigate(`/search?name=${searchValue}`);
      setIsSuggestHidden(true);
      inputRef.current?.blur();
    }
  };

  const handleSuggestClick = (item: Recipe) => {
    navigate(`/description/${item.id}`);
    setIsSuggestHidden(true);
  };

  const {data, isLoading} = useGetRecipesBySearchQuery(debouncedSearch, {skip: debouncedSearch.length === 0});
  const recipes = data!;

  
  const suggestsWrapper = () => {
    if (isLoading) {
      return <Preloader />;
    }
    if (recipes && recipes.length > 0) {
      return recipes.map((item) => (
        <Suggest
          key={item.id}
          name={item.name}
          handleSuggestClick={() => handleSuggestClick(item)}
        />
      ));
    }
    return null;
  };


  return (
    <div className={classes.searchWrapper}>
      <form className={classes.formSearch} onSubmit={handleSubmitSearch}>
        <input
          className={classes.inputSearch}
          placeholder='Search recipe...'
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
        />
        <button type='submit' className={classes.btn}></button>
      </form>
      <div className={isSuggestHidden === true ? classes.hidden : classes.active}
        ref={suggestionsRef}
      >
        {suggestsWrapper()}
      </div>
    </div>

  )
}