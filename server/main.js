import { localDatas } from './local-datas.js';

WebApp.connectHandlers.use('/api/discover/movie', (res, res, next) => {
    res.writeHear(200);
    res.end(JSON.stringify(localDatas));
});