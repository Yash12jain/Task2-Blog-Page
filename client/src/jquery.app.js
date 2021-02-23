import React, { Component } from 'react'
import jQuery from 'jquery'
import { $ }  from 'react-jquery-plugin'

class Example extends Component {
    componentDidMount() {
     
        (function($) {

            'use strict';
        
            function initMetisMenu() {
                //metis menu
                $("#side-menu").metisMenu();
            }
        
            function initLeftMenuCollapse() {
                // Left menu collapse
                $('.button-menu-mobile').on('click', function (event) {
                    event.preventDefault();
                    $("body").toggleClass("enlarged");
                });
            }
        
            function init() {
                initMetisMenu();
                initLeftMenuCollapse();
            }
            init();
        
        })(jQuery)      
      };
    }


export default Example;
