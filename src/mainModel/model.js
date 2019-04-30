const mainModel = {};
const self = mainModel;
self.endCountDown = true;
self.initLang = () => {
  const navigatorLang = navigator.language || navigator.userLanguage;
  self.setLang = navigatorLang.substring(0, 2) === 'zh' ? 'cn' : 'en';
};
self.changeLang = () => {
  let country =  self.setLang;
  let nextCountry = country==='en' ? 'cn':'en';
  let tempLang = country;
  self.setLang = nextCountry;
  nextCountry = tempLang;
  // console.log('self.setLang', self.setLang)
};
self.countdownDay = () => {
  const timer = setInterval(() => {
    const last = new Date("2019-01-08 12:00:00");
    let date = new Date();
    if (date > last) {
      window.clearInterval(timer);
        self.endCountDown = false;
    }
  },1000)
};
self.initLang();
export default mainModel;
