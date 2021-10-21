<article {{ post_class() }} >
  <div class="col-izquierda">
    <header>
      <h1 class="entry-title">{{ get_the_title() }}</h1>
    </header>
    <div class="metadatos">
      @php
        $fecha_nacimiento = new DateTime("2013-02-16 00:00:00");
        $datetime_string = get_field('fecha');
        $anio = date_i18n('Y', strtotime($datetime_string));
        $mes  = date_i18n('F', strtotime($datetime_string));
        $fecha = $mes.' de '.$anio;
        $datetime = new DateTime($datetime_string);
        $intervalo = $fecha_nacimiento->diff($datetime->add(new DateInterval('P1M')));//se añade un mes para que cuadre la fecha
      @endphp
      @if ($intervalo->format('%m') == 1)
        @php
          $plural_mes = "mes";
        @endphp
      @else
        @php
          $plural_mes = "meses";
        @endphp
      @endif
      <p>Recogido en {{ $fecha }}</p>
      @if ($intervalo->format('%m') == 0)
        <p>{{ $intervalo->format('Telmo tiene %y años') }}</p>
      @else
        <p>{{ $intervalo->format('Telmo tiene %y años y %m '.$plural_mes) }}</p>
      @endif
      <p>{{ the_field('lugar') }}</p>
    </div>
  </div>

  <div class="col-derecha">
    @php
     the_post_thumbnail('large', 'class=img-responsive img-rounded img-100')
    @endphp
    @php the_content() @endphp
    @php $location = get_field('mapa')@endphp
    @if (!empty($location))
      <div class="acf-map">
      	<div class="marker" data-lat="{{ $location['lat'] }}" data-lng="{{$location['lng']}}"></div>
      </div>
    @endif
  </div>


  @php comments_template('/partials/comments.blade.php') @endphp
</article>
