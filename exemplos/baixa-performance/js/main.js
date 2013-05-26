/*
 * JS PRINCIPAL
 * Descricao: Contem principais funcoes js
 * Criado Por: João Biscoito - 01/01/2010
 * Ultima Atualizaçao Por: Mr. M - 20/01/2013
 */


 (function() {
 	// Message
 	var msg = 'MY COOL MESSAGE';

 	// Initialize
 	var init = function () {

 		// Não mostrar mais
 		// Show message
 		//alert(msg); 
 	};

	// Calling the initial function
	init();

	$(function() {
    	init();

    	$("#dialog").dialog({
    		autoOpen: false,
    		width: 400
    	});

    	$("#important-link" ).click(function() {
	      $("#dialog").dialog("open");
	    });
  	});
 })();