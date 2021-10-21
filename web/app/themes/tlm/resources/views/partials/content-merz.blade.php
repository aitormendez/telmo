<article  {{ post_class('grid-item') }} >
  <a href="{{ get_permalink() }}">
    {{the_post_thumbnail('merz-image')}}
    <span class="title">{{ get_the_title() }}</span>
  </a>
</article>
