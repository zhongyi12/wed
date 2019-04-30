const ReconnectingWebSocket = require('./reconnecting-websocket');
const News = {};
News.socket_info = {
  socket: null,
  host: null,
  socket_connected: false,
};
News.feedBuffer = [];
News.feedCount = 0;
News.init_socket = (args) => {
  // if (News.socket_info.socket !== null) return;
  // console.log('News.socket_info.host:' + News.socket_info.host);
  args.logger = args.logger || console;
  args.host = args.host || 'localhost:8088';
  args.appid = args.appid || '0';
  args.objectid = args.objectid || '0';
  let beatInterval = null;
  News.socket_info.host = args.host;
  News.socket_info.port = args.port;
  News.socket_info.socket = new ReconnectingWebSocket(args.host, null, {
    debug: true,
    logger: args.logger,
    reconnectInterval: 3000,
  });
  // News.socket_info.socket = new WebSocket(ws_url);

  News.socket_info.socket.onclose = () => {
    News.socket_info.socket_connected = false;
    clearInterval(beatInterval);
  };

  // News.socket_info.socket.onerror = function(error) {
  //   console.log(`uArm Service connected Error: ${error.type}`);
  //   News.socket_info.socket_connected = false;
  //   News.socket_info.socket.close();
  // };

  News.socket_info.socket.onopen = () => {
    const heartBeat = {};
    beatInterval = setInterval(() => {
      News.send_msg(heartBeat);
    }, 45000);
    const startMsg = {
      cmd: 'login',
      appId: args.appid,
      installationId: args.objectid,
    };
    News.send_msg(startMsg);
    // console.log(`Message Send: ${js_msg}`);
    // // send heartBeat msg

    // News.socket_info.socket_connected = true;
  };

  News.socket_info.socket.onmessage = (evt) => {
    // console.log(evt); ---bug, crash if uncomment
    const msgData = evt;
    const item = JSON.parse(msgData.data);
    if (item.cmd === 'data') {
      News.insert_msg(item.msg);
      const rcvMsg = {
        cmd: 'ack',
        appId: args.appid,
        installationId: args.objectid,
        ids: item.ids,
      };
      News.send_msg(rcvMsg);
    }
    // News.feedBuffer[News.feedCount] = evt;
    // News.feedCount = News.feedCount + 1;
  };
};
News.insert_msg = (msgString) => { // save one msg item
  let existingEntries;
  if (localStorage.getItem('newsFeed') === null) {
    existingEntries = [];
  }
  else {
    existingEntries = JSON.parse(localStorage.getItem('newsFeed'));
  }
  const newsItem = {
    time: News.currentTime(),
    content: msgString,
    unread: true,
  };
  existingEntries.unshift(newsItem);
  localStorage.setItem('newsFeed', JSON.stringify(existingEntries));
  News.feedCount += 1;
};
News.set_msg_read = (index) => {
  if (localStorage.getItem('newsFeed') !== null) {
    let existingEntries = JSON.parse(localStorage.getItem('newsFeed'));
    existingEntries[index].unread = false; // error: one msg content has many news
    localStorage.setItem('newsFeed', JSON.stringify(existingEntries));
  }
};
News.send_msg = (msg) => {
  const js_msg = JSON.stringify(msg);
  // console.log(`Message Send: ${js_msg}`);
  News.socket_info.socket.send(js_msg);
};
News.currentTime = () => {
  const nowDate = new Date();
  const dateStr = `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`;
  // const timeStr = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
  return dateStr;
};
News.resetCount = () => {
  News.feedCount = 0;
};
export default News;
