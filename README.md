<h1>Cloud Design Box Google Search Web Part</h1>

<p>This is a free web part to add a Google (or other search provider) search box to a modern SharePoint site.</p>
<img src="https://github.com/CloudDesignBox/cdbGoogleSearchSPFxWebPart/blob/master/GoogleApp.gif" alt="preview of Google Search SharePoint Web Part" />


<h1>Download </h1>
<p> You can contribute to the project or get started using it </p>
<a href="https://github.com/CloudDesignBox/cdbGoogleSearchSPFxWebPart/blob/master/cdb-google-search-sp-fx-web-part.zip">Download the current version here</a>

<h1>Building the code - Developers</h1>

```bash
git clone the repo
npm i
gulp serve
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean
gulp build
gulp serve
