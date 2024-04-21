function entersearch() {
     var OfficialPage = document.querySelector(".Official-page")
     OfficialPage.style.display="none"
     var searchPage = document.querySelector(".search-page")
     searchPage.style.display = "block"
}
function returnOfficialPage(){
     var searchPage=document.querySelector(".search-page")
     searchPage.style.display="none"
     var OfficialPage = document.querySelector(".Official-page")
     OfficialPage.style.display = "block"
     var searchtextarea2 = document.querySelector(".search-textarea-2")
     searcht.value = " "
     var searchtextarea3 = document.querySelector(".search-textarea-3")
     searchtextarea3.value=" "
}
function startsearch(){
     var searchinsidePage=document.querySelector(".search-inside-page")
     searchinsidePage.style.display="block"
     var searchtextarea2 = document.querySelector(".search-textarea-2")
     var searchPage = document.querySelector(".search-page")
     searchPage.style.display = "none"
     var searchtextarea3 = document.querySelector(".search-textarea-3")
     searchtextarea3.value=searchtextarea2.value
     
}
// 在页面加载完成后自动检查本地存储并将笔记设为焦点
window.onload = function () {
     // 检查本地存储中是否有笔记的值
     var noteFocused = localStorage.getItem('noteFocused');
     if (noteFocused === 'true') {
          // 如果笔记被聚焦，则触发笔记的点击事件
          document.getElementById('note').click();
     }
};

// 当笔记被点击时，将其设为焦点，并将此状态存储在本地存储中
function notepage() {
     localStorage.setItem('noteFocused', 'true');
}

// 当地点被点击时，清除笔记的焦点状态
function officialpage() {
     localStorage.removeItem('noteFocused');
}

function returnsearchpage(){
     var searchPage = document.querySelector(".search-page")
     searchPage.style.display = "block"
     var searchinsidePage = document.querySelector(".search-inside-page")
     searchinsidePage.style.display="none"
     
}

// 保存搜索历史
function saveSearchHistory(keyword) {
     let history = localStorage.getItem('searchHistory');
     if (!history) {
          history = [];
     } else {
          history = JSON.parse(history);
     }
     history.push(keyword);
     localStorage.setItem('searchHistory', JSON.stringify(history));
}

// 显示搜索历史
function showSearchHistory() {
     const history = JSON.parse(localStorage.getItem('searchHistory'));
     if (history && history.length > 0) {
          const container = document.getElementById('searchHistory');
          container.innerHTML = '';
          history.forEach(keyword => {
               const div = document.createElement('div');
               div.textContent = keyword;
               container.appendChild(div);
          });
     }
}

// 清除搜索历史
function clearSearchHistory() {
     localStorage.removeItem('searchHistory');
     const container = document.getElementById('searchHistory');
     container.innerHTML = '';
}

// 在页面加载时显示搜索历史
window.onload = function () {
     showSearchHistory();
};

// 点击搜索按钮时触发的事件
document.getElementById('searchButton').addEventListener('click', function () {
     // 获取搜索关键词
     const keyword = document.getElementById('searchInput').value.trim();
     if (keyword !== '') {
          // 将搜索关键词添加到搜索历史中
          saveSearchHistory(keyword);
          // 更新搜索历史的显示
          showSearchHistory();
     }

});