# First

P1. (local) 請修改 routes/index.js 在 render index.ejs 時傳入學號及姓名，index.ejs 要有姓名及學號，需要用 <%= name %> 及 <%= id %> 接收傳入的學號及姓名，並顯示下圖片

![](https://i.imgur.com/IFnt1Lm.png)

**index.ejs**

```
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <h2>
    My name is
    <%= name %>
  </h2>
  <h3>
    My student id is
    <%= id%>
  </h3>
</body>
```

**index.js**

```
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'Nihao', id: '208417146' });
});
```

---

# Second

P2. (local) 將 crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在 Chrome 中顯示路由 /crown_xx，如下圖 localhost:3000/crown_xx。標題要有學號及姓名，如 P1 的傳入方式。

![](https://i.imgur.com/zn5Dw86.png)
**crown_46.ejs**

```
<h3><%= name %> <%= id %></h3>
```

**crown_46.js**

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_46', { title: 'Express', name: 'Nihao', id: '208417146' });
});

module.exports = router;

```

---

# Third

P3. (local) 請將 crown_xx.ejs 裡面 category 五筆資料 PostgreSQL 中，資料庫名稱 crown_xx, table 名稱 category_xx。

![](https://i.imgur.com/sqv9rUn.png)

---

# Fourth

P4. (heroku) 請將 P2 這一題的結果，在 heroku server 上顯示，路由是 /crown_xx。

- Chrome 截圖 (要看到 URL，上面有 heroku app )
  ![](./4-2.png)
- [Github Repo URL](https://github.com/zero0914/1101-db-crown-46)

---

# Fifth

P5. (heroku) 請將 P3 資料庫 category_xx 五筆資料，放到 Heroku Posgres 上。

- Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
  ![](./tempsnip.png)

- Heroku 畫面，要看到 DATABASE_URL 資料

![](./4-3.png)

- 請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中

```
postgres://zfofalgfflsfvg:7fc22a9f7f13674a55cc8ad097108e58c056b6baa9e0035e0f21f66f2d7daf17@ec2-3-213-146-52.compute-1.amazonaws.com:5432/df1d1j0eoms8v2
name : zfofalgfflsfvg
port: 5432
password : 7fc22a9f7f13674a55cc8ad097108e58c056b6baa9e0035e0f21f66f2d7daf17
host : ec2-3-213-146-52.compute-1.amazonaws.com
database : 5432/df1d1j0eoms8v2
```

---

# Sixth

P6. (local) 將 views/crown_xx.ejs 複製一份成 crown2_xx.ejs，能夠直接到 PostgreSQL server 取得 category 5 筆資料，套入到 crown2_xx.ejs 中。在 Chrome 中要顯示路由 /crown2_xx 。標題要有 Crown2_xx (from title) 學號 (from id) 及姓名(from name)。

- Chrome 截圖，要有 URL
  ![](./6-1.png)
- app.js ，相關重點以圖片標註呈現
  ![](./6-2.png)
- routes/crown2_xx.js，相關重點以圖片標註呈現呈現
  ![](./6-3.png)
- views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現
  ![](./6-4.png)

---

# Seventh

P7. (heroku) 請將 P6 這一題的結果，在 heroku server 上顯示，路由是 /crown2_xx，category 資料必須要從 Heroku Posgres 上取得。

- Chrome 截圖 (要看到 URL，上面有 heroku app )
  ![](./7-1.png)
- [Github Repo URL](https://github.com/zero0914/1101-db-crown-46)

# Eighth

P8. (local) 實作 api 路由 /api_xx/category_xx，能夠直接到 PostgreSQL server 取得 category 5 筆資料並以 json 方式顯示。

- Chrome 截圖，要有 路由 /api_xx/category_xx
  ![](./8-1.png)
- app.js ，相關重點以圖片標註呈現
  ![](./8-2.png)
- routes/api_xx.js，相關重點以圖片標註呈現呈現
  ![](./8-3.png)
- controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現
  ![](./8-4.png)

---

# Ninth

P9. (heroku) 請將 P8 這一題的結果，在 heroku server 上顯示，路由是 /api_xx/category_xx，category 資料必須要從 Heroku Posgres 上取得。
Chrome 截圖 (要看到 /api_xx/

- category_xx，上面有 heroku app )
  ![](./9-1.png)
- [Github Repo URL](https://github.com/zero0914/1101-db-crown-46)
