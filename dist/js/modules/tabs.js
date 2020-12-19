/**
 * Created by пк on 19.11.2020.
 */
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //TABS

    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsParametr = document.querySelector(tabsParentSelector);

    function hideTabsParametr() {
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        });
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');


        });
    }


    function showTabsParametr(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass)
    }

    hideTabsParametr();
    showTabsParametr();

    tabsParametr.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabsParametr();
                    showTabsParametr(i);
                }
            });
        }
    });
}

export default tabs;