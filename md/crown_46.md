# First

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

![](https://i.imgur.com/zn5Dw86.png)
**crown.ejs**

```
<h3><%= name %> <%= id %></h3>
```

**app.js**

```
const crown_46_Router = require('./routes/crown_46');
app.use('/crown_46', crown_46_Router);
```

**crown_46**

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

![](https://i.imgur.com/sqv9rUn.png)
[Github Repo URL](https://github.com/zero0914/1101-db-crown-46)

---

# Fourth

![](https://i.imgur.com/XMQEsz4.png)

---

# Fifth

![](https://i.imgur.com/AeTCeUp.png)
**database.js**

```
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_46',
  password: '0000',
  port: 5432,
});

pool.query('SELECT * from category_46', (err, res) => {
  console.log(JSON.stringify (res.rows))
  pool.end()
});

module.exports = pool;
```

---

# Sixth

# Seventh
