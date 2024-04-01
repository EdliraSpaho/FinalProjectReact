
export const saveFavoriteFilmsToLocalStorage = (favoriteFilms: string[]) => {
  localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
};

export const getFavoriteFilmsFromLocalStorage = (): string[] => {
  const favoriteFilmsJson = localStorage.getItem("favoriteFilms");
  return favoriteFilmsJson ? JSON.parse(favoriteFilmsJson) : [];
};

export const saveBookedFilmsToLocalStorage = (bookedFilms: string[]) => {
  localStorage.setItem("bookedFilms", JSON.stringify(bookedFilms));
};

export const getBookedFilmsFromLocalStorage = (): string[] => {
  const bookedFilmsJson = localStorage.getItem("bookedFilms");
  return bookedFilmsJson ? JSON.parse(bookedFilmsJson) : [];
};
