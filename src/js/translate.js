'use strict';

angular.module('starter')
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            home_title: "Home",
            home_adoption: "Adoption",
            home_cross: "Cross",
            home_veterinary: "Veterinary",
            home_pet_walk: "Pet walk",
            home_wanted: "Wanted",

            settings_title: "Settings",

            general_maximum_dagger: "Maximum Dagger!"
        });
        $translateProvider.translations('es', {
            home_title: "Inicio",
            home_adoption: "Adopción",
            home_cross: "Cruza",
            home_veterinary: "Veterinaria",
            home_pet_walk: "Paseo de mascotas",
            home_wanted: "Buscados",

            settings_title: "Configuración",
            
            general_maximum_dagger: "Daga Máxima!"
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
        $translateProvider.useSanitizeValueStrategy('escape');
    });
