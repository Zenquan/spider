module.exports = {
  movie: `curl 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=500&page_start=0' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: "Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"' \
  -H 'Accept: */*' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://movie.douban.com/' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,und;q=0.7' \
  -H 'Cookie: ll="118284"; bid=FVQsf3qBmlE; __utmv=30149280.16544; _vwo_uuid_v2=D4808D8A588C4D59F9BFBBBD65E9C8EFB|4f03cfdbacbd2f26ceda5bc17a72f59d; gr_user_id=3205f8b3-b225-4aa8-8ee9-642317c5e423; viewed="1171448"; __utmc=30149280; __utma=30149280.615674975.1601784697.1605356637.1606143676.5; __utmz=30149280.1606143676.5.5.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utmb=30149280.1.10.1606143676; __utma=223695111.878686578.1601784758.1601784758.1606143678.2; __utmb=223695111.0.10.1606143678; __utmc=223695111; __utmz=223695111.1606143678.2.2.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1606143679%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _pk_ses.100001.4cf6=*; ap_v=0,6.0; _pk_id.100001.4cf6=53f21e3e71f48d82.1601784758.2.1606143736.1601784758.' \
  --compressed`
}