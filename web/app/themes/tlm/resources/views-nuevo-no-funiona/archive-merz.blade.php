@extends('layouts.app')

@section('content')

  <div class="button-group filter-button-group tag-group">
    <a class="mostrar-todo" data-filter="*">mostrar todo</a>
    @php
      $tags = get_tags();
    @endphp
    @foreach ( $tags as $tag )
      <a data-filter=".tag-{{$tag->slug}}">{{$tag->name}}</a>
    @endforeach
  </div>


  <div class="grid">
    @while (have_posts()) @php the_post() @endphp
      @include('partials.content-'.get_post_type())
    @endwhile
  </div>


  {!! get_the_posts_navigation() !!}
@endsection
