const article_list =
    [
        {
            href: '/getting-started/getting-started.html',
            name: 'learn-three.js part1 - getting started'
        },
        {
            href: '/Add-OrbitControls/Add-OrbitControls.html',
            name: 'learn-three.js part2 - Add OrbitControls'
        },
        {
            href: '/draw-line/draw-line.html',
            name: 'learn-three.js part3 - draw line'
        },
        {
            href: '/draw-text/draw-text.html',
            name: 'learn-three.js part4 - draw text'
        },
        {
            href: '/draw-points/draw-points.html',
            name: 'learn-three.js part5 - draw points'
        },
        {
            href: '/add-light/add-light.html',
            name: 'learn-three.js part6 - add light'
        }
    ];

function create_article_list() {
    let html = '';
    for (let article of article_list) {

        if (location.pathname !== '/' && article.href.includes(location.pathname)) {

            html += `<li>${article.name}</li>`;
        }
        else {
            html += `<li><a href='${article.href}'>${article.name}</a></li>`;
        }

    }

    return html;
}

export { article_list as default, create_article_list };