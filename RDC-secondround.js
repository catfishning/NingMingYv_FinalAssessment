function login() {
    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;

    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "account": username,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://8.134.148.60:4000/user/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // 解析返回的 JSON 数据
            const response = JSON.parse(result);
            // 检查返回的 code 是否为 0，表示登录成功
            if (response.code === 0) {
                // 登录成功，隐藏 Landing-page 元素
                document.querySelector(".Landing-page").style.display = "none";
                document.querySelector(".Official-page").style.opacity = "1"
                // 存储用户的 token 到本地存储或者 cookie 中，以便后续请求中使用
                
            } else {
                // 如果登录失败，可以在这里处理错误消息的显示等操作
                alert("登录失败：" + response.msg);
            }
            console.log(response.token)
        })
        
    }

    

function placelocation() {
    var myHeaders = new Headers();
    var place=document.querySelector('.place')
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://8.134.148.60:4000/article/getLocationTopics?location=广州", requestOptions)
        .then(response => response.text())
        .then(result => {
                const response = JSON.parse(result); 
             place.innerHTML=response.data;
            })

        .catch(error => console.log('error', error));
}

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
var articleimage = document.querySelector(".articleimage")

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


var ways = document.querySelectorAll('.way');

// 遍历所有的 way 元素
ways.forEach(function (way) {
    // 添加点击事件监听器
    way.addEventListener('click', function () {
        // 将所有 way 元素的字体大小恢复为默认大小
        ways.forEach(function (way) {
            way.style.fontSize = 'initial';
            way.style.fontWeight = 'normal';
        });

        // 设置点击的 way 元素的字体大小为较大值
        this.style.fontSize = 'larger';
        this.style.fontWeight = 'bold';
    });
});
var way2s = document.querySelectorAll('.way-2');

// 遍历所有的 way 元素
way2s.forEach(function (way2) {
    // 添加点击事件监听器
    way2.addEventListener('click', function () {
        // 将所有 way 元素的字体大小恢复为默认大小
        way2s.forEach(function (way2) {
            way2.style.fontSize = 'initial';
            way2.style.fontWeight = 'normal';
            way2.style.borderBottomStyle = "none"
        });

        // 设置点击的 way 元素的字体大小为较大值
        this.style.fontSize = 'larger';
        this.style.fontWeight = 'bold';
        this.style.borderBottomStyle = "solid"
    });
});

fetch("http://8.134.148.60:4000/article/articleList?page=1&size=5&location=广州", requestOptions)
    .then(response => response.json()) // 解析 JSON 数据
    .then(data => {
        const articles = data.data;
        const articleDivs = document.querySelectorAll('.article'); // 获取所有的文章元素
        const articleTitleDivs = document.querySelectorAll('.article_title'); // 获取所有的文章标题元素
        const authornameDivs = document.querySelectorAll('.author_name'); // 获取所有的文章标题元素
        // 遍历文章列表数据
        articles.forEach((article, index) => {
            // 检查文章是否有封面图片
            if (article.article_covers && article.article_covers.length > 0) {
                // 获取文章封面图片的 URL
                const coverURL = "http://8.134.148.60:4000" + article.article_covers[0]; // 获取第一张图片的路径
                console.log(coverURL);
                // 找到对应的文章图片元素所在的 <div class="article">
                const articleImageDiv = articleDivs[index];
                // 找到该元素下的 <img> 标签并设置 src 属性
                const img = articleImageDiv.querySelector('img');
                img.src = coverURL;
            } else {
                console.error("文章封面图片不存在！");
            }
            // 设置文章标题
            const articleTitleDiv = articleTitleDivs[index];
            articleTitleDiv.style.fontSize="17px"
            articleTitleDiv.style.fontWeight = "bold"
            articleTitleDiv.innerText = article.article_title; // 设置标题内容
            const authornameDiv = authornameDivs[index];
            authornameDiv.innerText = article.author_name; // 设置标题内容
        });
    })
    .catch(error => console.error('发生错误:', error));


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJhY2NvdW50IjoiMjkxMjE3NTA4MSIsImlhdCI6MTcxMDc3MDYzNCwiZXhwIjoxNzEzMzYyNjM0fQ.brQciJfUNA9jmcdzxc9Tvzk06k3FusjHTdfJvhJh-9k");
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("http://8.134.148.60:4000/user/getArticleLabels", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => {console.log('error', error);
           console.log(result.data) } );


var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "user_id": "1"
});

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    
    redirect: 'follow'
};

fetch("http://8.134.148.60:4000/user/getUserArticlesBasic?user_id=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};

fetch("http://8.134.148.60:4000/user/getUserInfo?user_id", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));

   function upclick(){
       var headepage = document.querySelector(".headpage")
       headepage.style.display="none"
       var upload = document.querySelector(".upload")
       upload.style.display="inline"
       upload.style.top="15%"
   }
  
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.headpage').style.display = "none";
        document.querySelector('.rocket').style.display = "inline";
    } else {
        document.querySelector('.headpage').style.display = "inline";
        document.querySelector('.rocket').style.display = "none";
    }
}

var lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    var currentScrollPosition = window.scrollY;

    // 判断是否满足触发刷新条件：在页面顶部且向上滚动
    if (currentScrollPosition === 0 && currentScrollPosition < lastScrollPosition) {
        // 执行刷新操作，例如重新加载页面内容
        location.reload();
    }

    lastScrollPosition = currentScrollPosition;
});