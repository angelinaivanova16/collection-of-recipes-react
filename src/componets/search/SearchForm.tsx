import classes from './searchForm.module.css';
import { FormEvent, useRef, useState } from 'react';
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
  const [search, setSearch] = useState('');

  const [isSuggestHidden, setIsSuggestHidden] = useState(true);
  const handleInputFocus = () => setIsSuggestHidden(false);


  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  const navigate = useNavigate();

  const suggestionsRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const debouncedSearch = useDebounce(search);



  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim() && name !== search.trim()) { // для себя: trim - без пробелов с концов
      navigate(`/search?name=${search}`);
      setIsSuggestHidden(true);
      inputRef.current?.blur();
    }
  };


  const {
    data,
    error,
    isLoading,
    // isFetching, // доделать
  } = useGetRecipesBySearchQuery(debouncedSearch, {
    skip: debouncedSearch.length === 0,
  });
  const recipes = data!;


  const renderContent = () => {

    if (error) {
      return <div>Ничего не нашлось</div>;
    }

    const handleSuggestClick = (item: Recipe) => {
      navigate(`/description/${item.id}`);
      setIsSuggestHidden(true);
    };

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



  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={classes.searchWrapper}>
      <form className={classes.formSearch} onSubmit={handleSubmitSearch}>
        <input
          className={classes.inputSearch}
          placeholder='Search recipe...'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
        />
        <button type='submit' className={classes.btn}></button>
      </form>
      <div className={isSuggestHidden === true ? classes.hidden : classes.active}
        ref={suggestionsRef}
      >
        {renderContent()}
      </div>
    </div>

  )
}