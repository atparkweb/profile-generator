module.exports = {
  toHtml(profile) {
    // TODO: Format profile data as HTML
    console.log(profile);
    // TODO: This is a sloppy implementation. Use external template file
    return `
<body>
<div class="page">
<header>
<h1>Hi!<br/>My name is ${profile.name}!</h1>
<p>Currently @ ${profile.company}</p>
<ul class="link-list">
<li class="location-link"><a href="#">${profile.location}</a></li>
<li class="github-link"><a href="${profile.html_url}">Github</a></li>
<li class="blog-link"><a href="${profile.blog}">Blog</a></li>
</ul>
</header>
<section class="content">
<h2>${profile.bio}</h2>
</section>
</div>
</body>
    `
  }
}
