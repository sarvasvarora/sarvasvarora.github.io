---
layout: post
title: The hitchhiker's guide to search engines
excerpt: Implementing a simple search engine based on the Google PageRank algorithm, in Python.
modified:
categories: deet
tags: [Computer Science, Algorithms]
comments: true
share: true
image:
    teaser:
---

You might be "playing Google Chrome" everyday, but have you thought how it fetches all those webpages when you hit the search button?  
While Goole is an incredibly complex task to replicate, the underlying principles of a search engine remain the same: it crawls the webpages, indexes them, and assigns ranks to the webpages based on the ranking algorithm that search engine is using. And when a query is made, it returns the most relevant results based on the ranking of the webpages.

In this article, I'm going to describe all these fundamental processes along with their Python implementation.  
\
The post might be long, but hang tight budd, I promise it will be an interesting take!

## Step 1: Defining a pseudo internet

The first hurdle turns out to be creating a database of webpages and their content. Since this is rather a dive into how search engines work and not about how to mine data, I chose to use XML file as a proxy for the internet.  
\
The XML files contains proxy web-pages indicated by the tag name **webpage**. Each web-page contains multiple hyperlinks to other web-pages indicated by the tag **link**. The contents of a web-page is marked using the tag **content**.  
\
Put together, this looks somewhat like

```xml
<test>
  <webpage name="www.webpage.com">
      <link name="www.link1.com" />
      <link name="www.link2.com" />
      <content value="Just a random webpage"/>
  </webpage>
</test>
```

I implemented an XML parser utility class that parses such XML files and is used to get relevant links and/or content as required.  
\
In reality, this process of data mining and creating databases is done by what's called "spiders" in CS jargon. Dw, they're just programmed bots whose job is to find new webpages and add them to the databse (or update existing webpages on request).  
This process is called crawling, which brings us to the next topic.

> Fun fact: Bots will not find everything on the web. If there are no links to a page then it is basically invisible to search engines. If it is a web page that requires a password, or is generated as a results to a query, it will never be stored in a search engine. Those webpages that will never be searched are called deep web or the invisible web.

## Crawling and Indexing -– let the game begin

Now that we have something set up, we can start working on the main thing.  
\
As described above, **crawling** is the process where bots crawl the internet and collect information from webpages. By following links from a web page to another, the spiders find new content.  
\
Once a page is crawled, the data contained in the page is processed and indexed. **Indexing** is the process of storing and organizing the content found during the crawling.  
It generally involves associating words or other tokens to a list of webpages containing them. It also includes collecting links to other webpages that a given webpage contains (this is an important thing, and we'll come back to it's use later).  
\
We store all this data in a graph data structure named **WebGraph**. Each vertex of the graph represents a webpage and of the data type **WebVertex** that stores metadata for a webpage such as its content. Whenever we encounter a link in a webpage, we create a directed edge from that webpage to the webpage that is being linked to.  
Remember that we are not crawling the actual internet, but the pseudo internet (XML file) we created for this purpose.

```python
def crawl_and_index(self, url: str) -> None:
    """Crawl and index the web, starting from the given URL.
    Args:
        url (str): URL of the webpage to start indexing from
    """
    # If the vertex with the given URL already exists AND has already been visited
    if not self.internet.add_vertex(url) and self.internet.get_visited(url):
        return

    # If it didn't exist, it would've been added now
    # Set it to visited, and continue crawling
    self.internet.set_visited(url, True)

    # Index the current URL
    words = self.parser.get_content(url)
    for word in words:
        self.add_word_to_index(word, url)

    # Crawl the web by visiting the links pointed to by the current URL
    links = self.parser.get_links(url)
    for link in links:
        self.internet.add_vertex(link)
        self.internet.add_edge(url, link)
        self.crawl_and_index(link)
```

This is basic depth-first graph traversal, and as we traverse the graph, we keep storing the required data, rather keep indexing it, if you will.  
\
The result is a graph of webpages, something like this:

<figure>
  <img alt="Web Graph" src="/images/articles/2021-01-08-The-hitchhiker's-guide-to-search-engines/web_graph.png">
</figure>

> Another fun fact: Google has the largest known internet index. Bigtable, a compressed, high performance, proprietary data storage system built on Google File System is used for Google's web indexing.

