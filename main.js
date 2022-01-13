function SelectArticle(ArticleId) {
  localStorage.setItem('selected', ArticleId)
}

function InitializeLocalStorage() {
  localStorage.setItem('Article1', 'Beeja Drveni Krevet')
  localStorage.setItem('Article2', 'Alina Classic')
  localStorage.setItem('Article3', 'Alina Delux Krevet')
}
document.addEventListener('DOMContentLoaded', InitializeLocalStorage)
