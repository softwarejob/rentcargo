function changeLanguage(lang) {
  fetch(`${lang}.json`)
    .then(response => response.json())
    .then(data => {
      const elements = document.querySelectorAll('[data-translate]');
      elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (data[key]) {
          // 用innerHTML来保留HTML标记
          element.innerHTML = data[key];
          //element.textContent = data[key];
        }
      });

      // 更新具有相同类名的所有图像元素的 src 属性
      const images = document.querySelectorAll('.language-image');
      images.forEach(image => {
        if (lang === 'en') {
          image.src = 'https://scdn.line-apps.com/n/line_add_friends/btn/en.png';
        } else if (lang === 'zh') {
          image.src = 'https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png';
        } else if (lang === 'ko') {
          image.src = 'https://scdn.line-apps.com/n/line_add_friends/btn/ko.png';
        } else if (lang === 'ja') {
          image.src = 'https://scdn.line-apps.com/n/line_add_friends/btn/ja.png';
        }
      });
    });
}
