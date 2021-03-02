module.exports = {
  searchJson: `curl 'http://www.dbbqb.com/api/search/json?size=100' \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://www.dbbqb.com/?utm_source=next.36kr.com' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,und;q=0.7' \
  -H 'Cookie: Hm_lvt_7d2469592a25c577fe82de8e71a5ae60=1606054992; Hm_lpvt_7d2469592a25c577fe82de8e71a5ae60=1606055136' \
  --compressed \
  --insecure`,
  searchJsonFn (size) {
    return `http://www.dbbqb.com/api/search/json?size=${size}`
  },
  imgBaseurl: 'http://image.dbbqb.com/'
};

