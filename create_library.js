
/*
 <div class="hello" id="myId"></div>
*/

/*
const _$ = new SimpleLib()
_$('#myId')
  .addClass('blue')
  .addClass('bg-lime')
  .removeClass('hello')
  .addClass('whatever')
  
*/

class SimpleLib {
  addClass(name) {
    if (this.elem) {
      this.elem.classList.add(name)
    }
    return this
  }

  removeClass(name) {
    if (this.elem) {
      this.elem.classList.remove(name)
    }
    return this
  }

  constructor() {
    this.elem = null;

    return (selector) {
      this.elem = document.querySelector(selector)

      return {
        elem: this.elem,
       addClass: () => {},
       removeClass: () => {}
      }
    }
  }
}

const _test = new SimpleLib()
_test('.hello').addClass().removeClass()


