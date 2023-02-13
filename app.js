function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
     if(r!=null)return  unescape(r[2]); return null;
}
//var xx =  GetQueryString('ip');
var locations = {},
    // // socketio
    // socket = io(GetQueryString(ip)),
    // WebSocket

    socket = new WebSocket('ws://'+GetQueryString('ip')+':3000');
    socketUpdateCounter = new Utils.MinsCounter;

// // socketio - client:    socketio 客户端模式
// socket.onmessage = (data) => {
//     console.log(data);
// }
// // socketio - server:  socketio 服务端模式
// socket.on("update", (function (e) {
//     locations = JSON.parse(e.update), socketUpdateCounter.update(), renderMap()
// }))

//websocket - client:  websocket  客户端模式
socket.addEventListener('message', function (event) {
    locations = JSON.parse(event.data), socketUpdateCounter.update(), renderMap();
});
appData.refreshInterval = 1e3;
const updatePlayerLocs = () => {
    setTimeout(updatePlayerLocs, appData.refreshInterval), vapp.$data.nowFps = socketUpdateCounter.getPerSec()
};
setTimeout(updatePlayerLocs, appData.refreshInterval);