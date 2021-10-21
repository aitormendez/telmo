<header class="banner">
  <a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
</header>
<nav class="nav-primary closed">
  @if (has_nav_menu('primary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
  @endif
</nav>
<a id="hamb" class="closed"></a>
