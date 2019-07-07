@extends('layouts.app')

@section('content')

  <div class="page-header">
    <div class="pad">
      <div class="centrar">
        <p class="cursiva">
          Poor boy <br>
          Head against a pillow<br>
          Fast asleep <br>
          Poor girl<br>
          Head against a window<br>
          Lost in a dream
        </p>

        <p class="cursiva">
          One day they will be as giants<br>
          Stronger than the sun<br>
          But that day ain’t yet come<br>
        </p>
        <p>M. Ward</p>
        <p class="cursiva">
          Every phase of childhood is new. Every stage in the ongoing process of growth upends and rearranges the child’s world. As a result of meeting each moment with fresh eyes, children are natural artists and, once old enough to speak, natural poets.
        </p>
        <p>
          Dominic Luxford
        </p>
      </div>
    </div>
  </div>

  @php
    $anio = "";
    $mes = "";
    $fecha_nacimiento = new DateTime("2013-02-16 00:00:00");
    global $post;
  @endphp
  @while (have_posts()) @php the_post() @endphp
    <article id="{{ $post->post_name }}" {{ post_class() }} >
    @php
      $datetime_string = get_field('fecha_conversacion');
      $anio_nuevo = date_i18n('Y', strtotime($datetime_string));
      $mes_nuevo  = date_i18n('F', strtotime($datetime_string));
      $datetime = new DateTime($datetime_string);
      $intervalo = $fecha_nacimiento->diff($datetime->add(new DateInterval('P1M')));//se añade un mes para que cuadre la fecha
    @endphp
    @if ( $anio !== $anio_nuevo )
      @php
        $anio = $anio_nuevo;
      @endphp
      <h1 class="anio"><span>{{$anio}}</span></h1>
    @endif

    @if ($intervalo->format('%m') == 1)
      @php
        $plural_mes = "mes"
      @endphp
    @else
      @php
        $plural_mes = "meses"
      @endphp
    @endif

    @if ( $mes !== $mes_nuevo )
      @php
        $mes = $mes_nuevo;
      @endphp
      <h2 class="mes">
        <span>{{$mes}}</span>
        @if ($intervalo->format('%m') == 0)
           <span>{{ $intervalo->format('telmo tiene %y años' ) }}</span>
        @else
           <span class="edad">{{ $intervalo->format('telmo tiene %y años y %m '.$plural_mes ) }}</span>
        @endif
      </h2>

    @endif


    <div class="header">
      <header>
        <h2 class="entry-title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h2>
      </header>
    </div>
    <div class="pad">
      <div class="centrar">
          @php the_content() @endphp
      </div>
    </div>

  </article>
  @endwhile

  {!! get_the_posts_navigation() !!}
@endsection
