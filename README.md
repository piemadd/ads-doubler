# TableDent

## Intro

Are you disappointed that the number of ads on the site you're visiting doesn't make you want to make a dent in your table the size of your head? [Table Dent](https://www.tabledent.com/) might just be the thing for you, as with the click of a button, the number of URLs on the website you are visiting will skyrocket!

Have any feedback? Feel free to open up an issue!

Links:
- Made with ❤️ by [Piero Maddaleni](https://piemadd.com/)
- [Website source code on Replit](https://replit.com/@piemadd/ads-doubler)
- [Project source code on Github](https://github.com/pieromqwerty/ads-doubler)
- [Package on NPM](https://www.npmjs.com/package/ads-doubler).

## Docs

You can actually use TableDent on your own website, and it is super simple!

#### Get the script:

The script is located at [`/adDoublerLib.js`](/adDoublerLib.js) of this site, or you can use the mirror from JSDelivr, located at [https://cdn.jsdelivr.net/npm/url-lengthener@latest/url-lengthener.min.js](https://cdn.jsdelivr.net/npm/ads-doubler@latest/adDoublerLib.js). If you would like to link it directly into your website, place either of the two lines in the `<head>` section of your site, with the JSDeliver file being quicker (though not by much) to fetch and the one from this site being more updated:

```html
<script src="https://cdn.jsdelivr.net/npm/ads-doubler@latest/adDoublerLib.js"></script>
```
```html
<script src="https://www.tabledent.com/adDoublerLib.js"></script>
```

#### Use the script:

Using the script is super simple, as there are four functions you can call:

1. `byIdDefault()` tries to replace every Google ad on your website with the known Google Ad id.
2. `byClassDefault()` tries to replace every Google ad on your website with the known Google Ad class.
3. `byId(id)` tries to replace every Google ad on your website with the id passed to the function.
4. `byClass(class)` tries to replace every Google ad on your website with the class passed to the function.

All four of these functions will automatically handle indentifying and doubling such objects, so no more work is needed on your end.