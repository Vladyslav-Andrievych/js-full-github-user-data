import { getUserData, getReposList } from './gateways.js';
import { renderReposList, cleanRepoList } from './renderRepos.js';
import { renderUserData } from './renderUser.js';
import { hideSpinner, showSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const buttonElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const onSearchClick = () => {
  showSpinner();
  cleanRepoList();
  const userName = inputElem.value;

  getUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => getReposList(url))
    .then((reposList) => {
      renderReposList(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

buttonElem.addEventListener('click', onSearchClick);
