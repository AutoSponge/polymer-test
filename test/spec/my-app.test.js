/* global describe, it, before, after, expect */

(function () {
    'use strict';

    var el;

    describe( 'my-app component', function () {

        // setup
        before( function ( done ) {
            if ( window.Platform && window.Polymer ) {
                el = document.createElement( 'my-app' );
                document.body.appendChild( el );
                var check = setInterval( function () {
                    if ( el._readied ) {
                        clearInterval( check );
                        done();
                    }
                }, 300 );
            } else {
                done();
            }
        } );

        //teardown
        after( function () {
            if ( el ) {
                el._observers = [];
                document.body.removeChild( el );
            }
        } );

        // tests
        it( 'should have a button', function () {
            if ( el ) {
                var domList = el.shadowRoot.querySelectorAll( 'paper-button' );
                expect( domList.length ).to.equal( 1 );
            } else {
                expect( 'no element' ).to.equal( 'no element' );
            }
        } );

    } );
})();
