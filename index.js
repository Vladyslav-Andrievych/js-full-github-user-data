const buttonElem = document.querySelector('.name-form__btn');

const getUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json());
};

const renderUserData = (userData) => {
  const userAvatarElem = document.querySelector('.user__avatar');
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');

  const { avatar_url, name, location } = userData;

  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location;
};

const onSearchClick = () => {
  const inputElem = document.querySelector('.name-form__input');

  const userName = inputElem.value;

  getUserData(userName)
    .then(userData => renderUserData(userData));
};

buttonElem.addEventListener('click', onSearchClick);