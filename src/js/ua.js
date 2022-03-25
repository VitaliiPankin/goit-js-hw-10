import Not from 'notiflix';

function UA() {
  Not.Notify.init({
    useIcon: false,
    fontSize: '30px',
    info: {
      textColor: '#ffd700',
      background: '#0057b8',
    },
    failure: {
      textColor: '#0057b8',
      background: '#ffd700',
    },
  });

  Not.Notify.info(` Слава`);
  Not.Notify.failure(`Україні`);
}

export default { UA };
