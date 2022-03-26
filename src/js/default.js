import Not from 'notiflix';

function Default() {
  Not.Notify.init({
    useIcon: false,
    fontSize: '13px',
    info: {
      textColor: '#fff',
      background: '#26c0d3',
    },
    failure: {
      textColor: '#fff',
      background: '#ff5549',
    },
  });

}

export default { Default };
