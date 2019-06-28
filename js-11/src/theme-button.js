const body = document.querySelector('body');
body.classList.add('theme-light');

const toolbarIcon = document.querySelector('.toolbar__icon');
toolbarIcon.textContent = 'wb_sunny';

const toolbarButton = document.querySelector('.toolbar__button');
toolbarButton.addEventListener('click', handleClick);

function handleClick() {
  if (body.classList.contains('theme-light')) {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
    toolbarIcon.textContent = 'brightness_3';

    const darkThemeSettings = {
      theme: 'dark',
      bodyClassList: 'theme-dark',
      toolbarIconTextContent: 'brightness_3',
    };

    localStorage.setItem('settings', JSON.stringify(darkThemeSettings));

    return;
  }
  body.classList.add('theme-light');
  body.classList.remove('theme-dark');
  toolbarIcon.textContent = 'wb_sunny';
  const lighthemeSettings = {
    theme: 'light',
    bodyClassList: 'theme-light',
    toolbarIconTextContent: 'wb_sunny',
  };

  localStorage.setItem('settings', JSON.stringify(lighthemeSettings));
}

const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(savedSettings);

body.classList.add(parsedSettings.bodyClassList);
toolbarIcon.textContent = parsedSettings.toolbarIconTextContent;
