---
layout: photo.njk
tags: post

---

# Galerie Photographies

<div class="container">
<div class="row">
{% for post in collections.bapteme %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Bapteme</h2>

![](/images/bébé/mother-gcf406702f_1920.jpg)
{% endfor %}
</a>

{% for post in collections.portrait %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Portrait</h2>

![portrait](/images/portrait/woman-g90b2bffed_1920.jpg)
{% endfor %}
</a>

{% for post in collections.mariage %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Mariage</h2>

![mariage](/images/mariage/bride-g5f1c72416_1920%20(1).webp)
{% endfor %}
</a></div>
<div class="row">
{% for post in collections.grossesse %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Grossesse</h2>

![grossesse](/images/grossesse/pregnancy-g3ecdd2c45_1920.jpg)
{% endfor %}
</a>

{% for post in collections.famille %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Famille</h2>

![famille](/images/famille/boys-g16c01aeac_1920.jpg)
{% endfor %}
</a>

{% for post in collections.couple %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Couple</h2>

![couple](/images/couple/couple-g0416a23f3_1920.jpg)
{% endfor %}
</a></div>
<div class="row">
{% for post in collections.bebe %}
<a class="imgF" href="{{ post.url | url }}">
<h2>Bébé</h2>

![](/images/bebe-2-500.jpg)
{% endfor %}
</a></div></div>