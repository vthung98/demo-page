const homeFilters = document.querySelectorAll('.home-filter-btn')

homeFilters.forEach((tab, index) => {
    tab.onclick = function () {
        document.querySelector('.primary-btn.home-filter-btn').classList.remove('primary-btn')
        tab.classList.add('primary-btn')
    }
})
const categoryList = document.querySelectorAll('.category-item')
console.log(categoryList)
categoryList.forEach((tab, index) => {
    tab.onclick = function () {
        document.querySelector('.category-item.category-item-active').classList.remove('category-item-active')
        tab.classList.add('category-item-active')
    }
})
