'use strict';

//On require la classe Demineur
import Demineur, {Mine, Num} from './Demineur.js';

const demineur = new Demineur();

const app = new Vue({
  el: '#demineur',
  data: {
    demineur: demineur,
    tables: demineur.grid
  },

  methods: {
    clique: function (x, y) {
      if (demineur.isGameOver === false) {
        console.log(x, y);
        demineur.click(x, y);
      }
    },

    cliqueD: function (x, y) {
      if (demineur.isGameOver === false) {
        console.log(x, y);
        demineur.flag(x, y);
      }
    }
  }
});