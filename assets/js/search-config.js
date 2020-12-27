SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li itemscope style><a class="author-social" href="{url}" style="border-bottom: none;"><i class="fas fa-external-link-alt"></i> {title}<span class="entry-date"><time datetime="{date}" itemprop="datePublished"> {date}</time></span></a></li>',
    noResultsText: '<p>No results found #_#</p>',
});