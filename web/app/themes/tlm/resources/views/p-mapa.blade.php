{{--
  Template Name: Mapa
--}}

@extends('layouts.app')


@section('content')


<div class="acf-map">
  @while ($locations->have_posts()) @php $locations->the_post();
  $loc = get_field('mapa') @endphp
  <div class="marker" data-lat="{{$loc['lat']}}" data-lng="{{$loc['lng']}}">
  <h4>{{ get_the_title() }} </h4>
  </div>
  @endwhile
</div>
@endsection
