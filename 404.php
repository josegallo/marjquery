    <?php

    // -----------------------------------------
    // semplice
    // partials/404.php
    // -----------------------------------------

    ?>
    <style>
    header {
        /* display: none; */
    }

    .no-content {
        background-color: #ffc600;
    }
    .transition-wrap {
        background-color: #ffc600;
    }
    nav.standard.navbar-right {
        display:none;
    }

    p{
        font-family: 'Inter-Regular';
        font-size: 30px;
        text-align:left;
    }

    div.no-content p a {

        color:black;
        text-decoration: underline;
    }
    /* mobiles */
    @media screen and (max-width:767px) {

        h1 {
            font-family: 'Inter-ExtraLightBETA';
            font-size: 50px;
            text-align:left;
            padding: 0 0 0 100px;
        }
        .space-404{
            min-height:60px;
        }
    }
    /* bigger than mobiles */
    @media screen and (min-width:768px) {
        
        h1 {
            font-family: 'Inter-ExtraLightBETA';
            font-size: 100px;
            text-align:left;
            padding: 0 0 0 100px;
            padding-left:
            /* position: absolute; */
        }

        .space-404{
            min-height:260px;
        }
    }

    </style>

    <div class="no-content">

    <div class="jumbotron">
    <h1 class="text-left" >Interiografismo </h1>
    <br>
    <h1 class="text-left" >Singular</h1>
    <div class="space-404">
    </div>
    </div>
        <p>Vaya, parece que nuestra web está de lunes.</p>
        <p>Pincha <a href="<?php echo home_url(); ?>">aquí</a> para volver a nuestra home.</p>
    </div>

    <script>

        var position = $(".logo.navbar-left").offset().left;
        $("h1, div.no-content p").css("padding-left", position + "px");
    


    </script>