## Ranking the webpages

We have the data we need, but how do we determine which webpage is the most relevant result? It's here that page rankings come into picture.  
\
There might be millions of pages containing a specific word, but some pages are generally more relevant, or authoritative than others. To determine which pages to show in the search results and in what order, search engines use the data collected to perform a ranking.  
\
Using the web graph we just made, we assign rankings to webpages based on these ideas (note that this is a simplified version of the [Google PageRank Algorithm](https://en.wikipedia.org/wiki/PageRank)):

-   Good web pages are cited by many other pages. If we think about it in terms of the webgraph, this means that we should prefer web pages (i.e. vertices) with a large in-degree.
-   Web pages that link to a large number of other pages are less valuable. In terms of webgraph, this means that we will value less web pages (i.e. vertices) with a large out-degree.
-   A link from a web page is more valuable if the web page is itself a good one. In graph terms, higher the rank of a web page (i.e. vertex), more valuable an in-edge from it would be.

To formulate these ideas, consider $$ pr(w) $$ to be the page rank of vertex $$ w $$, $$ out(w) $$ to be the out-degree of vertex $$ w $$, and $$ w_1, w_2, \cdots, w_n $$ to be vertices in the graph that have an out edge going into $$ v $$. Then the following equation determines the page rank of vertex $$ v $$:
\\[pr(v) = (1 - d) + d * \left(\dfrac{pr(w_1)}{out(w_1)} + \dfrac{pr(w_2)}{out(w_2)} + \cdots + \dfrac{pr(w_n)}{out(w_n)}\right)\\]
The constant $$ d $$ is called the damping factor and is added for arcane reason to account for the probability that an imaginary surfer who is randomly clicking on links will eventually stop clicking. I chose $$ d = 0.5 $$.  
\
Now, since $$ pr(v) $$ is a function of $$ pr(w_i) $$, we get $$ n $$ equations in $$ n $$ variables. Of course, we won't use linear algebra to do so because gaussian elimination runs in $$ O(n^3) $$ time.  
Instead, we initialize each $$ pr(v_i) = 1 $$ and calculate new $$ pr(v_i) $$ for each $$ i $$ until the values almost become stagnant i.e., they converge. This happens when $$ |pr^{k−1}(v_i) − pr^k(v_i)| \lt\ \epsilon $$ for all $$ i $$, where $$ pr^j(v_i) $$ represents the computation of $$ pr(v_i) $$ in the $$ j^{th} $$ iteration, and $$ \epsilon $$ is the input to the method. In simple words, the new values don't differ from the old values by more than $$ \epsilon $$.

```python
def _compute_ranks(self, vertices: List[str]) -> List[float]:
    """Complete one iteration of ranking webpages.

    Args:
        vertices (List[str]): List of webpages to rank

    Returns:
        List[float]: List of ranks of respective webpages
    """
    DAMPING_FACTOR = 0.5

    new_prV = [self.internet.get_page_rank(vertex) for vertex in vertices]

    for i, v in enumerate(vertices):
        W = self.internet.get_edges_into(v)
        prW_outW = []

        for w in W:
            j = vertices.index(w)
            prW = new_prV[j]
            outW = self.internet.get_out_degree(vertices[j])
            prW_outW.append(prW / outW)

        _sum = sum(prW_outW)
        rank = (1 - DAMPING_FACTOR) + (DAMPING_FACTOR * _sum)
        new_prV[i] = rank

    return new_prV

def assign_page_ranks(self, EPSILON: float) -> None:
    """Assign page ranks to the crawled webpages.

    Args:
        EPSILON (float): Epsilon value to control the convergence
    """
    prV = [1.0 for i in range(0, len(self.internet.get_vertices()))]

    while True:
        new_prV = self._compute_ranks(self.internet.get_vertices())
        converged = True

        for i in range(0, len(prV)):
            if abs(prV[i] - new_prV[i] > EPSILON):
                converged = False
                break

        if converged:
            break

        for i in range(0, len(prV)):
            prV[i] = new_prV[i]
            self.internet.set_page_rank(self.internet.get_vertices()[i], new_prV[i])
```

The above code does exactly what we formulated. The `_compute_ranks` is a private method (jokes, Python has no access specifiers, but let's respect that leading underscore) that carries out a single iteration of computing new $$ pr(v_i) $$ from old $$ pr(v_i) $$.   
Then, we check for convergence in the `assign_page_ranks` method and update values, or break out of the loop accordingly. Oh, and this method also initializes the $$ pr(v_i) = 1 $$ for each $$ i $$.  
\
Finally, this algorithm outputs a probability distribution used to represent the likelihood that a person randomly clicking on links will arrive at any particular page. We are ready to get those query results now!

## Querying the search engine

This is the part that is the most visible to an end user. The search console. Here, the search engine takes in the user query and returns the relevant webpages, ranked in descending order of their page ranks.  
\
The actual process is a bit more complicated though, and there are various types of search patterns that can be performed, some of them being:

-   Standard keyword searching: here, just the keywords in the search query need to be matched.
-   Phrase searching: this involves looking for exact matches with the query.
-   Wildcards: these involve more complicated patterns such as "+" sign to include a word and "–" to not.

I implemented the standard search and the phrase search. Note that in reality, search engines ignore stop words (i.e., frequently occuring words that don't impart much meaning to the query, such as "a", "and", "of", etc.). Here, these words are not ignored.

```python
def query(self, query: str, phrase_query: bool = False) -> List[str]:
    """Query the search engine.

    Args:
        query (str): Query phrase or keyword
        phrase_query (bool, optional): Whether exact phrase matching should be done. Defaults to False.

    Returns:
        List[str]: List of webpages, arranged in descending order of their page ranks
    """
    words = [word.strip(' ,.\n;:\'\"\t!@#$%^&*()_-=+[]?<>').lower() for word in query.split()]
    words = [word for word in words if word != '']
    urls = self.word_index[words[0]] # Initialize urls

    if phrase_query is False:
        for word in words:
            tmp_urls = self.word_index[word]
            urls = list(set(urls + tmp_urls)) # Take union
    else:
        for word in words:
            tmp_urls = self.word_index[word]
            urls = list(filter((lambda x: x in tmp_urls), urls)) # Take intersection

            # break if at any point the intersection becomes empty. Reduces unnecessary computation
            if urls == []:
                break

        phrase = ' '.join(words)

        for url in urls:
            content = ' '.join(self.parser.get_content(url))
            if re.findall(phrase, content) == []:
                urls.remove(url)

    ranks = [self.internet.get_page_rank(url) for url in urls]
    urls_with_rank = list(zip(urls, ranks))

    # Sort wrt to ranks (2nd element of tuples) and arrange in descending order
    urls_with_rank.sort(key=lambda x: x[1], reverse=True)
    return [e[0] for e in urls_with_rank]
```

For the normal keyword search, the method simply goes over each word in the query and forms a union of indexed webpages that contain the words. The final list of URLs contains webpages irrespective of the fact that they contain a just single word of the query, or multiple words.  
\
For phrase search, the exact phrase needs to be present in the webpage to be considered as relevant. To do this, we first take the webpages that contain ALL the words in the query (this is intersection, as opposed to union previously). This step is done purely to save on some computation since the final webpages anyways need to have all the words from the query.  
Once we get these URLs, we use regex to find exact matches and filter the URLs accordingly.

> Yet another fun fact: Search engines use different spiders to crawl and use different proprietary algorithms to index the data. Each index is therefore a search engine’s representation of how they see the web. Also the algorithms to rank and search the data are different, so every search engine has its own approach to finding what you’re trying to find. Also, personalisation (courtesy of all those trackers that the good ol' Safari blocks for you) adapts the search to a specific computer/user. The results may be based on your geographical location, what else you’ve searched for, and what results were preferred by other users searching for the same thing, for example. Search engines might use and weigh all these factors in a unique way, which will lead to different search results.

If you've been reading this far, congrats! You now know how search engines work and hopefully motivated enough to explore more about them :)

Feel free to explore the repository for this post [here](https://github.com/sarvasvarora/beek-it).  
\
I'd appreciate any constructive feedback on this post, and am open for discusisons. Feel free to drop suggestions for future posts.

## Acknowledgements

-   The COMP 250 final assignment, which motivated major part of this post and project.
-   Wikipedia article on [PageRank](https://en.wikipedia.org/wiki/PageRank)
-   Some "fun facts" [here](https://lifepacific.libguides.com/c.php?g=155121)
