<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use DateTime, DateInterval;

class SingleDialogo extends Controller
{
    public function fecha()
    {
        $fecha_nacimiento = new DateTime("2013-02-16 00:00:00");
        $datetime_string = get_field('fecha_conversacion');
        $anio = date_i18n('Y', strtotime($datetime_string));
        $mes  = date_i18n('F', strtotime($datetime_string));
        $datetime = new DateTime($datetime_string);
        $intervalo = $fecha_nacimiento->diff($datetime->add(new DateInterval('P1M')));//se añade un mes para que cuadre la fecha

        if ($intervalo->format('%m') == 1) {
            $plural_mes = "mes";
        } else {
            $plural_mes = "meses";
        }

        if ($intervalo->format('%m') == 0) {
            $edad = $intervalo->format('telmo tiene %y años');
        } else {
            $edad = $intervalo->format('telmo tiene %y años y %m '.$plural_mes );
        }

        $output = [
            'fecha' =>  $mes . ' de ' . $anio,
            'datetime' => $datetime,
            'edad' => $edad,
        ];

        return $output;
    }

}
